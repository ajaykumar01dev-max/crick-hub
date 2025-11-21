"use client";

import { useState } from "react";

export default function SettingsPage() {
  const [siteName, setSiteName] = useState("CrickHub");

  return (
    <div className="p-6 w-full">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-gray-900 mb-8 drop-shadow">
        Settings
      </h1>

      {/* Settings Card */}
      <div
        className="
          relative max-w-xl p-6 rounded-3xl
          bg-gradient-to-br from-white/40 via-white/20 to-white/10
          border border-white/40 backdrop-blur-2xl shadow-xl
          overflow-hidden
        "
      >
        {/* Decorative Glow Blobs */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-300/40 blur-3xl rounded-full opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-300/40 blur-3xl rounded-full opacity-40"></div>

        {/* Content */}
        <div className="relative">
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Site Name
          </label>

          <input
            value={siteName}
            onChange={(e) => setSiteName(e.target.value)}
            className="
              w-full p-3 rounded-xl
              bg-white/30 border border-white/50 backdrop-blur
              text-gray-900 placeholder-gray-600 
              shadow-inner 
              focus:ring-2 focus:ring-purple-300 focus:outline-none
              transition
            "
          />

          {/* Buttons */}
          <div className="mt-5 flex gap-3">
            <button
              className="
                px-5 py-2 rounded-xl font-semibold text-gray-900
                bg-gradient-to-br from-green-200/60 via-green-100/40 to-white/20
                border border-white/60 backdrop-blur-xl
                shadow-md hover:scale-[1.05] hover:shadow-xl transition
              "
            >
              Save
            </button>

            <button
              className="
                px-5 py-2 rounded-xl font-semibold text-gray-900
                bg-white/20 border border-white/40 backdrop-blur
                shadow hover:bg-white/30 hover:scale-[1.02] transition
              "
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
