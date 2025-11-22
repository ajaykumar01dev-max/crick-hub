"use client";

import { useEffect, useState, ReactNode } from "react";
import { useRouter, usePathname } from "next/navigation";
import Sidebar from "@/app/components/sidebar";
import { CrystalHeader } from "../components/crystalheader";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";

type AdminLayoutProps = { children: ReactNode };

export default function AdminLayout({ children }: AdminLayoutProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (loggedIn !== "true") router.push("/login");
  }, []);

  return (
    <div className="flex min-h-screen">

      {/* DESKTOP SIDEBAR */}
      <div className="hidden md:block w-[280px] h-screen fixed left-0 top-0 overflow-y-auto bg-white shadow-md">
        <Sidebar />
      </div>

      {/* MOBILE MENU BUTTON */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded-lg shadow"
        onClick={() => setIsOpen(true)}
      >
        <Menu size={24} />
      </button>

      {/* BACKDROP */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* MOBILE DRAWER */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 h-full w-[260px] bg-white shadow-xl z-50 md:hidden overflow-y-auto"
      >
        {/* Pass close function into Sidebar */}
        <Sidebar onItemClick={() => setIsOpen(false)} />
      </motion.div>

      {/* MAIN CONTENT */}
      <main className="flex-1 md:ml-[280px] p-6 bg-linear-to-br from-blue-50 via-purple-50 to-pink-50">
        <CrystalHeader />

        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </main>
    </div>
  );
}
