import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      404 - Page Not Found
      <Link href="/" className="text-blue-500 underline ml-2">
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
