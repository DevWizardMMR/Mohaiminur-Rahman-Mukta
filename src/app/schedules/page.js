import React from "react";
import Calendar from "react-calendar";

const Schedules = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center">
      <div>
        <div className="font-bold">
          <h1 className="text-4xl">Schedules</h1>
          <h2 className="text-2xl">Default</h2>
        </div>
        <div className="mt-10 space-y-3">
          <div className="flex gap-5 shadow-md py-4 px-6 justify-start items-center rounded-md w-80">
            <span className="w-8 h-8 bg-base-300 rounded-md"></span>
            <h1 className="font-bold">Saturday</h1>
            <span className="text-sm ml-auto">Unavaliable</span>
          </div>
          <div className="flex gap-5 shadow-md py-4 px-6 justify-start items-center rounded-md w-80">
            <span className="w-8 h-8 bg-base-300 rounded-md"></span>
            <h1 className="font-bold">Sunday</h1>
            <span className="text-sm ml-auto">Unavaliable</span>
          </div>
          <div className="flex gap-5 shadow-md py-4 px-6 justify-start items-center rounded-md w-80">
            <span className="w-8 h-8 bg-base-300 rounded-md"></span>
            <h1 className="font-bold">Monday</h1>
            <span className="text-sm ml-auto">Unavaliable</span>
          </div>
          <div className="flex gap-5 shadow-md py-4 px-6 justify-start items-center rounded-md w-80">
            <span className="w-8 h-8 bg-base-300 rounded-md"></span>
            <h1 className="font-bold">Tuseday</h1>
            <span className="text-sm ml-auto">Unavaliable</span>
          </div>
          <div className="flex gap-5 shadow-md py-4 px-6 justify-start items-center rounded-md w-80">
            <span className="w-8 h-8 bg-base-300 rounded-md"></span>
            <h1 className="font-bold">Wednesday</h1>
            <span className="text-sm ml-auto">Unavaliable</span>
          </div>
          <div className="flex gap-5 shadow-md py-4 px-6 justify-start items-center rounded-md w-80">
            <span className="w-8 h-8 bg-base-300 rounded-md"></span>
            <h1 className="font-bold">Thursday</h1>
            <span className="text-sm ml-auto">Unavaliable</span>
          </div>
          <div className="flex gap-5 shadow-md py-4 px-6 justify-start items-center rounded-md w-80">
            <span className="w-8 h-8 bg-base-300 rounded-md"></span>
            <h1 className="font-bold">Friday</h1>
            <span className="text-sm ml-auto">Unavaliable</span>
          </div>
        </div>
      </div>
      <div className="p-5 bg-[#7BE2C3] rounded-md shadow-md">
        <Calendar/>
      </div>
    </div>
  );
};

export default Schedules;
