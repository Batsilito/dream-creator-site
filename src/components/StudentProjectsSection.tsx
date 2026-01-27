import studentWork1 from "@/assets/student-work-1.jpeg";
import studentWork2 from "@/assets/student-work-2.jpeg";
import studentWork3 from "@/assets/student-work-3.jpeg";
import studentWork4 from "@/assets/student-work-4.jpeg";
import studentWork5 from "@/assets/student-work-5.jpeg";
import studentWork6 from "@/assets/student-work-6.jpeg";
import studentWork7 from "@/assets/student-work-7.jpeg";
import studentWork8 from "@/assets/student-work-8.jpeg";
import studentWork9 from "@/assets/student-work-9.jpeg";

const studentProjects = [
  studentWork1,
  studentWork2,
  studentWork3,
  studentWork4,
  studentWork5,
  studentWork6,
  studentWork7,
  studentWork8,
  studentWork9,
];

const StudentProjectsSection = () => {
  return (
    <section className="py-12 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl lg:text-4xl font-bold text-center text-primary mb-8 lg:mb-12">
          مشاريع طلابنا
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-6">
          {studentProjects.map((project, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg border border-border bg-card shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <img
                src={project}
                alt={`مشروع طالب ${index + 1}`}
                className="w-full h-40 lg:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentProjectsSection;
