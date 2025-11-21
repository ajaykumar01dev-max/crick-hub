// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";
// import { motion } from "framer-motion";

// export default function LogInPage() {
//   const router = useRouter();

//   const [userId, setUserId] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const ADMIN_USER = process.env.NEXT_PUBLIC_ADMIN_USERNAME;
//   const ADMIN_PASS = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

//   const handleLogin = (e: any) => {
//     e.preventDefault();

//     if (userId === ADMIN_USER && password === ADMIN_PASS) {
//       localStorage.setItem("isLoggedIn", "true");
//       router.push("/admin/dashboard");
//     } else {
//       setError("Incorrect username or password");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="bg-white w-full max-w-md p-8 rounded-2xl shadow-xl"
//       >
//         <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
//           Login
//         </h1>

//         <form onSubmit={handleLogin} className="space-y-4">
//           {error && <p className="text-red-600 text-sm text-center">{error}</p>}

//           <div>
//             <label className="text-sm text-gray-600 font-medium">User ID</label>
//             <input
//               type="text"
//               placeholder="Enter user id"
//               value={userId}
//               onChange={(e) => setUserId(e.target.value)}
//               className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//             />
//           </div>

//           <div>
//             <label className="text-sm text-gray-600 font-medium">Password</label>
//             <input
//               type="password"
//               placeholder="••••••••"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-all"
//           >
//             Login
//           </button>
//         </form>

//         <p className="text-center text-sm text-gray-500 mt-4">
//           Don’t have an account?{" "}
//           <Link href="/signup" className="text-blue-600 hover:underline">
//             Sign Up
//           </Link>
//         </p>
//       </motion.div>
//     </div>
//   );
// }


"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [err, setErr] = useState("");
  const handleLogin = (e: any) => {
    e.preventDefault();
    if (user === process.env.NEXT_PUBLIC_ADMIN_USERNAME && pass === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      localStorage.setItem("isLoggedIn", "true");
      document.cookie = "auth=true; path=/";
      router.push("/admin");
    } else {
      setErr("Invalid credentials");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-100 to-gray-200 p-4">
      <motion.form
        onSubmit={handleLogin}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-white/70 backdrop-blur rounded-2xl p-8 shadow-lg border border-white/30"
      >
        <h1 className="text-2xl font-bold mb-6 text-gray-900">CrickHub Admin Login</h1>
        {err && <p className="text-sm text-red-600 mb-3">{err}</p>}
        <label className="block text-sm text-gray-700">User ID</label>
        <input value={user} onChange={(e) => setUser(e.target.value)} className="w-full p-3 rounded-lg mt-1 mb-4 border border-gray-200 outline-none focus:ring-2 focus:ring-indigo-400" />
        <label className="block text-sm text-gray-700">Password</label>
        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" className="w-full p-3 rounded-lg mt-1 mb-4 border border-gray-200 outline-none focus:ring-2 focus:ring-indigo-400" />
        <button className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition">Login</button>
        <p className="text-sm text-center text-gray-700 mt-4">Don’t have an account? <Link href="/signup" className="text-indigo-600">Sign up</Link></p>
      </motion.form>
    </div>
  );
}