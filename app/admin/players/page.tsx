"use client";

import { useState } from "react";
import { User } from "lucide-react";

export default function PlayersPage() {
  const [players, setPlayers] = useState([
    { id: 1, name: "Rohit Sharma", team: "Mumbai Warriors", runs: 452, matches: 12, sr: 136.2 },
    { id: 2, name: "Virat Kohli", team: "Delhi Strikers", runs: 512, matches: 14, sr: 148.5 },
    { id: 3, name: "Shikhar Dhawan", team: "Punjab Kings", runs: 398, matches: 11, sr: 128.7 },
    { id: 4, name: "Hardik Pandya", team: "Gujarat Titans", runs: 350, matches: 10, sr: 155.1 },
    { id: 5, name: "KL Rahul", team: "Lucknow Super Giants", runs: 423, matches: 13, sr: 131.4 },
    { id: 6, name: "Suryakumar Yadav", team: "Mumbai Warriors", runs: 380, matches: 10, sr: 178.3 },
    { id: 7, name: "Shubman Gill", team: "Gujarat Titans", runs: 442, matches: 12, sr: 149.7 },
    { id: 8, name: "MS Dhoni", team: "Chennai Kings", runs: 210, matches: 8, sr: 163.4 },
    { id: 9, name: "Rishabh Pant", team: "Delhi Strikers", runs: 330, matches: 9, sr: 155.0 },
    { id: 10, name: "Ravindra Jadeja", team: "Chennai Kings", runs: 240, matches: 12, sr: 140.5 },
  ]);

  const [editId, setEditId] = useState<number | null>(null);

  const addPlayer = () => {
    const next = {
      id: Date.now(),
      name: `New Player ${players.length + 1}`,
      team: "Unknown",
      runs: 0,
      matches: 0,
      sr: 0,
    };
    setPlayers([next, ...players]);
  };

  const updatePlayer = (id: number, key: string, value: string | number) => {
    setPlayers((prev) =>
      prev.map((p) => (p.id === id ? { ...p, [key]: value } : p))
    );
  };

  const deletePlayer = (id: number) => {
    setPlayers((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="p-6 w-full">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Players</h1>

        <button
          onClick={addPlayer}
          className="px-5 py-2 rounded-xl bg-white/30 border border-white/40 
                     backdrop-blur transition hover:bg-white/50 hover:scale-[1.03] shadow"
        >
          + Add Player
        </button>
      </div>

      {/* PLAYERS GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {players.map((p) => (
          <div
            key={p.id}
            className="group p-6 rounded-3xl bg-white/20 border border-white/30 
                       backdrop-blur-xl shadow-lg hover:shadow-2xl hover:scale-[1.02] 
                       transition duration-300"
          >
            {/* TOP SECTION */}
            <div className="flex items-center justify-between mb-4">
              {editId === p.id ? (
                <input
                  value={p.name}
                  onChange={(e) => updatePlayer(p.id, "name", e.target.value)}
                  className="px-3 py-1 w-full rounded-xl bg-white/50 border border-white/60"
                />
              ) : (
                <h2 className="font-bold text-xl text-gray-900">{p.name}</h2>
              )}

              <div className="p-3 rounded-xl bg-white/40 border border-white/50 shadow ml-2">
                <User size={22} />
              </div>
            </div>

            {/* TEAM */}
            <p className="text-gray-700 text-sm font-medium mb-4">
              Team:{" "}
              {editId === p.id ? (
                <input
                  value={p.team}
                  onChange={(e) => updatePlayer(p.id, "team", e.target.value)}
                  className="px-2 py-1 rounded bg-white/50 border border-white/60"
                />
              ) : (
                <span className="font-semibold">{p.team}</span>
              )}
            </p>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="bg-white/30 p-3 rounded-xl border border-white/40 shadow-sm">
                <p className="text-xs text-gray-600">Runs</p>
                {editId === p.id ? (
                  <input
                    type="number"
                    value={p.runs}
                    onChange={(e) => updatePlayer(p.id, "runs", Number(e.target.value))}
                    className="w-full px-2 py-1 rounded bg-white/50 border border-white/60"
                  />
                ) : (
                  <p className="font-bold text-lg">{p.runs}</p>
                )}
              </div>

              <div className="bg-white/30 p-3 rounded-xl border border-white/40 shadow-sm">
                <p className="text-xs text-gray-600">Matches</p>
                {editId === p.id ? (
                  <input
                    type="number"
                    value={p.matches}
                    onChange={(e) => updatePlayer(p.id, "matches", Number(e.target.value))}
                    className="w-full px-2 py-1 rounded bg-white/50 border border-white/60"
                  />
                ) : (
                  <p className="font-bold text-lg">{p.matches}</p>
                )}
              </div>

              <div className="bg-white/30 p-3 rounded-xl border border-white/40 shadow-sm">
                <p className="text-xs text-gray-600">SR</p>
                {editId === p.id ? (
                  <input
                    type="number"
                    value={p.sr}
                    onChange={(e) => updatePlayer(p.id, "sr", Number(e.target.value))}
                    className="w-full px-2 py-1 rounded bg-white/50 border border-white/60"
                  />
                ) : (
                  <p className="font-bold text-lg">{p.sr}</p>
                )}
              </div>
            </div>

            {/* BUTTONS */}
            <div className="mt-5 flex justify-between">
              {editId === p.id ? (
                <button
                  onClick={() => setEditId(null)}
                  className="px-4 py-1.5 rounded-xl bg-green-500 text-white text-sm shadow hover:bg-green-600 transition"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => setEditId(p.id)}
                  className="px-4 py-1.5 rounded-xl bg-blue-500 text-white text-sm shadow hover:bg-blue-600 transition"
                >
                  Edit
                </button>
              )}

              <button
                onClick={() => deletePlayer(p.id)}
                className="px-4 py-1.5 rounded-xl bg-red-500 text-white text-sm shadow hover:bg-red-600 transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
