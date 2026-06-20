import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";

const teams = [
  {
    team: "VEYRA FPS",
    role: "TACTICAL FPS / COMPETITIVE",
    image: "/career/team-veyra.png",
    description:
      "Build high-intensity tactical combat systems, advanced networking architecture, anti-cheat technology and next-generation competitive gameplay experiences for millions of players.",
  },
  {
    team: "DUCKZR ENGINE",
    role: "ENGINE / TOOLS / CORE TECH",
    image: "/career/team-engine.png",
    description:
      "Work directly on rendering systems, multiplayer infrastructure, animation pipelines and internal development tools powering every DuckzrStudios experience.",
  },
  {
    team: "LIVE SERVICES",
    role: "ONLINE SYSTEMS / LIVE OPS",
    image: "/career/team-liveops.png",
    description:
      "Create scalable backend services, progression systems, matchmaking features and seasonal content pipelines designed for long-term live game support.",
  },
];

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-[#fffff] text-white overflow-hidden">
      <Header />

      <section>
          <div className="absolute inset-0 opacity-[0.4]">
            <div className="h-full w-full bg-[radial-gradient(white_1px,transparent_1px)] [background-size:22px_22px]" />
          </div>
      </section>

      {/* HERO */}
      <section className="relative h-[60vh] w-full overflow-hidden top-15">
        <Image
          src="/career/career-hero.png"
          alt="Careers"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 flex h-full items-end left-100 top-35">
          <div className="mx-auto flex w-full max-w-[1700px] items-end justify-between px-10 pb-24">
            <div className="max-w-[750px]">
              <p className="mb-5 text-sm font-bold uppercase tracking-[0.45em] text-red-500 relative left-30 select-none">
                Careers at DuckzrStudios
              </p>

              <h1 className="leading-[0.9] text-white">
                <span className="block text-[120px] font-black uppercase tracking-[-0.08em] relative right-30 z-10 relative top-2 select-none">
                  Join
                </span>

                <span className="block text-[170px] font-black uppercase tracking-[-0.09em] text-red-600 relative top-[-120] left-0 select-none">
                  Our
                </span>

                <span className="block text-[170px] font-black uppercase tracking-[-0.09em] text-red-600 relative top-[-145] left-30 select-none">
                  Team
                </span>
              </h1>

              <p className="mt-8 max-w-[650px] text-lg leading-relaxed text-white/75 relative top-[-100]">
                We are building immersive multiplayer experiences,
                competitive ecosystems and next-generation technology for
                players around the world. Join a team focused on ambition,
                creativity and innovation.
              </p>

              <div className="mt-10 flex gap-5 relative top-[-80]">
                <button className="group relative overflow-hidden bg-red-600 px-10 py-4 font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:scale-[1.03]">
                  <span className="relative z-10">Apply Now</span>

                  <div className="absolute inset-0 translate-y-full bg-white transition-transform duration-600 group-hover:translate-y-0" />

                  <span className="absolute inset-0 z-20 flex items-center justify-center font-bold uppercase tracking-[0.2em] text-black opacity-0 transition-opacity duration-600 group-hover:opacity-100">
                    Apply Now
                  </span>
                </button>

                <button className="border border-white/30 bg-white/5 px-10 py-4 font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md transition hover:border-white hover:bg-white hover:text-black">
                  Learn More
                </button>
              </div>
            </div>

            {/* SIDE PANEL */}
            <div className="hidden w-[420px] xl:block relative top-[-130]">
              <div className="border border-white/10 bg-black/40 p-6 backdrop-blur-xl">
                <p className="mb-5 text-sm uppercase tracking-[0.3em] text-red-500">
                  Why Join Us
                </p>

                <div className="space-y-5">
                  {[
                    "AAA Multiplayer Projects",
                    "Modern Development Pipeline",
                    "Remote & Hybrid Opportunities",
                    "Global Competitive Vision",
                  ].map((item) => (
                    <div
                      key={item}
                      className="border-l-2 border-red-600 pl-4"
                    >
                      <p className="text-lg font-semibold text-white">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="relative py-36 left-180">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="h-full w-full bg-[radial-gradient(white_1px,transparent_1px)] [background-size:22px_22px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1200px] px-10 text-center">
          <p className="mb-6 text-sm font-bold uppercase tracking-[0.45em] text-red-600">
            Our Philosophy
          </p>

          <h2 className="mx-auto max-w-[1000px] text-[68px] font-black uppercase leading-[1] tracking-[-0.06em]">
            We Are Looking For
            <span className="text-red-600"> Passionate Developers </span>
            Ready To Build The Future Of Multiplayer Games
          </h2>

          <p className="mx-auto mt-10 max-w-[850px] text-xl leading-relaxed text-black/65">
            At DuckzrStudios, every developer, designer and artist directly
            impacts the player experience. We believe in ownership,
            experimentation and pushing the limits of interactive
            entertainment.
          </p>

          <button className="mt-14 bg-red-600 px-12 py-5 text-sm font-bold uppercase tracking-[0.3em] text-white transition hover:scale-[1.03] hover:bg-black">
            Join Our Team
          </button>
        </div>
      </section>

      {/* TEAMS */}
      <section className="mx-auto max-w-[1600px] space-y-40 px-10 pb-40 relative left-120">
        {teams.map((team, index) => (
          <div
            key={team.team}
            className={`grid items-center gap-20 lg:grid-cols-2 ${
              index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            {/* IMAGE */}
            <div className="group relative">
              <div className="absolute -left-6 top-0 h-full w-[2px] bg-red-600" />

              <div className="relative overflow-hidden bg-[#dedad3]">
                <Image
                  src={team.image}
                  alt={team.team}
                  width={900}
                  height={600}
                  className="h-auto w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                />

                <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/15" />
              </div>

              {/* FLOATING BUTTONS */}
              <div className="absolute -right-7 top-12 flex flex-col gap-4">
                <button className="flex h-16 w-16 items-center justify-center rounded-full border border-red-500 bg-red-500 text-2xl text-white transition hover:scale-110 hover:bg-white hover:text-red-600">
                  →
                </button>

                <button className="flex h-16 w-16 items-center justify-center rounded-full border border-red-500 bg-red-500 text-2xl text-white transition hover:scale-110 hover:bg-white hover:text-red-600">
                  ←
                </button>
              </div>

              {/* NUMBER */}
              <div className="absolute -bottom-10 right-2 text-right">
                <p className="text-[80px] font-thin leading-none text-red-500/60 select-none pointer-events-none">
                  0{index + 1}
                </p>

                <p className="text-sm font-bold tracking-[0.3em] text-black/25">
                  / 03
                </p>
              </div>
            </div>

            {/* TEXT */}
            <div>
              <p className="mb-6 text-sm font-bold uppercase tracking-[0.45em] text-red-600">
                Team: {team.team}
              </p>

              <h3 className="max-w-[650px] text-[72px] font-black uppercase leading-[0.95] tracking-[-0.05em]">
                {team.role}
              </h3>

              <p className="mt-10 max-w-[650px] text-xl leading-relaxed text-black/65">
                {team.description}
              </p>

              <button className="group mt-12 flex items-center overflow-hidden border border-red-600 transition-all duration-600 relative top-3">
                <div className="bg-red-600 px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition-all duration-600 group-hover:bg-black h-[56px] flex items-center">
                  Join The Team
                </div>

                <div className="flex h-[56px] w-[56px] items-center justify-center bg-[#d9d9d9] text-xl text-red-600 transition-all duration-300 group-hover:w-[90px] group-hover:bg-red-600 group-hover:text-white">
                  →
                </div>
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* LOCATION SECTION */}
      <section className="relative overflow-hidden bg-grey py-36">
        <div className="absolute inset-0 opacity-[0.5]">
          <div className="h-full w-full bg-[radial-gradient(white_1px,black_1px)] [background-size:20px_20px]" />
        </div>

        <div className="relative z-10 mx-auto grid max-w-[1600px] items-center gap-20 px-10 lg:grid-cols-2 left-50 top-[-50]">
          <div className="relative overflow-hidden">
            <Image
              src="/career/location.png"
              alt="Studio"
              width={1400}
              height={800}
              className="h-auto w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/30" />

            <div className="relative left-0 top-[-450] z-10 text-red-600">
              <p className="text-[90px] font-black uppercase leading-none tracking-[-0.08em] select-none">
                Located
              </p>

              <p className="relative z-10 -mt-6 text-[90px] font-black uppercase leading-none tracking-[-0.08em] select-none top-[-70]">
                In
              </p>
            </div>
          </div>

          <div>
            <p className="mb-6 text-sm font-bold uppercase tracking-[0.45em] text-red-600 relative top-[-10px]">
              Headquarters
            </p>

            <h2 className="text-[82px] font-black uppercase leading-[0.9] tracking-[-0.07em] relative w-300">
              Minas Gerais,
              <span className="text-red-600"> Brazil</span>
            </h2>

            <p className="mt-10 max-w-[650px] text-xl leading-relaxed text-black/65">
              Our studio is designed to foster collaboration, innovation and
              creativity. We combine modern development spaces with a
              competitive mindset focused on building unforgettable games.
            </p>

            <div className="mt-12 flex flex-wrap gap-5">
              {[
                "Game Development",
                "Networking",
                "Animation",
                "Live Services",
                "Backend",
                "UI/UX",
                "Launcher",
                "Anti-Cheat",
                "Website Development"
              ].map((tag) => (
                <div
                  key={tag}
                  className="border border-black/10 bg-black px-6 py-3 text-sm font-bold uppercase tracking-[0.2em] text-white"
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-black py-36 text-center text-white">
        <div className="mx-auto max-w-[1200px] px-10 relative left-160">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.45em] text-red-500">
            Build The Future
          </p>

          <h2 className="text-[110px] font-black uppercase leading-[0.9] tracking-[-0.08em]">
            Start Your
            <span className="text-red-600"> Journey</span>
          </h2>

          <p className="mx-auto mt-10 max-w-[800px] text-xl leading-relaxed text-white/60 relative left-48 top-2">
            Join a team passionate about technology, competition and creating
            unforgettable experiences for players worldwide.
          </p>

          <button className="mt-14 bg-red-600 px-14 py-5 text-sm font-bold uppercase tracking-[0.35em] text-white transition hover:scale-[1.03] hover:bg-white hover:text-black top-5 relative">
            View Open Positions
          </button>
        </div>

        <h1 className="text-[300px] h-[0] font-black uppercase leading-[0.9] tracking-[-0.08em] relative right-0 relative top-[-260] select-none text-white/2">
            careers
          </h1>
      </section>

      <Footer />
    </main>
  );
}