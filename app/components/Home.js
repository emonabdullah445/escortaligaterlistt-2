"use client";
import { useState } from "react";
import LoginForm from "./LoginForm";
import Image from "next/image";

export default function Home({ adminId, posterId }) {
  const [next, setNext] = useState(false);
  return (
    <>
      {
        !next ? (
          <div className="w-1/3 h-screen mx-auto  flex-col space-y-8 overflow-y-default">
            <div className="flex-col mx-auto">
              <Image src="/images/megalogo.png" width={200} height={100}/>
              <Image src="/images/logo-potrait.jpg" width={200} height={200}/>
            </div>
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-5">
              {/* Pink Button */}
              <button
                onClick={() => setNext(true)}
                className="min-w-[180px] min-h-[48px] flex justify-center items-center bg-gradient-to-b from-pink-400 to-pink-600 hover:from-pink-500 hover:to-pink-700 active:from-pink-600 active:to-pink-800 text-white font-bold text-lg  py-2 rounded-lg border border-black shadow-inner"
                style={{
                  boxShadow:
                    "inset 6px 6px 8px rgba(0, 0, 0, 0.4), inset -2px -2px 4px rgba(255, 255, 255, 0.3), inset 4px 4px 6px rgba(0, 0, 0, 0.4), inset -4px -4px 6px rgba(255, 255, 255, 0.3)",
                }}
              >
                EDIT POST
              </button>

              {/* Blue Button */}
              <button
                className="min-w-[180px] min-h-[48px] flex justify-center items-center bg-gradient-to-b from-blue-400 to-blue-600 text-white font-bold text-lg py-2 rounded-lg shadow-md border border-black hover:from-blue-500 hover:to-blue-700 active:from-blue-600 active:to-blue-800"
                style={{
                  boxShadow:
                    "inset 6px 6px 8px rgba(0, 0, 0, 0.4), inset -2px -2px 4px rgba(255, 255, 255, 0.3), inset 4px 4px 6px rgba(0, 0, 0, 0.4), inset -4px -4px 6px rgba(255, 255, 255, 0.3)",
                }}
              >
                WRITE NEW
              </button>

              {/* Dark Blue Button */}
              <button
                className="min-w-[180px] min-h-[48px] flex justify-center items-center bg-gradient-to-b from-blue-700 to-blue-900 text-white font-bold text-lg py-2 rounded-lg shadow-md border border-black hover:from-blue-800 hover:to-blue-950 active:from-blue-900 active:to-black"
                style={{
                  boxShadow:
                    "inset 6px 6px 8px rgba(0, 0, 0, 0.4), inset -2px -2px 4px rgba(255, 255, 255, 0.3), inset 4px 4px 6px rgba(0, 0, 0, 0.4), inset -4px -4px 6px rgba(255, 255, 255, 0.3)",
                }}
              >
                REMOVE POST
              </button>

              {/* Brown Button */}
              <button
                className="min-w-[180px] min-h-[48px] flex justify-center items-center bg-gradient-to-b from-yellow-500 to-yellow-700 text-white font-bold text-lg py-2 rounded-lg shadow-md border border-black hover:from-yellow-800 hover:to-yellow-950 active:from-yellow-900 active:to-black"
                style={{
                  boxShadow:
                    "inset 6px 6px 8px rgba(0, 0, 0, 0.4), inset -2px -2px 4px rgba(255, 255, 255, 0.3), inset 4px 4px 6px rgba(0, 0, 0, 0.4), inset -4px -4px 6px rgba(255, 255, 255, 0.3)",
                }}
              >
                BUMP TO TOP
              </button>
            </div>

            <div className="flex justify-center">
              <button
                onClick={() => setNext(true)}
                className="bg-blue-700 text-white px-5 py-3 rounded-lg "
              >
                ACTIVE ALL HIDDEN POST
              </button>
            </div>

            <div className="flex justify-center">
              <p className="font-bold text-xl">CURRENT POST</p>
            </div>

            <div className="flex mx-auto justify-center border border-red-300 rounded-lg w-[360px] py-2">
              <button className="border-2 border-red-600 text-center min-w-[340px] py-2 rounded-lg text-red-600 font-bold text-lg">
                Headline Hidden
              </button>
            </div>

            <div className="flex justify-center gap-10">
              <div className="flex">
                <p className="font-bold pr-2">Phone:</p>
                <p className="text-red-600">Hidden</p>
              </div>
              <div className="flex">
                <p className="font-bold pr-2">Age:</p>
                <p className="text-red-600">Hidden</p>
              </div>
              <div className="flex">
                <p className="font-bold pr-2">City:</p>
                <p className="text-red-600">Hidden</p>
              </div>
            </div>

            <div className="flex justify-center border-2 border-red-600 rounded-lg h-1/4 mx-16">
              <p className="text-red-600 text-center">BODY HIDDEN</p>
            </div>

            <div className="flex-col mx-auto items-center space-y-5 py-10">
              <div className="flex justify-center gap-3">
                <p className="text-sm text-blue-600">Home</p>
                <p className="text-sm">|</p>
                <p className="text-sm text-blue-600">Manage Posts</p>
                <p className="text-sm">|</p>
                <p className="text-sm text-blue-600">Contact Us</p>
                <p className="text-sm">|</p>
                <p className="text-sm text-blue-600">Policies & Terms</p>
              </div>
              <p className="text-center">© 2025 Escort Aligators</p>
            </div>
          </div>
        ) : (
          <LoginForm adminId={adminId} posterId={posterId} />
        )
        //  !image ? (
        //   <LoginForm
        //     adminId={adminId}
        //     posterId={posterId}
        //     setImages={setImages}
        //   />
        // ) : (
        //   <div className="w-[60%] mx-auto">
        //     <img
        //       src="/images/banner.png"
        //       alt="megaeprsonals"
        //       className="w-full h-full object-cover"
        //     />
        //   </div>
        // )
      }
    </>
  );
}
