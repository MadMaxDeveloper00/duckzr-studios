"use client";

import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  Download,
  Cloud,
  Shield,
  Zap,
  ArrowRight,
} from "lucide-react";

export default function LauncherPage() {
  return (
    <>
      <Header />

      <main className="bg-[#1B1B1E] text-black overflow-hidden">

        {/* HERO */}
        <section
          className="
            relative
            top-[-200]
            min-h-100
            max-h-150
            flex
            items-center
            justify-center
            px-8
            py-32
          "
        >

          <div
            className="
              w-full
              max-w-[2000px]
              grid
              grid-cols-1
              lg:grid-cols-2
              gap-20
              items-center
            "
          >

            {/* LEFT */}
            <div className="relative z-10">

              {/* LABEL */}
              <div
                className="
                  mb-5
                  inline-flex
                  items-center
                  gap-2
                  select-none
                  border
                  border-transparent
                  bg-transparent
                  px-4
                  py-2
                  relative
                  top-75
                  left-20
                  text-[11px]
                  text-white
                  font-bold
                  uppercase
                  tracking-[0.25em]
                "
              >
                <div className="" />

                Seja bem vindo ao
              </div>

              {/* TITLE */}
              <h1
                className="
                  text-[5rem]
                  leading-[0.9]
                  font-black
                  relative
                  left-20
                  top-75
                  text-black/60
                  select-none
                  uppercase
                  tracking-[-0.05em]
                "
              >
                Duckzr
              </h1>

              <h1
                className="
                  text-[5rem]
                  leading-[0.9]
                  font-black
                  relative
                  left-20
                  top-75
                  text-black/60
                  uppercase
                  select-none
                  tracking-[-0.05em]
                "
              >
                Studios
              </h1>

              <h1
                className="
                  text-[5rem]
                  leading-[0.9]
                  font-black
                  relative
                  z-10
                  left-40
                  top-[205]
                  uppercase
                  select-none
                  text-red-600
                  tracking-[-0.05em]
                "
              >
                Client
              </h1>

              {/* DESCRIPTION */}
              <p
                className="
                  mt-8
                  max-w-[520px]
                  text-[18px]
                  relative
                  top-[255]
                  left-20
                  leading-relaxed
                  text-white/100
                "
              >
                Download and manage all
                DuckzrStudios games in one place.
                Access updates, news, matchmaking,
                patches, anti-cheat systems and
                community features through our
                official desktop launcher.
              </p>

              {/* BUTTONS */}
              <div className="mt-10 flex flex-wrap gap-10 relative top-[280] left-20">

                {/* DOWNLOAD */}
                <a
                  href="/downloads/DuckzrStudiosClient.exe"
                  className="
                    group
                    relative
                    flex
                    h-[64px]
                    items-center
                    overflow-hidden
                    bg-red-600
                    pl-24
                    pr-10
                    font-bold
                    uppercase
                    tracking-[0.15em]
                    text-white
                    transition-all
                    duration-800
                    hover:scale-[1.02]
                    hover:shadow-[0_0_40px_rgba(220,38,38,0.45)]
                  "
                >

                  {/* LEFT ICON BLOCK */}
                  <div
                    className="
                      absolute
                      z-10
                      left-25
                      top-5
                      flex
                      h-full
                      w-[72px]
                      items-center
                      justify-center
                      border-r
                      border-white/10
                      bg-black/10
                      transition-all
                      duration-800
                      group-hover:w-full
                      group-hover:justify-start
                      group-hover:pl-7
                      group-hover:left-[140]
                    "
                  >
                    <Download
                      size={22}
                      className="
                        relative
                        z-10
                      "
                    />
                  </div>

                  <span
                    className="
                      relative
                      z-10
                      transition-all
                      duration-600
                      group-hover:text-black
                    "
                  >
                    Download for Windows
                  </span>

                </a>

                {/* LEARN MORE */}
                <button
                  className="
                    h-[64px]
                    border
                    border-black/10
                    bg-white
                    px-8
                    font-bold
                    uppercase
                    tracking-[0.15em]
                    transition-all
                    duration-500
                    hover:border-black
                    hover:bg-black
                    hover:text-white
                  "
                >
                  Learn More
                </button>

              </div>

              {/* FEATURES */}
              <div
                className="
                  mt-14
                  grid
                  grid-cols-2
                  md:grid-cols-4
                  gap-8
                  relative
                  top-[300]
                  left-20
                  border-t
                  border-black/10
                  pt-8
                "
              >

                {[
                  {
                    icon: Download,
                    title: "Fast Downloads",
                  },
                  {
                    icon: Cloud,
                    title: "Cloud Sync",
                  },
                  {
                    icon: Shield,
                    title: "Anti-Cheat",
                  },
                  {
                    icon: Zap,
                    title: "Auto Updates",
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="
                      flex
                      items-center
                      gap-4
                    "
                  >

                    <feature.icon size={35} color="white" />

                    <span
                      className="
                        text-sm
                        font-semibold
                        text-white
                      "
                    >
                      {feature.title}
                    </span>

                  </div>
                ))}

              </div>

            </div>

            {/* RIGHT */}
            <div
              className="
                relative
                flex
                justify-center
              "
            >

              {/* BACK SHADOW */}
              <div
                className="
                  absolute
                  right-[-450px]
                  top-[570px]
                  w-640
                  h-25
                  rounded-[0px]
                  bg-red-600
                "
              />

              {/* LAUNCHER IMAGE */}
              <div
                className="
                  relative
                  w-2000
                  h-135
                  top-[420]
                  left-20
                  z-20
                  overflow-hidden
                  rounded-[6px]
                  border
                  border-black/10
                  bg-black
                  shadow-[0_40px_120px_rgba(0,0,0,0.35)]
                "
              >

                <Image
                  src="/launcher-preview.png"
                  alt="DuckzrStudios Client"
                  width={1100}
                  height={650}
                  className="
                    h-auto
                    w-full
                    object-cover
                  "
                />

              </div>

            </div>

          </div>

        </section>

        {/* BOTTOM FEATURE PANEL */}
        <section
          className="
            relative
            z-10
            top-[-60]
            right-100
            -mt-10
            px-8
            pb-28
          "
        >

          <div
            className="
              mx-auto
              flex
              max-w-[1600px]
              items-center
              justify-between
              gap-8
              overflow-hidden
              border
              border-black/10
              bg-red-600
              p-8
              text-white
            "
          >

            {/* LEFT */}
            <div>

              <p
                className="
                  text-[12px]
                  font-black
                  relative
                  left-100
                  uppercase
                  tracking-[0.25em]
                  text-white/70
                "
              >
                Available Now
              </p>

              <h2
                className="
                  mt-3
                  text-3xl
                  relative
                  left-100
                  font-black
                  uppercase
                "
              >
                Download The Official
                <br />
                DuckzrStudios Client
              </h2>

              <p
                className="
                  mt-4
                  max-w-[700px]
                  relative
                  left-100
                  text-white/80
                  leading-relaxed
                "
              >
                Get instant access to game updates,
                multiplayer services, account syncing,
                security systems and exclusive launcher
                features.
              </p>

            </div>

            {/* RIGHT */}
            <a
              href="/downloads/DuckzrStudiosClient.exe"
              className="
                group
                flex
                h-[64px]
                min-w-[240px]
                items-center
                justify-center
                gap-3
                relative
                right-10
                border
                border-white/20
                bg-black
                px-8
                font-bold
                uppercase
                tracking-[0.15em]
                transition-all
                duration-600
                hover:scale-[1.03]
                hover:bg-white
                hover:text-black
              "
            >

              Download

              <ArrowRight
                size={18}
                className="
                  transition-transform
                  duration-800
                  group-hover:translate-x-6
                "
              />

            </a>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}