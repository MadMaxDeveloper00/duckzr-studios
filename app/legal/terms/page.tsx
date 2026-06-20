"use client";

const languages = [
  "🇺🇸",
  "🇧🇷",
  "🇫🇷",
  "🇩🇪",
  "🇪🇸",
  "fr",
  "🇮🇹",
  "🇯🇵",
  "🇰🇷",
  "mx",
  "hl",
  "🇵🇱",
  "🇷🇺",
  "as",
  "🇨🇳",
  "🇹🇷",
];

export default function TermsPage() {

  return (
    <main
      className="
        min-h-screen
        bg-black
        text-white
      "
    >

      {/* CONTAINER */}
      <div
        className="
          max-w-[1200px]
          mx-auto
          px-8
          py-20
        "
      >

        {/* TOP PANEL */}
        <div
          className="
            w-500
            h-40
            absolute
            left-[150]
            bg-[#0a0a0a]
            border
            border-white/10
            p-8
            mb-12
          "
        >

          <h1
            className="
              text-5xl
              font-black
              tracking-tight
              relative
              top-10
            "
          >
            Terms of Service
          </h1>

          {/* FLAGS */}
          <div
            className="
              flex
              flex-wrap
              gap-3
              mt-8
              relative
              top-13
            "
          >

            {languages.map((flag, index) => (
              <button
                key={index}
                className="
                  text-xl
                  opacity-60
                  hover:opacity-100
                  hover:scale-110
                  transition-all
                  duration-300
                "
              >
                {flag}
              </button>
            ))}

          </div>

        </div>

        {/* UPDATE */}
        <p
          className="
            text-white/60
            text-lg
            mb-16
            relative
            top-40
            right-80
            text-center
          "
        >
          Last Update: March 2026
        </p>

        {/* CONTENT */}
        <div
          className="
            space-y-14
            leading-[1.9]
            text-[17px]
            text-white/90
            relative
            top-18
            left-36
          "
        >

          {/* INTRO */}
          <section className="space-y-6">

            <p>
              Duckzr Studios is committed to creating
              immersive, competitive and cinematic
              experiences for players around the world.
              These Terms of Service govern your access
              to our games, launcher, online services,
              websites, communities and all related
              products provided by Duckzr Studios.
            </p>

            <p>
              By accessing or using our services,
              you agree to comply with these Terms.
              If you do not agree with any portion
              of these Terms, you must discontinue
              use of our services immediately.
            </p>

          </section>

          {/* CONTENT TABLE */}
          <section>

            <ul
              className="
                list-disc
                pl-6
                space-y-3
                text-white
              "
            >

              {[
                "Account Responsibilities",
                "Online Conduct",
                "Game Rules and Competitive Integrity",
                "User Generated Content",
                "Purchases and Virtual Content",
                "Refund Policies",
                "Launcher and Software Usage",
                "Intellectual Property",
                "Termination and Restrictions",
                "Privacy and Data Collection",
                "Security and Anti-Cheat",
                "Community Guidelines",
                "International Usage",
                "Changes to Terms",
                "Contact Information",
              ].map((item) => (
                <li
                  key={item}
                  className="
                    hover:text-red-500
                    transition-all
                    duration-300
                    cursor-pointer
                    w-fit
                  "
                >
                  {item}
                </li>
              ))}

            </ul>

          </section>

          {/* SECTION */}
          <section className="space-y-5">

            <h2
              className="
                text-3xl
                font-black
                uppercase
              "
            >
              Account Responsibilities
            </h2>

            <p>
              Players are responsible for maintaining
              the confidentiality and security of
              their accounts. You agree not to share,
              sell, transfer or provide unauthorized
              access to your account to third parties.
            </p>

            <p>
              Any activity performed through your
              account is considered your responsibility.
              Duckzr Studios reserves the right to
              suspend or terminate accounts involved
              in suspicious, fraudulent or abusive
              behavior.
            </p>

          </section>

          {/* SECTION */}
          <section className="space-y-5">

            <h2
              className="
                text-3xl
                font-black
                uppercase
              "
            >
              Competitive Integrity
            </h2>

            <p>
              Maintaining fair gameplay is one of our
              highest priorities. The use of cheats,
              exploits, unauthorized third-party tools,
              automation software or account boosting
              is strictly prohibited.
            </p>

            <p>
              Our anti-cheat systems may actively
              monitor gameplay environments in order
              to preserve competitive integrity and
              ensure a fair experience for all players.
            </p>

          </section>

          {/* SECTION */}
          <section className="space-y-5">

            <h2
              className="
                text-3xl
                font-black
                uppercase
              "
            >
              User Conduct
            </h2>

            <p>
              Players must respect others while using
              our services. Harassment, hate speech,
              threats, discriminatory behavior,
              impersonation and malicious conduct are
              not tolerated within any Duckzr Studios
              platform or community environment.
            </p>

            <p>
              Violations may result in warnings,
              restrictions, permanent bans or legal
              action depending on the severity of the
              offense.
            </p>

          </section>

          {/* SECTION */}
          <section className="space-y-5">

            <h2
              className="
                text-3xl
                font-black
                uppercase
              "
            >
              Intellectual Property
            </h2>

            <p>
              All games, visuals, audio, systems,
              branding, technology and related content
              provided by Duckzr Studios remain the
              exclusive property of Duckzr Studios and
              its licensors.
            </p>

            <p>
              Unauthorized reproduction, redistribution,
              reverse engineering or commercial use of
              our content without written permission
              is strictly prohibited.
            </p>

          </section>

          {/* SECTION */}
          <section className="space-y-5">

            <h2
              className="
                text-3xl
                font-black
                uppercase
              "
            >
              Changes to These Terms
            </h2>

            <p>
              Duckzr Studios reserves the right to
              update or modify these Terms at any time.
              Continued use of our services following
              updates constitutes acceptance of the
              revised Terms.
            </p>

          </section>

          {/* CONTACT */}
          <section
            className="
              border-t
              border-white/10
              pt-12
            "
          >

            <h2
              className="
                text-3xl
                font-black
                uppercase
                mb-6
              "
            >
              Contact Us
            </h2>

            <p className="text-white/70">
              legal@duckzrstudios.com
            </p>

            <p className="text-white/70 mt-2">
              support@duckzrstudios.com
            </p>

          </section>

        </div>

      </div>

    </main>
  );
}