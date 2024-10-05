import React, { useRef, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Home from "./Home";
import Skill from "./Skill";
import Experience from "./Experience";
import Contact from "./Contact";
export default function Mainfile() {
  const [ShowSidebar, setShowSidebar] = useState(false);
  function SidebarFunction(params) {
    setShowSidebar(params);
  }
  const HomeRef = useRef();
  const SkillRef = useRef();
  const ExperienceRef = useRef();
  const ContactRef = useRef();

  const [Selected, setSelected] = useState("Home");
  function ScrollInView(params) {
    setSelected(params);
    switch (params) {
      case "Home":
        HomeRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "Skills":
        SkillRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "Experience":
        ExperienceRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "Contact":
        ContactRef.current.scrollIntoView({ behavior: "smooth" });
        break;
    }
  }
  return (
    <>
      <Header
        Selected={Selected}
        SidebarFunction={SidebarFunction}
        ScrollInView={ScrollInView}
      />

      <div className="w-full bg-PrimaryColor">
        <div className="w-full bg-PrimaryColor h-screen lg:max-w-[1280px] m-auto flex flex-col ">
          <div className=" px-5 lg:px-0 lg:max-w-[1570px] self-center w-full h-full flex flex-col items-center">
            {/* <Home ScrollRef={HomeRef} />
            <Skill ScrollRef={SkillRef} /> */}
            <Experience ScrollRef={ExperienceRef} />
            <Contact ScrollRef={ContactRef} />
          </div>
        </div>
        <Sidebar
          Selected={Selected}
          ShowSidebar={ShowSidebar}
          SidebarFunction={SidebarFunction}
          ScrollInView={ScrollInView}
        />
      </div>
    </>
  );
}
