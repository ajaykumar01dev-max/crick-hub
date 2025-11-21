"use client";

import { BarChart2 } from "lucide-react";

export default function StatisticsPage() {
    const teamStats = [
        {
            id: 1,
            team: "Mumbai Warriors",
            stats: {
                matches: 42,
                runs: 8540,
                highest: 212,
                wickets: 75,
            },
        },
        {
            id: 2,
            team: "Delhi Strikers",
            stats: {
                matches: 38,
                runs: 7921,
                highest: 198,
                wickets: 68,
            },
        },
        {
            id: 3,
            team: "Chennai Kings",
            stats: {
                matches: 51,
                runs: 10410,
                highest: 265,
                wickets: 89,
            },
        },
    ];

    return (
        <div className="p-6 w-full">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Team Statistics</h1>

                <button
                    className="px-5 py-2 rounded-xl bg-white/30 border border-white/40 
                backdrop-blur-xl shadow hover:bg-white/50 hover:scale-[1.03] transition"
                >
                    Export
                </button>
            </div>

            {/* Team Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {teamStats.map((team) => (
                    <div
                        key={team.id}
                        className="relative p-6 rounded-3xl bg-white/20 border border-white/30
                    backdrop-blur-2xl shadow-xl overflow-hidden hover:scale-[1.03] 
                    hover:shadow-2xl transition duration-300"
                    >
                        {/* Glow Blobs */}
                        <div className="absolute -top-6 -left-6 w-24 h-24 bg-purple-300/40 blur-3xl rounded-full"></div>
                        <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-blue-300/40 blur-3xl rounded-full"></div>

                        {/* Team Name */}
                        <h2 className="relative text-xl font-bold text-gray-900 text-center mb-4">
                            {team.team}
                        </h2>

                        {/* Stats Grid */}
                        <div className="relative grid grid-cols-2 gap-4 mt-2">
                            {[
                                { label: "Matches", value: team.stats.matches },
                                { label: "Runs", value: team.stats.runs },
                                { label: "Highest Score", value: team.stats.highest },
                                { label: "Wickets", value: team.stats.wickets },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="p-4 text-center rounded-xl bg-white/30 border border-white/40"
                                >
                                    <BarChart2 className="mx-auto mb-2 opacity-70" size={22} />
                                    <p className="text-sm text-gray-700">{item.label}</p>
                                    <p className="text-xl font-bold text-gray-900">{item.value}</p>
                                </div>
                            ))}
                        </div>

                        {/* Progress Bar (Based on Runs) */}
                        <div className="relative mt-6">
                            <p className="text-xs text-gray-700 text-center mb-1">Team Performance</p>
                            <div className="h-2 w-full bg-white/30 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-linear-to-r from-purple-400 to-blue-400 rounded-full"
                                    style={{
                                        width: `${Math.min((team.stats.runs / 12000) * 100, 100)}%`,
                                    }}
                                ></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
