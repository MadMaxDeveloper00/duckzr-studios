"use client";

import {
  BadgeCheck,
  Shield,
  Mail,
  Lock,
  Pencil,
  Camera,
  CalendarDays,
  Link2,
  Sparkles,
  Monitor,
  Smartphone,
  KeyRound,
  Eye,
  EyeOff,
  TriangleAlert,
} from "lucide-react";

import { useAuth } from "@/contexts/AuthContext";

import {
  useEffect,
  useState,
} from "react";

import { useRouter } from "next/navigation";

export default function AccountTab() {

  const router = useRouter();

  const {
    user,
    token,
    refreshUser,
  } = useAuth();

  const [showPassword, setShowPassword] =
    useState(false);

  const [editing, setEditing] =
    useState(false);

  const [username, setUsername] =
    useState("");

  const [tag, setTag] =
    useState("");

  const [saving, setSaving] =
    useState(false);

  const [devices, setDevices] =
    useState(0);

  const [nameCooldown, setNameCooldown] =
    useState<string | null>(null);

  const [tagCooldown, setTagCooldown] =
    useState<string | null>(null);

  useEffect(() => {

    if (!user) return;

    setUsername(user.username || "");
    setTag(user.tag || "");

    loadDevices();

    checkCooldowns();

  }, [user]);

  async function loadDevices() {

    try {

      const response = await fetch(
        "https://duckzr-studios-api-production.up.railway.app/api/session/devices",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) return;

      const data = await response.json();

      setDevices(data.count || 0);

    } catch {

      console.log("Failed to load devices");

    }

  }

  function checkCooldowns() {

    if (!user) return;

    if (user.usernameChangedAt) {

      const changed =
        new Date(user.usernameChangedAt);

      changed.setMonth(changed.getMonth() + 2);

      if (changed > new Date()) {

        setNameCooldown(
          changed.toLocaleDateString()
        );

      }

    }

    if (user.tagChangedAt) {

      const changed =
        new Date(user.tagChangedAt);

      changed.setMonth(changed.getMonth() + 2);

      if (changed > new Date()) {

        setTagCooldown(
          changed.toLocaleDateString()
        );

      }

    }

  }

  async function saveAccount() {

    try {

      setSaving(true);

      const response = await fetch(
        "https://duckzr-studios-api-production.up.railway.app/api/user/update-profile",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },

          body: JSON.stringify({
            username,
            tag,
          }),
        }
      );

      const data =
        await response.json();

      if (!response.ok) {

        alert(data.message);
        return;

      }

      await refreshUser?.();

      setEditing(false);

    } catch {

      alert("Failed to update profile");

    } finally {

      setSaving(false);

    }

  }

  function getRoleColor() {

    switch (user?.displayRole) {

      case "Owner":
        return "text-orange-400";

      case "Developer":
        return "text-red-400";

      case "ContentCreator":
        return "text-blue-400";

      case "ProPlayer":
        return "text-green-400";

      default:
        return "text-white/60";

    }

  }

  const roleStyles: Record<string, string> = {
    Owner:
      "bg-orange-500/15 text-orange-400 border-orange-500/20",

    Developer:
      "bg-red-500/15 text-red-400 border-red-500/20",

    ContentCreator:
      "bg-blue-500/15 text-blue-400 border-blue-500/20",

    ProPlayer:
      "bg-green-500/15 text-green-400 border-green-500/20",

    User:
      "bg-white/10 text-white/70 border-white/10",
  };

  return (
    <div className="relative">

      <div
        className="
          absolute inset-0 opacity-[0.03]
          pointer-events-none
          [background-image:radial-gradient(#ffffff_1px,transparent_1px)]
          [background-size:24px_24px]
        "
      />

      <div className="relative z-10">

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
            User Settings
          </p>

          <h2
            className="
              text-5xl
              font-black
              uppercase
              leading-none
            "
          >
            Account
          </h2>

          <p
            className="
              text-white/50
              mt-5
              max-w-[720px]
              text-lg
            "
          >
            Manage your account identity,
            connected services, authentication,
            and personal information.
          </p>

        </div>

        <div
          className="
            relative
            left-85
            top-10
            overflow-hidden
            rounded-[32px]
            border border-white/10
            bg-[#101010]
            w-[1500px]
            h-[1000px]
            mx-auto
          "
        >

          <div
            className="
              absolute
              top-[-150px]
              right-[-150px]
              w-[380px]
              h-[420px]
              bg-red-600/10
              blur-[160px]
            "
          />

          <div
            className="
              relative
              h-[280px]
              overflow-hidden
              border-b border-white/10
            "
          >

            <img
              src={
                user?.banner
                  ? `/banners/${user.banner}`
                  : "/images/settings/DuckzrStudios_LoginBG_Interface.png"
              }
              alt="Banner"
              className="
                absolute inset-0
                w-full h-full
                object-cover
                opacity-50
              "
            />

            <div className="absolute inset-0 bg-black/60" />

            <div
              className="
                absolute
                right-10
                top-1/2
                -translate-y-1/2
                pointer-events-none
                select-none
              "
            >

              <h1
                className="
                  text-[140px]
                  font-black
                  uppercase
                  tracking-[-0.08em]
                  text-transparent
                  opacity-20
                  [-webkit-text-stroke:1px_rgba(255,255,255,0.25)]
                "
              >
                ACCOUNT
              </h1>

            </div>

            <button
              onClick={() =>
                alert(
                  "This feature is currently unavailable."
                )
              }
              className="
                absolute
                top-6 right-6
                h-[50px]
                w-[180px]
                px-5
                rounded-xl
                border border-white/10
                bg-black/40
                backdrop-blur-xl
                flex items-center gap-3
                hover:border-red-600/30
                hover:bg-black/60
                transition-all
              "
            >

              <Camera
                size={20}
                className="text-white relative left-4"
              />

              <h4 className="text-white relative left-3">
                Change Banner
              </h4>

            </button>

          </div>

          <div className="px-10 pb-10">

            <div className="flex flex-wrap items-end justify-between gap-10">

              <div
                className="
                  flex flex-wrap items-end gap-8
                  -mt-20
                "
              >

                <div className="relative group">

                  <img
                    src={`/avatars/${user?.avatar}`}
                    alt={user?.username}
                    className="
                      w-40 h-40
                      rounded-full
                      object-cover
                      border-[5px]
                      border-[#101010]
                      shadow-2xl
                    "
                  />

                  <button
                    onClick={() =>
                      alert(
                        "Avatar upload not available yet."
                      )
                    }
                    className="
                      absolute
                      bottom-3 right-3
                      w-11 h-11
                      rounded-full
                      bg-red-600
                      flex items-center justify-center
                      opacity-0
                      group-hover:opacity-100
                      transition-all
                    "
                  >
                    <Pencil size={18}/>
                  </button>

                </div>

                <div className="pb-4 relative top-[-20px]">

                  <div className="flex items-center gap-3 flex-wrap">

                    {editing ? (
                      <input
                        value={username}
                        maxLength={32}
                        onChange={(e) =>
                          setUsername(
                            e.target.value
                          )
                        }
                        className="
                          bg-black/40
                          border border-white/10
                          rounded-xl
                          px-5
                          h-[60px]
                          text-4xl
                          font-black
                          outline-none
                        "
                      />
                    ) : (
                      <h3
                        className="
                          text-5xl
                          font-black
                        "
                      >
                        {user?.username}
                      </h3>
                    )}

                    {user?.verified && (
                      <BadgeCheck
                        size={28}
                        className={getRoleColor()}
                      />
                    )}

                  </div>

                  {editing ? (
                    <div className="mt-3 space-y-2">

                      <input
                        value={tag}
                        maxLength={5}
                        onChange={(e) =>
                          setTag(
                            e.target.value
                          )
                        }
                        className="
                          bg-black/40
                          border border-white/10
                          rounded-xl
                          px-5
                          h-[50px]
                          outline-none
                        "
                      />

                      <p className="text-white/40 text-sm">
                        Max 32 characters for username
                        and 5 for tag.
                      </p>

                    </div>
                  ) : (
                    <p
                      className="
                        text-white/45
                        mt-2
                        text-lg
                      "
                    >
                      #{user?.tag}
                    </p>
                  )}

                  {(nameCooldown || tagCooldown) && (

                    <div
                      className="
                        mt-4
                        flex items-center gap-3
                        text-yellow-400
                        text-sm
                      "
                    >

                      <TriangleAlert size={18}/>

                      <span>
                        Username or tag already changed.
                        Available again after:
                        {" "}
                        {nameCooldown || tagCooldown}
                      </span>

                    </div>

                  )}

                  <div
                    className={`
                      inline-flex
                      items-center
                      gap-2
                      px-4 py-2
                      rounded-full
                      border
                      text-sm
                      font-semibold
                      mt-5
                      ${roleStyles[user?.displayRole || "User"]}
                    `}
                  >

                    <Shield size={15}/>

                    {user?.displayRole}

                  </div>

                </div>

              </div>

              <button
                onClick={() => {

                  if (editing) {

                    saveAccount();
                    return;

                  }

                  setEditing(true);

                }}
                className="
                  group
                  relative
                  overflow-hidden
                  h-[60px]
                  w-[200px]
                  px-10
                  rounded-xl
                  bg-red-600
                  font-black
                  uppercase
                  tracking-wide
                "
              >

                <span
                  className="
                    relative z-10
                    group-hover:text-black
                    transition-colors
                    duration-600
                  "
                >
                  {saving
                    ? "Saving..."
                    : editing
                    ? "Save Changes"
                    : "Edit Account"}
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

            <div
              className="
                grid
                grid-cols-1
                lg:grid-cols-2
                gap-6
                mt-16
                relative
                top-10
                w-250
                left-50
              "
            >

              <div
                className="
                  border border-white/10
                  bg-black/30
                  rounded-2xl
                  p-6
                "
              >

                <div className="flex items-center gap-4">

                  <div
                    className="
                      w-12 h-12
                      rounded-xl
                      bg-red-600/10
                      flex items-center justify-center
                    "
                  >
                    <Mail
                      size={22}
                      className="text-red-500"
                    />
                  </div>

                  <div>

                    <p className="text-white/40 text-sm">
                      Email Address
                    </p>

                    <h4 className="font-semibold">
                      {user?.email}
                    </h4>

                  </div>

                </div>

              </div>

              <div
                className="
                  border border-white/10
                  bg-black/30
                  rounded-2xl
                  p-6
                "
              >

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-4">

                    <div
                      className="
                        w-12 h-12
                        rounded-xl
                        bg-red-600/10
                        flex items-center justify-center
                      "
                    >
                      <Lock
                        size={22}
                        className="text-red-500"
                      />
                    </div>

                    <div>

                      <p className="text-white/40 text-sm">
                        Password
                      </p>

                      <h4 className="font-semibold">
                        {showPassword
                          ? user?.rawPassword || "Unavailable"
                          : "••••••••••••"}
                      </h4>

                    </div>

                  </div>

                  <button
                    onClick={() =>
                      setShowPassword(
                        !showPassword
                      )
                    }
                    className="relative right-3 -top-0 text-white/40 hover:text-white transition-colors"
                  >

                    {showPassword
                      ? <EyeOff/>
                      : <Eye/>}

                  </button>

                </div>

              </div>

              <div
                className="
                  border border-white/10
                  bg-black/30
                  rounded-2xl
                  p-6
                "
              >

                <div className="flex items-center gap-4">

                  <div
                    className="
                      w-12 h-12
                      rounded-xl
                      bg-red-600/10
                      flex items-center justify-center
                    "
                  >
                    <CalendarDays
                      size={22}
                      className="text-red-500"
                    />
                  </div>

                  <div>

                    <p className="text-white/40 text-sm">
                      Member Since
                    </p>

                    <h4 className="font-semibold">
                      {new Date(
                        user?.createdAt || ""
                      ).toLocaleDateString()}
                    </h4>

                  </div>

                </div>

              </div>

              <div
                className="
                  border border-white/10
                  bg-black/30
                  rounded-2xl
                  p-6
                "
              >

                <div className="flex items-center gap-4">

                  <div
                    className="
                      w-12 h-12
                      rounded-xl
                      bg-red-600/10
                      flex items-center justify-center
                    "
                  >
                    <Monitor
                      size={22}
                      className="text-red-500"
                    />
                  </div>

                  <div>

                    <p className="text-white/40 text-sm">
                      Devices
                    </p>

                    <h4 className="font-semibold">
                      {devices} Active Devices
                    </h4>

                  </div>

                </div>

              </div>

            </div>

            <div className="mt-16 relative top-15">

              <div className="flex items-center gap-3 mb-6 relative left-5">

                <KeyRound
                  size={22}
                  className="text-red-500"
                />

                <h3
                  className="
                    text-2xl
                    font-black
                    uppercase
                  "
                >
                  Security
                </h3>

              </div>

              <div
                className="
                  grid
                  grid-cols-1
                  lg:grid-cols-3
                  gap-0
                  relative
                  left-8
                  top-5
                "
              >

                <div
                  className="
                    border border-white/10
                    bg-black/30
                    rounded-2xl
                    p-6
                    w-100
                    relative
                    left-10
                  "
                >

                  <h4 className="font-bold mb-2 relative left-3">
                    Two Factor Authentication
                  </h4>

                  <p className="text-white/45 text-sm relative left-3">
                    Add an extra layer of
                    protection to your account.
                  </p>

                  <button
                    onClick={() =>
                      router.push(
                        "/settings/security"
                      )
                    }
                    className="
                      mt-5
                      text-red-500
                      text-sm
                      bg-red-600/10
                      px-4 py-2
                      rounded-full
                      font-semibold
                      relative
                      left-3
                      top-1
                      h-10
                      w-[130px]
                      hover:w-[140px]
                      hover:bg-red-600/60
                      hover:text-white
                      transition-all
                      duration-600
                    "
                  >
                    {user?.twoFactorEnabled
                      ? "Configured"
                      : "Enable"}
                  </button>

                </div>

                <div
                  className="
                    border border-white/10
                    bg-black/30
                    rounded-2xl
                    p-6
                    w-100
                  "
                >

                  <h4 className="font-bold mb-2 relative left-3">
                    Connected Accounts
                  </h4>

                  <p className="text-white/45 text-sm relative left-3">
                    Manage Discord and Google services.
                  </p>

                  <button
                    onClick={() =>
                      router.push(
                        "/settings"
                      )
                    }
                    className="
                      mt-5
                      text-red-500
                      text-sm
                      bg-red-600/10
                      px-4 py-2
                      rounded-full
                      font-semibold
                      relative
                      left-3
                      top-1
                      h-10
                      w-[130px]
                      hover:w-[140px]
                      hover:bg-red-600/60
                      hover:text-white
                      transition-all
                      duration-600
                    "
                  >
                    Manage
                  </button>

                </div>

                <div
                  className="
                    border border-white/10
                    bg-black/30
                    rounded-2xl
                    p-6
                    h-25
                    w-100
                    relative
                    right-10
                  "
                >

                  <h4 className="font-bold mb-2 relative left-3">
                    Login Activity
                  </h4>

                  <p className="text-white/45 text-sm relative left-3">
                    Review recent account sessions.
                  </p>

                  <button
                    onClick={() =>
                      router.push(
                        "/settings"
                      )
                    }
                    className="
                      mt-5
                      text-red-500
                      text-sm
                      bg-red-600/10
                      px-4 py-2
                      rounded-full
                      font-semibold
                      relative
                      left-3
                      top-1
                      h-10
                      w-[130px]
                      hover:w-[140px]
                      hover:bg-red-600/60
                      hover:text-white
                      transition-all
                      duration-600
                    "
                  >
                    View Activity
                  </button>

                </div>

              </div>

            </div>

            <div className="mt-16 relative top-24">

              <div className="flex items-center gap-3 mb-6 relative left-5">

                <Link2
                  size={22}
                  className="text-red-500"
                />

                <h3
                  className="
                    text-2xl
                    font-black
                    uppercase
                  "
                >
                  Connected Services
                </h3>

              </div>

              <div
                className="
                  grid
                  grid-cols-1
                  lg:grid-cols-3
                  gap-6
                  relative
                  top-5
                  left-8
                  w-250
                  h-15
                "
              >

                <div
                  className="
                    border border-white/10
                    bg-black/30
                    rounded-2xl
                    p-6
                  "
                >

                  <div className="flex items-center justify-between">

                    <div>

                      <h4 className="font-bold relative left-3">
                        Google
                      </h4>

                      <p className="text-white/45 text-sm mt-1 relative left-3">
                        {user?.googleLinked
                          ? "Connected"
                          : "Not Connected"}
                      </p>

                    </div>

                    <div
                      className={`
                        w-3 h-3
                        rounded-full
                        relative
                        right-3
                        top-1
                        ${
                          user?.googleLinked
                            ? "bg-green-500"
                            : "bg-red-500"
                        }
                      `}
                    />

                  </div>

                </div>

                <div
                  className="
                    border border-white/10
                    bg-black/30
                    rounded-2xl
                    p-6
                  "
                >

                  <div className="flex items-center justify-between">

                    <div>

                      <h4 className="font-bold relative left-3">
                        Discord
                      </h4>

                      <p className="text-white/45 text-sm mt-1 relative left-3">
                        {user?.discordLinked
                          ? "Connected"
                          : "Not Connected"}
                      </p>

                    </div>

                    <div
                      className={`
                        w-3 h-3
                        rounded-full
                        relative
                        right-3
                        top-1
                        ${
                          user?.discordLinked
                            ? "bg-green-500"
                            : "bg-red-500"
                        }
                      `}
                    />

                  </div>

                </div>

                <div
                  className="
                    border border-white/10
                    bg-black/30
                    rounded-2xl
                    p-6
                  "
                >

                  <div className="flex items-center justify-between">

                    <div>

                      <h4 className="font-bold relative left-3">
                        Phone Verification
                      </h4>

                      <p className="text-white/45 text-sm mt-1 relative left-3">
                        Not configured
                      </p>

                    </div>

                    <Smartphone
                      size={20}
                      className="text-white/30 relative right-3 top-1"
                    />

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