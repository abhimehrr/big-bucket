import React from "react";
import { Link } from "react-router-dom";

export default function ErrorNotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center max-w-[500px]">
        <div className="animate-bounce-slow">
          <h1 className="text-6xl sm:text-9xl font-extrabold mb-8">NH 404</h1>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold mb-4 text-red-600">
          Oops! taken wrong turn.
        </h2>
        <p className="text-base sm:text-lg md:text-xl mb-8 px-4">
          It looks like you've taken a wrong turn. Don't worry, it happens to
          the best of us. Let's get you back on track!
        </p>
        <Link
          to="/"
          className="inline-block bg-secondary text-text px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-secondary/80 transition duration-300"
        >
          Let's go home
        </Link>
      </div>
    </div>
  );
}
