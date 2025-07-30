import axios from "axios";
import React, { useState } from "react";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmitHandler = async (e) => {
  try {
    e.preventDefault();
    const response = await axios.post(
      backendUrl + "/api/v1/auth/adminLogin",
      { email, password }
    );

    if (response.status === 200) {
      setToken(response.data.access_token);
      toast.success(response.data.message); 
    } else {
      toast.error(response.data.message); 
    }
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      toast.error(error.response.data.message); 
    } else {
      toast.error("Something went wrong. Please try again."); 
    }
    console.log("🚀 ~ onSubmitHandler ~ error:", error);
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg px-8 py-6 max-w-md">
        <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
        <form onSubmit={onSubmitHandler}>
          <div className="mb-3 min-w-72">
            <p className="text-sm font-medium text-gray-700 mb-2">
              Email Address
            </p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-md w-full px-3 py-2 border border-gray-300 outline-none"
              type="email"
              value={email}
              id=""
              placeholder="Your@email.com"
              required
            />
          </div>

          <div className="mb-3 min-w-72">
            <p className="text-sm font-medium text-gray-700 mb-2">Password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="rounded-md w-full px-3 py-2 border border-gray-300 outline-none"
              type="password"
              value={password}
              id=""
              placeholder="Enter Your Password"
              required
            />
          </div>
          <button
            className="bg-black text-white w-full py-2 rounded-md cursor-pointer mt-2"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
