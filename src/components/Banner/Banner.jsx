"use client";

import { useRouter } from "next/navigation";
import React from "react";

const Banner = () => {
  const router = useRouter();

  const handleBtn = () => {
    const password = prompt("Enter your password");
    if (password == "1234") {
      router.push("/dashboard");
    }
  };

  return (
    <div className="max-w-6xl mx-auto justify-center my-7">
      <div className="text-center space-y-4 bg-linear-to-r bg-sky-300 from-sky-700 p-10">
        <h1>Welcome to my banner in the dev story</h1>
        <button
          onClick={handleBtn}
          className="px-4 py-2 bg-sky-500 text-white rounded-lg cursor-pointer hover:bg-black duration-275"
        >
          Sheared Dev stroy
        </button>
      </div>
    </div>
  );
};

export default Banner;
