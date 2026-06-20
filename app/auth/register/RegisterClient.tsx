"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouteTransition } from "@/components/transition/RouteTransitionProvider";
import { useState } from "react";
import { register } from "@/lib/api";

export const metadata = {
  title: "Register - DuckzrStudios",
};

export default function RegisterPage() {
    const { navigate } = useRouteTransition(); 
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    async function handleRegister(e: React.FormEvent) {

  e.preventDefault();

  try {

    setLoading(true);

    setError("");

    await register(
      username,
      email,
      password
    );

    navigate("/auth/login");

  } catch (err: any) {

    setError(err.message);

  } finally {

    setLoading(false);

  }
}
  return (
    <main className="relative min-h-screen overflow-hidden bg-black">

      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <Image
          src="/DuckzrStudios_RegisterBG_Interface.png"
          alt="Background"
          fill
          priority
          className="object-cover opacity-60"
        />
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40" />

      {/* CONTENT */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-20">

        {/* LOGO */}
        <Image
          src="/WhiteLogo.png"
          alt="Duckzr"
          width={90}
          height={90}
          className="mb-8"
        />

        {/* CARD */}
        <div className="w-full max-w-[460px] overflow-hidden rounded-sm bg-[#e7e7e7] shadow-2xl">

          {/* FORM */}
          <div className="space-y-4" onSubmit={handleRegister}>

            <h1 className="mb-6 text-3xl font-bold text-black">
              Create Account
            </h1>

            {error && (
              <div className="mb-4 text-sm text-red-500">{error}</div>
            )}
            {/* USERNAME */}
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mb-4 h-[52px] w-full border border-black/10 bg-white px-4 text-black outline-none focus:border-black"
            />

            {/* EMAIL */}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mb-4 h-[52px] w-full border border-black/10 bg-white px-4 text-black outline-none focus:border-black"
            />

            {/* PASSWORD */}
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mb-4 h-[52px] w-full border border-black/10 bg-white px-4 text-black outline-none focus:border-black"
            />

            {/* TERMS */}
            <label className="mb-5 flex items-start gap-3 text-sm text-black/70">

              <input
                type="checkbox"
                className="mt-1"
              />

              <span>
                I agree to the Terms of Service and Privacy Policy.
              </span>

            </label>

            {/* REGISTER BUTTON */}
            <button
              onClick={handleRegister}
              disabled={loading}
              className="flex h-[54px] w-full items-center justify-center bg-black text-white transition hover:bg-[#333]"
            >
              {loading ? "Creating Account..." : "Register"}
            </button>

          </div>

          {/* SOCIAL */}
          <div className="border-t border-black/10 bg-[#dcdcdc] p-6">

            <p className="mb-4 text-sm text-black text-center">
              Register using
            </p>

            <div className="flex gap-3">

              {/* GOOGLE */}
              <button
                className="
                  flex h-[54px] flex-1 items-center justify-center
                  bg-white text-black
                  transition hover:bg-black hover:text-white
                "
              >
                Google
              </button>

              {/* DISCORD */}
              <button
                className="
                  flex h-[54px] flex-1 items-center justify-center
                  bg-[#5865F2] text-white
                  transition hover:opacity-90
                "
              >
                Discord
              </button>

            </div>

          </div>

        </div>

        {/* LOGIN */}
        <div className="mt-6 text-sm text-white/80">

          Already have an account?{" "}

          <button
            onClick={() => navigate("/auth/login")}
            className="font-semibold text-[#ff0000]"
            >
                Sign In
            </button>

        </div>

      </div>

    </main>
  );
}