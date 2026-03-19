import { useState, useEffect } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <div className="bg-white dark:bg-gray-900 p-4 flex justify-between">
      <h1 className="font-bold dark:text-white">Mini Twitter</h1>

      <button
        onClick={() => setDark(!dark)}
        className="text-sm dark:text-white"
      >
        🌙
      </button>
    </div>
  );
}
