"use client";

import {
  Languages,
  Globe2,
  Check,
  Search,
  Sparkles,
} from "lucide-react";

import { useEffect, useMemo, useState } from "react";

import api from "@/services/api";

import { useAuth } from "@/contexts/AuthContext";

const languages = [
  { name: "English", region: "United States", code: "EN", value: "en" },
  { name: "Português", region: "Brasil", code: "PT", value: "pt" },
  { name: "Español", region: "España", code: "ES", value: "es" },
  { name: "Français", region: "France", code: "FR", value: "fr" },
  { name: "Deutsch", region: "Deutschland", code: "DE", value: "de" },
  { name: "Italiano", region: "Italia", code: "IT", value: "it" },
  { name: "Русский", region: "Россия", code: "RU", value: "ru" },
  { name: "Українська", region: "Україна", code: "UA", value: "ua" },
  { name: "日本語", region: "日本", code: "JP", value: "jp" },
  { name: "한국어", region: "대한민국", code: "KR", value: "kr" },
  { name: "中文 (简体)", region: "中国", code: "CN", value: "cn" },
  { name: "中文 (繁體)", region: "台灣", code: "TW", value: "tw" },
  { name: "العربية", region: "الشرق الأوسط", code: "AR", value: "ar" },
  { name: "Türkçe", region: "Türkiye", code: "TR", value: "tr" },
  { name: "Polski", region: "Polska", code: "PL", value: "pl" },
  { name: "Nederlands", region: "Nederland", code: "NL", value: "nl" },
  { name: "Čeština", region: "Česká republika", code: "CZ", value: "cz" },
  { name: "Magyar", region: "Magyarország", code: "HU", value: "hu" },
  { name: "Svenska", region: "Sverige", code: "SE", value: "se" },
  { name: "Norsk", region: "Norge", code: "NO", value: "no" },
  { name: "Dansk", region: "Danmark", code: "DK", value: "dk" },
  { name: "Suomi", region: "Suomi", code: "FI", value: "fi" },
  { name: "Română", region: "România", code: "RO", value: "ro" },
  { name: "Ελληνικά", region: "Ελλάδα", code: "GR", value: "gr" },
  { name: "हिन्दी", region: "भारत", code: "HI", value: "hi" },
  { name: "বাংলা", region: "বাংলাদেশ", code: "BN", value: "bn" },
  { name: "ไทย", region: "ประเทศไทย", code: "TH", value: "th" },
  { name: "Tiếng Việt", region: "Việt Nam", code: "VN", value: "vn" },
  { name: "Bahasa Indonesia", region: "Indonesia", code: "ID", value: "id" },
];

export default function LanguageTab() {

  const { user, setUser } = useAuth();

  const [selected, setSelected] =
    useState("English");

  const [search, setSearch] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  useEffect(() => {

    if (!user?.language) return;

    const found =
      languages.find(
        (x) =>
          x.value.toLowerCase() ===
          user.language.toLowerCase()
      );

    if (found) {
      setSelected(found.name);
    }

  }, [user]);

  const filteredLanguages =
    useMemo(() => {

      return languages.filter((language) =>
        language.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||

        language.region
          .toLowerCase()
          .includes(search.toLowerCase())
      );

    }, [search]);

  async function updateLanguage(
    languageName: string,
    languageValue: string
  ) {

    try {

      if (loading) return;

      setLoading(true);

      setSelected(languageName);

      const token =
        localStorage.getItem("token");

      await api.put(
        "https://localhost:7071/api/user/language",
        {
          language: languageValue
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      if (user) {
        setUser({
          ...user,
          language: languageValue
        });
      }

      localStorage.setItem(
        "language",
        languageValue
      );

      // removed reload (keeps state sync intact)

    } catch (error) {

      console.error(
        "Failed to update language:",
        error
      );

    } finally {

      setLoading(false);
    }
  }

  return (
    <div className="relative">

      {/* DOT BACKGROUND */}
      <div
        className="
          absolute inset-0 opacity-[0.03]
          pointer-events-none
          [background-image:radial-gradient(#ffffff_1px,transparent_1px)]
          [background-size:24px_24px]
        "
      />

      <div className="relative z-10">

        {/* HEADER */}
        <div className="mb-12">

          <p
            className="
              uppercase
              tracking-[0.35em]
              text-red-500
              text-sm
              font-semibold
              mb-4
            "
          >
            Localization
          </p>

          <h2
            className="
              text-5xl
              font-black
              uppercase
              leading-none
            "
          >
            Language
          </h2>

          <p
            className="
              text-white/50
              mt-5
              max-w-[760px]
              text-lg
            "
          >
            Choose the language used across
            Duckzr Studios services, launcher,
            games, notifications, and future
            platform integrations.
          </p>

          <h2
            className="
              text-9xl
              font-black
              uppercase
              relative
              opacity-4
              h-4
              top-[-150px]
              leading-none
            "
          >
            Language
          </h2>

        </div>

        {/* MAIN PANEL */}
        <div
          className="
            relative
            overflow-hidden
            rounded-[32px]
            border border-white/10
            bg-[#101010]
            h-[1660px]
          "
        >

          {/* RED GLOW */}
          <div
            className="
              absolute
              top-[-140px]
              right-[-140px]
              w-[340px]
              h-[340px]
              bg-red-600/10
              blur-[160px]
            "
          />

          {/* TOP STATUS */}
          <div
            className="
              border-b border-white/10
              p-10
            "
          >

            <div className="flex items-center justify-between">

              <div className="flex items-center gap-6">

                <div
                  className="
                    w-20 h-20
                    rounded-3xl
                    relative
                    left-3
                    text-white
                    flex items-center justify-center
                  "
                >

                  <Languages
                    size={36}
                    className="text-white"
                  />

                </div>

                <div>

                  <p
                    className="
                      uppercase
                      tracking-[0.25em]
                      text-red-500
                      text-sm
                      font-bold
                      mb-2
                    "
                  >
                    Global Access
                  </p>

                  <h3
                    className="
                      text-3xl
                      font-black
                    "
                  >
                    Multi-language support
                  </h3>

                  <p className="text-white/45 mt-2">
                    Personalized for players
                    around the world.
                  </p>

                </div>

              </div>

              {/* CURRENT LANGUAGE */}
              <div
                className="
                  hidden lg:flex
                  flex-col
                  items-end
                  relative
                  right-5
                "
              >

                <span
                  className="
                    text-white/40
                    uppercase
                    tracking-[0.2em]
                    text-sm
                  "
                >
                  Current
                </span>

                <h1
                  className="
                    text-5xl
                    font-black
                    text-red-500
                  "
                >
                  {languages.find(
                    (l) => l.name === selected
                  )?.code || "EN"}
                </h1>

              </div>

            </div>

          </div>

          {/* CONTENT */}
          <div className="p-10 relative top-2">

            {/* SEARCH */}
            <div
              className="
                relative
                mb-8
              "
            >

              <Search
                size={20}
                className="
                  absolute
                  left-35
                  top-1/2
                  -translate-y-1/2
                  text-white/30
                "
              />

              <input
                type="text"
                placeholder="Search language..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                className="
                  w-full
                  h-[64px]
                  pl-14
                  pr-6
                  bg-[#0d0d0d]
                  border border-white/10
                  rounded-2xl
                  outline-none
                  focus:border-red-600/40
                  transition-all
                "
              />

            </div>

            {/* LANGUAGES GRID */}
            <div
              className="
                grid
                grid-cols-2
                gap-5
                relative
                top-4
              "
            >

              {filteredLanguages.map((language) => {

                const active =
                  selected === language.name;

                return (
                  <button
                    key={language.name}
                    disabled={loading}
                    onClick={() =>
                      updateLanguage(
                        language.name,
                        language.value
                      )
                    }
                    className={`
                      group
                      relative
                      overflow-hidden
                      text-left
                      rounded-3xl
                      border
                      p-6
                      transition-all
                      ${
                        active
                          ? "border-red-600/40 bg-red-600/10"
                          : "border-white/10 bg-black/20 hover:border-red-600/20"
                      }
                    `}
                  >

                    {/* HOVER GLOW */}
                    <div
                      className="
                        absolute inset-0
                        opacity-0
                        group-hover:opacity-100
                        transition-opacity
                        duration-500
                        bg-gradient-to-r
                        from-red-600/10
                        to-transparent
                      "
                    />

                    <div
                      className="
                        relative z-10
                        flex items-center justify-between
                      "
                    >

                      {/* LEFT */}
                      <div className="flex items-center gap-5">

                        {/* CODE */}
                        <div
                          className={`
                            w-16 h-16
                            rounded-2xl
                            border
                            flex items-center justify-center
                            text-lg
                            font-black
                            transition-all
                            ${
                              active
                                ? "bg-red-600 text-white border-red-500"
                                : "bg-[#121212] border-white/10"
                            }
                          `}
                        >
                          {language.code}
                        </div>

                        {/* INFO */}
                        <div>

                          <h3
                            className="
                              text-xl
                              font-black
                            "
                          >
                            {language.name}
                          </h3>

                          <p
                            className="
                              text-white/45
                              mt-1
                            "
                          >
                            {language.region}
                          </p>

                        </div>

                      </div>

                      {/* RIGHT */}
                      {active ? (

                        <div
                          className="
                            w-11 h-11
                            rounded-2xl
                            bg-green-500/15
                            relative
                            right-5
                            border border-green-500/20
                            flex items-center justify-center
                          "
                        >

                          <Check
                            size={20}
                            className="text-green-400"
                          />

                        </div>

                      ) : (

                        <Globe2
                          size={20}
                          className="
                            text-white/25
                            group-hover:text-red-500
                            transition-colors
                            relative
                            right-8
                          "
                        />

                      )}

                    </div>

                  </button>
                );
              })}

            </div>

            {/* FOOTER INFO */}
            <div
              className="
                mt-10
                border border-dashed border-white/10
                bg-black/20
                rounded-3xl
                p-8
                flex items-start gap-5
                relative
                top-8
              "
            >

              <div
                className="
                  w-14 h-14
                  rounded-2xl
                  bg-red-600/10
                  border border-red-600/20
                  flex items-center justify-center
                  shrink-0
                "
              >

                <Sparkles
                  size={24}
                  className="text-red-500"
                />

              </div>

              <div>

                <h3
                  className="
                    text-xl
                    font-black
                    mb-3
                  "
                >
                  Dynamic localization system
                </h3>

                <p
                  className="
                    text-white/45
                    leading-relaxed
                  "
                >
                  Future updates will support
                  automatic language detection,
                  launcher synchronization,
                  in-game localization, and
                  community translation systems.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}