"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AuthCallbackPage() {

  const router =
    useRouter();

  const [provider, setProvider] =
    useState("");

  const [username, setUsername] =
    useState("");

  const [tag, setTag] =
    useState("");

  const [avatar, setAvatar] =
    useState("");

  const [providerUsername, setProviderUsername] =
    useState("");

  const [providerAvatar, setProviderAvatar] =
    useState("");

  useEffect(() => {

    const params =
      new URLSearchParams(
        window.location.search
      );

    const token =
      params.get("token");

    const username =
      params.get("username");

    const tag =
      params.get("tag");

    const avatar =
      params.get("avatar");

    const provider =
      params.get("provider");

    const providerUsername =
      params.get("providerUsername");

    const providerAvatar =
      params.get("providerAvatar");

    if (token) {
      localStorage.setItem(
        "duckzr_token",
        token
      );
    }

    localStorage.setItem("duckzr_user",
      JSON.stringify({
        username,
        tag,
        avatar,
        provider,
        providerUsername,
        providerAvatar
      })
    );

    if (provider === "discord") {

      localStorage.setItem("duckzr_user",
        JSON.stringify({
          username,
          tag,
          avatar,
          provider,
          providerUsername,
          providerAvatar
        })
      );
    }

    if (provider === "google") {

      localStorage.setItem(
        "duckzr_google",
        JSON.stringify({
          connected: true
        })
      );
    }

    setProvider(provider || "");
    setUsername(username || "");
    setTag(tag || "");
    setAvatar(avatar || "");
    setProviderUsername(
      providerUsername || ""
    );

    setProviderAvatar(
      providerAvatar || ""
    );

    setTimeout(() => {

      try {

        window.location.href =
          "duckzr://auth-success";

      } catch {}

    }, 2500);

  }, []);

  function OpenSettings() {

    router.push("/settings");

  }

  const providerName =
    provider === "discord"
      ? "Discord"
      : provider === "google"
      ? "Google"
      : "Discord";

  const providerLogo =
    provider === "discord"
      ? "/icons/logo_Google_FullColor_3x_830x271px.original.png"
      : "/icons/Discord-Logo-White.png";

  return (
    <main
      className="
        relative
        h-screen
        overflow-hidden
        bg-black
        text-white
        flex
        items-center
        justify-center
      "
    >

      {/* BACKGROUND */}

      <div
        className="
          absolute
          inset-0
          bg-cover
          bg-center
          opacity-30
        "
        style={{
          backgroundImage:
            "url('/images/settings/DuckzrStudios_LoginBG_Interface.png')"
        }}
      />

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-black/40
          to-black
        "
      />

      {/* TOP LEFT */}

      <div
        className="
          absolute
          top-0
          left-8
          flex
          items-center
          gap-4
          z-20
        "
      >

        <div
          className="
            flex
            items-center
            gap-3
          "
        >

          <Image
            src="/DSCompact.png"
            alt="Duckzr"
            width={200}
            height={200}
          />

        </div>

        <span
          className="
            text-white/30
            text-2xl
          "
        >
          ×
        </span>

        <div
          className="
            flex
            items-center
            gap-3
          "
        >

          <Image
            src={providerLogo}
            alt={providerName}
            width={300}
            height={300}
          />

        </div>

      </div>

      {/* CARD */}

      <div
        className="
          relative
          z-20
          w-[680px]
          rounded-3xl
          border
          border-white/10
          bg-white/5
          backdrop-blur-xl
          p-10
          shadow-2xl
        "
      >

        <div
          className="
            flex
            flex-col
            items-center
            text-center
          "
        >

          <div
            className="
              mb-6
              flex
              items-center
              gap-4
            "
          >

            <Image
            src={
              avatar
                ? avatar.startsWith("http")
                  ? avatar
                  : `duckzr-studios-api-production.up.railway.app/avatars/${avatar}`
                : "/default.png"
            }
            alt="avatar"
            width={82}
            height={82}
            className="rounded-full object-cover"
          />

            {
              providerAvatar && (

                <Image
                  src={providerAvatar}
                  alt="provider"
                  width={82}
                  height={82}
                  className="
                    rounded-full
                    border
                    border-white/20
                  "
                />

              )
            }

          </div>

          <h1
            className="
              text-5xl
              font-black
              tracking-tight
            "
          >
            You're all set!
          </h1>

          <p
            className="
              mt-5
              text-lg
              text-white/70
              leading-relaxed
              max-w-[520px]
            "
          >

            Your account

            <span className="text-white font-semibold">
              {" "}
              {username}#{tag}
            </span>

            {" "}has been successfully linked with{" "}

            <span className="text-white font-semibold">
              {providerName}
            </span>

          </p>

          <p
            className="
              mt-6
              text-sm
              text-white/45
              max-w-[560px]
              leading-relaxed
            "
          >

            Now you’ve got even more ways to squad up.
            See which of your friends play Duckzr,
            send invites instantly and sync your
            social experience directly with your account.

          </p>

          <button
            onClick={OpenSettings}
            className="
              mt-10
              h-14
              px-10
              rounded-2xl
              bg-white
              text-black
              font-bold
              text-lg
              transition-all
              hover:scale-[1.03]
              active:scale-[0.98]
            "
          >
            Manage Account
          </button>

          <p
            className="
              mt-6
              text-xs
              text-white/30
            "
          >
            Opening...
          </p>

        </div>

      </div>

    </main>
  );
}