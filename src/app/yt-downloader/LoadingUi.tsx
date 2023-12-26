import React from "react";
import { LuClapperboard } from "react-icons/lu";
import { MdAudiotrack } from "react-icons/md";

function LoadingUi() {
  return (
    <div className="bg-gray-800 border-primary p-3 mt-5 rounded border-opacity-60 border border-gray-500 ">
      <div className="grid gap-2 w-full max-w-[35rem] grid-cols-8 border-b border-primary pb-4 border-opacity-60 border-gray-500">
        <div className="col-span-3 rounded-md bg-gray-600 h-24 animate-pulse"></div>
        <div className="w-full col-span-5 text-left gap-2">
          <p className="h-2 bg-gray-600 rounded-md w-full my-1 animate-pulse"></p>
          <p className="h-2 w-1/5 bg-gray-600 bg-opacity-70 animate-pulse rounded-md mt-3"></p>
          <p className="h-2 bg-gray-600 bg-opacity-70 animate-pulse rounded-md w-3/4 my-1"></p>
          <p className="h-2 bg-gray-600 bg-opacity-70 animate-pulse rounded-md w-2/4 my-1"></p>
        </div>
      </div>
      <div className="">
        <div className="mt-3 rounded-md border-opacity-60 border border-gray-500 overflow-hidden w-full grid grid-cols-2">
          <button className="w-full animate-pulse border-0 py-2 items-center shadow-none bg-gray-600 ">
            <LuClapperboard className={"mx-auto"} />
          </button>
          <button className="w-full animate-pulse bg-gray-600 bg-opacity-20 border-0 py-2 items-center shadow-none ">
            <MdAudiotrack className={"mx-auto"} />
          </button>
        </div>
        <ul>
          <li className="grid grid-cols-6 my-3 items-center">
            <p className="h-2 bg-gray-600 bg-opacity-70 col-span-2 animate-pulse rounded-md w-full my-1"></p>
            <button className="w-full col-start-5 col-end-7 animate-pulse bg-gray-600 rounded border h-7 border-gray-600 border-opacity-20 py-2 items-center shadow-none "></button>
          </li>
          <li className="grid grid-cols-6 my-3 items-center">
            <p className="h-2 bg-gray-600 bg-opacity-70 col-span-2 animate-pulse rounded-md w-full my-1"></p>
            <button className="w-full col-start-5 col-end-7 animate-pulse bg-gray-600 rounded border h-7 border-gray-600 border-opacity-20 py-2 items-center shadow-none "></button>
          </li>
          <li className="grid grid-cols-6 my-3 items-center">
            <p className="h-2 bg-gray-600 bg-opacity-70 col-span-2 animate-pulse rounded-md w-full my-1"></p>
            <button className="w-full col-start-5 col-end-7 animate-pulse bg-gray-600 rounded border h-7 border-gray-600 border-opacity-20 py-2 items-center shadow-none "></button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LoadingUi;
