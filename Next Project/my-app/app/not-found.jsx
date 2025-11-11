"use client";
import { Home, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFoundPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-6 relative overflow-hidden">
      {/* Floating shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-3 h-3 bg-blue-500 rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-purple-500 rounded-full animate-pulse opacity-50"></div>
        <div className="absolute bottom-20 left-1/3 w-2.5 h-2.5 bg-blue-400 rounded-full animate-ping opacity-40"></div>
        <div className="absolute bottom-1/4 right-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse opacity-50"></div>
      </div>

      <div className="relative max-w-lg w-full text-center">
        {/* Animated 404 */}
        <h1 className="text-8xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 animate-bounce">
          404
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mt-4 rounded-full"></div>

        {/* Error Message */}
        <div className="mt-8 mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-3">
            Oops! Page Not Found
          </h2>
          <p className="text-gray-400 text-lg md:text-xl">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* ✅ Go Home */}
          <Link
            href="/"
            className="group flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <Home size={20} />
            <span>Go Home</span>
          </Link>

          {/* ✅ Go Back (Fixed) */}
          <button
            onClick={() => router.back()}
            className="group flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-lg border border-gray-600 hover:border-gray-500 transition-all duration-300 transform hover:scale-105 shadow-md"
          >
            <ArrowLeft size={20} />
            <span>Go Back</span>
          </button>
        </div>
      </div>
    </div>
  );
}
