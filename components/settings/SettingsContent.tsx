"use client";

import AccountTab from "./tabs/AccountTab";
import AppearanceTab from "./tabs/AppearanceTab";
import LanguageTab from "./tabs/LanguageTab";
import LinkedAccountsTab from "./tabs/LinkedAccountsTab";
import PrivacyTab from "./tabs/PrivacyTab";

type Props = {
  activeTab: string;
};

export default function SettingsContent({
  activeTab,
}: Props) {

  return (
    <div
      className="
        flex-1
        min-h-[700px]
        bg-[#111111]
        border border-white/10
        rounded-2xl
        p-6
        shadow-2xl
      "
    >

      {/* ACCOUNT */}
      {activeTab === "account" && (
        <AccountTab />
      )}

      {/* APPEARANCE */}
      {activeTab === "appearance" && (
        <AppearanceTab />
      )}

      {/* LANGUAGE */}
      {activeTab === "language" && (
        <LanguageTab />
      )}

      {/* LINKED ACCOUNTS */}
      {activeTab === "linked" && (
        <LinkedAccountsTab />
      )}

      {/* PRIVACY */}
      {activeTab === "privacy" && (
        <PrivacyTab />
      )}

    </div>
  );
}