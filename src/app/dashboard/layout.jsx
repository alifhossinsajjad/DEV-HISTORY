import Link from "next/link";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div className="grid grid-cols-12 gap-5 ">
      <div className="col-span-3 border-r-2 min-h-screen mt-10">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          💻 Dev-Story
        </Link>
        <div>
          <Link
            href="/dashboard/add-story"
            className="block py-2 px-4 hover:bg-gray-200"
          >
            Add Story
          </Link>
          <Link
            href="/dashboard/my-profile"
            className="block py-2 px-4 hover:bg-gray-200"
          >
            My Profile
          </Link>
          <Link
            href="/dashboard/settings"
            className="block py-2 px-4 hover:bg-gray-200"
          >
            Settings
          </Link>
        </div>
      </div>
      <div className="col-span-9 mt-10">{children}</div>
    </div>
  );
};

export default DashboardLayout;
