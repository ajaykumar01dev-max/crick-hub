// "use client";


// import { useState } from "react";
// import { Users } from "lucide-react";


// export default function TeamsPage() {
//   const [teams, setTeams] = useState([
//     { id: 1, name: "Mumbai Warriors", players: 22 },
//     { id: 2, name: "Delhi Strikers", players: 20 },
//   ]);


//   const addTeam = () => {
//     const next = { id: Date.now(), name: `New Team ${teams.length + 1}`, players: 0 };
//     setTeams([next, ...teams]);
//   };


//   return (
//     <div className="p-6 w-full">
//       <div className="flex items-center justify-between mb-6">
//         <h1 className="text-2xl font-bold">Teams</h1>
//         <button onClick={addTeam} className="px-4 py-2 rounded-xl bg-white/30 border border-white/40 backdrop-blur transition hover:scale-[1.02]">+ Add Team</button>
//       </div>


//       <div className="grid gap-4">
//         {teams.map((t) => (
//           <div key={t.id} className="p-4 rounded-2xl bg-white/20 border border-white/30 backdrop-blur flex items-center justify-between">
//             <div className="flex items-center gap-4">
//               <div className="p-3 rounded-lg bg-white/30"><Users size={20} /></div>
//               <div>
//                 <div className="font-semibold">{t.name}</div>
//                 <div className="text-sm text-gray-600">Players: {t.players}</div>
//               </div>
//             </div>
//             <div className="text-sm text-gray-600">ID: {t.id}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


"use client";

import { useState } from "react";
import { Users, User } from "lucide-react";

export default function TeamsPage() {
  const [teams, setTeams] = useState([
    { id: 1, name: "Mumbai Warriors", players: ["Rohit Sharma", "Ishan Kishan", "Hardik Pandya"] },
    { id: 2, name: "Delhi Strikers", players: ["Rishabh Pant", "Shikhar Dhawan", "Axar Patel"] },
    { id: 3, name: "Chennai Fighters", players: ["MS Dhoni", "Ruturaj Gaikwad", "Jadeja"] },
    { id: 4, name: "Hyderabad Blazers", players: ["Kane Williamson", "Bhuvneshwar Kumar"] },
    { id: 5, name: "Punjab Panthers", players: ["KL Rahul", "Arshdeep Singh"] },
    { id: 6, name: "Kolkata Knights", players: ["Shreyas Iyer", "Russell"] },
    { id: 7, name: "Rajasthan Royals", players: ["Sanju Samson", "Buttler"] },
    { id: 8, name: "Banglore Kings", players: ["Virat Kohli", "Maxwell"] },
    { id: 9, name: "Lucknow Legends", players: ["Marcus Stoinis", "De Kock"] },
    { id: 10, name: "Gujarat Titans", players: ["Shubman Gill", "Rashid Khan"] },
  ]);

  // Add new team
  const addTeam = () => {
    const next = {
      id: Date.now(),
      name: `New Team ${teams.length + 1}`,
      players: [],
    };
    setTeams([next, ...teams]);
  };

  return (
    <div className="p-6 w-full">

      {/* Page Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-900 drop-shadow">Teams</h1>
        <button
          onClick={addTeam}
          className="
            px-4 py-2 rounded-xl font-semibold text-gray-900
            bg-white/40 border border-white/50 backdrop-blur-xl
            hover:scale-[1.05] hover:bg-white/60
            transition-all shadow
          "
        >
          + Add Team
        </button>
      </div>

      {/* Teams Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {teams.map((team) => (
          <div
            key={team.id}
            className="
              rounded-3xl p-6 border border-white/40 
              bg-linear-to-br from-white/40 via-white/20 to-white/10
              backdrop-blur-2xl shadow-xl hover:shadow-2xl
              hover:scale-[1.02] transition-all duration-500 relative
            "
          >
            {/* Glow effects */}
            <div className="absolute -left-6 top-0 w-24 h-24 bg-purple-300/40 blur-3xl rounded-full opacity-30"></div>
            <div className="absolute right-0 -top-4 w-20 h-20 bg-blue-300/40 blur-3xl rounded-full opacity-20"></div>

            {/* Team Header */}
            <div className="relative flex items-center gap-4 mb-4">
              <div className="p-3 rounded-xl bg-white/40 backdrop-blur border border-white/60 shadow-inner">
                <Users size={28} className="text-gray-900" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 drop-shadow-sm">{team.name}</h2>
                <p className="text-gray-700 text-sm drop-shadow-sm">Team ID: {team.id}</p>
              </div>
            </div>

            {/* Players List */}
            <div className="mt-4">
              <h3 className="font-semibold text-gray-900 mb-2">Players:</h3>

              {team.players.length === 0 ? (
                <p className="text-sm text-gray-600">No players added yet.</p>
              ) : (
                <div className="grid grid-cols-1 gap-3">
                  {team.players.map((player, i) => (
                    <div
                      key={i}
                      className="
                        flex items-center gap-3 p-3 rounded-xl
                        bg-white/30 border border-white/40 
                        backdrop-blur-xl shadow-sm
                      "
                    >
                      <div className="p-2 bg-white/40 backdrop-blur rounded-lg border border-white/60">
                        <User size={18} className="text-gray-900" />
                      </div>
                      <span className="text-gray-900 font-medium">{player}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
