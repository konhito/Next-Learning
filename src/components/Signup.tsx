"use client";

import BackendUrl from "@/config";
import axios from "axios";
import { useState } from "react";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [passowd, setPassword] = useState("");
  const [isloading, setIsLoading] = useState(false);

  async function handelSubmit() {
    setIsLoading(true);
    try {
      const response = await axios.post(`${BackendUrl}/api/v1/user/signup`, {
        username,
        passowd,
      });
      console.log(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="border-2 rounded-lg p-6 w-80 shadow-lg">
        <div className="w-full mb-4">
          <label className="block mb-1 font-semibold">Name</label>
          <input
            type="text"
            placeholder="Name"
            className="w-full p-2 border rounded text-black"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="w-full mb-4">
          <label className="block mb-1 font-semibold">Email</label>
          <input
            type="email"
            placeholder="123@email.com"
            required
            className="w-full p-2 border rounded text-black"
          />
        </div>
        <div className="w-full mb-4">
          <label className="block mb-1 font-semibold">Password</label>
          <input
            type="password"
            required
            className="w-full p-2 border rounded text-black"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="border-2 w-full disabled:bg-teal-100 rounded-full mt-3 px-4 py-2 bg-teal-300 text-black font-bold hover:bg-teal-400 transition"
          onClick={handelSubmit}
          disabled={isloading}
        >
          {isloading ? "Signing Up..." : "Sign Up"}
        </button>
      </div>
    </div>
  );
}
