"use client";

import { useState } from "react";

import SettingsSidebar from "@/components/settings/SettingsSidebar";

import AccountTab from "@/components/settings/tabs/AccountTab";
import SecurityTab from "@/components/settings/tabs/SecurityTab";
import LinkedAccountsTab from "@/components/settings/tabs/LinkedAccountsTab";
import LanguageTab from "@/components/settings/tabs/LanguageTab";
import NotificationsTab from "@/components/settings/tabs/NotificationsTab";
import PrivacyTab from "@/components/settings/tabs/PrivacyTab";

export default function SettingsPage() {

  const [tab, setTab] =
    useState("account");

  function renderTab() {

    switch (tab) {

      case "account":
        return <AccountTab />;

      case "security":
        return <SecurityTab />;

      case "linked":
        return <LinkedAccountsTab />;

      case "language":
        return <LanguageTab />;

      case "notifications":
        return <NotificationsTab />;

      case "privacy":
        return <PrivacyTab />;

      default:
        return <AccountTab />;
    }
  }

  return (
    <div
      className="
        min-h-screen
        bg-[#0b0b0b]
        flex
        text-white
      "
    >

      <SettingsSidebar
        tab={tab}
        setTab={setTab}
      />

      <main
        className="
          flex-1
          p-10
          overflow-y-auto
        "
      >
        {renderTab()}
      </main>

    </div>
  );
}