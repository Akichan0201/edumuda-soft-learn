import NeomorphCard from "./NeomorphCard";

const Footer = () => {
  return (
    <footer className="py-8 px-6 mt-16">
      <div className="max-w-6xl mx-auto">
        <NeomorphCard className="text-center" inset>
          <p className="text-sm text-muted-foreground">
            © 2025 EduMuda – Platform Belajar SMP
          </p>
          <div className="flex justify-center gap-6 mt-4">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Tentang Kami
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Kontak
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Kebijakan Privasi
            </a>
          </div>
        </NeomorphCard>
      </div>
    </footer>
  );
};

export default Footer;
