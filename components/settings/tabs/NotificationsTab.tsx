"use client";

import {
  Bell,
  ShieldAlert,
  MessageSquare,
  Trophy,
  Gift,
  Users,
  Gamepad2,
  Mail,
  Smartphone,
  Volume2,
  Check,
  ChevronRight,
  Sparkles,
} from "lucide-react";

import { useEffect, useState } from "react";
import api from "@/services/api";
import { useAuth } from "@/contexts/AuthContext";

interface NotificationGroup {
  title: string;
  description: string;
  icon: any;
  enabled: boolean;
}

export default function NotificationsTab() {

  const { token } = useAuth();

  const [enabled, setEnabled] =
    useState(true);

  const [loading, setLoading] =
    useState(true);

  const [saving, setSaving] =
    useState(false);

  const [notificationGroups, setNotificationGroups] =
    useState<NotificationGroup[]>([
      {
        title: "Security Alerts",
        description:
          "Login attempts, suspicious activity, password changes.",
        icon: ShieldAlert,
        enabled: true,
      },

      {
        title: "Friend Activity",
        description:
          "Friends online, invites, messages and social interactions.",
        icon: Users,
        enabled: true,
      },

      {
        title: "News & Updates",
        description:
          "Game updates, launcher updates and announcements.",
        icon: Bell,
        enabled: true,
      },

      {
        title: "Messages",
        description:
          "Direct messages, support replies and notifications.",
        icon: MessageSquare,
        enabled: false,
      },

      {
        title: "Rewards",
        description:
          "Drops, rewards, promotions and event unlocks.",
        icon: Gift,
        enabled: true,
      },

      {
        title: "Competitive",
        description:
          "Ranked matches, tournaments and progression updates.",
        icon: Trophy,
        enabled: false,
      },
    ]);

  useEffect(() => {

    loadNotifications();

  }, []);

  async function loadNotifications() {

    try {

      const response =
        await api.get(
          "https://localhost:7071/api/user/notifications",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

      if (response.data) {

        setEnabled(
          response.data.notificationsEnabled
        );

        setNotificationGroups([
          {
            title: "Security Alerts",
            description:
              "Login attempts, suspicious activity, password changes.",
            icon: ShieldAlert,
            enabled:
              response.data.securityAlerts,
          },

          {
            title: "Friend Activity",
            description:
              "Friends online, invites, messages and social interactions.",
            icon: Users,
            enabled:
              response.data.friendActivity,
          },

          {
            title: "News & Updates",
            description:
              "Game updates, launcher updates and announcements.",
            icon: Bell,
            enabled:
              response.data.newsUpdates,
          },

          {
            title: "Messages",
            description:
              "Direct messages, support replies and notifications.",
            icon: MessageSquare,
            enabled:
              response.data.messages,
          },

          {
            title: "Rewards",
            description:
              "Drops, rewards, promotions and event unlocks.",
            icon: Gift,
            enabled:
              response.data.rewards,
          },

          {
            title: "Competitive",
            description:
              "Ranked matches, tournaments and progression updates.",
            icon: Trophy,
            enabled:
              response.data.competitive,
          },
        ]);
      }

    } catch (error) {

      console.error(
        "Failed to load notifications",
        error
      );

    } finally {

      setLoading(false);

    }
  }

  async function saveNotifications(
    updatedGroups: NotificationGroup[],
    globalEnabled: boolean
  ) {

    try {

      setSaving(true);

      await api.post(
        "https://localhost:7071/api/user/notifications",
        {
          notificationsEnabled:
            globalEnabled,

          securityAlerts:
            updatedGroups.find(
              x => x.title ===
              "Security Alerts"
            )?.enabled,

          friendActivity:
            updatedGroups.find(
              x => x.title ===
              "Friend Activity"
            )?.enabled,

          newsUpdates:
            updatedGroups.find(
              x => x.title ===
              "News & Updates"
            )?.enabled,

          messages:
            updatedGroups.find(
              x => x.title ===
              "Messages"
            )?.enabled,

          rewards:
            updatedGroups.find(
              x => x.title ===
              "Rewards"
            )?.enabled,

          competitive:
            updatedGroups.find(
              x => x.title ===
              "Competitive"
            )?.enabled,
        },
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

    } catch (error) {

      console.error(
        "Failed to save notifications",
        error
      );

    } finally {

      setSaving(false);

    }
  }

  async function toggleGlobal() {

    const newState =
      !enabled;

    setEnabled(newState);

    await saveNotifications(
      notificationGroups,
      newState
    );
  }

  async function toggleCategory(index: number) {

    const updated =
      [...notificationGroups];

    updated[index].enabled =
      !updated[index].enabled;

    setNotificationGroups(updated);

    await saveNotifications(
      updated,
      enabled
    );
  }

  if (loading) {

    return (
      <div
        className="
          h-[400px]
          flex
          items-center
          justify-center
          text-white/40
          text-xl
          font-bold
        "
      >
        Loading notifications...
      </div>
    );
  }

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
            Preferences
          </p>

          <h2
            className="
              text-5xl
              font-black
              uppercase
              leading-none
            "
          >
            Notifications
          </h2>

          <p
            className="
              text-white/50
              mt-5
              max-w-[760px]
              text-lg
            "
          >
            Configure platform alerts,
            social notifications, security
            warnings, launcher updates,
            and communication preferences.
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
            h-[880px]
            w-300
            left-110
          "
        >

          {/* GLOW */}
          <div
            className="
              absolute
              top-[-140px]
              right-[-140px]
              w-[340px]
              h-[340px]
              bg-red-600/10
              blur-[160px]
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

              <div className="flex items-center gap-6 relative left-5">

                <div
                  className="
                    w-20 h-20
                    rounded-3xl
                    bg-transparent
                    flex items-center justify-center
                  "
                >

                  <Bell
                    size={36}
                    className="text-white"
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
                    Notification Center
                  </p>

                  <h3
                    className="
                      text-3xl
                      font-black
                    "
                  >
                    Real-time communication
                  </h3>

                  <p className="text-white/45 mt-2">
                    Stay connected with your
                    account, games and community.
                  </p>

                </div>

              </div>

              {/* GLOBAL TOGGLE */}
              <button
                onClick={toggleGlobal}
                disabled={saving}
                className={`
                  relative
                  w-[90px]
                  h-[48px]
                  right-5
                  rounded-full
                  transition-all
                  ${
                    enabled
                      ? "bg-red-600"
                      : "bg-white/10"
                  }
                `}
              >

                <div
                  className={`
                    absolute
                    top-1
                    w-[40px]
                    h-[40px]
                    rounded-full
                    bg-white
                    transition-all
                    ${
                      enabled
                        ? "left-[46px]"
                        : "left-1"
                    }
                  `}
                />

              </button>

            </div>

          </div>

          {/* CONTENT */}
          <div className="p-10 space-y-10">

            {/* DELIVERY METHODS */}
            <div>

              <div className="flex items-center gap-3 mb-6 relative left-5 top-2">

                <Mail
                  size={20}
                  className="text-white"
                />

                <h3
                  className="
                    text-2xl
                    font-black
                    uppercase
                  "
                >
                  Delivery Methods
                </h3>

              </div>

              <div
                className="
                  grid
                  grid-cols-3
                  gap-6
                  relative
                  top-4
                "
              >

                {/* EMAIL */}
                <div
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

                  <div
                    className="
                      absolute inset-0
                      opacity-0
                      group-hover:opacity-100
                      transition-opacity
                      bg-gradient-to-br
                      from-red-600/10
                      to-transparent
                    "
                  />

                  <div className="relative z-10">

                    <Mail
                      size={26}
                      className="text-red-500 mb-5 relative left-5 top-2"
                    />

                    <h4
                      className="
                        text-xl
                        font-black
                        mb-3
                        relative
                        top-[-20px]
                        left-13
                      "
                    >
                      Email
                    </h4>

                    <p className="text-white/45 relative top-[-20px] left-0">
                      Receive updates directly
                      in your inbox.
                    </p>

                  </div>

                </div>

                {/* PUSH */}
                <div
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

                  <div
                    className="
                      absolute inset-0
                      opacity-0
                      group-hover:opacity-100
                      transition-opacity
                      bg-gradient-to-br
                      from-red-600/10
                      to-transparent
                    "
                  />

                  <div className="relative z-10">

                    <Smartphone
                      size={26}
                      className="text-red-500 mb-5 relative left-5 top-2"
                    />

                    <h4
                      className="
                        text-xl
                        font-black
                        mb-3
                        relative
                        top-[-20px]
                        left-13
                      "
                    >
                      Push Notifications
                    </h4>

                    <p className="text-white/45 relative top-[-20px] left-0">
                      Receive real-time alerts
                      on your devices.
                    </p>

                  </div>

                </div>

                {/* SOUND */}
                <div
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

                  <div
                    className="
                      absolute inset-0
                      opacity-0
                      group-hover:opacity-100
                      transition-opacity
                      bg-gradient-to-br
                      from-red-600/10
                      to-transparent
                    "
                  />

                  <div className="relative z-10">

                    <Volume2
                      size={26}
                      className="text-red-500 mb-5 relative left-5 top-2"
                    />

                    <h4
                      className="
                        text-xl
                        font-black
                        mb-3
                        relative
                        top-[-20px]
                        left-13
                      "
                    >
                      Sound Alerts
                    </h4>

                    <p className="text-white/45 relative top-[-20px] left-0">
                      Enable notification sounds
                      inside the launcher.
                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* NOTIFICATION GROUPS */}
            <div>

              <div className="flex items-center gap-3 mb-6 relative top-5 left-5">

                <Gamepad2
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
                  Notification Categories
                </h3>

              </div>

              <div className="space-y-5 relative top-10 w-250 left-23">

                {notificationGroups.map((item, index) => {

                  const Icon = item.icon;

                  return (
                    <button
                      key={index}
                      onClick={() =>
                        toggleCategory(index)
                      }
                      className="
                        group
                        relative
                        overflow-hidden
                        w-full
                        border border-white/10
                        bg-black/30
                        rounded-3xl
                        p-7
                        text-left
                        hover:border-red-600/30
                        transition-all
                      "
                    >

                      {/* HOVER */}
                      <div
                        className="
                          absolute inset-0
                          opacity-0
                          group-hover:opacity-100
                          transition-opacity
                          duration-500
                          bg-gradient-to-r
                          from-red-600/10
                          to-transparent
                        "
                      />

                      <div
                        className="
                          relative z-10
                          flex items-center justify-between
                        "
                      >

                        <div className="flex items-center gap-6">

                          {/* ICON */}
                          <div
                            className="
                              w-16 h-16
                              rounded-2xl
                              bg-[#141414]
                              border border-white/10
                              flex items-center justify-center
                            "
                          >

                            <Icon
                              size={28}
                              className="text-red-500"
                            />

                          </div>

                          {/* INFO */}
                          <div>

                            <h4
                              className="
                                text-xl
                                font-black
                                mb-2
                              "
                            >
                              {item.title}
                            </h4>

                            <p className="text-white/45">
                              {item.description}
                            </p>

                          </div>

                        </div>

                        {/* RIGHT */}
                        <div className="flex items-center gap-5">

                          <div
                            className={`
                              px-4 py-2
                              rounded-full
                              text-sm
                              font-semibold
                              border
                              ${
                                item.enabled
                                  ? "bg-green-500/10 border-green-500/20 text-green-400"
                                  : "bg-white/5 border-white/10 text-white/45"
                              }
                            `}
                          >

                            {item.enabled
                              ? "Enabled"
                              : "Disabled"}

                          </div>

                          <ChevronRight
                            size={22}
                            className="
                              text-white/25
                              group-hover:text-red-500
                              transition-colors
                            "
                          />

                        </div>

                      </div>

                    </button>
                  );
                })}

              </div>

            </div>

            {/* FUTURE SYSTEM */}
            <div
              className="
                border border-dashed border-white/10
                bg-black/20
                rounded-3xl
                p-8
                flex items-start gap-5
                relative
                top-15
                left-25
                w-251
                h-[88px]
              "
            >

              <div
                className="
                  w-14 h-14
                  rounded-2xl
                  bg-red-600/10
                  border border-red-600/20
                  flex items-center justify-center
                  shrink-0
                  relative
                  left-3
                  top-3
                "
              >

                <Sparkles
                  size={24}
                  className="text-red-500"
                />

              </div>

              <div>

                <h3
                  className="
                    text-xl
                    font-black
                    mb-3
                  "
                >
                  Smart notification system
                </h3>

                <p
                  className="
                    text-white/45
                    leading-relaxed
                  "
                >
                  Future updates will include
                  intelligent notification filtering,
                  per-game settings, mobile sync,
                  launcher overlays, activity tracking,
                  and personalized alert priorities.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}