import Image from "next/image";
import { Analytics } from "@vercel/analytics/react"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div className="flex flex-col items-center">
    <Analytics/> 
      <h1 className="text-4xl font-bold">Hello, World!</h1>
      <p className="text-lg text-gray-500">Welcome to your new app!</p>
    </div>

    </main>
  );
}
