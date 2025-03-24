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
          <div className="w-full lg:w-1/3 h-screen mx-auto flex flex-col space-y-8 overflow-y-default px-5 pb-5">
          {/* Image Section */}
          <div className="flex justify-center">
            <Image src="/images/megabg.png" width={300} height={300} className="w-3/4 md:w-2/3 lg:w-[400px]" />
          </div>
        
          {/* Button Section */}
          <div className="flex justify-center">
            <button className="bg-blue-700 text-white px-5 py-3 rounded-lg w-full max-w-sm text-sm md:text-base lg:text-lg">
              ACTIVE ALL HIDDEN POST
            </button>
          </div>
        
          {/* Current Post */}
          <div className="flex justify-center">
            <p className="font-bold text-lg md:text-xl lg:text-2xl text-center">CURRENT POST</p>
          </div>
        
          {/* Hidden Headline */}
          <div className="flex justify-center">
            <button className="border-2 border-red-600 text-center w-full max-w-sm py-2 rounded-lg text-red-600 font-bold text-base md:text-lg lg:text-xl">
              Headline Hidden
            </button>
          </div>
        
          {/* Hidden Details */}
          <div className="flex flex-wrap justify-center gap-6 text-center">
            <div className="flex">
              <p className="font-bold pr-2 text-sm md:text-base lg:text-lg">Phone:</p>
              <p className="text-red-600 text-sm md:text-base lg:text-lg">Hidden</p>
            </div>
            <div className="flex">
              <p className="font-bold pr-2 text-sm md:text-base lg:text-lg">Age:</p>
              <p className="text-red-600 text-sm md:text-base lg:text-lg">Hidden</p>
            </div>
            <div className="flex">
              <p className="font-bold pr-2 text-sm md:text-base lg:text-lg">City:</p>
              <p className="text-red-600 text-sm md:text-base lg:text-lg">Hidden</p>
            </div>
          </div>
        
          {/* Hidden Body */}
          <div className="flex justify-center border-2 border-red-600 h-40 rounded-lg mx-4 md:mx-16 py-20">
            <p className="text-red-600 text-sm md:text-base lg:text-lg text-center">BODY HIDDEN</p>
          </div>
        
          {/* Footer */}
          <div className="flex flex-col items-center space-y-5 py-10">
            <div className="flex flex-wrap justify-center gap-3 text-xs md:text-sm lg:text-base text-center">
              <p className="text-blue-600">Home</p>
              <p>|</p>
              <p className="text-blue-600">Manage Posts</p>
              <p>|</p>
              <p className="text-blue-600">Contact Us</p>
              <p>|</p>
              <p className="text-blue-600">Policies & Terms</p>
            </div>
            <p className="text-center text-xs md:text-sm lg:text-base">© 2025 Escort Aligators</p>
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
