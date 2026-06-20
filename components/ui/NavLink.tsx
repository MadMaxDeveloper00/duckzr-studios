"use client";

import { ReactNode } from "react";
import { useRouteTransition } from "@/components/transition/RouteTransitionProvider";

type Props = {
  href: string;
  children: ReactNode;
};

export default function NavLink({ href, children }: Props) {
  const { navigate } = useRouteTransition();

  return (
    <button
      onClick={() => navigate(href)}
      className="relative group text-lg font-bold tracking-wide text-white"
    >
      {/* TEXTO BASE (BRANCO) */}
      <span className="relative z-10">
        {children}
      </span>

      {/* CAMADA VERMELHA (FORÇADA ACIMA) */}
      <span
        className="
          absolute left-0 top-0
          h-full overflow-hidden
          w-0 group-hover:w-full
          transition-all duration-500 ease-out
          z-20
          text-[#ff0000]
          bg-transparent
          pointer-events-none
        "
      >
        <span className="font-bold tracking-wide">
          {children}
        </span>
      </span>
    </button>
  );
}