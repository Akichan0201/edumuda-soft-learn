import { User } from "lucide-react";
import NeomorphCard from "./NeomorphCard";

const Header = () => {
  const navItems = [
    { name: "Home", active: true },
    { name: "Materi", active: false },
    { name: "Tentang", active: false },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <NeomorphCard className="flex items-center justify-between">
        <div className="flex items-center gap-8">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            EduMuda
          </h1>
          <nav className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.name === "Home" ? "/" : `/${item.name.toLowerCase()}`}
                className={cn(
                  "text-sm font-medium transition-all duration-300",
                  item.active
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
        <div className="w-10 h-10 rounded-full neomorph flex items-center justify-center">
          <User className="w-5 h-5 text-primary" />
        </div>
      </NeomorphCard>
    </header>
  );
};

// Helper function (should be imported from utils, but included here for clarity)
function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}

export default Header;
