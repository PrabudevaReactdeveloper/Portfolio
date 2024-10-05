import React from "react";
import { css, html, human, javascript, react } from "../Sources";
import { motion } from "framer-motion";
export default function Home({ ScrollRef }) {
  return (
    <div ref={ScrollRef} className="w-full  bg-PrimaryColor">
      <div className="lg:max-w-[1280px] m-auto w-full py-16 px-3">
        <div className=" flex flex-col md:flex-row items-center w-full h-full  justify-between">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative h-full "
          >
            <div className=" w-full h-full absolute blur-[250px] rounded-full bg-SecondaryColor" />
            <div className="flex flex-col gap-y-2 h-full  justify-center ">
              <h1>Building Digital</h1>
              <h1>Experience That</h1>
              <h1>Inspire</h1>
              <div className="mt-5">
                <h5>Passionate Frontend Developer | Transforming ideas into</h5>
                <h5>Seamless and Visually Stunning Web Solutions</h5>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative flex flex-col-reverse md:flex-row items-center md:items-end mt-5 lg:mt-0 justify-center space-x-2"
          >
            <div className="rounded-lg group mt-3 md:mt-0 hidden lg:block border p-3 border-SecondaryColor">
              <img
                className="w-[60px] group-hover:-translate-y-2 duration-500 h-[60px] "
                src={react}
              />
            </div>
            <div className="relative">
              <div className=" w-full h-full absolute blur-[400px]  rounded-full bg-SecondaryColor" />
              <img
                className="xl:w-[450px] lg:w-[350px] lg:h-[350px] md:w-[280px] md:h-[280px] xl:h-[450px] rounded-3xl object-cover"
                src={human}
              />
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="lg:max-w-[1280px] m-auto mt-3 flex flex-row justify-end px-3"
        >
          <div className="flex-1" />
          <div className="xl:w-[450px] flex flex-row flex-wrap justify-center md:justify-start gap-3">
            <div className="rounded-lg group lg:hidden block border p-3 border-SecondaryColor">
              <img
                className="w-[60px] group-hover:-translate-y-2 duration-500 h-[60px] "
                src={react}
              />
            </div>
            <div className="rounded-lg group border p-3 border-SecondaryColor">
              <img
                className="w-[60px] group-hover:-translate-y-2 duration-500 h-[60px] "
                src={html}
              />
            </div>
            <div className="rounded-lg group border p-3 border-SecondaryColor">
              <img
                className="w-[60px] group-hover:-translate-y-2 duration-500 h-[60px] "
                src={css}
              />
            </div>
            <div className="rounded-lg group border p-3 border-SecondaryColor">
              <img
                className="w-[60px] group-hover:-translate-y-2 duration-500 h-[60px] "
                src={javascript}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
