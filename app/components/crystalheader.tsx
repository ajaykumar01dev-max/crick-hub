"use client";
import { useRouter } from "next/navigation";

export function CrystalHeader() {
    const router = useRouter();

    const logout = () => {
        localStorage.removeItem("isLoggedIn");
        document.cookie = "auth=; Max-Age=0; path=/";
        router.push("/login");
    };

    return (
        <header
            className="
                w-full mb-6 rounded-3xl p-5
                flex justify-between items-center
                relative overflow-hidden

                border border-white/40 shadow-xl
                bg-gradient-to-r from-purple-200/40 via-blue-200/30 to-cyan-200/40
                backdrop-blur-2xl
            "
        >
            {/* Glow Effects */}
            <div className="absolute -left-6 top-0 w-32 h-32 bg-purple-300/40 blur-3xl rounded-full opacity-50"></div>
            <div className="absolute right-0 -top-4 w-28 h-28 bg-blue-300/40 blur-3xl rounded-full opacity-40"></div>

            {/* Title Section */}
            <div className="relative">
                <h1 className="text-2xl font-bold text-gray-900 drop-shadow">
                    Dashboard Overview
                </h1>
                <p className="text-sm text-gray-700 drop-shadow-sm">
                    Welcome back, Admin
                </p>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3 relative">
                <button
                    className="
                        px-4 py-2 rounded-xl font-semibold text-gray-900
                        bg-linear-to-br from-white/60 via-white/30 to-white/10
                        border border-white/50 backdrop-blur-xl shadow-md
                        hover:scale-[1.05] hover:shadow-xl hover:border-white/70
                        transition-all duration-300
                    "
                >
                    Quick Action
                </button>

                <button
                    onClick={logout}
                    className="
                        px-4 py-2 rounded-xl font-semibold text-gray-900
                        bg-linear-to-br from-red-200/50 via-red-100/40 to-white/10
                        border border-white/50 backdrop-blur-xl shadow-md
                        hover:scale-[1.05] hover:shadow-xl hover:border-white/70
                        transition-all duration-300
                    "
                >
                    Logout
                </button>
            </div>
        </header>
    );
}
