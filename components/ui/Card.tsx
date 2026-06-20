import { ReactNode } from "react";

export default function Card({ children }: { children: ReactNode }) {
  return (
    <div className="relative group overflow-hidden bg-[#111] border border-white/10">
      
      {/* shadow layer */}
      <div className="absolute inset-0 bg-white/5 translate-x-3 translate-y-3 group-hover:translate-x-1 group-hover:translate-y-1 transition-all duration-300" />

      <div className="relative z-10">
        {children}
      </div>

    </div>
  );
}