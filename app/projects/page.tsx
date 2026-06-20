"use client";

import {
  Globe,
  MessageCircle,
  BookOpen,
  ArrowUpRight,
} from "lucide-react";

const games = [

  {
    id: 1,
    name: "Veyra",
    logo: "/games/VEYRALogo_DuckzrStudios.png",
    banner: "/games/banners/veyra-banner.jpg",
    video: "/games/videos/veyra.mp4",
    platform: "/platforms/windows.svg",

    glow: "hover:shadow-[0_0_45px_rgba(255,0,0,0.45)]",

    links: {
      website: "#",
      support: "#",
      forum: "#",
      community: "#",
    },
  },

  {
    id: 2,
    name: "ASHEN",
    logo: "/games/AshenLogo_500x500.png",
    banner: "/games/banners/AshenBanner.jpg",
    video: "/games/videos/launcher.mp4",
    platform: "/platforms/windows.svg",

    glow: "hover:shadow-[0_0_45px_rgba(0,140,255,0.45)]",

    links: {
      website: "#",
      support: "#",
      forum: "#",
      community: "#",
    },
  },

  {
    id: 3,
    name: "APEXIS RACING",
    logo: "/games/ApexisRacingLogo_DuckzrStudios.png",
    banner: "/games/banners/rebirth-banner.jpg",
    video: "/games/videos/rebirth.mp4",
    platform: "/platforms/windows.svg",

    glow: "hover:shadow-[0_0_45px_rgba(0,255,170,0.45)]",

    links: {
      website: "#",
      support: "#",
      forum: "#",
      community: "#",
    },
  },

  {
    id: 4,
    name: "Duckzr Mobile",
    logo: "/games/logos/mobile-logo.png",
    banner: "/games/banners/mobile-banner.jpg",
    video: "/games/videos/mobile.mp4",
    platform: "/platforms/mobile.svg",

    glow: "hover:shadow-[0_0_45px_rgba(255,160,0,0.45)]",

    links: {
      website: "#",
      support: "#",
      forum: "#",
      community: "#",
    },
  },

];

export default function GamesPage() {

  return (
    <main
      className="
        min-h-screen
        bg-black
        text-white
        overflow-hidden
      "
    >

      {/* HERO */}
      <section
        className="
          relative
          px-10
          pt-36
          pb-24
        "
      >

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_60%)]
            pointer-events-none
          "
        />

        <div className="max-w-[1700px] mx-auto">

          <span
            className="
              uppercase
              tracking-[0.4em]
              text-red-500
              text-sm
              font-black
            "
          >
            Duckzr Studios
          </span>

          <h1
            className="
              mt-5
              text-[110px]
              leading-[0.85]
              font-black
              tracking-[-6px]
              uppercase
            "
          >
            Our Games
          </h1>

          <p
            className="
              mt-8
              max-w-[850px]
              text-white/60
              text-2xl
              leading-relaxed
            "
          >
            Discover immersive worlds, competitive gameplay
            and cinematic experiences built by Duckzr Studios.
          </p>

        </div>

      </section>

      {/* GAMES GRID */}
      <section className="px-10 pb-32 relative left-100">

        <div
          className="
            max-w-[1700px]
            mx-auto
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-4
            gap-10
          "
        >

          {games.map((game) => (

            <div
              key={game.id}
              className={`
                group
                relative
                transition-all
                duration-500
                hover:-translate-y-4
                ${game.glow}
              `}
            >

              {/* CARD */}
              <div
                className="
                  relative
                  overflow-hidden
                  border
                  border-white/10
                  bg-[#080808]
                "
              >

                {/* MEDIA */}
                <div
                  className="
                    relative
                    h-[520px]
                    overflow-hidden
                  "
                >

                  {/* IMAGE */}
                  <img
                    src={game.banner}
                    alt={game.name}
                    className="
                      absolute
                      inset-0
                      w-full
                      h-full
                      object-cover
                      transition-all
                      duration-700
                      group-hover:scale-110
                    "
                  />

                  {/* VIDEO */}
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="
                      absolute
                      inset-0
                      w-full
                      h-full
                      object-cover
                      opacity-0
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                    "
                  >
                    <source
                      src={game.video}
                      type="video/mp4"
                    />
                  </video>

                  {/* BLACK OVERLAY */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-black/0
                      transition-all
                      duration-500
                      group-hover:bg-black/70
                    "
                  />

                  {/* PLATFORM */}
                  <div
                    className="
                      absolute
                      bottom-5
                      left-5
                      z-20
                      w-8
                      h-8
                    "
                  >

                    <img
                      src={game.platform}
                      alt="platform"
                      className="
                        w-full
                        h-full
                        object-contain
                      "
                    />

                  </div>

                  {/* LOGO */}
                  <div
                    className="
                      absolute
                      inset-0
                      z-20
                      flex
                      items-center
                      justify-center
                      transition-all
                      duration-500
                      group-hover:-translate-y-25
                    "
                  >

                    <img
                      src={game.logo}
                      alt={game.name}
                      className="
                        max-w-[240px]
                        object-contain
                        drop-shadow-2xl
                      "
                    />

                  </div>

                  {/* HOVER LINKS */}
                  <div
                    className="
                      absolute
                      bottom-[-230px]
                      left-0
                      z-30
                      w-full
                      px-8
                      transition-all
                      duration-800
                      group-hover:bottom-22
                    "
                  >

                    <div
                      className="
                        flex
                        flex-col
                        gap-4
                      "
                    >

                      {/* WEBSITE */}
                      <a
                        href={game.links.website}
                        className="
                          flex
                          items-center
                          justify-between
                          h-[58px]
                          px-5
                          bg-white/10
                          backdrop-blur-md
                          border
                          border-white/10
                          hover:bg-red-600
                          transition-all
                        "
                      >

                        <div className="flex items-center gap-3">

                          <Globe size={20} />

                          Official Website

                        </div>

                        <ArrowUpRight size={20} />

                      </a>

                      {/* SUPPORT */}
                      <a
                        href={game.links.support}
                        className="
                          flex
                          items-center
                          justify-between
                          h-[58px]
                          px-5
                          bg-white/10
                          backdrop-blur-md
                          border
                          border-white/10
                          hover:bg-red-600
                          transition-all
                        "
                      >

                        <div className="flex items-center gap-3">

                          <MessageCircle size={20} />

                          Support

                        </div>

                        <ArrowUpRight size={20} />

                      </a>

                      {/* FORUM */}
                      <a
                        href={game.links.forum}
                        className="
                          flex
                          items-center
                          justify-between
                          h-[58px]
                          px-5
                          bg-white/10
                          backdrop-blur-md
                          border
                          border-white/10
                          hover:bg-red-600
                          transition-all
                        "
                      >

                        <div className="flex items-center gap-3">

                          <BookOpen size={20} />

                          Forum

                        </div>

                        <ArrowUpRight size={20} />

                      </a>

                    </div>

                  </div>

                </div>

                {/* BOTTOM */}
                <div
                  className="
                    relative
                    z-30
                    border-t
                    border-white/10
                    bg-[#090909]
                    px-7
                    py-6
                  "
                >

                  <div
                    className="
                      flex
                      items-center
                      gap-5
                    "
                  >

                    {/* MINI LOGO */}
                    <img
                      src={game.logo}
                      alt={game.name}
                      className="
                        w-12
                        h-12
                        object-contain
                      "
                    />

                    {/* NAME */}
                    <div>

                      <h2
                        className="
                          text-2xl
                          font-black
                          tracking-tight
                        "
                      >
                        {game.name}
                      </h2>

                      <p
                        className="
                          text-sm
                          text-white/40
                          uppercase
                          tracking-[0.2em]
                        "
                      >
                        Duckzr Studios
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>

    </main>
  );
}