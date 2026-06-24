"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouteTransition } from "@/components/transition/RouteTransitionProvider";
import { useState } from "react";
import { login } from "@/lib/api";
import { useAuth } from "@/contexts/AuthContext";

export const metadata = {
  title: "Sign In - DuckzrStudios",
};

export default function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const { navigate } = useRouteTransition();
    const { setUser } = useAuth();

    async function handleLogin(e: React.FormEvent) {

  e.preventDefault();

  try {

    setLoading(true);

    setError("");

    const user = await login(username, password);

    console.log(user);

    /* SALVA USER */
    localStorage.setItem(
      "duckzr_user",
      JSON.stringify(user)
    );

    localStorage.setItem(
      "duckzr_token",
      user.token
    );

    setUser(user);

    /* REDIRECT */
    navigate("/");

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
          src="/DuckzrStudios_LoginBG_Interface.png"
          alt="Background"
          fill
          priority
          className="object-cover opacity-60"
        />
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40" />

      {/* CONTENT */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6">

        {/* LOGO */}
        <Image
          src="/WhiteLogo.png"
          alt="Duckzr"
          width={90}
          height={90}
          className="mb-8"
        />

        {/* CARD */}
        <div className="w-full max-w-[420px] h-[full] overflow-hidden rounded-sm bg-[#e7e7e7] shadow-2xl">

          {/* FORM */}
          <form className="space-y-4" onSubmit={handleLogin}>

            <h1 className="mb-6 text-3xl font-bold text-black">
              Sign In
            </h1>

            {error && (
              <div className="mb-4 text-sm text-red-500">{error}</div>
            )}

            {/* USERNAME */}
            <input
              type="text"
              placeholder="Username"
              className="mb-4 h-[52px] w-full border border-black/10 bg-white px-4 text-black outline-none focus:border-black"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            {/* PASSWORD */}
            <input
              type="password"
              placeholder="Password"
              className="mb-4 h-[52px] w-full border border-black/10 bg-white px-4 text-black outline-none focus:border-black"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {/* OPTIONS */}
            <div className="mb-5 flex items-center justify-between text-sm">

              <label className="flex items-center gap-2 text-black/70">
                <input type="checkbox" />
                Keep me signed in
              </label>

              <button className="text-black/70 hover:text-black">
                Forgot password?
              </button>

            </div>

            {/* LOGIN BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="flex h-[54px] w-full items-center justify-center bg-black text-white transition hover:bg-[#333]"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>

          </form>

          {/* SOCIAL */}
          <div className="border-t border-black/10 bg-[#dcdcdc] p-6">

            <p className="mb-4 text-sm text-black/70 text-center">
              Sign in using
            </p>

            <div className="flex gap-3">

              {/* GOOGLE */}
              <button onClick={() => {window.location.href ="duckzr-studios-api-production.up.railway.app/api/auth/login/google";}}
                  className="w-full h-[58px] bg-white text-black rounded-full font-semibold flex items-center justify-center gap-3 hover:scale-[1.02] transition-all duration-300">

              <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5"/>
              
              Google
              </button>

              {/* DISCORD */}
              <button onClick={() => {window.location.href ="duckzr-studios-api-production.up.railway.app/api/auth/login/discord";}}
                  className="w-full h-[58px] bg-[#F2F3F5] text-black rounded-full font-semibold flex items-center justify-center gap-3 hover:scale-[1.02] transition-all duration-300">
              <img src="https://www.svgrepo.com/show/353655/discord-icon.svg" className="w-5 h-5"/>

              Discord
              </button>

            </div>

          </div>

        </div>

        {/* REGISTER */}
        <div className="mt-6 text-sm text-white/80">

          Don&apos;t have an account?{" "}

          <button
            onClick={() => navigate("/auth/register")}
            className="font-semibold text-[#ff0000]"
            >
                Create a new account
            </button>

        </div>

      </div>

    </main>
  );
}