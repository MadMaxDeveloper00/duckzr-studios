"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useState } from "react";

export default function AppearanceTab() {

  const [theme, setTheme] =
    useState("dark");

  return (
    <div className="space-y-8">

      {/* HEADER */}
      <div>

        <h1
          className="
            text-3xl
            font-bold
            text-white
          "
        >
          Appearance
        </h1>

        <p
          className="
            text-white/50
            mt-2
          "
        >
          Customize the visual style
          of your experience.
        </p>

      </div>

      {/* THEME OPTIONS */}
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-3
          gap-4
        "
      >

        {/* DARK */}
        <button
          onClick={() => setTheme("dark")}
          className={`
            relative
            h-[180px]
            rounded-2xl
            border
            transition-all
            overflow-hidden
            ${
              theme === "dark"
                ? "border-red-500 bg-red-500/10"
                : "border-white/10 bg-[#1a1a1a]"
            }
          `}
        >

          <div
            className="
              absolute inset-0
              bg-gradient-to-b
              from-black
              to-[#111]
            "
          />

          <div
            className="
              relative
              z-10
              h-full
              flex
              flex-col
              items-center
              justify-center
              gap-4
            "
          >

            <Moon
              size={42}
              className="text-white"
            />

            <div>

              <h2
                className="
                  text-white
                  font-bold
                  text-lg
                "
              >
                Dark
              </h2>

              <p
                className="
                  text-white/50
                  text-sm
                "
              >
                Minimal dark interface
              </p>

            </div>

          </div>

        </button>

        {/* LIGHT */}
        <button
          onClick={() => setTheme("light")}
          className={`
            relative
            h-[180px]
            rounded-2xl
            border
            transition-all
            overflow-hidden
            ${
              theme === "light"
                ? "border-red-500 bg-red-500/10"
                : "border-white/10 bg-[#1a1a1a]"
            }
          `}
        >

          <div
            className="
              absolute inset-0
              bg-gradient-to-b
              from-white
              to-gray-200
            "
          />

          <div
            className="
              relative
              z-10
              h-full
              flex
              flex-col
              items-center
              justify-center
              gap-4
            "
          >

            <Sun
              size={42}
              className="text-black"
            />

            <div>

              <h2
                className="
                  text-black
                  font-bold
                  text-lg
                "
              >
                Light
              </h2>

              <p
                className="
                  text-black/60
                  text-sm
                "
              >
                Bright clean interface
              </p>

            </div>

          </div>

        </button>

        {/* SYSTEM */}
        <button
          onClick={() => setTheme("system")}
          className={`
            relative
            h-[180px]
            rounded-2xl
            border
            transition-all
            overflow-hidden
            ${
              theme === "system"
                ? "border-red-500 bg-red-500/10"
                : "border-white/10 bg-[#1a1a1a]"
            }
          `}
        >

          <div
            className="
              absolute inset-0
              bg-gradient-to-br
              from-black
              via-[#222]
              to-white
            "
          />

          <div
            className="
              relative
              z-10
              h-full
              flex
              flex-col
              items-center
              justify-center
              gap-4
            "
          >

            <Monitor
              size={42}
              className="text-white"
            />

            <div>

              <h2
                className="
                  text-white
                  font-bold
                  text-lg
                "
              >
                System
              </h2>

              <p
                className="
                  text-white/60
                  text-sm
                "
              >
                Follow system settings
              </p>

            </div>

          </div>

        </button>

      </div>

      {/* EXTRA SETTINGS */}
      <div
        className="
          mt-8
          bg-black/20
          border border-white/10
          rounded-2xl
          p-5
          space-y-5
        "
      >

        {/* ANIMATIONS */}
        <div
          className="
            flex
            items-center
            justify-between
          "
        >

          <div>

            <h3 className="text-white font-semibold">
              Interface Animations
            </h3>

            <p className="text-white/50 text-sm">
              Enable smooth transitions
              and effects.
            </p>

          </div>

          <input
            type="checkbox"
            defaultChecked
            className="
              w-5 h-5
              accent-red-500
            "
          />

        </div>

        {/* BLUR */}
        <div
          className="
            flex
            items-center
            justify-between
          "
        >

          <div>

            <h3 className="text-white font-semibold">
              Blur Effects
            </h3>

            <p className="text-white/50 text-sm">
              Enable backdrop blur
              across the interface.
            </p>

          </div>

          <input
            type="checkbox"
            defaultChecked
            className="
              w-5 h-5
              accent-red-500
            "
          />

        </div>

      </div>

    </div>
  );
}