import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");
  const onSubmitHandle = async (event) => {
    event.preventDefault();
  }
  return (
    <form onSubmit={onSubmitHandle} className="flex flex-col items-center w-90% sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      {currentState === "Login" ? (
        ""
      ) : (
        <input
          type="text"
          required
          placeholder="Name"
          className="w-full border px-3 py-2 border-gray-800"
        />
      )}
      <input
        type="email"
        required
        placeholder="Email"
        className="w-full border px-3 py-2 border-gray-800"
      />
      <input
        type="password"
        required
        placeholder="Password"
        className="w-full border px-3 py-2 border-gray-800"
      />
      <div className="flex items-center justify-between w-full text-sm mt-[-8px]">
        <Link>Forgot your password?</Link>
        {currentState === "Login" ? (
          <p onClick={() => setCurrentState("Sign Up")} className="cursor-pointer">Create Account</p>
        ) : (
          <p onClick={() => setCurrentState("Login")} className="cursor-pointer">Login Here</p>
        )}
      </div>
      <input type="submit" value={currentState} className="bg-gray-900 text-white px-5 py-3 mt-5 rounded-xs cursor-pointer"/>
    </form>
  );
};

export default Login;
