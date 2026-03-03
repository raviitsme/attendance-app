import React from "react";

export const LoginForm = ({ switchToSignup }) => (
  <div className="flex flex-col gap-4">
    <h2 className="text-2xl font-bold text-center text-white font-poppins">
      Welcome Back
    </h2>
    <input type="email" placeholder="Email"
      className="placeholder-gray-500 text-white rounded-lg border border-amberGold w-full p-3 focus:outline-none focus:ring-2 focus:ring-amberGold focus:border-amberGold transition-all"
    />
    <input type="password" placeholder="Password"
      className="placeholder-gray-500 text-white rounded-lg border border-amberGold w-full p-3 focus:outline-none focus:ring-2 focus:ring-amberGold focus:border-amberGold transition-all"
    />
    <p className="text-center text-sm text-gray-400">
      New to AttendX?{" "}
      <span
        onClick={switchToSignup}
        className="relative text-white cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 hover:text-amberGold after:h-0.5 after:bg-amberGold after:w-0 after:transition-all after:duration-300 hover:after:w-full"
      >
        Sign Up
      </span>
    </p>
  </div>
);

export const SignupForm = ({ switchToLogin }) => (
  <div className="flex flex-col gap-4">
    <h2 className="text-2xl text-white font-bold text-center font-poppins">
      Register Here
    </h2>
    <p className="text-sm text-gray-500 text-center">
      Already a member?{" "}
      <span
        onClick={switchToLogin}
        className="text-white relative transition-all duration-150 hover:text-amberGold cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-amberGold after:w-0 after:transition-all after:duration-300 hover:after:w-full"
      >
        Login
      </span>
    </p>
  </div>
);
