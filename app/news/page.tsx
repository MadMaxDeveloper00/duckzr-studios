"use client";

import { useMemo, useState } from "react";
import {
  ChevronDown,
  ArrowRight,
  Search,
} from "lucide-react";

const newsData = [

  {
    id: 1,
    category: "Studio",
    title: "Welcome to DuckzrStudios!",
    description:
      "Welcome to the future of games, play games, talk with peaples on community's, and fun.",
    image: "/news/news1.png",
    author: 'Lucas "Duckzera" Oliveira/',
    date: "May 18, 2026",
    game: "Duckzr Studios",
  },

  {
    id: 2,
    category: "Studio",
    title: "Duckzr Studios: A new era comming, celebrate with us!",
    description:
      "Discover our new brand identity, upcoming projects, and exciting plans for the future of gaming. Celebrate with DuckzrStudios!",
    image: "/news/news2.png",
    author: 'Lucas "Duckzera" Oliveira/',
    date: "May 11, 2026",
    game: "Veyra",
  },

  {
    id: 3,
    category: "Community",
    title: "Ashen: A new game in development",
    description:
      "Ashen is a psicological horror game set in a dark and mysterious city, just remenber the sound is not ur enemy.",
    image: "/news/news3.png",
    author: 'Emily "ScaryHunter" Carter/',
    date: "April 29, 2026",
    game: "Ashen",
  },

  {
    id: 4,
    category: "Launcher",
    title: "Launcher Performance Improvements",
    description:
      "Faster downloads, lower memory usage and redesigned patch system.",
    image: "/news/news4.png",
    author: 'Lucas "Duckzera" Oliveira/',
    date: "April 18, 2026",
    game: "Launcher",
  },

  {
    id: 5,
    category: "Esports",
    title: "New Website of Duckzr Studios",
    description:
      "Check out our refreshed website and explore the latest updates about our games and company news.",
    image: "/news/news5.png",
    author: 'Nathan "Blitz" Walker/',
    date: "April 11, 2026",
    game: "Veyra",
  },

  {
    id: 6,
    category: "Update",
    title: "New Dynamic Weather System",
    description:
      "Rain, fog and storms now dynamically affect visibility and gameplay.",
    image: "/news/news6.png",
    author: 'Sophia "Nyx" Silva/',
    date: "March 28, 2026",
    game: "Veyra",
  },

  {
    id: 7,
    category: "Studio",
    title: "Duckzr Studios Expands Development Team",
    description:
      "New artists and gameplay engineers have joined the studio this month.",
    image: "/news/news7.png",
    author: 'Lucas "Duckzera" Oliveira/',
    date: "March 21, 2026",
    game: "Duckzr Studios",
  },

  {
    id: 8,
    category: "Community",
    title: "Creator Program Applications Open",
    description:
      "Streamers and creators can now apply for the official partner program.",
    image: "/news/news8.png",
    author: 'Emily "ScaryHunter" Carter/',
    date: "March 10, 2026",
    game: "Launcher",
  },

  {
    id: 9,
    category: "Patch Notes",
    title: "Weapon Recoil Rework Released",
    description:
      "Several weapons received balancing updates and recoil improvements.",
    image: "/news/news9.png",
    author: 'Lucas "Vex" Almeida/',
    date: "February 26, 2026",
    game: "Veyra",
  },

  {
    id: 10,
    category: "Technology",
    title: "Launcher Download Speeds Increased",
    description:
      "New CDN routing system improves stability and download performance.",
    image: "/news/news10.png",
    author: 'Nathan "Blitz" Walker/',
    date: "February 18, 2026",
    game: "Launcher",
  },

  {
    id: 11,
    category: "Event",
    title: "Winter Event Starts Tomorrow",
    description:
      "Limited-time cosmetics, challenges and rewards arrive this week.",
    image: "/news/news11.png",
    author: 'Sophia "Nyx" Silva/',
    date: "February 5, 2026",
    game: "Veyra",
  },

  {
    id: 12,
    category: "Studio",
    title: "Motion Capture Sessions Completed",
    description:
      "The new cinematic animations are now entering the polish phase.",
    image: "/news/news12.png",
    author: 'Lucas "Duckzera" Oliveira/',
    date: "January 27, 2026",
    game: "Duckzr Studios",
  },

];

export default function NewsSection() {

  const [authorOpen, setAuthorOpen] =
    useState(false);

  const [gameOpen, setGameOpen] =
    useState(false);

  const [selectedAuthor, setSelectedAuthor] =
    useState("All Authors");

  const [selectedGame, setSelectedGame] =
    useState("All Games");

  const [search, setSearch] =
    useState("");

  const authors = useMemo(() => {
    return [
      "All Authors",
      ...new Set(newsData.map(n => n.author)),
    ];
  }, []);

  const games = useMemo(() => {
    return [
      "All Games",
      ...new Set(newsData.map(n => n.game)),
    ];
  }, []);

  const filteredNews = newsData.filter(news => {

    const matchAuthor =
      selectedAuthor === "All Authors"
        ? true
        : news.author === selectedAuthor;

    const matchGame =
      selectedGame === "All Games"
        ? true
        : news.game === selectedGame;

    const matchSearch =
      news.title
        .toLowerCase()
        .includes(search.toLowerCase());

    return (
      matchAuthor &&
      matchGame &&
      matchSearch
    );
  });

  return (
    <section
      className="
        relative
        w-full
        bg-[#ececec]
        py-28
        overflow-hidden
      "
    >

      {/* TOP TITLE */}
      <div
        className="
          max-w-[1600px]
          relative
          left-30
          bottom-10
          select-none
          mx-auto
          px-10
          mb-16
        "
      >

        <h2
          className="
            text-[72px]
            leading-[0.85]
            font-black
            uppercase
            text-[#4b4b4b]
            tracking-[-4px]
          "
        >
          All
        </h2>

        <h2
          className="
            text-[72px]
            leading-[0.85]
            font-black
            uppercase
            absolute
            z-10
            top-6
            left-15
            text-red-600
            [-webkit-text-stroke:1.5px_black]
            tracking-[-4px]
            ml-16
          "
        >
          News Of
        </h2>

        <h2
          className="
            text-[72px]
            leading-[0.85]
            font-black
            relative
            uppercase
            text-[#4b4b4b]
            tracking-[-4px]
            ml-16
          "
        >
          Duckzr Studios
        </h2>

      </div>

      {/* FILTERS */}
      <div
        className="
          max-w-[1600px]
          mx-auto
          px-10
          mb-14
          relative
          left-200
          flex
          flex-wrap
          gap-5
          items-center
        "
      >

        {/* SEARCH */}
        <div
          className="
            flex
            items-center
            gap-3
            h-[62px]
            min-w-[320px]
            px-5
            border border-black/10
            bg-white
          "
        >

          <Search
            size={20}
            className="text-black/50"
          />

          <input
            type="text"
            placeholder="Search news..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="
              w-full
              bg-transparent
              outline-none
              text-black
              font-medium
            "
          />

        </div>

        {/* AUTHOR FILTER */}
        <div className="relative">

          <button
            onClick={() =>
              setAuthorOpen(!authorOpen)
            }
            className="
              flex
              items-center
              justify-between
              gap-8
              w-[280px]
              h-[62px]
              px-5
              bg-white
              border border-black/10
              text-black
              font-bold
              uppercase
              tracking-wide
            "
          >

            <span>
              {selectedAuthor}
            </span>

            <ChevronDown
              size={22}
              className={`
                transition-transform
                ${authorOpen ? "rotate-180" : ""}
              `}
            />

          </button>

          {authorOpen && (
            <div
              className="
                absolute
                top-[60px]
                left-0
                w-full
                bg-white
                border border-black/10
                shadow-2xl
                z-50
                p-3
                grid
                grid-cols-2
                gap-2
              "
            >

              {authors.map(author => (

                <button
                  key={author}
                  onClick={() => {
                    setSelectedAuthor(author);
                    setAuthorOpen(false);
                  }}
                  className="
                    h-[48px]
                    px-3
                    text-left
                    text-sm
                    font-semibold
                    text-black/70
                    hover:bg-red-500
                    hover:text-white
                    transition-all
                  "
                >
                  {author}
                </button>

              ))}

            </div>
          )}

        </div>

        {/* GAME FILTER */}
        <div className="relative">

          <button
            onClick={() =>
              setGameOpen(!gameOpen)
            }
            className="
              flex
              items-center
              justify-between
              gap-8
              w-[240px]
              h-[62px]
              px-5
              bg-white
              border border-black/10
              text-black
              font-bold
              uppercase
              tracking-wide
            "
          >

            <span>
              {selectedGame}
            </span>

            <ChevronDown
              size={22}
              className={`
                transition-transform
                ${gameOpen ? "rotate-180" : ""}
              `}
            />

          </button>

          {gameOpen && (
            <div
              className="
                absolute
                top-[60px]
                left-0
                w-full
                bg-white
                border border-black/10
                shadow-2xl
                z-50
                p-3
                grid
                grid-cols-2
                gap-2
              "
            >

              {games.map(game => (

                <button
                  key={game}
                  onClick={() => {
                    setSelectedGame(game);
                    setGameOpen(false);
                  }}
                  className="
                    h-[48px]
                    px-3
                    text-left
                    text-sm
                    font-semibold
                    text-black/70
                    hover:bg-red-500
                    hover:text-white
                    transition-all
                  "
                >
                  {game}
                </button>

              ))}

            </div>
          )}

        </div>

        {/* TOTAL */}
        <div
          className="
            ml-auto
            text-black/50
            font-semibold
            uppercase
            tracking-wider
            text-sm
          "
        >
          {filteredNews.length} Articles
        </div>

      </div>

      {/* NEWS GRID */}
<div
  className="
    max-w-[1600px]
    mx-auto
    px-10
    relative
    left-100
    top-12
    grid
    grid-cols-1
    md:grid-cols-2
    xl:grid-cols-4
    gap-10
  "
>

  {filteredNews.map(news => (

    <article
      key={news.id}
      className="
        group
        relative
      "
    >

      {/* SHADOW */}
      <div
        className="
          absolute
          top-5
          left-5
          w-full
          h-full
          bg-[#d5d5d5]
          transition-all
          duration-500
          group-hover:bg-red-600
          group-hover:top-[-22]
          group-hover:left-[-22]
        "
      />

      {/* CARD */}
      <div
        className="
          relative
          bg-[#f5f5f5]
          z-10
          h-full
          flex
          flex-col
        "
      >

        {/* CATEGORY */}
        <div
          className="
            absolute
            top-[-15px]
            left-0
            bg-[#5d5d5d]
            text-white
            px-4
            py-2
            font-black
            uppercase
            text-xs
            tracking-widest
          "
        >
          {news.category}
        </div>

        {/* IMAGE */}
        <div className="overflow-hidden">

          <img
            src={news.image}
            alt={news.title}
            className="
              w-full
              h-[250px]
              object-cover
              transition-transform
              duration-700
              group-hover:scale-[1.04]
            "
          />

        </div>

        {/* CONTENT */}
        <div
          className="
            p-6
            flex
            flex-col
            flex-1
          "
        >

          <div
            className="
              flex
              flex-wrap
              gap-2
              text-xs
              uppercase
              tracking-widest
              font-black
              mb-4
            "
          >

            <span className="text-red-600">
              {news.author}
            </span>

            <span className="text-black/50">
              {news.date}
            </span>

          </div>

          <h3
            className="
              text-[30px]
              leading-[1]
              font-black
              uppercase
              text-black
              tracking-[-1px]
            "
          >
            {news.title}
          </h3>

          <p
            className="
              mt-5
              text-black/65
              leading-relaxed
            "
          >
            {news.description}
          </p>

          {/* BUTTON */}
          <button
            className="
              mt-auto
              pt-8
              flex
              items-center
              gap-3
              uppercase
              font-black
              tracking-widest
              text-sm
              text-black
              group-hover:text-red-600
              transition-colors
            "
          >

            Read More

            <ArrowRight
              size={18}
              className="
                transition-transform
                group-hover:translate-x-1
              "
            />

          </button>

        </div>

      </div>

    </article>

  ))}

</div>

      {/* VIEW MORE */}
      <div
        className="
          max-w-[1600px]
          mx-auto
          relative
          text-center
          button-center
          left-110
          top-25
          px-10
          mt-20
          flex
          justify-center
        "
      >

        <button
          className="
            group
            relative
            overflow-hidden
            h-[72px]
            w-[300px]
            px-12
            border
            border-black
            text-black
            font-black
            uppercase
            tracking-[3px]
          "
        >

          <div
            className="
              absolute
              inset-0
              bg-red-600
              translate-x-[-100%]
              transition-transform
              duration-800
              group-hover:translate-x-0
            "
          />

          <span
            className="
              relative
              z-10
              transition-colors
              duration-800
              group-hover:text-white
            "
          >
            View More News
          </span>

        </button>

      </div>

    </section>
  );
}