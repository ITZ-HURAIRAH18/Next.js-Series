"use client";
import { useState, useTransition } from "react";

export default function Example() {
  const [isPending, startTransition] = useTransition(); // <-- this line
  const [data, setData] = useState("Nothing yet");

  function handleClick() {
    // Tell React: this part might be slow
    startTransition(async () => {
      // Simulate fetching data with a delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      setData("✅ Products loaded!");
    });
  }

  return (
    <div className="text-center mt-10">
      <button
        onClick={handleClick}
        className="bg-blue-600 text-white px-4 py-2 rounded"
        disabled={isPending}
      >
        {isPending ? "Loading..." : "Show Products"}
      </button>

      <p className="mt-4">{data}</p>
    </div>
  );
}
