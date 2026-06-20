"use client";

import { useRouteTransition } from "@/components/transition/RouteTransitionProvider";
import Image from "next/image";

export default function Footer() {
  const { navigate } = useRouteTransition();
  return (
    <footer
      className="
        relative
        mt-32
        border-t
        border-white/10
        bg-[#050505]
        overflow-hidden
      "
    >

      {/* BACKGROUND GLOW */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top,rgba(255,0,0,0.12),transparent_45%)]
          pointer-events-none
        "
      />

      {/* MAIN */}
      <div
        className="
          relative
          z-10
          max-w-[1700px]
          h-80
          mx-auto
          px-8
          py-20
        "
      >

        {/* TOP */}
        <div
          className="
            flex
            flex-col
            xl:flex-row
            justify-between
            gap-20
          "
        >

          {/* LEFT */}
          <div className="max-w-[420px] relative left-[280] top-10">

            {/* LOGO */}
            <Image
              src="/WhiteLogo.png"
              alt="Duckzr Studios"
              width={100}
              height={100}
              className="mb-6"
            />

            <h2
              className="
                text-3xl
                font-black
                text-white
                uppercase
                relative
                right-15
                tracking-wide
                leading-tight
              "
            >
              Entertainment
              <br />
              Reimagined.
            </h2>

            <p
              className="
                mt-6
                text-white/50
                leading-relaxed
                text-[15px]
                relative

                right-15
              "
            >
              Creating immersive experiences,
              cinematic universes and competitive
              multiplayer titles focused on
              innovation, atmosphere and player
              identity.
            </p>

          </div>

          {/* RIGHT */}
          <div
            className="
              grid
              grid-cols-2
              md:grid-cols-4
              gap-16
            "
          >

            {/* NAVIGATION */}
            <div>

              <h3
                className="
                  text-white
                  font-bold
                  text-sm
                  absolute
                  top-15
                  left-[1100px]
                  uppercase
                  tracking-[0.2em]
                  mb-6
                "
              >
                Navigation
              </h3>

              <div className="space-y-4 absolute top-20 left-[1100]">

                {[
                  "Games",
                  "News",
                  "Careers",
                  "Launcher",
                  "Company",
                ].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="
                      block
                      text-white/50
                      hover:text-red-500
                      transition-all
                      duration-300
                    "
                  >
                    {item}
                  </a>
                ))}

              </div>

            </div>

            {/* SUPPORT */}
            <div>

              <h3
                className="
                  text-white
                  font-bold
                  text-sm
                  absolute
                  top-15
                  left-[1220px]
                  uppercase
                  tracking-[0.2em]
                  mb-6
                "
              >
                Support
              </h3>

              <div className="space-y-4 top-20 absolute left-[1220px]">

                {[
                  "Player Support",
                  "Terms of Service",
                  "Privacy Policy",
                  "Cookies",
                  "Security",
                ].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="
                      block
                      text-white/50
                      hover:text-red-500
                      transition-all
                      duration-300
                    "
                  >
                    {item}
                  </a>
                ))}

              </div>

            </div>

            {/* COMMUNITY */}
            <div>

              <h3
                className="
                  text-white
                  font-bold
                  text-sm
                  absolute
                  top-15
                  left-[1380px]
                  uppercase
                  tracking-[0.2em]
                  mb-6
                "
              >
                Community
              </h3>

              <div className="space-y-4 top-20 absolute left-[1380px]">

                {[
                  "Forums",
                  "Creators",
                  "Events",
                  "Press",
                  "Media Kit",
                ].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="
                      block
                      text-white/50
                      hover:text-red-500
                      transition-all
                      duration-300
                    "
                  >
                    {item}
                  </a>
                ))}

              </div>

            </div>

            {/* SOCIAL */}
            <div>

              <h3
                className="
                  text-white
                  font-bold
                  text-sm
                  absolute
                  top-15
                  left-[1500]
                  uppercase
                  tracking-[0.2em]
                  mb-6
                "
              >
                Social
              </h3>

              <div className="space-y-4 top-20 absolute left-[1500px]">

                {/* YOUTUBE */}
                <a
                  href="https://www.youtube.com/channel/UCGKz5jP19ikeq6woIiY_p0A" target="_blank" rel="noopener noreferrer"
                  className="
                    flex
                    items-center
                    gap-3
                    text-white/50
                    hover:text-red-500
                    transition-all
                    duration-300
                  "
                >

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8ZM9.6 15.5v-7L16 12l-6.4 3.5Z"/>
                  </svg>

                  YouTube

                </a>

                {/* TWITTER */}
                <a
                  href="#"
                  className="
                    flex
                    items-center
                    gap-3
                    text-white/50
                    hover:text-red-500
                    transition-all
                    duration-300
                  "
                >

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M18.9 2H22l-6.8 7.8L23 22h-6.2l-4.9-6.4L5.7 22H2.6l7.3-8.4L1 2h6.3l4.4 5.8L18.9 2Z"/>
                  </svg>

                  X

                </a>

                {/* DISCORD */}
                <a
                  href="https://discord.gg/ktVQBXtpZn" target="_blank" rel="noopener noreferrer"
                  className="
                    flex
                    items-center
                    gap-3
                    text-white/50
                    hover:text-red-500
                    transition-all
                    duration-300
                  "
                >

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M20.3 4.4A16.9 16.9 0 0 0 16.2 3l-.2.5a11.6 11.6 0 0 1 3.5 1.7 13.4 13.4 0 0 0-4.1-1.3 14.7 14.7 0 0 0-6.8 0 13.4 13.4 0 0 0-4.1 1.3A11.6 11.6 0 0 1 8 3.5L7.8 3A16.9 16.9 0 0 0 3.7 4.4C1.1 8.3.4 12.1.8 15.9A17 17 0 0 0 6 18.5l1.1-1.5c-.6-.2-1.1-.5-1.7-.8l.4-.3c3.2 1.5 6.7 1.5 9.8 0l.4.3c-.5.3-1.1.6-1.7.8l1.1 1.5a17 17 0 0 0 5.2-2.6c.5-4.4-.8-8.2-2.3-11.5ZM8.8 14.1c-.9 0-1.6-.8-1.6-1.8s.7-1.8 1.6-1.8c.9 0 1.6.8 1.6 1.8s-.7 1.8-1.6 1.8Zm6.4 0c-.9 0-1.6-.8-1.6-1.8s.7-1.8 1.6-1.8c.9 0 1.6.8 1.6 1.8s-.7 1.8-1.6 1.8Z"/>
                  </svg>

                  Discord

                </a>

                {/* INSTAGRAM */}
                <a
                  href="https://www.instagram.com/duckzrstudios" target="_blank" rel="noopener noreferrer"
                  className="
                    flex
                    items-center
                    gap-3
                    text-white/50
                    hover:text-red-500
                    transition-all
                    duration-300
                  "
                >

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7Zm0 2h10c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3Zm11 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"/>
                  </svg>

                  Instagram

                </a>

              </div>

            </div>

            {/* ESRB */}
            <div
              className="
                absolute
                left-[2000px]
                top-15
                h-[120px]
                w-[200px]
                mt-10
                flex
                items-center
                gap-5
                p-4
                bg-white/[0.03]
                border
                border-white/10
                rounded-2xl
              "
            >

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/cb/ESRB_2013_Mature.svg"
                alt="ESRB"
                className="w-[82px]"
              />

              <div>

                <h3
                  className="
                    text-white
                    font-bold
                    text-sm
                    uppercase
                  "
                >
                  Mature 17+
                </h3>

                <p
                  className="
                    text-white/50
                    text-xs
                    mt-1
                    max-w-[180px]
                  "
                >
                  Violence, Blood,
                  Strong Language,
                  Online Interactions.
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div
          className="
            mt-20
            pt-8
            border-t
            border-white/10
            flex
            flex-col
            md:flex-row
            relative
            w-595
            h-8
            top-[50px]
            items-center
            justify-between
            gap-6
          "
        >

          <p className="text-white/40 text-sm ">
            © 2026 Duckzr Studios. All rights reserved.
          </p>

          <div
            className="
              flex
              items-center
              gap-6
              text-sm
            "
          >

            <a
              href="#"
              className="
                text-white/40
                hover:text-red-500
                transition-all
              "
              onClick={() => navigate("/legal/terms")}
            >
              Terms
            </a>

            <a
              href="#"
              className="
                text-white/40
                hover:text-red-500
                transition-all
              "

              onClick={() => navigate("legal/privacy")}
            >
              Privacy
            </a>

            <a
              href="#"
              className="
                text-white/40
                hover:text-red-500
                transition-all
              "
              onClick={() => navigate("legal/cookies")}
            >

              Cookies
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}