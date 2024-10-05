import React, { useState } from "react";
import { arrow, burger, download } from "../Sources";
import user from "../Assets/user.pdf";
export default function Header({ Selected, SidebarFunction, ScrollInView }) {
  const [ShowPopup, setShowPopup] = useState(false);
  const Headermenu = [
    {
      name: "Home",
      route: "Home",
    },
    {
      name: "Skills",
      route: "Skills",
    },
    {
      name: "Work Experience",
      route: "Experience",
    },

    {
      name: "Contact Me",
      route: "Contact",
    },
  ];
  return (
    <div className="w-full flex flex-col items-center justify-center h-20 bg-PrimaryColor sticky top-0 z-50">
      <div className="w-full flex px-5 lg:px-3  lg:max-w-[1280px] m-auto h-full flex-row  items-center justify-between backdrop-blur-md">
        <h6 className=" logo ">Time to Program</h6>
        <div className="hidden lg:flex flex-row items-center gap-x-10 xl:gap-x-14 ">
          {Headermenu.map((items, index) => (
            <ul className="group cursor-pointer">
              <li
                onClick={() => ScrollInView(items.route)}
                className={`${
                  Selected == items.route ? "text-red-500" : ""
                } text-white`}
              >
                {items.name}
              </li>
              <h6
                className={`${
                  Selected == "/" ? "w-[100%] opacity-100" : ""
                } progressStyle`}
              ></h6>
            </ul>
          ))}
          {/* <ul className="group cursor-pointer">
            <Link
              to="/Skills"
              className={`${
                Selected == "/Skills" ? "text-red-500" : ""
              } text-white`}
            >
              Skills
            </Link>
            <h6
              className={`${
                Selected == "/Skills" ? "w-[100%] opacity-100" : ""
              } progressStyle`}
            ></h6>
          </ul>
          <ul className="group cursor-pointer">
            <li>Work Experience</li>
            <h6
              className={`${
                Selected == "Experience" ? "w-[100%] opacity-100" : ""
              } progressStyle`}
            ></h6>
          </ul>
          <ul className="group cursor-pointer">
            <li>Contact Me</li>
            <h6
              className={`${
                Selected == "Contact" ? "w-[100%] opacity-100" : ""
              } progressStyle`}
            ></h6>
          </ul> */}
          {/*  */}
          <div className="relative lg:block hidden">
            <div
              onMouseEnter={() => setShowPopup(true)}
              onMouseLeave={() => setShowPopup(false)}
              className="basicButton z-10 duration-500"
            >
              <h3 className=" text-sm text-white">Hire Me</h3>
            </div>
            <div
              onMouseEnter={() => setShowPopup(true)}
              onMouseLeave={() => setShowPopup(false)}
              className={`${
                ShowPopup ? " right-0" : "right-[40px] opacity-0"
              } absolute z-0 space-y-2 w-[200px] top-[37px] duration-300  p-3  bg-ActiveColor/40 rounded-md`}
            >
              <div className="flex flex-row group  items-center justify-between">
                <a
                  href={user}
                  download="Example"
                  target="_blank"
                  className="text-white hover:text-ActiveColor cursor-pointer duration-300 text-sm"
                >
                  React JS Resume
                </a>
                <img
                  className={`w-4 h-4 group-hover:translate-y-0 group-hover:opacity-100 -translate-y-5 opacity-0 duration-300 object-fill`}
                  src={download}
                />
              </div>
              {/* <div className="flex flex-row group items-center justify-between">
                <a
                  href={user}
                  download="Arun"
                  target="_blank"
                  className="text-white hover:text-ActiveColor cursor-pointer duration-300 text-sm"
                >
                  React Native Resume
                </a>
                <img
                  className={`w-4 h-4  group-hover:translate-y-0 group-hover:opacity-100 translate-y-5 opacity-0 duration-300 fill-white object-fill`}
                  src={download}
                />
              </div> */}
            </div>
          </div>
        </div>
        <div
          onClick={() => SidebarFunction()}
          className="basicButton lg:hidden block"
        >
          <img className="w-5 h-5 " src={burger} />
        </div>
      </div>
    </div>
  );
}
