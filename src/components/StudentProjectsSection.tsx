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
  return (
    <section className="py-12 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl lg:text-4xl font-bold text-center mb-8 lg:mb-12 text-primary">
          مشاريع الطلاب
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-6">
          {studentProjects.map((project, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg aspect-square group"
            >
              <img
                src={project}
                alt={`مشروع طالب ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentProjectsSection;
