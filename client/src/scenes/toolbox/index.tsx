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

type Props = {};

function ToolBox({}: Props) {
  return (
    <div className="min-h-screen mt-4 md:-mt-24 mb-4">
      <h1 className="text-white text-4xl font-patua text-center font-bold mb-12">
        TOOL BOX
      </h1>
      <div className="flex flex-row flex-wrap justify-evenly gap-x-24 gap-y-32">
        <div className="bg-white h-[337.5px] w-[337.5px]">
          <div className="flex flex-row flex-wrap justify-evenly px-2 pt-4 gap-4">
            <img className="w-20 h-20" src={html} />
            <img className="w-20 h-20" src={css} />
            <img className="w-20 h-20" src={react} />
            <img className="w-20 h-20" src={vite} />
            <img className="w-20 h-20" src={typescript} />
            <img className="w-20 h-20" src={tailwindcss} />
            <img className="w-20 h-20" src={js} />
          </div>
          <p className="text-center font-montserrat mt-2 text-xl font-bold">
            Front End
          </p>
        </div>
        <div className="bg-white h-[337.5px] w-[337.5px]">
          <div className="flex flex-row flex-wrap justify-evenly px-2 pt-4 gap-4">
            <img className="w-20 h-20" src={postman} />
            <img className="w-20 h-20" src={express} />
            <img className="w-20 h-20" src={flask} />
            <img className="w-20 h-20" src={postgreSQL} />
            <img className="w-20 h-20" src={node} />
            <img className="w-20 h-20" src={mongo} />
            <img className="w-20 h-20" src={js} />
            <img className="w-20 h-20" src={typescript} />
            <img className="w-20 h-20" src={python} />
          </div>
          <p className="text-center font-montserrat mt-2 text-xl font-bold">
            Back End
          </p>
        </div>
        <div className="bg-white h-[337.5px] w-[337.5px]">
          <div className="flex flex-row flex-wrap justify-evenly px-2 pt-4 gap-5">
            <img className="w-20 h-20" src={scikitlearn} />
            <span className="w-20 h-20" />
            <img className="w-20 h-20" src={python} />
            <span className="w-20 h-20" />
            <img className="w-20 h-20" src={tensorflow} />
            <span className="w-20 h-20" />
            <img className="w-20 h-20" src={jupyter} />
            <span className="w-20 h-20" />
            <img className="w-20 h-20" src={googlecolab} />
          </div>
          <p className="text-center font-montserrat mt-2 text-xl font-bold">
            AI/ML
          </p>
        </div>
        <div className="bg-white h-[337.5px] w-[337.5px]">
          <div className="flex flex-row flex-wrap justify-evenly px-2 pt-4 gap-5">
            <img className="w-20 h-20" src={c} />
            <span className="w-20 h-20" />
            <img className="w-20 h-20" src={platformio} />
            <span className="w-20 h-20" />
            <img className="w-20 h-20" src={arduino} />
            <span className="w-20 h-20" />
            <span className="w-20 h-20" />
            <span className="w-20 h-20" />
            <span className="w-20 h-20" />
          </div>
          <p className="text-center font-montserrat mt-2 text-xl font-bold">
            Embedded Systems
          </p>
        </div>
      </div>
    </div>
  );
}

export default ToolBox;
