"use client";

import {
  ShieldCheck,
  Lock,
  KeyRound,
  Smartphone,
  Monitor,
  Globe,
  AlertTriangle,
  Eye,
  Clock3,
  MapPin,
  CheckCircle2,
  XCircle,
} from "lucide-react";

import { useEffect, useMemo, useState } from "react";

import { useRouter } from "next/navigation";

import { useAuth } from "@/contexts/AuthContext";

interface Session {
  id: number;
  deviceName: string;
  platform: string;
  ipAddress: string;
  country: string;
  createdAt: string;
  lastActivity: string;
  isCurrent: boolean;
}

export default function SecurityTab() {

  const router = useRouter();

  const { user } = useAuth();

  const [sessions, setSessions] =
    useState<Session[]>([]);

  const [loadingSessions, setLoadingSessions] =
    useState(true);

  const [currentPassword, setCurrentPassword] =
    useState("");

  const [newPassword, setNewPassword] =
    useState("");

  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [passwordLoading, setPasswordLoading] =
    useState(false);

  const [message, setMessage] =
    useState("");

  const [error, setError] =
    useState("");

  const securityScore = useMemo(() => {

    let score = 25;

    if (user?.emailVerified)
      score += 20;

    if (user?.twoFactorEnabled)
      score += 30;

    if (user?.phoneVerified)
      score += 15;

    if (sessions.length > 0)
      score += 10;

    return Math.min(score, 100);

  }, [
    user,
    sessions
  ]);

  async function loadSessions() {

    try {

      const token =
        localStorage.getItem("token");

      const response =
        await fetch(
          "duckzr-studios-api-production.up.railway.app/api/auth/sessions",
          {
            headers: {
              Authorization:
                `Bearer ${token}`
            }
          }
        );

      if (!response.ok) {
        throw new Error();
      }

      const data =
        await response.json();

      setSessions(data);

    } catch {

      console.log(
        "Failed to load sessions"
      );

    } finally {

      setLoadingSessions(false);

    }
  }

  async function revokeSession(
    id: number
  ) {

    try {

      const token =
        localStorage.getItem("token");

      await fetch(
        `https://duckzr-studios-api-production.up.railway.app/api/auth/revoke-session/${id}`,
        {
          method: "POST",

          headers: {
            Authorization:
              `Bearer ${token}`
          }
        }
      );

      setSessions(prev =>
        prev.filter(x => x.id !== id)
      );

    } catch {

      console.log(
        "Failed to revoke session"
      );

    }
  }

  async function changePassword() {

    try {

      setPasswordLoading(true);

      setError("");

      setMessage("");

      if (
        newPassword !== confirmPassword
      ) {
        setError(
          "Passwords do not match"
        );

        return;
      }

      if (newPassword.length < 6) {

        setError(
          "Password too short"
        );

        return;
      }

      const token =
        localStorage.getItem("token");

      const response =
        await fetch(
          "https://duckzr-studios-api-production.up.railway.app/api/auth/change-password",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",

              Authorization:
                `Bearer ${token}`
            },

            body: JSON.stringify({
              currentPassword,
              newPassword
            })
          }
        );

      if (!response.ok) {

        const text =
          await response.text();

        setError(text);

        return;
      }

      setMessage(
        "Password updated successfully"
      );

      setCurrentPassword("");

      setNewPassword("");

      setConfirmPassword("");

    } catch {

      setError(
        "Failed to update password"
      );

    } finally {

      setPasswordLoading(false);

    }
  }

  useEffect(() => {

    loadSessions();

  }, []);

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
            Account Protection
          </p>

          <h2
            className="
              text-5xl
              font-black
              uppercase
              leading-none
            "
          >
            Security
          </h2>

          <p
            className="
              text-white/50
              mt-5
              max-w-[760px]
              text-lg
            "
          >
            Manage authentication,
            connected devices, active sessions,
            and protection systems for your
            Duckzr Studios account.
          </p>

        </div>

        <div
          className="
            relative
            overflow-hidden
            rounded-[32px]
            border border-white/10
            bg-[#101010]
            min-h-[1250px]
            lg:w-[1400px]
            relative
            left-[340px]
          "
        >

          <div
            className="
              absolute
              top-[-140px]
              right-[-140px]
              w-[380px]
              h-[380px]
              bg-red-600/10
              blur-[160px]
            "
          />

          <div
            className="
              p-10
              relative
              top-5
              w-250
            "
          >

            <div className="flex items-center justify-between relative left-5">

              <div className="flex items-center gap-6">

                <div
                  className="
                    w-20 h-20
                    rounded-3xl
                    bg-green-500/10
                    border border-green-500/20
                    flex items-center justify-center
                  "
                >

                  <ShieldCheck
                    size={38}
                    className="text-green-400"
                  />

                </div>

                <div>

                  <p
                    className="
                      text-green-400
                      uppercase
                      tracking-[0.2em]
                      text-sm
                      font-bold
                      mb-2
                    "
                  >
                    Protected
                  </p>

                  <h3
                    className="
                      text-3xl
                      font-black
                    "
                  >
                    Your account is secure
                  </h3>

                  <p className="text-white/45 mt-2">
                    No suspicious activity
                    detected in recent sessions.
                  </p>

                </div>

              </div>

              <div
                className="
                  hidden lg:flex
                  flex-col
                  items-end
                "
              >

                <span
                  className="
                    text-white/40
                    text-sm
                    uppercase
                    tracking-[0.2em]
                  "
                >
                  Security Score
                </span>

                <h1
                  className="
                    text-6xl
                    font-black
                    text-green-400
                    text-center
                  "
                >
                  {securityScore}%
                </h1>

              </div>

            </div>

          </div>

          <div className="p-10 space-y-10 relative top-10">

            <div
              className="
                border border-white/10
                bg-black/30
                rounded-3xl
                p-8
                relative
                w-250
                left-40
              "
            >

              <div className="flex items-center gap-5 mb-8 relative top-3 w-200 left-90">

                <Lock
                  size={22}
                  className="text-red-500 relative left-3"
                />

                <h3
                  className="
                    text-2xl
                    font-black
                    uppercase
                  "
                >
                  Change Password
                </h3>

              </div>

              <div className="space-y-5 gap-5 flex flex-col relative top-6 w-200 h-70 left-25">

                <input
                  type="password"
                  placeholder="Current Password"
                  value={currentPassword}
                  onChange={(e) =>
                    setCurrentPassword(
                      e.target.value
                    )
                  }
                  className="
                    w-full
                    h-[60px]
                    bg-[#0c0c0c]
                    border border-white/10
                    rounded-2xl
                    px-6
                    outline-none
                    focus:border-red-600/40
                    transition-all
                  "
                />

                <input
                  type="password"
                  placeholder="New Password"
                  value={newPassword}
                  onChange={(e) =>
                    setNewPassword(
                      e.target.value
                    )
                  }
                  className="
                    w-full
                    h-[60px]
                    bg-[#0c0c0c]
                    border border-white/10
                    rounded-2xl
                    px-6
                    outline-none
                    focus:border-red-600/40
                    transition-all
                  "
                />

                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) =>
                    setConfirmPassword(
                      e.target.value
                    )
                  }
                  className="
                    w-full
                    h-[60px]
                    bg-[#0c0c0c]
                    border border-white/10
                    rounded-2xl
                    px-6
                    outline-none
                    focus:border-red-600/40
                    transition-all
                  "
                />

              </div>

              {error && (
                <p className="text-red-500 mt-10 text-center">
                  {error}
                </p>
              )}

              {message && (
                <p className="text-green-500 mt-10 text-center">
                  {message}
                </p>
              )}

              <button
                onClick={changePassword}
                disabled={passwordLoading}
                className="
                  group
                  relative
                  left-95
                  top-[-25]
                  overflow-hidden
                  mt-8
                  w-[250px]
                  h-[58px]
                  px-8
                  bg-red-600
                  font-black
                  uppercase
                  tracking-wide
                  hover:scale-[1.02]
                  transition-all
                "
              >

                <span
                  className="
                    relative z-10
                    group-hover:text-black
                    transition-colors
                    duration-500
                  "
                >
                  {
                    passwordLoading
                    ? "Updating..."
                    : "Update Password"
                  }
                </span>

                <div
                  className="
                    absolute inset-0
                    bg-white
                    scale-x-0
                    origin-left
                    transition-transform
                    duration-500
                    group-hover:scale-x-100
                  "
                />

              </button>

            </div>

            <div
              className="
                border border-white/10
                bg-black/30
                rounded-3xl
                p-8
                relative
                top-10
                w-250
                h-20
                left-40
              "
            >

              <div className="flex items-center gap-3 mb-8 relative top-2 left-3">

                <Monitor
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
                  Active Sessions
                </h3>

              </div>

              <div className="space-y-5 relative top-5 w-full">

                {loadingSessions && (
                  <p className="text-white/40">
                    Loading sessions...
                  </p>
                )}

                {!loadingSessions &&
                  sessions.map(session => (

                  <div
                    key={session.id}
                    className="
                      flex items-center justify-between
                      border border-white/10
                      rounded-2xl
                      bg-[#0d0d0d]
                      p-5
                    "
                  >

                    <div className="flex items-center gap-5">

                      <div
                        className="
                          w-14 h-14
                          rounded-2xl
                          bg-red-600/10
                          flex items-center justify-center
                        "
                      >
                        {
                          session.platform?.includes("Android")
                          ? (
                            <Smartphone
                              size={24}
                              className="text-red-500"
                            />
                          )
                          : (
                            <Monitor
                              size={24}
                              className="text-red-500"
                            />
                          )
                        }
                      </div>

                      <div>

                        <h4 className="font-bold flex items-center gap-3">
                          {session.deviceName || "Unknown Device"}

                          {session.isCurrent && (
                            <span className="text-xs text-green-400">
                              Current
                            </span>
                          )}
                        </h4>

                        <div className="flex items-center gap-5 mt-2">

                          <span
                            className="
                              flex items-center gap-2
                              text-white/40 text-sm
                            "
                          >
                            <MapPin size={14}/>
                            {session.country || "Unknown"}
                          </span>

                          <span
                            className="
                              flex items-center gap-2
                              text-white/40 text-sm
                            "
                          >
                            <Clock3 size={14}/>
                            {
                              new Date(
                                session.lastActivity
                              ).toLocaleString()
                            }
                          </span>

                        </div>

                      </div>

                    </div>

                    {!session.isCurrent && (
                      <button
                        onClick={() =>
                          revokeSession(
                            session.id
                          )
                        }
                        className="
                          text-red-500
                          font-semibold
                          hover:text-red-400
                        "
                      >
                        Remove
                      </button>
                    )}

                  </div>

                ))}

              </div>

            </div>

            <div
              className="
                grid
                grid-cols-3
                gap-6
                relative
                top-14
                w-250
                left-40
              "
            >

              <div
                className="
                  border border-white/10
                  bg-black/30
                  rounded-3xl
                  p-7
                "
              >

                <Eye
                  size={22}
                  className="text-red-500 mb-5 relative left-4 top-3"
                />

                <h4
                  className="
                    text-lg
                    font-black
                    uppercase
                    mb-3
                    relative
                    left-10
                    top-[-14]
                  "
                >
                  Login Alerts
                </h4>

                <p className="text-white/45 text-sm leading-relaxed relative w-60 text-center left-10 top-[-14]">
                  Enabled for your account.
                </p>

              </div>

              <div
                className="
                  border border-white/10
                  bg-black/30
                  rounded-3xl
                  p-7
                "
              >

                <Globe
                  size={22}
                  className="text-red-500 mb-5 relative left-4 top-3"
                />

                <h4
                  className="
                    text-lg
                    font-black
                    uppercase
                    mb-3
                    relative
                    left-10
                    top-[-14]
                  "
                >
                  Region Lock
                </h4>

                <p className="text-white/45 text-sm leading-relaxed relative w-60 text-center left-10 top-[-14]">
                  Coming soon.
                </p>

              </div>

              <div
                className="
                  border border-white/10
                  bg-black/30
                  rounded-3xl
                  p-7
                "
              >

                <AlertTriangle
                  size={22}
                  className="text-red-500 mb-5 relative left-4 top-3"
                />

                <h4
                  className="
                    text-lg
                    font-black
                    uppercase
                    mb-3
                    relative
                    left-10
                    top-[-14]
                  "
                >
                  Recovery Options
                </h4>

                <p className="text-white/45 text-sm leading-relaxed relative w-60 text-center left-10 top-[-14]">
                  Recovery system will be added soon.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}