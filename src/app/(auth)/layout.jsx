import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen gap-5">
      <div className="flex-2">{children}</div>
      <div className="flex-1 bg-sky-500 text-white flex items-center justify-center p-10">
        <h1 className="text-5xl font-bold ">Welcome to the Authentication </h1>
      </div>
    </div>
  );
};

export default AuthLayout;
