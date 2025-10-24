import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface NeomorphCardProps {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
  inset?: boolean;
}

const NeomorphCard = ({ children, className, hoverable = false, inset = false }: NeomorphCardProps) => {
  return (
    <div
      className={cn(
        "rounded-2xl bg-background p-6",
        inset ? "neomorph-inset" : "neomorph",
        hoverable && "neomorph-hover cursor-pointer",
        className
      )}
    >
      {children}
    </div>
  );
};

export default NeomorphCard;
