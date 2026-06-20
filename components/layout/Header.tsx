"use client";

import { useEffect, useState } from "react";
import { Menu, X, User, Download } from "lucide-react";
import { useRouteTransition } from "@/components/transition/RouteTransitionProvider";
import Image from "next/image";
import UserMenu from "@/components/ui/UserMenu";
import NavLink from "@/components/ui/NavLink";
import { useAuth } from "@/contexts/AuthContext";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const { navigate } = useRouteTransition();
  const { user, logout } = useAuth();

  let lastScroll = 0;

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      setScrolled(current > 50);

      if (current > lastScroll && current > 120) {
        setHidden(true); // scroll down → hide
      } else {
        setHidden(false); // scroll up → show
      }

      lastScroll = current;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      } ${
        scrolled
          ? "bg-black/60 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >

      <div className="flex items-center justify-between px-6 md:px-10 py-10 md:py-12 min-h-[88px] md:min-h-[104px]">

        {/* MOBILE MENU */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* LOGO */}
        <div
          onClick={() => navigate("/")}
          className="cursor-pointer hover:opacity-50 transition relative left-30"
        >
        <Image
          src="/DSCompact.png"
          alt="Duckzr"
          width={140}
          height={40}
          className="object-contain"
        />
      </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-14 md:gap-14 text-lg text-white/80 left-10 relative">

          <NavLink href="/">Home</NavLink>

          <NavLink href="/projects">Games</NavLink>

          <NavLink href="/news">News</NavLink>

          <NavLink href="/careers">Career</NavLink>

          <NavLink href="/company">Company</NavLink>

          <NavLink href="/internships">Internships</NavLink>
        </nav>

        {/* ACTIONS */}
        <div className="flex items-center gap-3 md:gap-5">

          <button
            className="
              hidden md:flex
              items-center justify-center
              ml-6
              relative
              right-30
              px-6 py-3
              bg-[#ff0000]
              text-white
              text-lg
              w-40
              h-6
              text-base font-bold
              tracking-wide
              rounded-md
              scale-120
              hover:scale-[1.5]
              hover:bg-[#e60000]
              transition-all duration-500
              "

              onClick={() => navigate("/launcher")}
            >
              Download Client
          </button>

          <UserMenu />

        </div>

      </div>

      {/* MOBILE PANEL */}
      {open && (
        <div className="md:hidden bg-black/80 backdrop-blur-md border-t border-white/5 px-6 py-10 md:py-12 space-y-5">

          <NavLink href="/">Home</NavLink>
          <NavLink href="/projects">Games</NavLink>
          <NavLink href="/news">News</NavLink>
          <NavLink href="/careers">Career</NavLink>
          <NavLink href="/company">Company</NavLink>
          <NavLink href="/internships">Internships</NavLink>
          <div className="pt-5 border-t border-white/10 space-y-3">

            <button className="border border-white/20 px-4 py-2 w-full text-left" onClick={() => navigate("/launcher")}>
              Launcher
            </button>

            <UserMenu />

          </div>

        </div>
      )}

    </header>
  );
}