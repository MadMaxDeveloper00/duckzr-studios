import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "outline" | "ghost";
};

export default function Button({
  children,
  onClick,
  variant = "primary",
}: Props) {
  const base =
    "px-6 py-3 transition-all duration-300 font-medium flex items-center gap-2";

  const styles = {
    primary:
      "bg-white text-black hover:bg-[var(--accent)] hover:text-black",
    outline:
      "border border-white/20 text-white hover:bg-white hover:text-black",
    ghost:
      "text-white hover:text-[var(--accent)]",
  };

  return (
    <button onClick={onClick} className={`${base} ${styles[variant]}`}>
      {children}
    </button>
  );
}