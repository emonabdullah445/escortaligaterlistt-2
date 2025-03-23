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
            <div
              onClick={() => setNext(true)}
              className="flex  justify-center "
            >
              <Image src="/images/megabg.png" width={400} height={400} />
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
