import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";

export default function CompanyPage() {
  return (
    <main className="bg-[#0a0a0a] text-white overflow-hidden">

      <Header />

      {/* HERO */}
      <section className="relative h-[92vh] flex items-center">

        {/* BG */}
        <div className="absolute inset-0">
          <Image
            src="/images/company/company-hero.png"
            alt="Duckzr Studios"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
        </div>

        {/* OUTLINE TEXT */}
        <div className="absolute top-[120px] left-[80px] pointer-events-none select-none">

          <h1 className="
            text-[170px]
            leading-none
            font-black
            uppercase
            tracking-[-0.08em]
            text-transparent
            opacity-20
            [-webkit-text-stroke:1px_rgba(255,255,255,0.35)]
          ">
            DUCKZR
          </h1>

          <h1 className="
            text-[170px]
            leading-none
            font-black
            uppercase
            relative
            top-[-40px]
            left-[80px]
            tracking-[-0.08em]
            text-transparent
            opacity-20
            [-webkit-text-stroke:1px_rgba(255,255,255,0.35)]
          ">
            STUDIOS
          </h1>

        </div>

        {/* CONTENT */}
        <div className="relative z-10 top-15 left-20 max-w-[1500px] mx-auto px-12 w-full">

          <div className="max-w-[700px]">

            <p className="mb-5 uppercase tracking-[0.4em] text-red-500 font-semibold text-sm relative left-[0px]">
              Independent Game Studio
            </p>

            <h2 className="text-7xl font-black leading-[0.95] uppercase mb-8 relative left-[20]">
              Building Worlds
            </h2>

            <h2 className="text-7xl font-black leading-[0.95] uppercase mb-8 relative left-[20] text-red-600">
              Players
            </h2>

            <h2 className="text-7xl font-black leading-[0.95] uppercase mb-8 relative left-[20]">
              And memory.
            </h2>

            <p className="text-white/70 text-xl leading-relaxed mb-10 relative right-[20px]">
              Duckzr Studios is focused on creating immersive multiplayer
              experiences, cinematic gameplay, and highly polished competitive
              titles for players around the world.
            </p>

            <div className="flex gap-5 relative left-35 top-10">

              <Link
                href="/games"
                className="
                  group relative overflow-hidden
                  h-[64px]
                  px-10
                  flex items-center justify-center
                  bg-red-600
                  font-bold
                  uppercase
                  tracking-wide
                "
              >
                <span className="relative z-10 group-hover:text-black transition-colors duration-500">
                  Explore Games
                </span>

                <div className="
                  absolute inset-0
                  bg-white
                  scale-x-0
                  origin-left
                  transition-transform
                  duration-400
                  group-hover:scale-x-100
                " />
              </Link>

              <Link
                href="/careers"
                className="
                  h-[64px]
                  px-10
                  border border-white/20
                  flex items-center justify-center
                  uppercase
                  tracking-wide
                  hover:border-white
                  hover:bg-white/5
                  transition-all
                "
              >
                Join Our Team
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* ABOUT */}
      <section className="py-40 px-10">

        <div className="max-w-[1400px] mx-auto grid grid-cols-2 gap-24 items-center relative left-120">

          {/* LEFT */}
          <div>

            <p className="text-red-500 uppercase tracking-[0.3em] mb-6 font-semibold">
              About Us
            </p>

            <h3 className="text-6xl font-black uppercase leading-none mb-8">
              We Create
              <br />
              Competitive &
              <br />
              Cinematic
              <br />
              Experiences.
            </h3>

          </div>

          {/* RIGHT */}
          <div className="space-y-8 text-white/70 text-lg leading-relaxed">

            <p>
              Founded with the goal of delivering high quality interactive
              entertainment, Duckzr Studios combines modern gameplay systems,
              advanced networking technologies, and strong visual identity to
              create unforgettable player experiences.
            </p>

            <p>
              Our focus is building games that feel responsive, stylish, and
              alive — whether through multiplayer combat, immersive worlds,
              competitive systems, or community-driven features.
            </p>

            <p>
              Every system we create is designed with long-term scalability,
              performance, and player immersion in mind.
            </p>

          </div>

        </div>

      </section>

      {/* STATS */}
      <section className="px-10 pb-40">

        <div className="max-w-[1400px] mx-auto grid grid-cols-4 gap-6 relative left-120">

          {[
            ["2026", "Studio Founded"],
            ["4+", "Projects In Development"],
            ["Online", "Global Community"],
            ["PC / Console", "Target Platforms"],
          ].map(([value, label]) => (

            <div
              key={label}
              className="
                group
                relative
                overflow-hidden
                border border-white/10
                bg-[#111]
                p-10
                min-h-[220px]
                hover:-translate-y-2
                transition-all
                duration-500
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

              <h4 className="text-6xl font-black mb-5">
                {value}
              </h4>

              <p className="uppercase tracking-wide text-white/60">
                {label}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* VALUES */}
      <section className="relative py-44">

        <div className="absolute inset-0 bg-[#0f0f0f]" />

        <div className="relative z-10 max-w-[1450px] mx-auto px-10 left-120">

          <div className="mb-24">

            <p className="uppercase tracking-[0.3em] text-red-500 mb-4 relative top-[-30]">
              Our Philosophy
            </p>

            <h3 className="text-6xl font-black uppercase relative top-[-30]">
              What Drives Us
            </h3>

          </div>

          <div className="grid grid-cols-3 gap-8">

            {[
              {
                title: "Innovation",
                desc: "We constantly push technology, gameplay systems, and design standards forward.",
              },
              {
                title: "Community",
                desc: "Players are at the center of every experience we build.",
              },
              {
                title: "Quality",
                desc: "Polish, immersion, and responsiveness define every project we ship.",
              },
            ].map((item) => (

              <div
                key={item.title}
                className="
                  group
                  border border-white/10
                  bg-black
                  p-10
                  hover:border-red-600/40
                  hover:bg-[#111]
                  transition-all
                  duration-500
                "
              >

                <h4 className="text-4xl font-black uppercase mb-6">
                  {item.title}
                </h4>

                <p className="text-white/65 leading-relaxed text-lg">
                  {item.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="relative py-48 overflow-hidden">

        <div className="absolute inset-0">
          <Image
            src="/images/company/company-team.png"
            alt="Team"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/75" />
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto text-center px-10 left-170">

          <p className="uppercase tracking-[0.3em] text-red-500 mb-5">
            Careers
          </p>

          <h3 className="text-7xl font-black uppercase leading-none mb-8">
            Join The Team
          </h3>

          <p className="max-w-[850px] mx-auto text-xl text-white/70 leading-relaxed mb-12 relative left-40">
            We’re looking for passionate developers, artists, designers,
            engineers, and creators ready to help shape the future of our games.
          </p>

          <Link
            href="/careers"
            className="
              inline-flex
              items-center
              justify-center
              h-[72px]
              px-14
              bg-red-600
              uppercase
              tracking-wide
              font-black
              relative
              top-3
              w-[250px]
              overflow-hidden
              group
            "
          >

            <span className="relative z-10 group-hover:text-black transition-colors duration-600">
              View Careers
            </span>

            <div className="
              absolute inset-0
              bg-white
              scale-x-0
              origin-left
              transition-transform
              duration-600
              group-hover:scale-x-100
            " />

          </Link>

        </div>

      </section>

      <Footer />

    </main>
  );
}