"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useMemo, useState } from "react";

const games = [
  {
    id: 1,
    title: "Veyra",
    genre: "Competitive FPS",
    description:
      "A high precision tactical shooter focused on movement, aim and aggressive gameplay.",
    banner: "/games/veyra-banner.png",
    logo: "/games/VEYRALogo_DuckzrStudios.png",
    logoBlack: "/games/veyraLogo_DuckzrStudios_Black.png"
  },

  {
    id: 2,
    title: "ASHEN",
    genre: "Horror Survival",
    description:
      "Survive abandoned frozen cities while uncovering secrets hidden beneath the snow.",
    banner: "/games/AshenBanner.png",
    logo: "/games/AshenLogo_500x500.png",
    logoBlack: "/games/ashenLogo_DuckzrStudios_Black.png"
  },

  {
    id: 3,
    title: "APEXIS RACING",
    genre: "CAR GAMING",
    description:
      "Apexis Racing is a gamimg by drivers, felling the track and win the GrandPrix!",
    banner: "/games/half-banner.png",
    logo: "/games/ApexisRacingLogo_DuckzrStudios.png",
    logoBlack: "/games/ApexisRacingLogo_DuckzrStudios_Black.png"
  },
];

export default function GamesSection() {

  const [current, setCurrent] = useState(0);

  const currentGame = games[current];

  const currentTrailer = useMemo(() => {
    switch (currentGame.id) {
      case 1:
        return "/games/veyra-trailer.mp4";
      case 2:
        return "/games/revenant-trailer.mp4";
      case 3:
        return "/games/half-trailer.mp4";
    }
  }, [currentGame.id]);

  const currentTextTrailer = useMemo(() => {
    switch(currentGame.id){
      case 1: return "texto da case 1";
      case 2: return "texto da case 2";
      case 3: return "texto da case 3";
    }
  })

  const nextGame =
    games[(current + 1) % games.length];

  function handleNext() {

    setCurrent((prev) =>
      (prev + 1) % games.length
    );
  }

  function handlePrev() {

    setCurrent((prev) =>
      prev === 0
        ? games.length - 1
        : prev - 1
    );
  }

  return (
    <section
      className="
        relative
        w-full
        py-24
        overflow-hidden
        bg-[#111111]
      "
    >

      {/* CONTAINER */}
      <div
        className="
          relative
          mx-auto
          flex
          h-[360px]
          w-[92%]
          max-w-[1700px]
          items-center
        "
      >

        {/* ========================= */}
        {/* LEFT / MAIN GAME */}
        {/* ========================= */}

        <div
          className="
            relative
            z-10
            h-[580px]
            w-[440px]
            left-10
            overflow-hidden
            rounded-[28px]
            bg-[#1a1a1a]
          "
        >

          {/* MAIN BANNER */}
          <Image
            src={currentGame.banner}
            alt={currentGame.title}
            fill
            priority
            className="
              object-cover
              transition-all
              duration-700
            "
          />

          {/* DARK OVERLAY */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-black/80
              via-black/20
              to-transparent
            "
          />

          {/* GAME CONTENT */}
          <div
            className="
              absolute
              left-10
              top-1/2
              z-20
              max-w-[520px]
              -translate-y-1/2
            "
          >

            {/* LOGO */}
            <div
              className="
                relative
                mb-8
                left-9
                top-5
                h-[180px]
                w-[300px]
              "
            >

              <Image
                src={currentGame.logo}
                alt={currentGame.title}
                fill
                className="object-contain"
              />

            </div>

            {/* GAME TITLE */}
            <h1
              className="
                text-6xl
                font-black
                uppercase
                tracking-tight
                text-white
              "
            >
              {currentGame.title}
            </h1>

            {/* GENRE */}
            <p
              className="
                mt-3
                text-lg
                font-semibold
                uppercase
                tracking-[0.3em]
                text-red-500
              "
            >
              {currentGame.genre}
            </p>

            {/* DESCRIPTION */}
            <p
              className="
                mt-8
                text-lg
                leading-relaxed
                text-white/70
              "
            >
              {currentGame.description}
            </p>

          </div>

        </div>

        {/* ========================= */}
        {/* RIGHT PREVIEW */}
        {/* ========================= */}

        <div
          className="
            absolute
            right-210
            top-1/2
            flex
            h-[540px]
            w-[300px]
            -translate-y-1/2
            overflow-hidden
            rounded-[24px]
            border
            border-white/10
            bg-[#1a1a1a]
            shadow-2xl
          "
        >

          {/* PREVIEW IMAGE */}
          <Image
            src={nextGame.banner}
            alt={nextGame.title}
            fill
            className="
              object-cover
              opacity-90
            "
          />

          {/* OVERLAY */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black
              via-black/20
              to-transparent
            "
          />

          {/* TITLE */}
          <div
            className="
              absolute
              bottom-10
              left-20
              z-20
            "
          >

            <h2
              className="
                text-3xl
                font-black
                uppercase
                text-white
              "
            >
              {nextGame.title}
            </h2>

            <p
              className="
                mt-2
                text-sm
                uppercase
                tracking-[0.25em]
                text-white/60
              "
            >
              NEXT GAME
            </p>

          </div>

        </div>

        {/* ========================= */}
        {/* BOTTOM INFO PANEL */}
        {/* ========================= */}

        <div
          className="
            absolute
            bottom-[-240px]
            left-[867px]
            z-40
            flex
            h-[750px]
            w-[99%]
            items-center
            justify-between
            rounded-[24px]
            bg-white
            px-10
            shadow-[0_25px_80px_rgba(0,0,0,0.35)]
          "
        >

          {/* LEFT */}
          <div className="flex items-center gap-30">

            {/* SMALL LOGO */}
            <div
              className="
                relative
                left-27
                bottom-40
                h-[220px]
                w-[300px]
                overflow-hidden
                rounded-xl
                bg-transparent
              "
            >

              <Image
                src={currentGame.logoBlack}
                alt={currentGame.title}
                fill
                className="object-contain p-2"
              />

            </div>

            {/* INFO */}
            <div>

              <h3
                className="
                  text-6xl
                  absolute
                  bottom-[540px]
                  font-black
                  uppercase
                  text-black
                "
              >
                {currentGame.title}
              </h3>

              <h6
                className="
                  mt-2
                  max-w-[700px]
                  text-sm
                  uppercase
                  tracking-[0.25em]
                  absolute
                  bottom-[490px]
                  leading-relaxed
                  text-black/60
                "
              >
                {currentGame.description}
              </h6>

              <video src={currentTrailer} controls className="mt-4 w-full max-w-[500px] h-[200px] rounded-lg border border-black/10 shadow-lg left-[50px] absolute bottom-[200px]">
                Watch the trailer
              </video>

              <h6
                className="
                  mt-2
                  max-w-[600px]
                  text-sm
                  uppercase
                  tracking-[0.25em]
                  absolute
                  left-[600px]
                  bottom-[250px]
                  leading-relaxed
                  text-black/60
                "
              >
                {currentTextTrailer}
              </h6>

            </div>

          </div>

          {/* BUTTONS */}
          <div className="flex items-center gap-4">

            {/* PREV */}
            <button
              onClick={handlePrev}
              className="
                flex
                absolute
                left-[1450px]
                h-[58px]
                w-[58px]
                items-center
                justify-center
                rounded-full
                border
                border-black/10
                bg-black
                text-white
                transition-all
                duration-300
                hover:scale-115
                hover:bg-red-600
              "
            >

              <ChevronLeft size={24} />

            </button>

            {/* NEXT */}
            <button
              onClick={handleNext}
              className="
                flex
                absolute
                left-[1560px]
                h-[58px]
                w-[58px]
                items-center
                justify-center
                rounded-full
                border
                border-black/10
                bg-black
                text-white
                transition-all
                duration-300
                hover:scale-115
                hover:bg-red-600
              "
            >

              <ChevronRight size={24} />

            </button>

          </div>

        </div>

      </div>

    </section>
  );
}