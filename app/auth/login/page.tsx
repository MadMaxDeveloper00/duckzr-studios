import type { Metadata } from "next";
import LoginClient from "./LoginClient";

export const metadata: Metadata = {
  title: "Sign In - DuckzrStudios",
};

export default function Page() {
  return <LoginClient />;
}