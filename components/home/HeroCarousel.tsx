"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { heroSlides } from "@/data/heroSlides";

export default function HeroCarousel() {

  const [current, setCurrent] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === heroSlides.length - 1 ? 0 : prev + 1
      );
    }, 6000);

    return () => clearInterval(interval);

  }, []);

  const slide = heroSlides[current];

  return (
    <section className="relative h-screen overflow-hidden bg-black">

      {/* BACKGROUND */}
      <div className="absolute inset-0">

        <Image
          src={slide.background}
          alt={slide.game}
          fill
          priority
          className="
            object-cover
            scale-105
            transition-all duration-[2000ms]
          "
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/30" />

        {/* BOTTOM GRADIENT */}
        <div
          className="
            absolute bottom-0 left-0
            h-[40vh] w-full
            bg-gradient-to-t
            from-black
            to-transparent
          "
        />

      </div>

      {/* CONTENT */}
      <div
        className="
          relative z-10
          flex h-full items-end
          px-16 pb-28
        "
      >

        <div className="max-w-[700px]">

          {/* GAME LOGO */}
          <Image
            src={slide.logo}
            alt={slide.game}
            width={260}
            height={260}
            className="mb-8 object-contain"
          />

          {/* GAME NAME */}
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-white/70 relative top-[-30px] left-5">

            {slide.game}

          </p>

          {/* TITLE */}
          <h1
            className="
              mb-8
              text-6xl font-bold
              leading-[1]
              text-white
              relative
              top-[-30px]
              left-5
            "
          >
            {slide.title}
          </h1>

          {/* BUTTONS */}
          <div className="flex items-center gap-4 relative top-[-10px]">

            {/* WATCH TRAILER */}
            <button
              className="
                flex items-center gap-3
                rounded-full
                px-7 py-4
                text-black font-bold
                transition-all duration-300
                hover:scale-105
                relative
                top-3
                left-3
                h-10
                w-40
              "
              style={{
                backgroundColor: slide.color,
              }}
            >

              {/* PLAY ICON */}
              <img
                src="https://www.svgrepo.com/show/164900/play-button-arrowhead.svg"
                alt="Play"
                className="h-4 w-4 relative left-5 top-0"
              />

              <h6 className="text-bd font-bold relative left-4 top-0">
                Watch Trailer
              </h6>

            </button>

            {/* LEARN MORE */}
            <button
              className="
                rounded-full
                border border-white/30
                px-7 py-4
                font-semibold text-white
                backdrop-blur-sm
                relative
                top-3
                left-3
                w-40
                h-10
                transition-all duration-300
                hover:bg-white hover:text-black
              "
            >
              Learn More
            </button>

          </div>

        </div>

      </div>

      {/* DOTS */}
      <div
        className="
          absolute bottom-16 right-16
          z-20 flex items-center gap-3
        "
      >

        {heroSlides.map((item, index) => {

          const active = current === index;

          return (
            <button
              key={item.id}
              onClick={() => setCurrent(index)}
              className={`
                relative overflow-hidden
                rounded-full border
                transition-all duration-500
                ${
                  active
                    ? "w-16 border-white"
                    : "w-3 border-white/40"
                }
                h-3
              `}
            >

              {/* ACTIVE BAR */}
              {active && (
                <div
                  className="
                    absolute left-0 top-0
                    h-full animate-[loading_6s_linear]
                  "
                  style={{
                    backgroundColor: slide.color,
                    width: "100%",
                  }}
                />
              )}

            </button>
          );

        })}

      </div>

    </section>
  );
}