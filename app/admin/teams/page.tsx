"use client";

import { useState } from "react";
import { Users, User } from "lucide-react";

export default function TeamsPage() {
  const [editingTeamId, setEditingTeamId] = useState<number | null>(null);
  const [editingPlayer, setEditingPlayer] = useState<{ teamId: number; index: number } | null>(null);

  const [editedName, setEditedName] = useState("");
  const [editedPlayerName, setEditedPlayerName] = useState("");
  const [playerInputs, setPlayerInputs] = useState<{ [key: number]: string }>({});

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

  // Add team
  const addTeam = () =>
    setTeams([{ id: Date.now(), name: `New Team ${teams.length + 1}`, players: [] }, ...teams]);

  // Save edited team
  const saveTeamName = (id: number) => {
    setTeams((prev) => prev.map((t) => (t.id === id ? { ...t, name: editedName } : t)));
    setEditingTeamId(null);
  };

  // Add player
  const addPlayer = (teamId: number) => {
    const name = playerInputs[teamId]?.trim();
    if (!name) return;

    setTeams((prev) =>
      prev.map((t) => (t.id === teamId ? { ...t, players: [...t.players, name] } : t))
    );

    setPlayerInputs((prev) => ({ ...prev, [teamId]: "" }));
  };

  // Remove player
  const removePlayer = (teamId: number, index: number) => {
    setTeams((prev) =>
      prev.map((t) =>
        t.id === teamId ? { ...t, players: t.players.filter((_, i) => i !== index) } : t
      )
    );
  };

  // Save edited player
  const savePlayer = (teamId: number, index: number) => {
    setTeams((prev) =>
      prev.map((t) =>
        t.id === teamId
          ? {
              ...t,
              players: t.players.map((p, i) => (i === index ? editedPlayerName : p)),
            }
          : t
      )
    );
    setEditingPlayer(null);
  };

  // Delete entire team
  const deleteTeam = (teamId: number) =>
    setTeams((prev) => prev.filter((t) => t.id !== teamId));

  return (
    <div className="p-6 w-full">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Teams</h1>

        <button
          onClick={addTeam}
          className="px-4 py-2 rounded-xl bg-green-500 text-white font-semibold hover:bg-green-600 transition shadow"
        >
          + Add Team
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {teams.map((team) => (
          <div
            key={team.id}
            className="p-6 rounded-3xl border border-white/40 bg-white/20 backdrop-blur-2xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition duration-500 relative"
          >
            {/* Header */}
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-xl bg-white/40 backdrop-blur shadow-inner">
                <Users size={28} className="text-gray-900" />
              </div>

              <div className="flex-1 flex justify-between items-center">
                {editingTeamId === team.id ? (
                  <input
                    value={editedName}
                    onChange={(e) => setEditedName(e.target.value)}
                    className="border rounded-md p-1 text-lg focus:ring-2 focus:ring-blue-400"
                  />
                ) : (
                  <h2 className="text-xl font-bold text-gray-900">{team.name}</h2>
                )}

                {editingTeamId === team.id ? (
                  <button
                    onClick={() => saveTeamName(team.id)}
                    className="px-3 py-1 bg-green-500 text-white rounded-full text-sm hover:bg-green-600"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setEditingTeamId(team.id);
                      setEditedName(team.name);
                    }}
                    className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm hover:bg-blue-600"
                  >
                    Edit
                  </button>
                )}
              </div>
            </div>

            {/* Players */}
            <h3 className="font-semibold text-gray-900 mb-2 text-lg">Players</h3>

            {team.players.length === 0 ? (
              <p className="text-gray-600 text-sm italic">No players yet.</p>
            ) : (
              team.players.map((player, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between bg-white/40 p-3 rounded-xl border border-white/50 backdrop-blur shadow-md mb-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/60 rounded-xl border shadow-inner">
                      <User size={18} className="text-gray-900" />
                    </div>

                    {/* Player Name / Edit Input */}
                    {editingPlayer?.teamId === team.id && editingPlayer.index === i ? (
                      <input
                        value={editedPlayerName}
                        onChange={(e) => setEditedPlayerName(e.target.value)}
                        className="border rounded-md p-1"
                      />
                    ) : (
                      <span className="font-medium">{player}</span>
                    )}
                  </div>

                  <div className="flex gap-2">
                    {/* Edit button */}
                    {editingPlayer?.teamId === team.id && editingPlayer.index === i ? (
                      <button
                        onClick={() => savePlayer(team.id, i)}
                        className="px-3 py-2 bg-green-500/10 text-green-600 rounded-xl border border-green-400/30 hover:bg-green-500 hover:text-white"
                      >
                        ✔
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          setEditingPlayer({ teamId: team.id, index: i });
                          setEditedPlayerName(player);
                        }}
                        className="px-3 py-2 bg-blue-500/10 text-blue-600 rounded-xl border border-blue-400/30 hover:bg-blue-500 hover:text-white"
                      >
                        ✏️
                      </button>
                    )}

                    {/* Delete player */}
                    <button
                      onClick={() => removePlayer(team.id, i)}
                      className="px-3 py-2 bg-red-500/10 text-red-600 rounded-xl border border-red-400/30 hover:bg-red-500 hover:text-white"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              ))
            )}

            {/* Add player */}
            <div className="flex items-center gap-3 mt-4 p-3 bg-white/40 rounded-xl border backdrop-blur">
              <input
                type="text"
                placeholder="Enter player name..."
                value={playerInputs[team.id] || ""}
                onChange={(e) =>
                  setPlayerInputs((prev) => ({ ...prev, [team.id]: e.target.value }))
                }
                className="flex-1 px-3 py-2 rounded-xl border bg-white/60 focus:ring-2 focus:ring-purple-400"
              />

              <button
                onClick={() => addPlayer(team.id)}
                className="px-4 py-2 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700"
              >
                Add
              </button>
            </div>

            {/* Delete team button */}
            <button
              onClick={() => deleteTeam(team.id)}
              className="w-full mt-4 py-2 bg-gray-200 text-gray-700 rounded-xl hover:bg-red-400/20 hover:text-red-600 transition"
            >
              Delete Team
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
