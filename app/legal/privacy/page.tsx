"use client";

const languages = [
  "🇺🇸",
  "🇧🇷",
  "🇫🇷",
  "🇩🇪",
  "🇪🇸",
  "🇮🇹",
  "🇯🇵",
  "🇰🇷",
  "🇵🇱",
  "🇷🇺",
  "🇨🇳",
  "🇹🇷",
];

export default function PrivacyPolicyPage() {

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
            bg-[#090909]
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
            "
          >
            Privacy Policy
          </h1>

          {/* FLAGS */}
          <div
            className="
              flex
              flex-wrap
              gap-3
              mt-8
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
          "
        >
          Last Update: March 2026
        </p>

        {/* CONTENT */}
        <div
          className="
            space-y-14
            text-[17px]
            leading-[1.9]
            text-white/90
          "
        >

          {/* INTRO */}
          <section className="space-y-6">

            <p>
              Duckzr Studios values your privacy and
              is committed to protecting the personal
              information of our players, visitors and
              community members.
            </p>

            <p>
              This Privacy Policy explains how we
              collect, process, store and protect your
              information across our games, launcher,
              websites, online services and related
              platforms.
            </p>

          </section>

          {/* TABLE */}
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
                "Information We Collect",
                "How We Use Your Data",
                "Account Information",
                "Security and Anti-Cheat",
                "Cookies and Tracking",
                "Third-Party Services",
                "Data Retention",
                "Children's Privacy",
                "International Transfers",
                "Your Rights",
                "Changes to This Policy",
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
              Information We Collect
            </h2>

            <p>
              We may collect information including
              usernames, email addresses, IP addresses,
              device information, gameplay statistics,
              purchase history and communication data
              when you interact with our services.
            </p>

            <p>
              Certain gameplay systems and anti-cheat
              technologies may also collect technical
              information necessary to maintain fair
              competitive environments.
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
              How We Use Your Data
            </h2>

            <p>
              Your information is used to operate,
              improve and secure our services. This
              includes account authentication,
              matchmaking, player support, moderation,
              analytics and fraud prevention.
            </p>

            <p>
              We may also use anonymized gameplay data
              to improve balancing, performance and
              future content development.
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
              Security and Anti-Cheat
            </h2>

            <p>
              To protect the integrity of our games,
              Duckzr Studios may use automated systems,
              anti-cheat technologies and security
              monitoring tools capable of detecting
              unauthorized software or suspicious
              activity.
            </p>

            <p>
              These systems are designed exclusively
              to maintain platform security and fair
              gameplay environments.
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
              Cookies and Tracking
            </h2>

            <p>
              Our websites and launcher may use
              cookies, analytics tools and similar
              technologies to personalize content,
              remember preferences and improve user
              experience.
            </p>

            <p>
              You may disable certain tracking
              technologies through your browser or
              device settings, although some features
              may become unavailable.
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
              Third-Party Services
            </h2>

            <p>
              Some services may integrate with third
              parties such as payment providers,
              authentication systems, cloud platforms
              and social services.
            </p>

            <p>
              Duckzr Studios is not responsible for
              the independent privacy practices of
              third-party services outside our control.
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
              Your Rights
            </h2>

            <p>
              Depending on your region, you may have
              rights related to accessing, correcting,
              deleting or restricting the processing
              of your personal data.
            </p>

            <p>
              Requests regarding personal data may be
              submitted through our official support
              or legal contact channels.
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
              Changes to This Policy
            </h2>

            <p>
              Duckzr Studios reserves the right to
              modify this Privacy Policy at any time.
              Updated versions will be published on
              this page with a revised update date.
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
              privacy@duckzrstudios.com
            </p>

            <p className="text-white/70 mt-2">
              legal@duckzrstudios.com
            </p>

          </section>

        </div>

      </div>

    </main>
  );
}