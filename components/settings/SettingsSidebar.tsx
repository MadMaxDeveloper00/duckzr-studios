"use client";

import {
  User,
  Shield,
  Globe,
  Bell,
  Lock,
  Link2,
} from "lucide-react";

type Props = {
  tab: string;
  setTab: (tab: string) => void;
};

const items = [
  {
    id: "account",
    label: "Account",
    icon: User,
  },
  {
    id: "security",
    label: "Security",
    icon: Shield,
  },
  {
    id: "linked",
    label: "Linked Accounts",
    icon: Link2,
  },
  {
    id: "language",
    label: "Language",
    icon: Globe,
  },
  {
    id: "notifications",
    label: "Notifications",
    icon: Bell,
  },
  {
    id: "privacy",
    label: "Privacy",
    icon: Lock,
  },
];

export default function SettingsSidebar({
  tab,
  setTab,
}: Props) {

  return (
    <aside
      className="
        w-[320px]
        border-r
        border-white/10
        bg-[#111111]
        p-6
      "
    >

      <h1
        className="
          text-3xl
          font-black
          mb-8
          relative
          top-2
        "
      >
        Settings
      </h1>

      <div className="space-y-2 relative top-5">

        {items.map(item => {

          const Icon = item.icon;

          const active =
            tab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setTab(item.id)}
              className={`
                w-full
                h-[65px]
                flex items-center gap-4
                px-5
                rounded-xl
                transition-all duration-300
                ${
                  active
                    ? "bg-white text-black"
                    : "text-white hover:bg-white/10"
                }
              `}
            >

              <Icon size={22}/>

              <span
                className="
                  text-sm
                  font-semibold
                "
              >
                {item.label}
              </span>

            </button>
          );
        })}

      </div>

    </aside>
  );
}