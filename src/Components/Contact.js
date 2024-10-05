import React from "react";
import { github, mail } from "../Sources";

export default function Contact({ ScrollRef }) {
  return (
    <div ref={ScrollRef} className="w-full  bg-PrimaryColor">
      <div className="lg:max-w-[1280px] m-auto w-full py-16 px-3">
        <h3>Contact Me</h3>
        <div className="w-full grid mt-10 lg:gap-x-10   lg:grid-cols-2 grid-cols-1">
          <div className="flex flex-col space-y-7">
            <div className="flex flex-col border items-center justify-center py-10 border-ActiveColor rounded-lg">
              <div className="rounded-md p-2  bg-SecondaryColor">
                <img className="w-6 h-6" src={mail} />
              </div>
              <a
                target="_blank"
                href={"mailto:prabudeva712@gmail.com?body=My custom mail body"}
              >
                <h6 className="mt-3 border-b border-dashed hover:text-ActiveColor duration-500 border-b-ActiveColor">
                  prabudeva712@gmail.com
                </h6>
              </a>
            </div>
            <div className="flex flex-col border items-center justify-center py-10 border-ActiveColor rounded-lg">
              <div className="rounded-md p-2  bg-SecondaryColor">
                <img className="w-6 h-6" src={github} />
              </div>
              <a target="_blank" href={"https://github.com/prabutechiee"}>
                <h6 className="mt-3 border-b border-dashed hover:text-ActiveColor duration-500 border-b-ActiveColor">
                  https://github.com/prabutechiee
                </h6>
              </a>
            </div>
          </div>
          <div className="flex flex-col space-y-5 my-5 lg:mt-0">
            <div className="flex flex-row items-center justify-between space-x-7">
              <input
                placeholder="First Name"
                className="bg-transparent border text-sm text-white border-ActiveColor rounded-lg p-4 w-full"
              />
              <input
                placeholder="Last Name"
                className="bg-transparent border text-sm text-white border-ActiveColor rounded-lg p-4 w-full"
              />
            </div>
            <input
              placeholder="Email"
              className="bg-transparent border text-sm text-white border-ActiveColor rounded-lg p-4 w-full"
            />
            <textarea
              placeholder="Message"
              className="bg-transparent border text-sm text-white border-ActiveColor rounded-lg p-4 w-full"
            />
            <div className="w-full cursor-pointer hover:bg-SecondaryColor duration-500 bg-ActiveColor rounded-lg flex flex-col py-4 items-center justify-center">
              <h6>SUBMIT</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
