"use client";

import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";

export default function LauncherSection() {

  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#0d0d0d]
        py-32
      "
    >

      {/* BACKGROUND */}
      <div className="absolute inset-0">

        <Image
          src="/launcher/launcher-background.png"
          alt="Launcher Background"
          fill
          className="
            object-cover
            opacity-30
          "
        />

        {/* OVERLAY */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-black
            via-black/80
            to-black/40
          "
        />

      </div>

      {/* RED GLOW */}
      <div
        className="
          absolute
          right-[-200px]
          top-1/2
          h-[500px]
          w-[500px]
          -translate-y-1/2
          rounded-full
          bg-red-600/20
          blur-[120px]
        "
      />

      {/* CONTENT */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          w-[92%]
          max-w-[1700px]
          items-center
          justify-between
          gap-20
        "
      >

        {/* ========================= */}
        {/* LEFT CONTENT */}
        {/* ========================= */}

        <div className="max-w-[720px]">

          {/* SMALL LABEL */}
          <p
            className="
              mb-5
              text-sm
              font-black
              uppercase
              tracking-[0.45em]
              text-red-500
            "
          >
            Launcher
          </p>

          {/* TITLE */}
          <h1
            className="
              text-7xl
              font-black
              uppercase
              leading-[0.95]
              tracking-[-4px]
              text-red-600
            "
          >
            One Place
          </h1>

          <h1
            className="
              text-7xl
              font-black
              uppercase
              leading-[0.95]
              tracking-[-4px]
              text-white-600
            "
          >
            For Every
          </h1>

          <h1
            className="
              text-7xl
              font-black
              uppercase
              leading-[0.95]
              tracking-[-4px]
              text-orange-600
            "
          >
            Experience
          </h1>

          {/* DESCRIPTION */}
          <p
            className="
              mt-10
              max-w-[620px]
              text-lg
              leading-relaxed
              text-white/65
            "
          >
            Download games, receive updates,
            manage your account, connect with
            friends and access every Duckzr
            Studios experience through one
            unified launcher.
          </p>

          {/* BUTTONS */}
          <div className="mt-14 flex items-center gap-6">

            {/* DOWNLOAD */}
            <button
              className="
                group
                relative
                flex
                left-3
                h-[78px]
                w-[250px]
                overflow-hidden
                border
                border-red-500
                bg-white/15
              "
            >

              {/* FILL */}
              <div
                className="
                  absolute
                  left-[-12px]
                  top-0
                  h-full
                  w-[72px]
                  bg-red-500
                  transition-all
                  duration-500
                  group-hover:w-[400px]
                "
              />

              {/* CONTENT */}
              <div
                className="
                  relative
                  z-20
                  flex
                  items-center
                  gap-8
                  px-7
                "
              >

                {/* ICON */}
                <div
                  className="
                    flex
                    absolute
                    left-9
                    h-[42px]
                    w-[42px]
                    items-center
                    justify-center
                    rounded-full
                    border
                    bg-white
                    border-white/40
                    text-black
                    transition-all
                    duration-500
                    group-hover:-translate-x-[-166px]
                    group-hover:border-black
                    group-hover:text-black
                  "
                >

                  <Download size={22} />

                </div>

                {/* TEXT */}
                <span
                  className="
                    text-lg
                    absolute
                    left-21
                    font-black
                    uppercase
                    tracking-[0.1em]
                    text-white
                    transition-all
                    duration-800
                    group-hover:text-black
                  "
                >
                  Download
                </span>

              </div>

            </button>

            {/* LEARN MORE */}
            <button
              className="
                flex
                h-[78px]
                items-center
                gap-4
                border
                border-white/10
                bg-white/5
                px-8
                text-white
                transition-all
                duration-300
                hover:border-red-500
                hover:bg-red-500
                hover:text-black
              "
            >

              <ArrowRight size={22} />

              <span
                className="
                  text-sm
                  font-black
                  uppercase
                  tracking-[0.2em]
                "
              >
                Learn More
              </span>

            </button>

          </div>

        </div>

        {/* ========================= */}
        {/* RIGHT IMAGE */}
        {/* ========================= */}

        <div
          className="
            relative
            flex
            h-[760px]
            w-470
            items-center
            justify-center
          "
        >

          {/* BACK PANEL */}
          <div
            className="
              absolute
              right-[-40px]
              top-[40px]
              h-full
              w-480
              rounded-[32px]
              bg-red-600
              opacity-40
            "
          />

          {/* MAIN PANEL */}
          <div
            className="
              relative
              h-full
              w-470
              overflow-hidden
              rounded-[32px]
              border
              border-white/10
              bg-[#151515]
              shadow-[0_40px_120px_rgba(0,0,0,0.6)]
            "
          >

            <Image
              src="/launcher/launcher-preview.png"
              alt="Duckzr Launcher"
              fill
              className="
                object-cover
                transition-transform
                duration-700
                hover:scale-[1.02]
              "
            />

            {/* IMAGE OVERLAY */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/50
                via-transparent
                to-transparent
              "
            />

          </div>

        </div>

      </div>

    </section>
  );
}