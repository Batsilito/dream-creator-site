import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Check, ArrowLeft, ArrowRight, MessageCircle, Copy, ExternalLink } from "lucide-react";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().trim().min(1, "الاسم مطلوب").max(100, "الاسم طويل جداً"),
  email: z.string().trim().email("البريد الإلكتروني غير صحيح").max(255),
  phone: z.string().trim().min(10, "رقم الهاتف غير صحيح").max(20, "رقم الهاتف طويل جداً"),
});

interface BookingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const BookingModal = ({ open, onOpenChange }: BookingModalProps) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    paymentMethod: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const paymentMethods = [
    { id: "instapay", label: "Instapay" },
    { id: "vodafone", label: "Vodafone Cash" },
    { id: "bank", label: "Bank Transfer" },
    { id: "other", label: "Other transfer methods from outside Egypt" },
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validateStep1 = () => {
    try {
      contactSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const handleNext = () => {
    if (step === 1) {
      if (validateStep1()) {
        setStep(2);
      }
    } else if (step === 2) {
      if (formData.paymentMethod) {
        // If "other" is selected, redirect to WhatsApp immediately
        if (formData.paymentMethod === "other") {
          const message = encodeURIComponent("مرحباً، أريد الاستفسار عن طرق دفع أخرى من خارج مصر");
          window.open(`https://wa.me/%2B201016712243?text=${message}`, "_blank");
          return;
        }
        setStep(3);
      } else {
        setErrors({ paymentMethod: "اختر طريقة الدفع" });
      }
    }
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "تم النسخ",
      description: `تم نسخ ${label} بنجاح`,
    });
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `مرحباً، أريد تأكيد حجزي في الدورة.\n\nالاسم: ${formData.name}\nالبريد: ${formData.email}\nالهاتف: ${formData.phone}\nطريقة الدفع: ${paymentMethods.find(m => m.id === formData.paymentMethod)?.label}`
    );
    window.open(`https://wa.me/%2B201016712243?text=${message}`, "_blank");
  };

  const handleClose = () => {
    onOpenChange(false);
    setTimeout(() => {
      setStep(1);
      setFormData({ name: "", email: "", phone: "", paymentMethod: "" });
      setErrors({});
    }, 300);
  };

  const StepIndicator = () => (
    <div className="flex items-center justify-center gap-2 mb-6">
      {[1, 2, 3].map((s) => (
        <div key={s} className="flex items-center gap-2">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
              s < step
                ? "bg-primary text-primary-foreground"
                : s === step
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground"
            }`}
          >
            {s < step ? <Check className="w-4 h-4" /> : s}
          </div>
          {s < 3 && (
            <div
              className={`w-12 h-1 rounded ${
                s < step ? "bg-primary" : "bg-muted"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md bg-card border-border" dir="rtl">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold">
            {step === 1 && "معلومات التواصل"}
            {step === 2 && "طريقة الدفع"}
            {step === 3 && "إثبات الدفع"}
          </DialogTitle>
        </DialogHeader>

        <StepIndicator />

        <div className="space-y-6">
          {/* Step 1: Contact Info */}
          {step === 1 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">الاسم الكامل</Label>
                <Input
                  id="name"
                  placeholder="أدخل اسمك الكامل"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className={errors.name ? "border-destructive" : ""}
                />
                {errors.name && (
                  <p className="text-sm text-destructive">{errors.name}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">البريد الإلكتروني</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="example@email.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className={errors.email ? "border-destructive" : ""}
                  dir="ltr"
                />
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">رقم الهاتف</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="01xxxxxxxxx"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className={errors.phone ? "border-destructive" : ""}
                  dir="ltr"
                />
                {errors.phone && (
                  <p className="text-sm text-destructive">{errors.phone}</p>
                )}
              </div>
            </div>
          )}

          {/* Step 2: Payment Method */}
          {step === 2 && (
            <div className="space-y-4">
              <RadioGroup
                value={formData.paymentMethod}
                onValueChange={(value) => handleInputChange("paymentMethod", value)}
                className="space-y-3"
              >
                {paymentMethods.map((method) => (
                  <div
                    key={method.id}
                    className={`flex items-center space-x-3 space-x-reverse p-4 rounded-xl border transition-colors cursor-pointer ${
                      formData.paymentMethod === method.id
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-primary/50"
                    }`}
                    onClick={() => handleInputChange("paymentMethod", method.id)}
                  >
                    <RadioGroupItem value={method.id} id={method.id} />
                    <Label htmlFor={method.id} className="cursor-pointer flex-1">
                      {method.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>

              {/* Payment Details based on selection */}
              {formData.paymentMethod === "instapay" && (
                <div className="p-4 rounded-xl bg-muted/50 border border-border space-y-3">
                  <p className="text-sm text-muted-foreground text-center">ادفع عبر Instapay من خلال الرابط التالي:</p>
                  <Button
                    variant="outline"
                    className="w-full gap-2"
                    onClick={() => window.open("https://ipn.eg/S/batsilitohsbc/instapay/7Gr2jR", "_blank")}
                  >
                    <ExternalLink className="w-4 h-4" />
                    فتح رابط Instapay
                  </Button>
                </div>
              )}

              {formData.paymentMethod === "vodafone" && (
                <div className="p-4 rounded-xl bg-muted/50 border border-border space-y-3">
                  <p className="text-sm text-muted-foreground text-center">حوّل المبلغ إلى رقم Vodafone Cash التالي:</p>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-lg font-bold font-mono" dir="ltr">01016712243</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => copyToClipboard("01016712243", "الرقم")}
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              )}

              {formData.paymentMethod === "bank" && (
                <div className="p-4 rounded-xl bg-muted/50 border border-border space-y-3">
                  <p className="text-sm text-muted-foreground text-center">حوّل المبلغ إلى الحساب البنكي التالي:</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between p-2 bg-background rounded-lg">
                      <span className="text-muted-foreground">البنك:</span>
                      <span className="font-semibold">HSBC Egypt</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-background rounded-lg">
                      <span className="text-muted-foreground">رقم الحساب:</span>
                      <div className="flex items-center gap-1">
                        <span className="font-mono text-xs" dir="ltr">004-253829-001</span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6"
                          onClick={() => copyToClipboard("004-253829-001", "رقم الحساب")}
                        >
                          <Copy className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-background rounded-lg">
                      <span className="text-muted-foreground">IBAN:</span>
                      <div className="flex items-center gap-1">
                        <span className="font-mono text-xs" dir="ltr">EG860025000400000004253829001</span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6"
                          onClick={() => copyToClipboard("EG860025000400000004253829001", "IBAN")}
                        >
                          <Copy className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {errors.paymentMethod && (
                <p className="text-sm text-destructive text-center">
                  {errors.paymentMethod}
                </p>
              )}
            </div>
          )}

          {/* Step 3: Payment Proof */}
          {step === 3 && (
            <div className="text-center space-y-6 py-4">
              <div className="space-y-2">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                  <MessageCircle className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-lg font-semibold">أرسل إثبات الدفع</h3>
                <p className="text-muted-foreground text-sm">
                  اضغط على الزر أدناه لإرسال إثبات الدفع عبر واتساب
                </p>
              </div>

              <Button
                onClick={handleWhatsAppClick}
                className="w-full bg-green-600 hover:bg-green-700 text-white gap-2"
                size="lg"
              >
                <MessageCircle className="w-5 h-5" />
                إرسال عبر واتساب
              </Button>
            </div>
          )}

          {/* Navigation */}
          <div className="flex gap-3 pt-4">
            {step > 1 && (
              <Button variant="outline" onClick={handleBack} className="flex-1 gap-2">
                <ArrowRight className="w-4 h-4" />
                السابق
              </Button>
            )}
            {step < 3 && (
              <Button variant="gold" onClick={handleNext} className="flex-1 gap-2">
                التالي
                <ArrowLeft className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
