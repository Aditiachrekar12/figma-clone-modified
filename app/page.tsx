"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import figmaImage from "../public/figma-landing.png";

export default function LandingPage() {
  const router = useRouter();

  return (
    <main className="h-screen w-full bg-black text-white">
      <div className="h-full w-full flex flex-col md:flex-row items-center justify-center px-10">
        
        {/* Left Section */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-5xl font-extrabold leading-tight">
            Real-Time <span className="text-purple-500">Figma</span><br />
            <span className="text-purple-300">Clone Application</span>
          </h1>

          <p className="text-gray-400 text-lg">
            Design together. Collaborate live. Chat with cursors.
          </p>

          <button
            onClick={() => router.push("/editor")}
            className="mt-4 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-md transition-transform transform hover:scale-105 duration-300"
          >
            🚀 Launch Editor
          </button>

          <div className="flex flex-wrap gap-3 mt-6 justify-center md:justify-start">
            <span className="px-4 py-2 bg-blue-600 hover:bg-blue-800 rounded text-sm transition transform hover:scale-105">🟦 TypeScript</span>
            <span className="px-4 py-2 bg-gray-700 hover:bg-gray-900 rounded text-sm transition transform hover:scale-105">⚫ Next.js</span>
            <span className="px-4 py-2 bg-cyan-500 hover:bg-cyan-700 rounded text-sm text-black transition transform hover:scale-105">💠 Tailwind CSS</span>
          </div>
        </div>

        {/* Right Section (Hero Image) */}
        <div className="md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0 animate-bounce-slow" >
          <Image
            src={figmaImage}
            alt="Figma Clone Illustration"
            width={400}
            height={300}
            className="object-contain rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </main>
  );
}
