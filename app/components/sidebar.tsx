"use client";

import Link from "next/link";
import Image from "next/image";
import { Home, Users, Trophy, User, BarChart2, Settings } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Sidebar({ onItemClick }: { onItemClick?: () => void }) {
  const pathname = usePathname();

  const menu = [
    { name: "Home", icon: <Home size={18} />, path: "/admin" },
    { name: "Teams", icon: <Users size={18} />, path: "/admin/teams" },
    { name: "Matches", icon: <Trophy size={18} />, path: "/admin/matches" },
    { name: "Players", icon: <User size={18} />, path: "/admin/players" },
    { name: "Statistics", icon: <BarChart2 size={18} />, path: "/admin/statistics" },
    { name: "Settings", icon: <Settings size={18} />, path: "/admin/settings" },
  ];

  return (
    <aside
      className="
        w-full min-h-screen p-6 border-r border-white/20
        bg-linear-to-b from-purple-300/30 via-blue-200/20 to-green-200/20
        backdrop-blur-2xl shadow-2xl relative
      "
    >
      {/* Logo */}
      <div className="flex items-center gap-3 mb-10">
        <div className="relative">
          <div className="absolute inset-0 bg-white/50 blur-xl rounded-xl" />
          <Image
            src="/crickhub-logo.png"
            alt="CrickHub Logo"
            width={40}
            height={40}
            className="relative w-10 h-10 rounded-xl shadow-xl border border-white/40"
          />
        </div>

        <h2 className="text-xl font-bold text-gray-900 tracking-wide drop-shadow-lg">
          CrickHub Admin
        </h2>
      </div>

      {/* Menu */}
      <nav>
        <ul className="space-y-3">
          {menu.map((item) => {
            const active = pathname === item.path;

            return (
              <li key={item.path}>
                <Link
                  href={item.path}
                  onClick={() => {
                    if (onItemClick) onItemClick(); // auto-close drawer on mobile
                  }}
                  className={`
                    flex items-center gap-3 px-4 py-3 rounded-2xl text-[15px] font-semibold
                    transition-all duration-300 border backdrop-blur-xl shadow-md

                    ${active
                      ? "bg-linear-to-r from-purple-500/40 via-blue-400/30 to-purple-300/40 border-purple-500 shadow-xl scale-[1.05] text-gray-900"
                      : "bg-linear-to-r from-white/40 via-white/20 to-white/10 border-white/40 hover:scale-[1.04] hover:border-white/60 text-gray-800"
                    }
                  `}
                >
                  <span className={`${active ? "text-purple-900" : "text-gray-800"}`}>
                    {item.icon}
                  </span>
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
