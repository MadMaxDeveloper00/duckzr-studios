"use client";

import { ChevronDown, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useRouteTransition } from "@/components/transition/RouteTransitionProvider";

const games = [
  "All Games",
  "Veyra",
  "Project Revenant",
  "Half",
];

const teams = [
  "Engineering",
  "Art & Animation",
  "Game Design",
  "Security",
  "UI/UX",
  "Sound Design",
];

const locations = [
  "Remote",
  "Brazil",
  "Canada",
  "United States",
  "Japan",
  "Germany",
];

export default function CareersSearch() {

  const [gameOpen, setGameOpen] =
    useState(false);

  const [teamOpen, setTeamOpen] =
    useState(false);

  const [locationOpen, setLocationOpen] =
    useState(false);

  const { navigate } = useRouteTransition(); 

  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#1B1B1E]
        py-32
      "
    >

      {/* BACKGROUND TEXT */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-24
          -translate-x-1/2
          select-none
          text-[180px]
          text-black/[0.10]
          font-black
          uppercase
          leading-none
          tracking-[-12px]
          text-black/[0.03]
        "
      >
        Careers
      </div>

      {/* CONTENT */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          w-[92%]
          max-w-[1650px]
          flex-col
          items-center
        "
      >

        {/* HEADER */}
        <div className="mb-20 text-center">

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
            JOIN DUCKZR STUDIOS
          </p>

          <h1
            className="
              max-w-[1200px]
              text-7xl
              font-black
              uppercase
              leading-[0.95]
              tracking-[-4px]
              text-[#FBFFFE]
            "
          >
            Build Worlds
            <br />
          </h1>

          <h1
            className="
              max-w-[1200px]
              text-7xl
              font-black
              uppercase
              leading-[0.95]
              tracking-[-4px]
              text-[#96031A]
            "
          >
            Players Will Never Forget
          </h1>

          <p
            className="
              mx-auto
              mt-8
              max-w-[900px]
              text-lg
              leading-relaxed
              text-black/60
            "
          >
            Work with developers, artists and designers
            creating next-generation experiences for
            millions of players worldwide.
          </p>

        </div>

        {/* FILTERS */}
        <div
          className="
            grid
            w-full
            grid-cols-1
            gap-5
            xl:grid-cols-[1fr_1fr_1fr_260px]
          "
        >

          {/* ========================= */}
          {/* GAME */}
          {/* ========================= */}

          <div className="relative">

            <button
              onClick={() =>
                setGameOpen(!gameOpen)
              }
              className="
                flex
                h-[90px]
                w-full
                items-center
                justify-between
                border
                border-black/10
                bg-[#6D676E]
                px-8
                text-left
                transition-all
                duration-300
                hover:border-red-500
              "
            >

              <div>

                <p
                  className="
                    text-xs
                    font-black
                    uppercase
                    absolute
                    bottom-[-25px]
                    tracking-[0.5em]
                    text-black/10
                    text-[97px]
                  "
                >
                  Game
                </p>

                <h3
                  className="
                    mt-2
                    text-2xl
                    font-black
                    uppercase
                    text-black
                    absolute
                    bottom-[25px]
                  "
                >
                  Select Game
                </h3>

              </div>

              <ChevronDown
                size={28}
                className={`
                  transition-transform
                  duration-300
                  ${gameOpen ? "rotate-180" : ""}
                `}
              />

            </button>

            {/* PANEL */}
            {gameOpen && (
              <div
                className="
                  absolute
                  left-0
                  top-[90px]
                  z-40
                  grid
                  w-full
                  grid-cols-2
                  gap-4
                  border
                  border-black/10
                  bg-[#6D676E]
                  p-6
                  shadow-[0_25px_80px_rgba(0,0,0,0.15)]
                "
              >

                {games.map((game) => (
                  <label
                    key={game}
                    className="
                      flex
                      cursor-pointer
                      items-center
                      gap-3
                    "
                  >

                    <input
                      type="checkbox"
                      className="
                        h-5
                        w-5
                        accent-red-500
                      "
                    />

                    <span
                      className="
                        text-sm
                        font-bold
                        uppercase
                        text-black/70
                      "
                    >
                      {game}
                    </span>

                  </label>
                ))}

              </div>
            )}

          </div>

          {/* ========================= */}
          {/* TEAM */}
          {/* ========================= */}

          <div className="relative">

            <button
              onClick={() =>
                setTeamOpen(!teamOpen)
              }
              className="
                flex
                h-[90px]
                w-full
                items-center
                justify-between
                border
                border-black/10
                bg-[#6D676E]
                px-8
                text-left
                transition-all
                duration-300
                hover:border-red-500
              "
            >

              <div>

                <p
                  className="
                    text-xs
                    font-black
                    uppercase
                    absolute
                    bottom-[-25px]
                    tracking-[0.5em]
                    text-black/40
                    text-[97px]
                  "
                >
                  Team
                </p>

                <h3
                  className="
                    mt-2
                    text-2xl
                    font-black
                    uppercase
                    text-black
                    absolute
                    bottom-[25px]
                  "
                >
                  Select Team
                </h3>

              </div>

              <ChevronDown
                size={28}
                className={`
                  transition-transform
                  duration-300
                  ${teamOpen ? "rotate-180" : ""}
                `}
              />

            </button>

            {/* PANEL */}
            {teamOpen && (
              <div
                className="
                  absolute
                  left-0
                  top-[90px]
                  z-40
                  grid
                  w-full
                  grid-cols-2
                  gap-4
                  border
                  border-black/10
                  bg-[#6D676E]
                  p-6
                  shadow-[0_25px_80px_rgba(0,0,0,0.15)]
                "
              >

                {teams.map((team) => (
                  <label
                    key={team}
                    className="
                      flex
                      cursor-pointer
                      items-center
                      gap-3
                    "
                  >

                    <input
                      type="checkbox"
                      className="
                        h-5
                        w-5
                        accent-red-500
                      "
                    />

                    <span
                      className="
                        text-sm
                        font-bold
                        uppercase
                        text-black/70
                      "
                    >
                      {team}
                    </span>

                  </label>
                ))}

              </div>
            )}

          </div>

          {/* ========================= */}
          {/* LOCATION */}
          {/* ========================= */}

          <div className="relative">

            <button
              onClick={() =>
                setLocationOpen(!locationOpen)
              }
              className="
                flex
                h-[90px]
                w-full
                items-center
                justify-between
                border
                border-black/10
                bg-[#6D676E]
                px-8
                text-left
                transition-all
                bottom-[-25px]
                duration-300
                hover:border-red-500
              "
            >

              <div>

                <p
                  className="
                    text-xs
                    font-black
                    uppercase
                    tracking-[0.01em]
                    text-black/40
                    text-[83px]
                    absolute
                    bottom-[-18px]
                  "
                >
                  Location
                </p>

                <h3
                  className="
                    mt-2
                    text-2xl
                    font-black
                    uppercase
                    text-black
                    absolute
                    bottom-[25px]
                  "
                >
                  Select Location
                </h3>

              </div>

              <ChevronDown
                size={28}
                className={`
                  transition-transform
                  duration-300
                  ${locationOpen ? "rotate-180" : ""}
                `}
              />

            </button>

            {/* PANEL */}
            {locationOpen && (
              <div
                className="
                  absolute
                  left-0
                  top-[90px]
                  z-40
                  grid
                  w-full
                  grid-cols-2
                  gap-4
                  border
                  border-black/10
                  bg-[#6D676E]
                  p-6
                  shadow-[0_25px_80px_rgba(0,0,0,0.15)]
                "
              >

                {locations.map((location) => (
                  <label
                    key={location}
                    className="
                      flex
                      cursor-pointer
                      items-center
                      gap-3
                    "
                  >

                    <input
                      type="checkbox"
                      className="
                        h-5
                        w-5
                        accent-red-500
                      "
                    />

                    <span
                      className="
                        text-sm
                        font-bold
                        uppercase
                        text-black/70
                      "
                    >
                      {location}
                    </span>

                  </label>
                ))}

              </div>
            )}

          </div>

          {/* ========================= */}
          {/* BUTTON */}
          {/* ========================= */}

          <button
            className="
              group
              relative
              flex
              h-[90px]
              overflow-hidden
              border
              border-red-500
              bg-[#6D676E]
            "
            onClick={() => navigate("/careers")}
          >

            {/* BACKGROUND FILL */}
            <div
              className="
                absolute
                left-0
                top-0
                h-full
                w-[72px]
                bg-red-500
                transition-all
                duration-500
                group-hover:w-full
              "
            />

            {/* CONTENT */}
            <div
              className="
                relative
                z-20
                flex
                w-full
                items-center
                justify-between
                px-7
              "
            >

              {/* ICON */}
              <div
                className="
                  flex
                  absolute
                  left-12
                  h-[42px]
                  w-[42px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/40
                  bg-white/100
                  text-black
                  transition-all
                  duration-500
                  group-hover:-translate-x-[-187px]
                  group-hover:border-black
                  group-hover:text-black
                "
              >

                <ArrowRight size={22} color="black"/>

              </div>

              {/* TEXT */}
              <span
                className="
                  text-lg
                  font-black
                  uppercase
                  absolute
                  left-28
                  tracking-[0.2em]
                  text-white
                  transition-all
                  duration-500
                  group-hover:text-black
                "
              >
                Find Jobs
              </span>

            </div>

          </button>

        </div>

      </div>

    </section>
  );
}