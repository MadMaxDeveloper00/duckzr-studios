"use client";

import {
  ArrowRight
} from "lucide-react";

import Link from "next/link";

const featuredNews = {
  title:
    "Duckzr Studios: A new era comming, celebrate with us!",

  description:
    "Discover our new brand identity, upcoming projects, and exciting plans for the future of gaming. Celebrate with DuckzrStudios!",

  author:
    'Lucas "Duckzera" Oliveira/',

  date:
    "May 11, 2026",

  image:
    "/news/featured-news.png",

  tag:
    "NEWS"
};

const sideNews = [
  {
    title:
      "Ashen: A new game in development",

    description:
    "Ashen is a psicological horror game set in a dark and mysterious city, just remenber the sound is not ur enemy.",

    author:
      'Emily "ScaryHunter" Carter/',

    date:
      "December 22, 2025",

    image:
      "/news/news-1.png",

    tag:
      "NEWS"
  },

  {
    title:
      "New Website of Duckzr Studios",

    description:
      "Check out our refreshed website and explore the latest updates about our games and company news.",

    author:
      'Nathan "Blitz" Walker/',

    date:
      "September 26, 2025",

    image:
      "/news/news-2.png",

    tag:
      "UPDATE"
  }
];

export default function LatestNewsSection() {

  return (
    <section
      className="
        relative
        w-full
        bg-[#efefef]
        py-32
        overflow-hidden
      "
    >

      {/* TITLE */}
      <div
        className="
          max-w-[1400px]
          mx-auto
          px-6
          mb-20
        "
      >

        <div
          className="
            leading-none
            uppercase
            font-black
            tracking-tight
          "
        >
          <h2
            className="
              text-[90px]
              text-black/20
              stroke-text
              leading-[50px]
              select-none
              ml-16
            "
          >
            Latest
          </h2>

          <h2
            className="
              text-[90px]
              text-red-600
              leading-[145px]
              left-53
              top-[-70px]
              select-none
              relative
              z-10
            "
          >
            news
          </h2>

          <h2
            className="
              text-[90px]
              text-[#5e5e5e]/50
              stroke-text
              leading-[500px]
              absolute
              left-4
              top-[-35px]
              select-none
              ml-16
            "
          >
            Of DuckzrStudios
          </h2>

        </div>

      </div>

      {/* GRID */}
      <div
        className="
          max-w-[2450px]
          mx-auto
          px-8
          flex
          justify-center
        "
      >

        <div
          className="
            w-full
            flex
            gap-20
            items-start
            justify-center
          "
        >

          {/* FEATURED */}
          <Link
            href="/news"
            className="
              group
              relative
              w-[980px]
              shrink-0
            "
          >

            {/* SHADOW PANEL */}
            <div
              className="
                absolute
                bottom-10
                right-10
                w-full
                h-full
                bg-[#cfcfcf]
                transition-all
                duration-500
                group-hover:bg-red-600
                group-hover:bottom-[-40]
                group-hover:right-[-40]
              "
            />

            {/* CARD */}
            <div
              className="
                relative
                z-10
                bg-[#e3e3e3]
              "
            >

              {/* TAG */}
              <div
                className="
                  absolute
                  top-0
                  left-0
                  z-20
                  bg-[#5c5c5c]
                  text-white
                  text-sm
                  font-black
                  tracking-widest
                  px-5
                  py-2
                "
              >
                {featuredNews.tag}
              </div>

              {/* IMAGE */}
              <div
                className="
                  relative
                  overflow-hidden
                "
              >

                <img
                  src={featuredNews.image}
                  alt={featuredNews.title}
                  className="
                    w-full
                    h-[580px]
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-[1.03]
                  "
                />

              </div>

              {/* CONTENT */}
              <div className="p-10">

                {/* AUTHOR */}
                <div
                  className="
                    flex
                    items-center
                    gap-2
                    text-sm
                    uppercase
                    tracking-wider
                    mb-6
                  "
                >

                <span
                  className="
                    text-red-600
                    font-black
                  "
                >
                  {featuredNews.author}
                </span>

                <span
                  className="
                    text-black/60
                    font-bold
                  "
                >
                  {featuredNews.date}
                </span>

              </div>

              {/* TITLE */}
              <h3
                className="
                  text-[62px]
                  leading-[62px]
                  font-black
                  uppercase
                  text-[#151515]
                  max-w-[760px]
                "
              >
                {featuredNews.title}
              </h3>

              {/* DESCRIPTION */}
              <p
                className="
                  mt-8
                  text-[22px]
                  text-black/70
                  leading-relaxed
                  max-w-[760px]
                "
              >
                {featuredNews.description}
              </p>

            </div>

          {/* BUTTON */}
            <div
              className="
              absolute
              right-[-38px]
              top-155
              left-220
              -translate-y-1/2
              w-[95px]
              h-[95px]
              rounded-full
              bg-white
              border
              border-red-500
              flex
              items-center
              justify-center
              opacity-0
              scale-75
              transition-all
              duration-500
              group-hover:opacity-100
              group-hover:scale-100
            "
          >

          <ArrowRight
            size={44}
            className="text-red-600"
          />

        </div>

      </div>

    </Link>

    {/* SIDE NEWS */}
    <div
      className="
        w-[430px]
        flex
        flex-col
        gap-16
        pt-2
      "
    >

      {sideNews.map((news, index) => (

        <Link
          key={index}
          href="/news"
          className="
            group
            relative
            block
          "
        >

          {/* SHADOW */}
          <div
            className="
              absolute
              bottom-5
              right-5
              w-full
              h-full
              bg-[#cfcfcf]
              transition-all
              duration-500
              group-hover:bg-red-600
              group-hover:bottom-[-20]
              group-hover:right-[-20]
            "
          />

          {/* CARD */}
          <div
            className="
              relative
              z-10
              bg-[#efefef]
              transition-colors
              duration-300
            "
          >

            {/* TAG */}
            <div
              className="
                absolute
                top-0
                left-0
                z-20
                bg-[#5f5f5f]
                text-white
                text-xs
                font-black
                tracking-widest
                px-4
                py-2
              "
            >
              {news.tag}
            </div>

            {/* IMAGE */}
            <div className="overflow-hidden">

              <img
                src={news.image}
                alt={news.title}
                className="
                  w-full
                  h-[240px]
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-[1.04]
                "
              />

            </div>

            {/* CONTENT */}
            <div className="pt-6">

              {/* AUTHOR */}
              <div
                className="
                  flex
                  items-center
                  gap-2
                  text-xs
                  uppercase
                  tracking-widest
                  mb-4
                "
              >

                <span
                  className="
                    text-red-600
                    font-black
                  "
                >
                  {news.author}
                </span>

                <span
                  className="
                    text-black/50
                    font-bold
                  "
                >
                  {news.date}
                </span>

              </div>

              {/* TITLE */}
              <h3
                className="
                  text-[34px]
                  leading-[38px]
                  font-black
                  uppercase
                  text-[#1a1a1a]
                "
              >
                {news.title}
              </h3>

              {/* DESCRIPTION */}
              <p
                className="
                  mt-8
                  text-[22px]
                  text-black/70
                  leading-relaxed
                  max-w-[760px]
                "
              >
                {news.description}
              </p>

              {/* BUTTON */}
          <div
            className="
              absolute
              right-[-38px]
              top-70
              left-95
              -translate-y-1/2
              w-[50px]
              h-[50px]
              rounded-full
              bg-white
              border
              border-red-500
              flex
              items-center
              justify-center
              opacity-0
              scale-75
              transition-all
              duration-500
              group-hover:opacity-100
              group-hover:scale-100
            "
          >

            <ArrowRight
              size={22}
              className="text-red-600"
            />

          </div>

            </div>

          </div>

        </Link>

      ))}

      </div>

    </div>

  </div>

      {/* BUTTON */}
      <div
        className="
          mt-24
          flex
          flex-col
          items-center
          justify-center
        "
      >

        <Link
          href="/news"
          className="
            h-[80px]
            px-14
            border
            border-black/30
            flex
            items-center
            justify-center
            gap-6
            uppercase
            tracking-[0.2em]
            text-[18px]
            font-black
            text-[#1a1a1a]
            hover:bg-red-600
            hover:border-white-600
            hover:text-white
            transition-all
            duration-800
          "
        >

          View All News

          <ArrowRight size={24}/>

        </Link>

        <p
          className="
            mt-6
            relative
            top-10
            text-white/80
            text-lg
            bg-black/50
          "
        >
          Stay updated with our latest news and announcements.
        </p>

      </div>

    </section>
  );
}