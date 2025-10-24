import { Lightbulb } from "lucide-react";
import NeomorphCard from "./NeomorphCard";

const AboutSection = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <NeomorphCard className="text-center" inset>
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/20 flex items-center justify-center">
            <Lightbulb className="w-8 h-8 text-accent" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Tentang EduMuda</h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            EduMuda membantu siswa SMP belajar di mana saja dan kapan saja.
            Semua materi ditulis langsung oleh guru, disusun ringan agar mudah dipahami.
          </p>
        </NeomorphCard>
      </div>
    </section>
  );
};

export default AboutSection;
