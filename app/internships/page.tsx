import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";

export default function InternshipsPage() {
  return (
    <main className="bg-[#080808] text-white overflow-hidden">

      <Header />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">

        {/* DOT BG */}
        <div
          className="
            absolute inset-0 opacity-[0.08]
            [background-image:radial-gradient(#ffffff_1px,transparent_1px)]
            [background-size:24px_24px]
          "
        />

        {/* GRADIENTS */}
        <div className="absolute top-[-300px] left-[-200px] w-[700px] h-[700px] bg-red-600/20 blur-[180px]" />
        <div className="absolute bottom-[-300px] right-[-200px] w-[700px] h-[700px] bg-red-600/10 blur-[180px]" />

        {/* OUTLINE TEXT */}
        <div className="absolute top-[120px] left-[60px] select-none pointer-events-none">

          <h1 className="
            text-[180px]
            leading-none
            font-black
            uppercase
            tracking-[-0.08em]
            text-transparent
            opacity-20
            [-webkit-text-stroke:1px_rgba(255,255,255,0.25)]
          ">
            INTERNSHIPS
          </h1>

        </div>

        <div className="relative z-10 max-w-[1450px] mx-auto px-10 w-full">

          <div className="grid grid-cols-2 gap-20 items-center">

            {/* LEFT */}
            <div>

              <p className="uppercase tracking-[0.35em] text-red-500 mb-5 font-semibold">
                Duckzr Studios Internship Program
              </p>

              <h2 className="text-7xl font-black uppercase leading-[0.92] mb-8">
                Build Games.
                <br />
                Learn Fast.
                <br />
                Shape The Future.
              </h2>

              <p className="text-white/70 text-xl leading-relaxed max-w-[700px] mb-10">
                Our internship program is designed for passionate creators
                looking to gain real-world experience in game development,
                engineering, multiplayer systems, UI/UX, and interactive design.
              </p>

              <div className="flex gap-5 relative top-5">

                <Link
                  href="/careers"
                  className="
                    relative overflow-hidden
                    group
                    h-[68px]
                    px-12
                    flex items-center justify-center
                    bg-red-600
                    font-black
                    uppercase
                    tracking-wide
                  "
                >

                  <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                    Apply Now
                  </span>

                  <div className="
                    absolute inset-0
                    bg-white
                    scale-x-0
                    origin-left
                    transition-transform
                    duration-300
                    group-hover:scale-x-100
                  " />

                </Link>

                <button
                  className="
                    h-[68px]
                    px-12
                    border border-white/15
                    uppercase
                    tracking-wide
                    hover:border-white
                    hover:bg-white/5
                    transition-all
                  "
                >
                  Learn More
                </button>

              </div>

            </div>

            {/* RIGHT PANEL */}
            <div className="relative">

              <div className="
                absolute -inset-6
                bg-red-600/10
                blur-3xl
              " />

              <div className="
                relative
                border border-white/10
                bg-[#111]/80
                backdrop-blur-xl
                p-10
                overflow-hidden
              ">

                <Image
                  src="/images/internships/intern-team.jpg"
                  alt="Internship Team"
                  width={900}
                  height={600}
                  className="w-full h-[420px] object-cover"
                />

                <div className="mt-8 grid grid-cols-3 gap-5">

                  {[
                    ["Engineering", "Networking / Backend / Gameplay"],
                    ["Art & Design", "UI / VFX / Concepts"],
                    ["Production", "Teams / Pipelines / QA"],
                  ].map(([title, desc]) => (

                    <div
                      key={title}
                      className="
                        border border-white/10
                        bg-black/40
                        p-5
                        hover:border-red-600/40
                        transition-all
                      "
                    >

                      <h4 className="font-black uppercase text-lg mb-2">
                        {title}
                      </h4>

                      <p className="text-white/55 text-sm leading-relaxed">
                        {desc}
                      </p>

                    </div>

                  ))}

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ROADMAP */}
      <section className="relative py-40">

        <div
          className="
            absolute inset-0 opacity-[0.04]
            [background-image:radial-gradient(#ffffff_1px,transparent_1px)]
            [background-size:20px_20px]
          "
        />

        <div className="max-w-[1400px] mx-auto px-10 relative z-10">

          <div className="mb-24">

            <p className="uppercase tracking-[0.3em] text-red-500 mb-4">
              Growth Path
            </p>

            <h3 className="text-6xl font-black uppercase">
              Your Journey
            </h3>

          </div>

          <div className="grid grid-cols-4 gap-6 relative top-5">

            {[
              {
                step: "01",
                title: "Learn",
                desc: "Work alongside experienced developers and learn modern production workflows.",
              },
              {
                step: "02",
                title: "Build",
                desc: "Contribute to real systems, features, gameplay mechanics, and pipelines.",
              },
              {
                step: "03",
                title: "Collaborate",
                desc: "Participate in meetings, reviews, and cross-team creative discussions.",
              },
              {
                step: "04",
                title: "Grow",
                desc: "Expand your skills and potentially transition into a full-time role.",
              },
            ].map((item) => (

              <div
                key={item.step}
                className="
                  relative
                  border border-white/10
                  bg-[#111]
                  p-10
                  hover:-translate-y-2
                  hover:border-red-600/40
                  transition-all
                  duration-500
                  overflow-hidden
                  group
                "
              >

                <div className="
                  absolute bottom-0 left-0
                  h-[3px]
                  w-0
                  bg-red-600
                  transition-all
                  duration-500
                  group-hover:w-full
                " />

                <p className="text-red-500 text-5xl font-black mb-8">
                  {item.step}
                </p>

                <h4 className="text-3xl font-black uppercase mb-5">
                  {item.title}
                </h4>

                <p className="text-white/60 leading-relaxed">
                  {item.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* BENEFITS */}
      <section className="py-40 bg-[#0d0d0d]">

        <div className="max-w-[1450px] mx-auto px-10">

          <div className="mb-24">

            <p className="uppercase tracking-[0.3em] text-red-500 mb-4">
              Benefits
            </p>

            <h3 className="text-6xl font-black uppercase">
              Why Join Us
            </h3>

          </div>

          <div className="grid grid-cols-2 gap-8 relative top-5 select-none">

            {[
              "Real game development experience",
              "Mentorship from experienced developers",
              "Portfolio-building opportunities",
              "Collaborative team environment",
              "Modern development pipelines",
              "Potential full-time opportunities",
            ].map((benefit) => (

              <div
                key={benefit}
                className="
                  flex items-center gap-5
                  border border-white/10
                  bg-black
                  p-8
                  hover:border-red-600/40
                  hover:bg-[#111]
                  transition-all
                "
              >

                <div className="
                  w-4 h-4
                  bg-red-600
                  rotate-45
                " />

                <p className="text-xl font-semibold">
                  {benefit}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="relative py-52 overflow-hidden">

        <div className="absolute inset-0">

          <Image
            src="/images/internships/intern-bg.jpg"
            alt="Internships"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/80" />

        </div>

        <div className="relative z-10 max-w-[1100px] mx-auto text-center px-10 relative left-180">

          <p className="uppercase tracking-[0.35em] text-red-500 mb-6">
            Start Your Career
          </p>

          <h3 className="text-8xl font-black uppercase leading-none mb-8">
            Join
            <br />
            Duckzr Studios
          </h3>

          <p className="text-white/70 text-xl leading-relaxed max-w-[850px] mx-auto mb-12 relative left-30">
            We’re searching for ambitious students, creators, and developers
            ready to grow inside a fast-moving game studio environment.
          </p>

          <Link
            href="/careers"
            className="
              relative inline-flex
              top-3
              items-center justify-center
              overflow-hidden
              h-[74px]
              w-[280px]
              px-16
              bg-red-600
              uppercase
              tracking-wide
              font-black
              group
            "
          >

            <span className="relative z-10 group-hover:text-black transition-colors duration-500">
              Apply For Internship
            </span>

            <div className="
              absolute inset-0
              bg-white
              scale-x-0
              origin-left
              transition-transform
              duration-500
              group-hover:scale-x-100
            " />

          </Link>

        </div>

      </section>

      <Footer />

    </main>
  );
}