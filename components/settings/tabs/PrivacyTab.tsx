"use client";

import {
  Shield,
  Eye,
  Database,
  Lock,
  Cookie,
  ChevronRight,
  CheckCircle2,
  AlertTriangle,
  Fingerprint,
  FileLock2,
  Sparkles,
  Download,
  Trash2,
} from "lucide-react";

import { useMemo, useState } from "react";

interface ToggleItem {
  id: string;
  label: string;
  enabled: boolean;
}

interface DataItem {
  id: string;
  title: string;
  desc: string;
  enabled: boolean;
}

export default function PrivacyTab() {

  const [visibilitySettings, setVisibilitySettings] =
    useState<ToggleItem[]>([
      {
        id: "public_profile",
        label: "Public Profile",
        enabled: true,
      },

      {
        id: "online_status",
        label: "Show Online Status",
        enabled: true,
      },

      {
        id: "show_activity",
        label: "Show Activity",
        enabled: true,
      },

      {
        id: "connected_games",
        label: "Display Connected Games",
        enabled: false,
      },
    ]);

  const [dataControls, setDataControls] =
    useState<DataItem[]>([
      {
        id: "recommendations",
        title: "Personalized Recommendations",
        desc: "Allow content recommendations based on activity.",
        enabled: true,
      },

      {
        id: "analytics",
        title: "Usage Analytics",
        desc: "Help improve services with anonymous analytics.",
        enabled: false,
      },

      {
        id: "ads",
        title: "Advertising Personalization",
        desc: "Use activity data for tailored experiences.",
        enabled: false,
      },
    ]);

  const toggleVisibility = (id: string) => {

    setVisibilitySettings((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              enabled: !item.enabled,
            }
          : item
      )
    );
  };

  const toggleDataControl = (id: string) => {

    setDataControls((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              enabled: !item.enabled,
            }
          : item
      )
    );
  };

  const protectionLevel = useMemo(() => {

    const totalEnabled =
      visibilitySettings.filter(
        (item) => item.enabled
      ).length +

      dataControls.filter(
        (item) => !item.enabled
      ).length;

    if (totalEnabled >= 6)
      return "HIGH";

    if (totalEnabled >= 4)
      return "MEDIUM";

    return "LOW";

  }, [visibilitySettings, dataControls]);

  return (
    <div className="relative">

      {/* BACKGROUND */}
      <div
        className="
          absolute inset-0
          opacity-[0.03]
          pointer-events-none
          [background-image:radial-gradient(#ffffff_1px,transparent_1px)]
          [background-size:24px_24px]
        "
      />

      <div className="relative z-10">

        {/* HEADER */}
        <div className="mb-10 lg:mb-14">

          <p
            className="
              uppercase
              tracking-[0.35em]
              text-red-500
              text-xs sm:text-sm
              font-semibold
              mb-4
            "
          >
            Privacy Center
          </p>

          <h2
            className="
              text-4xl
              sm:text-5xl
              lg:text-6xl
              font-black
              uppercase
              leading-none
            "
          >
            Privacy
          </h2>

          <p
            className="
              text-white/50
              mt-5
              max-w-3xl
              text-base
              sm:text-lg
              leading-relaxed
            "
          >
            Control how your data is collected,
            stored, processed, and shared across
            Duckzr Studios services, games,
            launcher systems, and community
            platforms.
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
            h-185
            w-450
            left-40
          "
        >

          {/* GLOW */}
          <div
            className="
              absolute
              top-[-160px]
              right-[-120px]
              w-[360px]
              h-[360px]
              bg-red-600/10
              blur-[170px]
            "
          />

          {/* TOP */}
          <div
            className="
              border-b border-white/10
              px-5 sm:px-8 lg:px-10
              py-8
            "
          >

            <div
              className="
                flex flex-col
                xl:flex-row
                xl:items-center
                xl:justify-between
                gap-8
                relative
                left-5
              "
            >

              <div className="flex items-start gap-5">

                <div
                  className="
                    w-18 h-18
                    sm:w-20 sm:h-20
                    rounded-3xl
                    flex items-center justify-center
                    shrink-0
                  "
                >

                  <Shield
                    size={38}
                    className="text-white"
                  />

                </div>

                <div>

                  <p
                    className="
                      uppercase
                      tracking-[0.25em]
                      text-red-500
                      text-xs sm:text-sm
                      font-bold
                      mb-2
                    "
                  >
                    Privacy Status
                  </p>

                  <h3
                    className="
                      text-2xl
                      sm:text-3xl
                      font-black
                    "
                  >
                    Enhanced privacy enabled
                  </h3>

                  <p
                    className="
                      text-white/45
                      mt-3
                      max-w-2xl
                      leading-relaxed
                    "
                  >
                    Your account is using secure
                    privacy settings and protected
                    visibility preferences.
                  </p>

                </div>

              </div>

              {/* LEVEL */}
              <div
                className="
                  flex flex-col
                  xl:items-end
                  relative
                  right-10
                "
              >

                <span
                  className="
                    text-white/40
                    uppercase
                    tracking-[0.2em]
                    text-xs sm:text-sm
                  "
                >
                  Protection Level
                </span>

                <h1
                  className="
                    text-5xl
                    sm:text-6xl
                    font-black
                    text-red-500
                    mt-2
                  "
                >
                  {protectionLevel}
                </h1>

              </div>

            </div>

          </div>

          {/* CONTENT */}
          <div
            className="
              p-5
              sm:p-8
              lg:p-10
              space-y-8
              relative
              top-5
              left-50
              w-350
            "
          >

            {/* TOP GRID */}
            <div
              className="
                grid
                grid-cols-1
                2xl:grid-cols-2
                gap-6
              "
            >

              {/* PROFILE VISIBILITY */}
              <div
                className="
                  rounded-3xl
                  border border-white/10
                  bg-black/30
                  p-6
                  sm:p-8
                  h-50
                "
              >

                <div className="flex items-center gap-3 mb-8 relative top-1 left-5">

                  <Eye
                    size={22}
                    className="text-red-500"
                  />

                  <h3
                    className="
                      text-2xl
                      font-black
                    "
                  >
                    Profile Visibility
                  </h3>

                </div>

                <div className="space-y-4 top-2 relative left-0">

                  {visibilitySettings.map((item) => (

                    <div
                      key={item.id}
                      className="
                        flex items-center
                        justify-between
                        gap-4
                        p-5
                        rounded-2xl
                        bg-[#0d0d0d]
                        border border-white/10
                        relative
                        top-1
                      "
                    >

                      <span
                        className="
                          font-medium
                          text-sm sm:text-base
                          relative
                          left-2
                        "
                      >
                        {item.label}
                      </span>

                      <button
                        onClick={() =>
                          toggleVisibility(item.id)
                        }
                        className={`
                          relative
                          w-[58px]
                          h-[34px]
                          rounded-full
                          transition-all
                          shrink-0
                          ${
                            item.enabled
                              ? "bg-red-600"
                              : "bg-white/10"
                          }
                        `}
                      >

                        <div
                          className={`
                            absolute
                            top-1
                            w-6 h-6
                            rounded-full
                            bg-white
                            transition-all
                            ${
                              item.enabled
                                ? "left-[30px]"
                                : "left-1"
                            }
                          `}
                        />

                      </button>

                    </div>

                  ))}

                </div>

              </div>

              {/* DATA CONTROL */}
              <div
                className="
                  rounded-3xl
                  border border-white/10
                  bg-black/30
                  p-6
                  sm:p-8
                "
              >

                <div className="flex items-center gap-3 mb-8 relative top-1 left-5">

                  <Database
                    size={22}
                    className="text-red-500"
                  />

                  <h3
                    className="
                      text-2xl
                      font-black
                    "
                  >
                    Data Control
                  </h3>

                </div>

                <div className="space-y-4 top-2 relative left-0">

                  {dataControls.map((item) => (

                    <div
                      key={item.id}
                      className="
                        rounded-2xl
                        border border-white/10
                        bg-[#0d0d0d]
                        p-5
                      "
                    >

                      <div
                        className="
                          flex items-start
                          justify-between
                          gap-5
                          relative
                          left-2
                        "
                      >

                        <div>

                          <h4 className="font-bold relative left-0">
                            {item.title}
                          </h4>

                          <p
                            className="
                              text-white/45
                              text-sm
                              mt-2
                              leading-relaxed
                            "
                          >
                            {item.desc}
                          </p>

                        </div>

                        <button
                          onClick={() =>
                            toggleDataControl(item.id)
                          }
                          className={`
                            relative
                            w-[58px]
                            h-[34px]
                            rounded-full
                            transition-all
                            shrink-0
                            right-3
                            top-1.5
                            ${
                              item.enabled
                                ? "bg-red-600"
                                : "bg-white/10"
                            }
                          `}
                        >

                          <div
                            className={`
                              absolute
                              top-1
                              w-6 h-6
                              rounded-full
                              bg-white
                              transition-all
                              ${
                                item.enabled
                                  ? "left-[30px]"
                                  : "left-1"
                              }
                            `}
                          />

                        </button>

                      </div>

                    </div>

                  ))}

                </div>

              </div>

            </div>

            {/* SECURITY CARDS */}
            <div
              className="
                grid
                grid-cols-1
                md:grid-cols-2
                xl:grid-cols-3
                gap-6
                relative
                top-5
                w-380
                right-15
              "
            >

              {[
                {
                  icon: Lock,
                  title: "End-to-End Encryption",
                  desc:
                    "Sensitive account information and authentication data remain encrypted across all services.",
                },

                {
                  icon: Fingerprint,
                  title: "Biometric Protection",
                  desc:
                    "Enable fingerprint and device identity verification for enhanced protection.",
                },

                {
                  icon: Cookie,
                  title: "Cookie Preferences",
                  desc:
                    "Customize essential, analytics, and personalization cookie permissions.",
                },
              ].map((item) => {

                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="
                      rounded-3xl
                      border border-white/10
                      bg-black/30
                      p-7
                    "
                  >

                    <Icon
                      size={24}
                      className="text-red-500 mb-6 relative top-3 left-3"
                    />

                    <h4
                      className="
                        text-xl
                        font-black
                        mb-4
                        relative
                        left-10
                        top-[-14]
                      "
                    >
                      {item.title}
                    </h4>

                    <p
                      className="
                        text-white/45
                        leading-relaxed
                        relative
                        left-0
                        top-[-14]
                        text-center
                        text-sm
                      "
                    >
                      {item.desc}
                    </p>

                  </div>
                );
              })}

            </div>

            {/* ACTIONS */}
            <div
              className="
                grid
                grid-cols-1
                xl:grid-cols-2
                gap-6
                relative
                top-10
              "
            >

              {/* EXPORT */}
              <div
                className="
                  rounded-3xl
                  border border-white/10
                  bg-black/30
                  p-8
                "
              >

                <div className="flex items-center gap-3 mb-6 relative top-1 left-5">

                  <FileLock2
                    size={22}
                    className="text-red-500"
                  />

                  <h3
                    className="
                      text-2xl
                      font-black
                    "
                  >
                    Your Data
                  </h3>

                </div>

                <p
                  className="
                    text-white/45
                    leading-relaxed
                    mb-8
                    relative
                    left-0
                    top-2
                    text-sm
                    text-center
                  "
                >
                  Download a copy of your account
                  information, activity history,
                  linked services, and stored
                  preferences.
                </p>

                <button
                  className="
                    group
                    relative
                    left-50
                    top-5
                    overflow-hidden
                    h-[54px]
                    px-8
                    bg-red-600
                    font-black
                    uppercase
                    rounded-2xl
                  "
                >

                  <span
                    className="
                      relative z-10
                      flex items-center gap-3
                      group-hover:text-black
                      transition-colors
                    "
                  >

                    <Download size={18} className="relative left-1" />

                    Request Data Export

                  </span>

                  <div
                    className="
                      absolute inset-0
                      bg-white
                      scale-x-0
                      origin-left
                      transition-transform
                      duration-600
                      group-hover:scale-x-100
                    "
                  />

                </button>

              </div>

              {/* DELETE */}
              <div
                className="
                  rounded-3xl
                  border border-red-500/20
                  bg-red-500/5
                  p-8
                  h-35
                "
              >

                <div className="flex items-center gap-3 mb-6 relative top-1 left-5">

                  <Trash2
                    size={22}
                    className="text-red-500"
                  />

                  <h3
                    className="
                      text-2xl
                      font-black
                    "
                  >
                    Delete Account
                  </h3>

                </div>

                <p
                  className="
                    text-white/45
                    leading-relaxed
                    mb-8
                    relative
                    left-0
                    top-2
                    text-sm
                    text-center
                  "
                >
                  Permanently remove your
                  Duckzr Studios account,
                  launcher access, social
                  presence, and stored data.
                </p>

                <button
                  className="
                    h-[54px]
                    px-8
                    rounded-2xl
                    border border-red-500/30
                    text-red-500
                    font-black
                    uppercase
                    hover:bg-red-500
                    hover:text-black
                    transition-all
                    relative
                    top-5
                    left-60
                  "
                >

                  Delete My Account

                </button>

              </div>

            </div>

            {/* FOOTER */}
            <div
              className="
                rounded-3xl
                border border-white/10
                bg-black/20
                p-6
                sm:p-8
                relative
                top-15
              "
            >

              <div
                className="
                  flex flex-col
                  xl:flex-row
                  xl:items-start
                  gap-6
                "
              >

                <div
                  className="
                    w-14 h-14
                    rounded-2xl
                    flex items-center justify-center
                    shrink-0
                  "
                >

                  <Sparkles
                    size={24}
                    className="text-white"
                  />

                </div>

                <div className="flex-1">

                  <div
                    className="
                      flex items-center
                      justify-between
                      gap-5
                      mb-6
                    "
                  >

                    <h3
                      className="
                        text-2xl
                        font-black
                      "
                    >
                      Privacy recommendations
                    </h3>

                    <ChevronRight
                      size={22}
                      className="text-white/30"
                    />

                  </div>

                  <div className="space-y-4">

                    <div className="flex items-center gap-3">

                      <CheckCircle2
                        size={18}
                        className="text-green-400"
                      />

                      <span className="text-white/70">
                        Two-factor authentication enabled
                      </span>

                    </div>

                    <div className="flex items-center gap-3">

                      <CheckCircle2
                        size={18}
                        className="text-green-400"
                      />

                      <span className="text-white/70">
                        Profile visibility protected
                      </span>

                    </div>

                    <div className="flex items-center gap-3">

                      <AlertTriangle
                        size={18}
                        className="text-yellow-400"
                      />

                      <span className="text-white/70">
                        Review third-party application access
                      </span>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}