import React, { useRef, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Skill from "./Skill";
import Contact from "./Contact";
import Experience from "./Experience";
import Sidebar from "./Sidebar";

function RoutingComponent() {
  const [ShowSidebar, setShowSidebar] = useState(false);
  function SidebarFunction(params1) {
    setShowSidebar(!ShowSidebar);
  }
  const HomeRef = useRef();
  const SkillRef = useRef();
  const ExperienceRef = useRef();
  const ContactRef = useRef();
  const [selected, setSelected] = useState("Home");
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
    // <BrowserRouter>
    //   <Header Selected={selected} SidebarFunction={onChangeFunction} />
    //   <Routes>
    //     <Route path="/" element={<Home ScrollRef={HomeRef} />}>
    //       <Route path="/Skills" element={<Skill />} />
    //       <Route path="/Experience" element={<Experience />} />
    //       <Route path="/Contact" element={<Contact />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
    <>
      <Header
        Selected={selected}
        SidebarFunction={SidebarFunction}
        ScrollInView={ScrollInView}
      />
      <Home ScrollRef={HomeRef} />
      <Skill ScrollRef={SkillRef} />
      <Experience ScrollRef={ExperienceRef} />
      <Contact ScrollRef={ContactRef} />
      <Sidebar
          Selected={selected}
          ShowSidebar={ShowSidebar}
          SidebarFunction={SidebarFunction}
          ScrollInView={ScrollInView}
        />
    </>
  );
}

export default RoutingComponent;
