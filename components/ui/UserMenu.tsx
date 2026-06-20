"use client";

import { useEffect, useState } from "react";
import {
  Globe,
  ChevronDown,
  User,
  LogOut,
  Settings,
  UserCircle2,
} from "lucide-react";

import { useRouteTransition } from "@/components/transition/RouteTransitionProvider";
import { useAuth } from "@/contexts/AuthContext";

const languages = [
  { code: "en", label: "English" },
  { code: "pt", label: "Português" },
  { code: "es", label: "Español" },
  { code: "fr", label: "Français" },
  { code: "de", label: "Deutsch" },
  { code: "it", label: "Italiano" },
  { code: "jp", label: "日本語" },
  { code: "kr", label: "한국어" },
];

export default function UserMenu() {

  const [open, setOpen] = useState(false);

  const [langOpen, setLangOpen] = useState(false);

  const [lang, setLang] = useState("en");

  const [helpOpen, setHelpOpen] = useState(false);

  const { navigate } = useRouteTransition();

  const { user, logout } = useAuth();

  const loggedLanguageTop =  helpOpen ? "top-[640px]" : "top-[540px]";

  const guestLanguageTop = helpOpen ? "top-[610px]" : "top-[390px]";

  useEffect(() => {

    const browserLang =
      navigator.language.slice(0, 2);

    const found =
      languages.find(
        l => l.code === browserLang
      );

    if (found) {
      setLang(found.code);
    }

  }, []);

  const changeLanguage = (code: string) => {

    setLang(code);

    setLangOpen(false);

    setTimeout(() => {
      window.location.reload();
    }, 300);
  };

  function handleLogout() {

    logout();

    setOpen(false);

    navigate("/");
  }

  return (
    <div className="relative">

      {/* BOTÃO */}
      <button
        onClick={() => setOpen(!open)}
        className="
          flex items-center gap-2
          px-4 py-2
          bg-black/10
          hover:bg-white/20
          relative
          right-10
          text-white
          font-semibold
          rounded-md
          border border-white/15
          transition
        "
      >

        {
          user ? (
            <>
              <img
                src={`/avatars/${user.avatar}`}
                alt={user.username}
                className="
                  w-11 h-11
                  rounded-full
                  object-cover
                  border border-white/20
                "
              />

              <div className="hidden md:flex flex-col items-start leading-tight">

                <span className="text-sm font-bold text-white">
                  {user.username}
                </span>

                <span className="text-xs text-white/50">
                  #{user.tag}
                </span>

              </div>
            </>
          ) : (
            <User size={40}/>
          )
        }

      </button>

      {/* MENU */}
{open && (
  <>
    {/* ========================= */}
    {/* USER LOGGED PANEL */}
    {/* ========================= */}

    {user && (
      <>
        <div
          className="
            absolute right-10 top-[110px]
            mt-4
            w-[340px]
            bg-[#1a1a1a]/90
            backdrop-blur-xl
            border border-white/10
            rounded-xl
            shadow-2xl
            overflow-hidden
            z-50
          "
        >

          <div className="p-4">

            {/* PROFILE HEADER */}
            <div
              className="
                flex items-center gap-4
                pb-5 mb-4
                border-b border-white/10
              "
            >

              <img
                src={`/avatars/${user.avatar}`}
                alt={user.username}
                className="
                  w-16 h-16
                  rounded-full
                  object-cover
                  border border-white/20
                "
              />

              <div>

                <h2 className="text-white font-bold text-lg">
                  {user.username}
                </h2>

                <p className="text-white/50 text-sm">
                  #{user.tag}
                </p>

                <p className="text-red-400 text-xs mt-1">
                  {user.role}
                </p>

              </div>

            </div>

            {/* PROFILE */}
            <button
              className="
                flex items-center gap-3
                w-full h-[60px]
                px-4
                text-left
                text-white
                hover:bg-white/10
                rounded-md
                transition
              "
              onClick={() => {setOpen(false); navigate("/settings");}}
            >
              <UserCircle2 size={22}/>
              Profile
            </button>

            {/* SETTINGS */}
            <button
              className="flex items-center gap-3 w-full h-[60px] px-4 text-left text-white hover:bg-white/10 rounded-md transition"
              onClick={() => {setOpen(false); navigate("/settings");}}>
                
              <Settings size={22}/>
              Settings
            </button>

            {/* LOGOUT */}
            <button
              onClick={handleLogout}
              className="
                flex items-center gap-3
                w-full h-[60px]
                px-4
                text-left
                text-red-400
                hover:bg-red-500/10
                rounded-md
                transition
              "
            >
              <LogOut size={22}/>
              Logout
            </button>

            {/* HELP */}
            <div className="pt-1 mt-1 border-t border-white/10">

              <details className="group" onToggle={(e) => setHelpOpen(e.currentTarget.open)}>

                <summary
                  className="
                    flex justify-between items-center
                    cursor-pointer
                    px-4 py-3
                    h-[70px]
                    hover:bg-white/10
                    rounded-md
                    list-none
                    text-white
                    font-semibold
                    transition
                  "
                >

                  Help

                  <ChevronDown
                    size={24}
                    className="
                      transition-transform
                      group-open:rotate-180
                    "
                  />

                </summary>

                <div className="mt-2 space-y-2 pl-2">

                  <button className="text-sm text-white/70 hover:text-white block h-[44px] w-full rounded-md text-left px-3 py-2 hover:bg-white/10 transition">
                    Support
                  </button>

                  <button className="text-sm text-white/70 hover:text-white block h-[44px] w-full rounded-md text-left px-3 py-2 hover:bg-white/10 transition">
                    Legal
                  </button>

                  <button className="text-sm text-white/70 hover:text-white block h-[44px] w-full rounded-md text-left px-3 py-2 hover:bg-white/10 transition">
                    Privacy Policy
                  </button>

                  <button className="text-sm text-white/70 hover:text-white block h-[44px] w-full rounded-md text-left px-3 py-2 hover:bg-white/10 transition">
                    Cookie Policy
                  </button>

                </div>

              </details>

            </div>

          </div>

        </div>

        {/* LANGUAGE PANEL LOGGED */}
        <div
          className="
            absolute right-10 ${loggedLanguageTop} top-[450px]
            mt-6
            w-[340px]
            bg-[#1a1a1a]/90
            backdrop-blur-xl
            border border-white/10
            rounded-xl
            shadow-2xl
            z-50
            p-3
          "
        >

          <button
            onClick={() => setLangOpen(!langOpen)}
            className="
              flex items-center justify-between
              w-full h-[60px]
              px-4 py-3
              text-white
              font-semibold
              hover:bg-white/10
              rounded-md
            "
          >

            <span className="flex items-center gap-3 text-sm uppercase tracking-wide">

              <Globe size={20}/>

              {
                languages.find(
                  l => l.code === lang
                )?.label
              }

            </span>

            <ChevronDown
              size={30}
              className={`
                transition-transform
                ${langOpen ? "rotate-180" : ""}
              `}
            />

          </button>

          {langOpen && (
            <div
              className="
                mt-2
                bg-black/40
                rounded-md
                p-2
                space-y-1
                max-h-[300px]
                overflow-y-auto
              "
            >

              {languages.map(l => (
                <button
                  key={l.code}
                  onClick={() => changeLanguage(l.code)}
                  className="
                    w-full h-[45px]
                    text-left
                    px-3 py-2
                    text-sm
                    text-white/70
                    hover:text-white
                    hover:bg-white/10
                    rounded-md
                  "
                >
                  {l.label}
                </button>
              ))}

            </div>
          )}

        </div>
      </>
    )}

    {/* ========================= */}
    {/* USER GUEST PANEL */}
    {/* ========================= */}

    {!user && (
      <>
        <div
          className="
            absolute right-10 top-[110px]
            mt-4
            w-[340px]
            bg-[#1a1a1a]/90
            backdrop-blur-xl
            border border-white/10
            rounded-xl
            shadow-2xl
            overflow-hidden
            z-50
          "
        >

          <div className="p-3 space-y-2 border-b border-white/10 text-center font-bold text-lg text-white tracking-wide">

            <button
              onClick={() => navigate("/auth/login")}
              className="
                w-full h-[86px]
                text-left
                px-4 py-3
                hover:bg-white/10
                rounded-md
                text-white
                font-semibold
              "
            >
              Sign In
            </button>

            <button
              onClick={() => navigate("/auth/register")}
              className="
                w-full h-[85px]
                text-left
                px-4 py-3
                hover:bg-white/10
                rounded-md
                text-white
                font-semibold
              "
            >
              Sign Up
            </button>

          </div>

          {/* HELP */}
          <div className="p-1">

            <details className="group">

              <summary
                className="
                  flex justify-between items-center
                  cursor-pointer
                  px-4 py-3
                  h-[85px]
                  hover:bg-white/10
                  rounded-md
                  list-none
                  text-white
                  font-bold text-lg
                  tracking-wide
                "
              >

                Help

                <ChevronDown
                  size={30}
                  className="
                    transition-transform
                    group-open:rotate-180
                  "
                />

              </summary>

              <div className="mt-2 space-y-2 pl-4">

                <button className="text-sm text-white/70 hover:text-white block h-[44px] w-full rounded-md text-left px-3 py-2 hover:bg-white/20">
                  Support
                </button>

                <button className="text-sm text-white/70 hover:text-white block h-[44px] w-full rounded-md text-left px-3 py-2 hover:bg-white/20">
                  Legal
                </button>

                <button className="text-sm text-white/70 hover:text-white block h-[44px] w-full rounded-md text-left px-3 py-2 hover:bg-white/20">
                  Privacy Policy
                </button>
                
                <button className="text-sm text-white/70 hover:text-white block h-[44px] w-full rounded-md text-left px-3 py-2 hover:bg-white/20">
                  Cookies Policy
                </button>

              </div>

            </details>

          </div>

        </div>

        {/* LANGUAGE PANEL GUEST */}
        <div
          className="
            absolute right-10 ${guestLanguageTop} top-[390px]
            mt-6
            w-[340px]
            bg-[#1a1a1a]/90
            backdrop-blur-xl
            border border-white/10
            rounded-xl
            shadow-2xl
            z-50
            p-3
          "
        >

          <button
            onClick={() => setLangOpen(!langOpen)}
            className="
              flex items-center justify-between
              w-full h-[60px]
              px-4 py-3
              text-white
              font-semibold
              hover:bg-white/10
              rounded-md
            "
          >

            <span className="flex items-center gap-3 text-sm uppercase tracking-wide">

              <Globe size={20}/>

              {
                languages.find(
                  l => l.code === lang
                )?.label
              }

            </span>

            <ChevronDown
              size={30}
              className={`
                transition-transform
                ${langOpen ? "rotate-180" : ""}
              `}
            />

          </button>

          {langOpen && (
            <div
              className="
                mt-2
                bg-black/40
                rounded-md
                p-2
                space-y-1
                max-h-[300px]
                overflow-y-auto
              "
            >

              {languages.map(l => (
                <button
                  key={l.code}
                  onClick={() => changeLanguage(l.code)}
                  className="
                    w-full h-[45px]
                    text-left
                    px-3 py-2
                    text-sm
                    text-white/70
                    hover:text-white
                    hover:bg-white/10
                    rounded-md
                  "
                >
                  {l.label}
                </button>
              ))}

            </div>
          )}

        </div>
      </>
    )}
  </>
)}
    </div>
  );
}