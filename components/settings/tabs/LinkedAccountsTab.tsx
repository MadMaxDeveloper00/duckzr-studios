"use client";

import {
  Link2,
  ShieldCheck,
  Globe,
  MessageCircle,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Plus,
  Sparkles,
  Loader2,
} from "lucide-react";

import { useEffect, useMemo, useState } from "react";
import api from "@/services/api";
import { useAuth } from "@/contexts/AuthContext";

interface LinkedAccount {
  name: string;
  description: string;
  linked: boolean;
  email: string | null;
  icon: any;
  color: string;
  action: string;
}

export default function LinkedAccountsTab() {

  const { user } = useAuth();

  const [loading, setLoading] = useState(true);

  const [googleLinked, setGoogleLinked] =
    useState(false);

  const [discordLinked, setDiscordLinked] =
    useState(false);

  const [googleEmail, setGoogleEmail] =
    useState<string | null>(null);

  const [discordName, setDiscordName] =
    useState<string | null>(null);

  const [disconnecting, setDisconnecting] =
    useState<string | null>(null);

  const token =
    typeof window !== "undefined"
      ? localStorage.getItem("duckzr_token")
      : null;

  useEffect(() => {

    loadAccounts();

  }, []);

  async function loadAccounts() {

    try {

      setLoading(true);

      const response = await api.get(
        "https://localhost:7071/api/user/me",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = response.data;

      setGoogleLinked(data.googleLinked);

      setDiscordLinked(data.discordLinked);

      setGoogleEmail(
        data.googleLinked
          ? data.email
          : null
      );

      setDiscordName(
        data.discordLinked
          ? data.username
          : null
      );

    } catch (error) {

      console.error(
        "Failed to load linked accounts",
        error
      );

    } finally {

      setLoading(false);

    }
  }

  async function disconnectGoogle() {

    try {

      setDisconnecting("Google");

      await api.post(
        "https://localhost:7071/api/user/unlink-google",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setGoogleLinked(false);

      setGoogleEmail(null);

    } catch (error) {

      console.error(
        "Failed to disconnect Google",
        error
      );

    } finally {

      setDisconnecting(null);

    }
  }

  async function disconnectDiscord() {

    try {

      setDisconnecting("Discord");

      await api.post(
        "https://localhost:7071/api/user/unlink-discord",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setDiscordLinked(false);

      setDiscordName(null);

    } catch (error) {

      console.error(
        "Failed to disconnect Discord",
        error
      );

    } finally {

      setDisconnecting(null);

    }
  }

  function linkGoogle() {

    window.location.href =
      "https://localhost:7071/api/auth/login/google";
  }

  function linkDiscord() {

    window.location.href = `https://localhost:7071/api/auth/login/discord?token=${token}`;
  }

  const linkedAccounts: LinkedAccount[] =
    useMemo(() => [
      {
        name: "Google",

        description:
          "Sign in with your Google account.",

        linked: googleLinked,

        email: googleEmail,

        icon: Globe,

        color:
          "from-red-500/20 to-orange-500/20",

        action: "google",
      },

      {
        name: "Discord",

        description:
          "Connect your Discord profile.",

        linked: discordLinked,

        email: discordName,

        icon: MessageCircle,

        color:
          "from-indigo-500/20 to-blue-500/20",

        action: "discord",
      },
    ], [
      googleLinked,
      discordLinked,
      googleEmail,
      discordName,
    ]);

  return (
    <div className="relative">

      {/* DOT BACKGROUND */}
      <div
        className="
          absolute inset-0 opacity-[0.03]
          pointer-events-none
          [background-image:radial-gradient(#ffffff_1px,transparent_1px)]
          [background-size:24px_24px]
        "
      />

      <div className="relative z-10">

        {/* HEADER */}
        <div className="mb-12">

          <p
            className="
              uppercase
              tracking-[0.35em]
              text-red-500
              text-sm
              font-semibold
              mb-4
            "
          >
            Connected Services
          </p>

          <h2
            className="
              text-5xl
              font-black
              uppercase
              leading-none
            "
          >
            Linked Accounts
          </h2>

          <p
            className="
              text-white/50
              mt-5
              max-w-[760px]
              text-lg
            "
          >
            Connect external platforms and
            services to improve authentication,
            security, social features, and
            future integrations.
          </p>

        </div>

        {/* MAIN PANEL */}
        <div
          className="
            relative
            overflow-hidden
            rounded-[32px]
            border border-white/10
            bg-[#101010]
          "
        >

          {/* RED GLOW */}
          <div
            className="
              absolute
              top-[-120px]
              right-[-120px]
              w-[340px]
              h-[340px]
              bg-red-600/10
              blur-[150px]
            "
          />

          {/* TOP STATUS */}
          <div
            className="
              border-b border-white/10
              p-10
            "
          >

            <div className="flex items-center justify-between">

              <div className="flex items-center gap-6">

                <div
                  className="
                    w-20 h-20
                    rounded-3xl
                    bg-red-600/10
                    border border-red-600/20
                    flex items-center justify-center
                  "
                >

                  <Link2
                    size={36}
                    className="text-red-500"
                  />

                </div>

                <div>

                  <p
                    className="
                      uppercase
                      tracking-[0.25em]
                      text-red-500
                      text-sm
                      font-bold
                      mb-2
                    "
                  >
                    Integrations
                  </p>

                  <h3
                    className="
                      text-3xl
                      font-black
                    "
                  >
                    External account linking
                  </h3>

                  <p className="text-white/45 mt-2">
                    Securely connect your
                    accounts and services.
                  </p>

                </div>

              </div>

              {/* CONNECTED COUNT */}
              <div
                className="
                  hidden lg:flex
                  flex-col
                  items-end
                  relative
                  right-5
                "
              >

                <span
                  className="
                    text-white/40
                    uppercase
                    tracking-[0.2em]
                    text-sm
                  "
                >
                  Connected
                </span>

                <h1
                  className="
                    text-6xl
                    font-black
                    text-red-500
                  "
                >
                  {linkedAccounts.filter(
                    x => x.linked
                  ).length}/2
                </h1>

              </div>

            </div>

          </div>

          {/* CONTENT */}
          <div className="p-10">

            {/* LINKED ACCOUNTS */}
            <div className="space-y-6">

              {loading && (

                <div
                  className="
                    h-[180px]
                    rounded-3xl
                    border border-white/10
                    bg-black/20
                    flex items-center justify-center
                  "
                >

                  <Loader2
                    size={35}
                    className="
                      animate-spin
                      text-red-500
                    "
                  />

                </div>

              )}

              {!loading && linkedAccounts.map((account, index) => {

                const Icon = account.icon;

                return (
                  <div
                    key={index}
                    className="
                      group
                      relative
                      overflow-hidden
                      border border-white/10
                      bg-black/30
                      rounded-3xl
                      p-7
                      hover:border-red-600/30
                      transition-all
                    "
                  >

                    {/* HOVER GLOW */}
                    <div
                      className={`
                        absolute inset-0
                        opacity-0
                        group-hover:opacity-100
                        transition-opacity
                        duration-500
                        bg-gradient-to-r
                        ${account.color}
                      `}
                    />

                    <div
                      className="
                        relative z-10
                        flex items-center justify-between
                      "
                    >

                      {/* LEFT */}
                      <div className="flex items-center gap-6">

                        {/* ICON */}
                        <div
                          className="
                            w-20 h-20
                            rounded-3xl
                            bg-[#141414]
                            border border-white/10
                            flex items-center justify-center
                          "
                        >

                          <Icon
                            size={34}
                            className="
                              text-white
                            "
                          />

                        </div>

                        {/* INFO */}
                        <div>

                          <div className="flex items-center gap-3">

                            <h3
                              className="
                                text-2xl
                                font-black
                              "
                            >
                              {account.name}
                            </h3>

                            {account.linked ? (
                              <CheckCircle2
                                size={20}
                                className="
                                  text-green-400
                                "
                              />
                            ) : (
                              <AlertCircle
                                size={20}
                                className="
                                  text-yellow-400
                                "
                              />
                            )}

                          </div>

                          <p
                            className="
                              text-white/45
                              mt-2
                              max-w-[500px]
                            "
                          >
                            {account.description}
                          </p>

                          {/* EMAIL */}
                          <div className="mt-4">

                            {account.linked ? (
                              <div
                                className="
                                  inline-flex
                                  items-center gap-2
                                  px-4 py-2
                                  rounded-full
                                  bg-green-500/10
                                  border border-green-500/20
                                  text-green-400
                                  text-sm
                                  font-semibold
                                "
                              >

                                <ShieldCheck size={15}/>

                                {account.email}

                              </div>
                            ) : (
                              <div
                                className="
                                  inline-flex
                                  items-center gap-2
                                  px-4 py-2
                                  rounded-full
                                  bg-white/5
                                  border border-white/10
                                  text-white/45
                                  text-sm
                                "
                              >

                                Not Connected

                              </div>
                            )}

                          </div>

                        </div>

                      </div>

                      {/* RIGHT */}
                      <div className="flex items-center gap-4">

                        {account.linked ? (

                          <>
                            <button
                              onClick={() => {

                                if (
                                  account.action === "google"
                                ) {
                                  disconnectGoogle();
                                }

                                if (
                                  account.action === "discord"
                                ) {
                                  disconnectDiscord();
                                }
                              }}
                              disabled={
                                disconnecting ===
                                account.name
                              }
                              className="
                                h-[54px]
                                px-6
                                rounded-2xl
                                border border-white/10
                                hover:border-red-600/30
                                transition-all
                                disabled:opacity-50
                              "
                            >

                              {disconnecting ===
                              account.name
                                ? "Disconnecting..."
                                : "Disconnect"}

                            </button>

                            <button
                              className="
                                w-[54px]
                                h-[54px]
                                rounded-2xl
                                bg-white
                                text-black
                                flex items-center justify-center
                                hover:scale-[1.03]
                                transition-all
                              "
                            >
                              <ExternalLink size={20}/>
                            </button>
                          </>

                        ) : (

                          <button
                            onClick={() => {

                              if (
                                account.action === "google"
                              ) {
                                linkGoogle();
                              }

                              if (
                                account.action === "discord"
                              ) {
                                linkDiscord();
                              }
                            }}
                            className="
                              group/button
                              relative
                              overflow-hidden
                              h-[56px]
                              px-8
                              bg-red-600
                              font-black
                              uppercase
                              tracking-wide
                            "
                          >

                            <span
                              className="
                                relative z-10
                                flex items-center gap-3
                                group-hover/button:text-black
                                transition-colors
                                duration-300
                              "
                            >

                              <Plus size={18}/>

                              Link Account

                            </span>

                            <div
                              className="
                                absolute inset-0
                                bg-white
                                scale-x-0
                                origin-left
                                transition-transform
                                duration-300
                                group-hover/button:scale-x-100
                              "
                            />

                          </button>

                        )}

                      </div>

                    </div>

                  </div>
                );
              })}

            </div>

            {/* API / FUTURE INTEGRATIONS */}
            <div className="mt-10">

              <div className="flex items-center gap-3 mb-6 relative left-5">

                <Sparkles
                  size={20}
                  className="text-red-500"
                />

                <h3
                  className="
                    text-2xl
                    font-black
                    uppercase
                  "
                >
                  Future Integrations
                </h3>

              </div>

              <div
                className="
                  border border-dashed border-white/10
                  bg-black/20
                  rounded-3xl
                  p-10
                  text-center
                "
              >

                <h4
                  className="
                    text-2xl
                    font-black
                    mb-4
                  "
                >
                  Third-party applications
                </h4>

                <p
                  className="
                    text-white/45
                    max-w-[760px]
                    mx-auto
                    leading-relaxed
                    relative
                    left-170
                  "
                >
                  External applications and
                  services using the Duckzr API
                  will appear here automatically
                  once authorized by your account.
                  This area was designed to
                  support future integrations,
                  launcher tools, companion apps,
                  and community services.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}