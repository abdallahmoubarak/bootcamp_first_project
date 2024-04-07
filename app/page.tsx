"use client";
export default function Home() {
  return (
    <div className="flex flex-col max-w-sm mx-auto gap-3">
      <h1 className="text-center text-4xl text-red-600 font-bold">Sign Up</h1>
      <input
        className="border border-red-600 rounded-lg p-2 "
        type="text"
        placeholder="Full Name"
      />

      <input
        className="border border-red-600 rounded-lg p-2 "
        type="text"
        placeholder="Password"
      />
      <button
        onClick={() => alert("Don't Click me")}
        className="bg-red-600 rounded-full p-2 text-white">
        Sign Up
      </button>
    </div>
  );
}
