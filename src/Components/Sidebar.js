import React, { useState } from "react";
import { download } from "../Sources";

export default function Sidebar({
  ShowSidebar,
  SidebarFunction,
  Selected,
  ScrollInView,
}) {
  const [ShowPopup, setShowPopup] = useState(false);
  return (
    <div
      className={`${
        ShowSidebar ? "w-full z-50" : "w-0 -z-10"
      } self-start lg:hidden duration-700 bg-transparent/70 absolute top-0 h-screen flex flex-row`}
    >
      <div
        className={`flex flex-col flex-1  ${
          ShowSidebar ? " block" : "hidden"
        } bg-black duration-700 p-10 space-y-6`}
      >
        <ul
          onClick={() => {
            SidebarFunction(false);
            setShowPopup(false);
            ScrollInView("Home");
          }}
          className="group cursor-pointer mt-10 "
        >
          <li>Home</li>
          <h6
            className={`${
              Selected == "Home" ? "w-[100%] opacity-100" : ""
            } progressStyle`}
          ></h6>
        </ul>
        <ul
          onClick={() => {
            SidebarFunction(false);
            setShowPopup(false);
            ScrollInView("Skills");
          }}
          className="group cursor-pointer"
        >
          <li>Skills</li>
          <h6
            className={`${
              Selected == "Skills" ? "w-[100%] opacity-100" : ""
            } progressStyle`}
          ></h6>
        </ul>
        <ul
          onClick={() => {
            SidebarFunction(false);
            setShowPopup(false);
            ScrollInView("Experience");
          }}
          className="group cursor-pointer"
        >
          <li>Work Experience</li>
          <h6
            className={`${
              Selected == "Experience" ? "w-[100%] opacity-100" : ""
            } progressStyle`}
          ></h6>
        </ul>
        <ul
          onClick={() => {
            SidebarFunction(false);
            setShowPopup(false);
            ScrollInView("Contact");
          }}
          className="group cursor-pointer"
        >
          <li>Contact Me</li>
          <h6
            className={`${
              Selected == "Contact" ? "w-[100%] opacity-100" : ""
            } progressStyle`}
          ></h6>
        </ul>
        <div onClick={() => setShowPopup(true)} className="basicButton">
          <h3 className="hover:font-normal text-white">Hire Me</h3>
        </div>
        {ShowPopup ? (
          <div className={`w-full p-3  bg-ActiveColor/80 space-y-5 rounded-md`}>
            <div className="flex flex-row group  items-center justify-between">
              <a className="text-white hover:text-black cursor-pointer duration-300 text-sm">
                React JS Resume
              </a>
              <img
                className={`w-4 h-4 group-hover:translate-y-0 group-hover:opacity-100 -translate-y-5 opacity-0 duration-300 object-fill`}
                src={download}
              />
            </div>
            <div className="flex flex-row group items-center justify-between">
              <a className="text-white hover:text-black cursor-pointer duration-300 text-sm">
                React Native Resume
              </a>
              <img
                className={`w-4 h-4  group-hover:translate-y-0 group-hover:opacity-100 translate-y-5 opacity-0 duration-300 fill-white object-fill`}
                src={download}
              />
            </div>
          </div>
        ) : null}
      </div>
      <div
        className="w-[140px]"
        onClick={() => {
          setShowPopup(false);
          SidebarFunction(false);
        }}
      />
    </div>
  );
}
