import picture from "../../assets/test.jpg";
import { BsGithub, BsLinkedin, BsFillTelephoneFill } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";

type Props = {};

function Hero({}: Props) {
  return (
    <div className="flex justify-between mt-32 h-screen">
      <div className=" w-[56%] mr-6 items-center text-white mt-48">
        <p className="text-3xl font-bold font-montserrat mb-8">
          Hi, My name is Solomon.
        </p>
        <p className="text-2xl font-semibold font-montserrat mb-4">
          Full-Stack Web Developer
        </p>
        <p className="text-sm font-light font-montserrat mb-4 text-justify leading-6">
          I have a wide range of skills and I currently offer services in
          front-end web development and back-end web development. I can also
          slot into an AI/Machine Learning Role. I am always looking to improve
          my skill set, collaborate on projects and expand my interests in tech,
          you can reach me through any of these platforms.
        </p>
        <div className="px-10 mt-10 flex justify-between ">
          <BsGithub className="h-9 w-9 text-gray-50" />
          <BsLinkedin className="h-9 w-9 text-gray-50" />
          <BiLogoGmail className="h-9 w-9 text-gray-50" />
          <BsFillTelephoneFill className="h-9 w-9 text-gray-50" />
        </div>
      </div>
      <div>
        <img
          src={picture}
          alt="portfolio picture"
          className="w-[348px] h-[521px] rounded-md"
        />
      </div>
    </div>
  );
}

export default Hero;
