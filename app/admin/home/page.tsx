"use client";
import { Users, Trophy, User, BarChart2 } from "lucide-react";
import Link from "next/link";

export default function AdminHome() {
  const cards = [
    {
      title: "Total Teams",
      value: "12",
      icon: <Users size={32} />,
      gradient: "from-pink-400/40 to-rose-500/20",
      glow: "bg-pink-300/40",
      link: "admin/teams",
    },
    {
      title: "Upcoming Matches",
      value: "8",
      icon: <Trophy size={32} />,
      gradient: "from-blue-400/40 to-indigo-500/20",
      glow: "bg-blue-300/40",
      link: "admin/matches",
    },
    {
      title: "Total Players",
      value: "240",
      icon: <User size={32} />,
      gradient: "from-green-400/40 to-emerald-500/20",
      glow: "bg-green-300/40",
      link: "admin/players",
    },
    {
      title: "Performance Score",
      value: "89%",
      icon: <BarChart2 size={32} />,
      gradient: "from-yellow-400/40 to-orange-400/20",
      glow: "bg-yellow-300/40",
      // link: "admin/performance",
    },
  ];

  return (
    <div className="p-6 w-full">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Admin Dashboard Overview
      </h1>

      {/* Colorful Crystal Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <Link key={index} href={card.link ?? '#'}>
            <div
              key={index}
              className={`
              relative p-0.5 rounded-3xl 
              bg-linear-to-br ${card.gradient}
              shadow-xl hover:shadow-2xl 
              transition-all duration-500 
              hover:scale-[1.04] cursor-pointer
            `}
            >
              <div
                className="
                backdrop-blur-2xl bg-white/20 rounded-3xl p-6
                h-full border border-white/40 shadow-inner 
                hover:bg-white/30 transition-all duration-500
              "
              >
                {/* Shine effects */}
                <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-40">
                  <div
                    className={`absolute -left-10 bottom-0 w-40 h-40 ${cards[index].glow} blur-3xl rounded-full`}
                  ></div>
                </div>
                <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-30">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/40 blur-2xl rounded-full"></div>
                </div>

                {/* Content */}
                <div className="relative flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800 drop-shadow-sm">
                      {card.title}
                    </h2>
                    <p className="text-3xl font-bold text-gray-900 mt-2 drop-shadow-lg">
                      {card.value}
                    </p>
                  </div>

                  <div
                    className={`
                    p-4 rounded-2xl 
                    ${card.glow} 
                    border border-white/40 
                    backdrop-blur-xl text-gray-800 shadow-md
                  `}
                  >
                    {card.icon}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Colorful Summary Box */}
      <div
        className="
          mt-10 p-6 rounded-2xl shadow-md border border-white/30
          backdrop-blur-xl bg-linear-to-r
          from-purple-200/40 via-indigo-200/40 to-pink-200/40
        "
      >
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          CrickHub Summary
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Welcome Admin! You are successfully logged in. Here you can manage
          teams, players, matches, and performance statistics. Use this
          dashboard to monitor everything at a glance and customize settings as
          needed.
        </p>
      </div>
    </div>
  );
}
