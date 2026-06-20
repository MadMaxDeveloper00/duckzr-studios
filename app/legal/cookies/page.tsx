export const metadata = {
  title: "Cookies Policy - Duckzr Studios",
};

const cookieSections = [
  {
    title: "What Are Cookies?",
    text: `
      Cookies are small data files stored on your device when you access our
      website, launcher, services, or applications. They help improve
      functionality, security, performance, and personalization across the
      Duckzr Studios ecosystem.
    `,
  },

  {
    title: "Why We Use Cookies",
    text: `
      We use cookies to maintain authentication sessions, remember user
      preferences, analyze traffic, improve performance, protect accounts,
      detect fraud, and deliver a more personalized experience.
    `,
  },

  {
    title: "Authentication Cookies",
    text: `
      Authentication cookies help keep you signed in securely across our
      website, launcher, and services. These cookies may contain encrypted
      session identifiers and security verification tokens.
    `,
  },

  {
    title: "Performance & Analytics",
    text: `
      We collect anonymous analytics data to understand how users interact
      with our services. This helps us improve loading speed, responsiveness,
      interface usability, and platform stability.
    `,
  },

  {
    title: "Preference Cookies",
    text: `
      Preference cookies remember settings such as language selection,
      appearance preferences, accessibility configurations, and launcher
      customization options.
    `,
  },

  {
    title: "Security Cookies",
    text: `
      Security cookies are used to detect suspicious activity, prevent abuse,
      protect accounts, and maintain platform integrity across all services.
    `,
  },

  {
    title: "Third-Party Services",
    text: `
      Some third-party providers may use cookies through integrations such as
      authentication systems, embedded content, analytics, or payment
      processing tools.
    `,
  },

  {
    title: "Managing Cookies",
    text: `
      You can manage or disable cookies directly through your browser settings.
      Please note that disabling certain cookies may affect website
      functionality, login systems, or launcher features.
    `,
  },

  {
    title: "Changes To This Policy",
    text: `
      Duckzr Studios may update this Cookies Policy periodically to reflect
      changes in technologies, legal requirements, or platform functionality.
    `,
  },
];

const languages = [
  "🇺🇸",
  "🇧🇷",
  "🇫🇷",
  "🇩🇪",
  "🇪🇸",
  "🇮🇹",
  "🇯🇵",
  "🇰🇷",
  "🇨🇳",
  "🇷🇺",
  "🇵🇱",
  "🇹🇷",
  "🇵🇹",
  "🇲🇽",
];

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section
        className="
          border-b border-white/10
          bg-[#050505]
        "
      >

        <div
          className="
            max-w-[1400px]
            mx-auto
            px-6
            py-20
          "
        >

          <div
            className="
              bg-[#080808]
              border border-white/10
              p-10
            "
          >

            <h1
              className="
                text-5xl
                md:text-7xl
                font-black
                tracking-tight
              "
            >
              Cookies Policy
            </h1>

            {/* FLAGS */}
            <div
              className="
                flex
                flex-wrap
                gap-3
                mt-8
                text-2xl
              "
            >
              {languages.map((flag, index) => (
                <button
                  key={index}
                  className="
                    transition
                    hover:scale-125
                    opacity-70
                    hover:opacity-100
                  "
                >
                  {flag}
                </button>
              ))}
            </div>

          </div>

        </div>

      </section>

      {/* CONTENT */}
      <section
        className="
          max-w-[1200px]
          mx-auto
          px-6
          py-16
        "
      >

        <p
          className="
            text-white/60
            text-sm
            mb-16
          "
        >
          Last Updated: May 2026
        </p>

        {/* INTRO */}
        <div className="mb-16">

          <p
            className="
              text-white/90
              text-xl
              leading-[1.9]
            "
          >
            Duckzr Studios uses cookies and similar technologies across our
            websites, launcher, games, online services, and applications to
            improve user experience, maintain platform security, optimize
            performance, and personalize content. This Cookies Policy explains
            how these technologies work, why we use them, and how you can
            manage your preferences.
          </p>

        </div>

        {/* QUICK LINKS */}
        <div
          className="
            mb-20
            border border-white/10
            bg-[#0a0a0a]
            p-8
          "
        >

          <h2
            className="
              text-white
              font-bold
              text-xl
              mb-6
            "
          >
            Sections
          </h2>

          <ul
            className="
              space-y-4
              text-lg
            "
          >
            {cookieSections.map((section, index) => (
              <li key={index}>

                <a
                  href={`#section-${index}`}
                  className="
                    text-white/80
                    hover:text-red-500
                    transition
                  "
                >
                  • {section.title}
                </a>

              </li>
            ))}
          </ul>

        </div>

        {/* SECTIONS */}
        <div className="space-y-20">

          {cookieSections.map((section, index) => (
            <div
              key={index}
              id={`section-${index}`}
            >

              <h2
                className="
                  text-4xl
                  font-black
                  mb-6
                "
              >
                {section.title}
              </h2>

              <p
                className="
                  text-white/75
                  leading-[2]
                  text-lg
                  max-w-[1000px]
                "
              >
                {section.text}
              </p>

            </div>
          ))}

        </div>

      </section>

    </main>
  );
}