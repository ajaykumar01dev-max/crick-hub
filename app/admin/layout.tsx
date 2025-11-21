"use client";

import { useEffect, ReactNode } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/app/components/sidebar";
import { CrystalHeader } from "../components/crystalheader";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";


type AdminLayoutProps = { children: ReactNode };

export default function AdminLayout({ children }: AdminLayoutProps) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");

    if (loggedIn !== "true") {
      router.push("/login");
    }
  }, []);

  return (
    <div className="flex min-h-screen">
      <Sidebar />
<main className="flex-1 p-6 bg-linear-to-br from-blue-50 via-purple-50 to-pink-50">
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
