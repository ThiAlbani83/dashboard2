import Header from "@/components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center justify-center">
      <h1 className="text-xl">Login</h1>
      <div className="w-full flex flex-col items-center gap-5">
        <input type="email" placeholder="E-mail" className="text-gray-900 outline-none shadow-sm px-6 bg-slate-100 py-2 rounded-md placeholder:text-gray-500"/>
        <input type="password" placeholder="Password" className="text-gray-900 outline-none shadow-sm px-6 bg-slate-100 py-2 rounded-md placeholder:text-gray-500"/>
        
      </div>
      <Link href={'/dashboard'} className="bg-purple-800 text-white px-10 py-3 rounded-md shadow-md">
        Access
      </Link>
    </main>
  );
}
