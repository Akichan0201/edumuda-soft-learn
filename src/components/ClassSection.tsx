import { BookOpen, Backpack, Globe } from "lucide-react";
import NeomorphCard from "./NeomorphCard";

const ClassSection = () => {
  const classes = [
    {
      grade: "Kelas 7",
      icon: BookOpen,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      grade: "Kelas 8",
      icon: Backpack,
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      grade: "Kelas 9",
      icon: Globe,
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pilih Kelasmu untuk Mulai Belajar 📚
          </h2>
          <p className="text-muted-foreground">
            Pilih tingkat kelas yang sesuai denganmu
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {classes.map((classItem) => (
            <NeomorphCard key={classItem.grade} hoverable className="text-center">
              <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl ${classItem.bgColor} neomorph-inset flex items-center justify-center`}>
                <classItem.icon className={`w-10 h-10 ${classItem.color}`} />
              </div>
              <h3 className="text-2xl font-semibold mb-3">{classItem.grade}</h3>
              <p className="text-muted-foreground text-sm">
                Pelajari materi sesuai tingkat kelasmu
              </p>
            </NeomorphCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClassSection;
