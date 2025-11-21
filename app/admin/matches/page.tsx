// "use client";


// import { useState } from "react";
// import { Trophy } from "lucide-react";


// export default function MatchesPage() {
//   const [matches, setMatches] = useState([
//     { id: 1, teams: "Mumbai vs Delhi", date: "2025-06-01", result: "Mumbai won" },
//     { id: 2, teams: "Kolkata vs Chennai", date: "2025-06-07", result: "Chennai won" },
//   ]);


//   const addMatch = () => {
//     const next = { id: Date.now(), teams: `New Team A vs Team B`, date: "2025-12-31", result: "TBD" };
//     setMatches([next, ...matches]);
//   };


//   return (
//     <div className="p-6 w-full">
//       <div className="flex items-center justify-between mb-6">
//         <h1 className="text-2xl font-bold">Matches</h1>
//         <button onClick={addMatch} className="px-4 py-2 rounded-xl bg-white/30 border border-white/40 backdrop-blur transition hover:scale-[1.02]">+ Add Match</button>
//       </div>


//       <div className="grid gap-4">
//         {matches.map((m) => (
//           <div key={m.id} className="p-4 rounded-2xl bg-white/20 border border-white/30 backdrop-blur flex items-center justify-between">
//             <div>
//               <div className="font-semibold">{m.teams}</div>
//               <div className="text-sm text-gray-600">{m.date} • {m.result}</div>
//             </div>
//             <Trophy />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

"use client";

"use client";

import { useState } from "react";
import { Trophy, CalendarClock } from "lucide-react";

export default function MatchesPage() {
  const [upcomingMatches, setUpcomingMatches] = useState([
    { id: 101, teams: "Hyderabad vs Gujarat", date: "2025-12-15", venue: "Hyderabad Stadium" },
    { id: 102, teams: "Delhi vs Punjab", date: "2025-12-20", venue: "Arun Jaitley Stadium" },
    { id: 103, teams: "Chennai vs Mumbai", date: "2026-01-03", venue: "Wankhede Stadium" },
  ]);

  const [completedMatches, setCompletedMatches] = useState([
    { id: 1, teams: "Mumbai vs Delhi", date: "2025-06-01", result: "Mumbai won" },
    { id: 2, teams: "Kolkata vs Chennai", date: "2025-06-07", result: "Chennai won" },
    { id: 3, teams: "Punjab vs Rajasthan", date: "2025-06-12", result: "Punjab won" },
    { id: 4, teams: "Hyderabad vs Gujarat", date: "2025-06-18", result: "TBD" },
  ]);

  const addMatch = () => {
    const next = {
      id: Date.now(),
      teams: "New Team A vs Team B",
      date: "2025-12-31",
      result: "TBD",
    };
    setCompletedMatches([next, ...completedMatches]);
  };

  return (
    <div className="p-6 w-full">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Matches</h1>
        <button
          onClick={addMatch}
          className="px-5 py-2 rounded-xl bg-white/30 border border-white/40 backdrop-blur transition hover:bg-white/50 hover:scale-[1.03] shadow"
        >
          + Add Match
        </button>
      </div>

      {/* UPCOMING MATCHES */}
      <h2 className="text-xl font-bold text-gray-900 mb-3">Upcoming Matches</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {upcomingMatches.map((u) => (
          <div
            key={u.id}
            className="group p-5 rounded-3xl bg-white/20 border border-white/30 backdrop-blur-xl shadow-lg hover:shadow-2xl transition hover:scale-[1.02]"
          >
            <div className="flex items-center justify-between mb-3">
              <h2 className="font-semibold text-lg text-gray-900">{u.teams}</h2>

              <div className="p-2 rounded-xl bg-white/40 border border-white/50 shadow">
                <CalendarClock size={20} />
              </div>
            </div>

            <p className="text-sm text-gray-700">
              <span className="font-semibold">Date:</span> {u.date}
            </p>

            <p className="text-sm text-gray-700">
              <span className="font-semibold">Venue:</span> {u.venue}
            </p>

            <div className="mt-4 flex justify-end">
              <button className="px-3 py-1 rounded-xl bg-white/40 text-xs border border-white/50 hover:bg-white/60 transition">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* COMPLETED MATCHES */}
      <h2 className="text-xl font-bold text-gray-900 mb-3">Completed Matches</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {completedMatches.map((m) => (
          <div
            key={m.id}
            className="group p-5 rounded-3xl bg-white/20 border border-white/30 backdrop-blur-xl shadow-lg hover:shadow-2xl transition hover:scale-[1.02]"
          >
            <div className="flex items-center justify-between mb-3">
              <h2 className="font-semibold text-lg text-gray-900">{m.teams}</h2>

              <div className="p-2 rounded-xl bg-white/40 border border-white/50 shadow">
                <Trophy size={20} />
              </div>
            </div>

            <p className="text-sm text-gray-700">
              <span className="font-semibold">Date:</span> {m.date}
            </p>

            <p className="text-sm text-gray-700">
              <span className="font-semibold">Result:</span> {m.result}
            </p>

            <div className="mt-4 flex justify-end">
              <button className="px-3 py-1 rounded-xl bg-white/40 text-xs border border-white/50 hover:bg-white/60 transition">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}


