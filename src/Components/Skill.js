import React, { useState } from "react";
import { skill1, skill2, skill3, skill4 } from "../Sources";
import { motion } from "framer-motion";
export default function ({ ScrollRef }) {
  const array = [
    {
      id: 0,
      name: "Frontend",
      img: skill1,
      skills: [
        {
          rank: "95",
          sName: "HTML",
        },
        {
          rank: "95",
          sName: "CSS",
        },
        {
          rank: "95",
          sName: "JavaScript",
        },
        {
          rank: "90",
          sName: "React",
        },
        {
          rank: "85",
          sName: "React Native",
        },
      ],
    },
    {
      id: 1,
      name: "Backend",
      img: skill2,
      skills: [
        {
          rank: "90",
          sName: "Node JS",
        },
        {
          rank: "95",
          sName: "Express JS",
        },
      ],
    },
    {
      id: 2,
      name: "Tools",
      img: skill3,
      skills: [
        {
          rank: "90",
          sName: "GitHub",
        },
        {
          rank: "95",
          sName: "Visual Studio Code",
        },
        {
          rank: "90",
          sName: "Tailwind CSS",
        },
        // {
        //     rank: '95',
        //     sName: 'React Hooks'
        // }
      ],
    },
    {
      id: 3,
      name: "Soft Skills",
      img: skill4,
      skills: [
        {
          rank: "90",
          sName: "Problem-solving",
        },
        {
          rank: "90",
          sName: "Collaboration",
        },
        {
          rank: "95",
          sName: "Leading The Team",
        },
      ],
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div ref={ScrollRef} className="w-full  bg-PrimaryColor">
      <div className="lg:max-w-[1280px] m-auto w-full py-16 px-3">
        <h3>Technical Proficiency</h3>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col lg:flex-row lg:gap-x-[50px] 2xl:gap-x-[200px] w-full mt-14  lg:px-0 justify-between"
        >
          <div className="grid grid-cols-2 relative h-max flex-1 lg:gap-10 gap-7">
            {array.map((e, index) => (
              <div
                onClick={() => setCurrentIndex(index)}
                key={index}
                className={`flex-1 ${
                  array[currentIndex].id == index ? "bg-ActiveColor" : ""
                } border duration-500 hover:bg-ActiveColor cursor-pointer py-5 xl:py-8 flex flex-col relative rounded-lg border-ActiveColor items-center justify-center`}
              >
                <h3>{e.name}</h3>
                <div className="border border-ActiveColor p-2 rounded-md absolute bg-PrimaryColor -top-[15px] -left-[15px]">
                  <img className="xl:w-8 w-5 xl:h-8 h-5" src={e.img} />
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col flex-1 mt-10 lg:mt-0 h-[450px] ">
            <div className="flex-1 border flex flex-col rounded-lg h-full border-ActiveColor relative overflow-hidden">
              <h2 className="text-ActiveColor px-5 py-2 border-b border-b-ActiveColor font-semibold tracking-wider">
                {array[currentIndex].name}
              </h2>
              {array[currentIndex].skills.map((e1, idx1) => (
                <div key={idx1} className="p-5 w-full ">
                  <div className="flex flex-row items-center justify-between">
                    <h3 className="text-white text-sm">{e1.sName}</h3>
                    <h3 className="text-SecondaryColor text-sm font-normal">
                      {e1.rank}%
                    </h3>
                  </div>
                  <div className="w-full h-[6px] bg-ActiveColor/40 mt-3 rounded-full">
                    <div
                      style={{ width: e1.rank + "%" }}
                      className={`h-full duration-700 rounded-full bg-ActiveColor`}
                    />
                  </div>
                </div>
              ))}
              <div className=" w-full h-full absolute blur-[500px] top-0  rounded-full bg-SecondaryColor" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
