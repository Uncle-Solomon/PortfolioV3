import arduino from "../../assets/arduino.png";
import c from "../../assets/c.png";
import css from "../../assets/css.png";
import flask from "../../assets/flask.png";
import googlecolab from "../../assets/googlecolab.png";
import html from "../../assets/html.png";
import js from "../../assets/js.png";
import jupyter from "../../assets/jupyter.png";
import mongo from "../../assets/mongo.png";
import node from "../../assets/node.png";
import platformio from "../../assets/platformio.png";
import postgreSQL from "../../assets/postgreSQL.png";
import postman from "../../assets/postman.png";
import python from "../../assets/python.png";
import react from "../../assets/react.png";
import scikitlearn from "../../assets/scikitlearn.png";
import tailwindcss from "../../assets/tailwindcss.png";
import tensorflow from "../../assets/tensorflow.png";
import typescript from "../../assets/typescript.png";
import express from "../../assets/express.png";
import vite from "../../assets/vite.png";
import Objects from "../../assets/Objects.png";
import { motion } from "framer-motion";

type Props = {};

function ToolBox({}: Props) {
  return (
    <div className="min-h-screen mt-12 mb-4">
      <div className="flex justify-center items-baseline gap-4">
        <h1 className="dark:text-white text-black transition-all duration-500 font-light text-4xl font-patua text-center dark:font-bold mb-12 flex items-center justify-center gap-x-4">
          Frameworks / Stack
        </h1>
        <img src={Objects} />
      </div>
      <div className="flex justify-center">
        {" "}
        <div className="grid grid-cols-12 md:gap-x-12 md:gap-y-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1.5 }}
            viewport={{ amount: 0.5 }}
            variants={{
              hidden: { rotate: -5, opacity: 0.3 },
              visible: { rotate: 0, opacity: 1, scale: 0.95 },
            }}
            className="bg-white h-[200px] w-[200px] shadow-2xl lg:col-span-4 md:col-span-6 col-span-12 mx-4 mb-12"
          >
            <div className="flex flex-row flex-wrap justify-evenly px-2 pt-6 gap-6">
              <img className="w-8 h-8" src={html} />
              <img className="w-8 h-8" src={css} />
              <img className="w-8 h-8" src={react} />
              <img className="w-8 h-8" src={vite} />
              <img className="w-8 h-8" src={typescript} />
              <img className="w-8 h-8" src={tailwindcss} />
              <img className="w-8 h-8" src={js} />
            </div>
            <p className="text-center font-montserrat mb-4 mt-12 md:mt-[4.5rem] text-xl font-bold dark:text-white text-black">
              Front End
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1.5 }}
            viewport={{ amount: 0.5 }}
            variants={{
              hidden: { rotate: -5, opacity: 0.3 },
              visible: { rotate: 0, opacity: 1, scale: 0.95 },
            }}
            className="bg-white h-[200px] w-[200px] shadow-2xl lg:col-span-4 md:col-span-6 col-span-12 mx-4 mb-12"
          >
            <div className="flex flex-row flex-wrap justify-evenly px-2 pt-6 gap-6">
              <img className="w-8 h-8" src={postman} />
              <img className="w-8 h-8" src={express} />
              <img className="w-8 h-8" src={flask} />
              <img className="w-8 h-8" src={postgreSQL} />
              <img className="w-8 h-8" src={node} />
              <img className="w-8 h-8" src={mongo} />
              <img className="w-8 h-8" src={js} />
              <img className="w-8 h-8" src={typescript} />
              <img className="w-8 h-8" src={python} />
            </div>
            <p className="text-center font-montserrat mb-4 mt-12 md:mt-[4.5rem]  text-xl font-bold dark:text-white text-black">
              Back End
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1.5 }}
            viewport={{ amount: 0.5 }}
            variants={{
              hidden: { rotate: -5, opacity: 0.3 },
              visible: { rotate: 0, opacity: 1, scale: 0.95 },
            }}
            className="bg-white h-[200px] w-[200px] shadow-2xl lg:col-span-4 md:col-span-6 col-span-12 mx-4 mb-12"
          >
            <div className="flex flex-row flex-wrap justify-evenly px-2 pt-6 gap-6">
              <img className="w-8 h-8" src={scikitlearn} />
              <span className="w-8 h-8" />
              <img className="w-8 h-8" src={python} />
              <span className="w-8 h-8" />
              <img className="w-8 h-8" src={tensorflow} />
              <span className="w-8 h-8" />
              <img className="w-8 h-8" src={jupyter} />
              <span className="w-8 h-8" />
              <img className="w-8 h-8" src={googlecolab} />
            </div>
            <p className="text-center font-montserrat mb-4 mt-12 md:mt-[4.5rem]  text-xl font-bold dark:text-white text-black">
              AI/ML
            </p>
          </motion.div>
          <div className="hidden lg:block lg:col-span-4 md:col-span-6 col-span-12 mx-4"></div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1.5 }}
            viewport={{ amount: 0.5 }}
            variants={{
              hidden: { rotate: -5, opacity: 0.3 },
              visible: { rotate: 0, opacity: 1, scale: 0.95 },
            }}
            className="bg-white h-[200px] w-[200px] shadow-2xl lg:col-span-4 md:col-span-6 col-span-12 mx-4 mb-12"
          >
            <div className="flex flex-row flex-wrap justify-evenly px-2 pt-6 gap-6">
              <img className="w-8 h-8" src={c} />
              <span className="w-8 h-8" />
              <img className="w-8 h-8" src={platformio} />
              <span className="w-8 h-8" />
              <img className="w-8 h-8" src={arduino} />
              <span className="w-8 h-8" />
              <span className="w-8 h-8" />
              <span className="w-8 h-8" />
              <span className="w-8 h-8" />
            </div>
            <p className="text-center font-montserrat mb-4 mt-12 md:mt-[4.5rem] text-xl font-bold dark:text-white text-black">
              Embedded Systems
            </p>
          </motion.div>
          <div className="hidden lg:block lg:col-span-4 md:col-span-6 col-span-12 mx-4"></div>
        </div>
      </div>
    </div>
  );
}

export default ToolBox;
