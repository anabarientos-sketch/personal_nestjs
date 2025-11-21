import React from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <div className="min-h-screen bg-orange-50 text-zinc-900 font-sans flex flex-col">
      {/* Header */}
      <header className="w-full py-4 px-4 sm:px-6 flex justify-between items-center bg-orange-500 text-white shadow-md">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-wide">Angelika's Page</h1>
        <Link
          href="/"
          className="bg-white text-orange-500 px-3 sm:px-4 py-1 sm:py-2 rounded-full font-semibold text-sm sm:text-base hover:bg-orange-100 transition"
        >
          Back to Home
        </Link>
      </header>

      {/* About Card */}
      <section className="py-16 px-4 sm:px-6 md:px-10 text-center flex justify-center">
        <Card className="max-w-md w-full shadow-lg rounded-xl border border-orange-100">
          <CardContent className="space-y-4">
            <h1 className="text-2xl sm:text-3xl font-bold text-orange-600">About Me</h1>
            <p className="text-zinc-700 text-base sm:text-lg leading-relaxed">
              My name is <span className="font-semibold">Angelika Abarientos</span>. I am 20 years old and a second-year BSIT college student.
              I'm a passionate student who enjoys creating cozy, simple, and story-inspired designs.
            </p>
            <div className="flex justify-center">
              <img
                src="/stories/pic.jpg"
                alt="About GIF"
                className="w-24 sm:w-32 h-24 sm:h-32 object-cover rounded-lg shadow-md"
              />
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
