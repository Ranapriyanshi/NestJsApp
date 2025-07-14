import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-gradient-to-br from-yellow-50 to-white px-4 py-8">
      <main className="flex flex-col items-center justify-center w-full max-w-2xl bg-white/80 rounded-xl shadow-lg p-8 mb-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4 text-center drop-shadow-sm">
          About Us Page
        </h1>
        <p className="text-lg text-gray-600 mb-8 text-center">
          Discover articles, tutorials, and more!
        </p>
        <div className="flex flex-row gap-4 justify-center w-full mt-4">
          <Link
            href="/dashboard"
            className="inline-block px-6 py-3 text-white bg-blue-500 rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition font-semibold text-lg"
          >
            Go to Dashboard
          </Link>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 text-white bg-blue-500 rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition font-semibold text-lg"
          >
            Contact Us
          </Link>
        </div>
      </main>
      <footer className="w-full text-center text-gray-500 py-4">
        Made with 💛 by Priyanshi Rana
      </footer>
    </div>
  );
}
