import { Megaphone } from "lucide-react";
import NeomorphCard from "./NeomorphCard";

const AnnouncementSection = () => {
  const announcements = [
    {
      title: "Materi Baru: Bahasa Indonesia Bab 2",
      description: "Materi tentang teks deskripsi telah tersedia dan siap dipelajari!",
      date: "25 Oktober 2025",
    },
    {
      title: "Update: Matematika Kelas 8",
      description: "Latihan soal baru untuk materi persamaan linear sudah ditambahkan.",
      date: "23 Oktober 2025",
    },
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
            <Megaphone className="w-8 h-8 text-primary" />
            Info Terbaru dari Guru
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {announcements.map((announcement, index) => (
            <NeomorphCard 
              key={announcement.title} 
              hoverable 
              className="fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <h3 className="text-xl font-semibold mb-3">{announcement.title}</h3>
              <p className="text-muted-foreground mb-4">{announcement.description}</p>
              <p className="text-sm text-muted-foreground/70">{announcement.date}</p>
            </NeomorphCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnnouncementSection;
