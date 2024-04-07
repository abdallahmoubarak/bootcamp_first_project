"use client";
export default function Home() {
  return (
    <div className="flex flex-col max-w-sm mx-auto gap-3">
      <h1 className="text-center text-4xl text-red-600 font-bold">
        Hello World
      </h1>
      <input
        className="border border-red-600 rounded-lg p-2 "
        type="text"
        placeholder="First Name"
      />
      <button
        onClick={() => alert("Don't Click me")}
        className="bg-red-600 rounded-2xl p-2 text-white">
        Click Me
      </button>
    </div>
  );
}
