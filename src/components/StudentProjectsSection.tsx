import studentWork1 from "@/assets/student-work-1.jpeg";
import studentWork2 from "@/assets/student-work-2.jpeg";
import studentWork3 from "@/assets/student-work-3.jpeg";
import studentWork4 from "@/assets/student-work-4.jpeg";
import studentWork5 from "@/assets/student-work-5.jpeg";
import studentWork6 from "@/assets/student-work-6.jpeg";
import studentWork7 from "@/assets/student-work-7.jpeg";
import studentWork8 from "@/assets/student-work-8.jpeg";

const studentProjects = [
  studentWork1,
  studentWork2,
  studentWork3,
  studentWork4,
  studentWork5,
  studentWork6,
  studentWork7,
  studentWork8,
];

const StudentProjectsSection = () => {
  // Ensure the track is always wider than the viewport to avoid empty gaps.
  // One "set" is 12 items, repeated twice so 0% and 50% positions look identical.
  const baseSet = Array.from({ length: 12 }, (_, i) => studentProjects[i % studentProjects.length]);
  const trackItems = [...baseSet, ...baseSet];

  return (
    <section className="py-12 lg:py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4 mb-8 lg:mb-12">
        <h2 className="text-2xl lg:text-4xl font-bold text-center text-primary">
          مشاريع الطلاب
        </h2>
      </div>
      
      <div className="relative w-full overflow-hidden">
        <div className="flex w-max gap-4 animate-marquee-student motion-reduce:animate-none">
          {trackItems.map((project, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-40 h-40 lg:w-64 lg:h-64 overflow-hidden rounded-lg"
            >
              <img
                src={project}
                alt={`مشروع طالب ${(index % 8) + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentProjectsSection;
