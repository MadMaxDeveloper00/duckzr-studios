"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
} from "react";

import { useRouter } from "next/navigation";
import Image from "next/image";

type Ctx = {
  navigate: (url: string) => void;
};

const RouteTransitionContext = createContext<Ctx | null>(null);

export function useRouteTransition() {
  const ctx = useContext(RouteTransitionContext);

  if (!ctx) {
    throw new Error("RouteTransition not found");
  }

  return ctx;
}

export default function RouteTransitionProvider({
  children,
}: {
  children: ReactNode;
}) {

  const router = useRouter();

  const [transitioning, setTransitioning] = useState(false);

  const [leaving, setLeaving] = useState(false);

  const navigate = useCallback((url: string) => {

    setTransitioning(true);
    setLeaving(false);

    /* ENTRADA */
    setTimeout(() => {
      router.push(url);
    }, 900);

    /* SAÍDA */
    setTimeout(() => {
      setLeaving(true);
    }, 1200);

    /* FINALIZA */
    setTimeout(() => {
      setTransitioning(false);
      setLeaving(false);
    }, 2100);

  }, [router]);

  return (
    <RouteTransitionContext.Provider value={{ navigate }}>

      {children}

      {transitioning && (

        <div className="fixed inset-0 z-[9999] overflow-hidden pointer-events-none">

          {/* PANEL */}
          <div
            className={`
              absolute inset-0 bg-white
              ${
                leaving
                  ? "animate-[panelExit_0.9s_ease-in-out_forwards]"
                  : "animate-[slideUp_0.9s_ease-in-out_forwards]"
              }
            `}
          />

          {/* CONTENT */}
          <div
            className={`
              absolute inset-0
              flex flex-col items-center justify-center
              transition-all duration-700
              ${
                leaving
                  ? "opacity-0 scale-125 -translate-y-12"
                  : "opacity-100 scale-100 translate-y-0"
              }
            `}
          >

            {/* LOGO */}
            <Image
              src="/DSMinimalist.png"
              alt="logo"
              width={160}
              height={40}
              className="invert object-contain"
            />

            {/* TEXT */}
            <div className="mt-4 text-orange-500 text-sm animate-pulse tracking-[0.2em] uppercase">
              carregando...
            </div>

            {/* BAR */}
            <div className="mt-4 h-[2px] w-[160px] overflow-hidden bg-black/10">

              <div className="h-full w-full bg-orange-500 animate-pulse" />

            </div>

          </div>

        </div>

      )}

    </RouteTransitionContext.Provider>
  );
}