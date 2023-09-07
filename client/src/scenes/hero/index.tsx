import picture from "../../assets/test.jpg";
import { BsGithub, BsLinkedin, BsFillTelephoneFill } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";

type Props = {};

function Hero({}: Props) {
  const sendEmail = () => {
    const email = "amehsolomon46@gmail.com";
    window.location.href = `mailto:${email}`;
  };
  return (
    <div className="grid grid-cols-12 mt-32 min-h-screen">
      <div className=" col-span-12 md:col-span-7 order-2 md:order-1 md:mr-6 items-center transition-all duration-500  dark:text-white text-black md:mt-48">
        <p className="text-3xl font-bold font-montserrat text-center md:text-left mb-8">
          Hi, My name is Solomon.
        </p>
        <p className="text-2xl text-center md:text-left font-semibold font-montserrat mb-4">
          Back-End / Full-Stack Web Developer
        </p>
        <p className="text-sm md:text-left dark:font-light font-montserrat mb-4 text-justify leading-6 md:px-0 px-8">
          I have a wide range of skills and I currently offer services in
          front-end web development and back-end web development. I can also
          slot into an AI/Machine Learning Role. I am always looking to improve
          my skill set, collaborate on projects and expand my interests in tech,
          you can reach me through any of these platforms.
        </p>
        <div className="px-14 md:px-6 lg:px-10 mt-10 flex justify-between ">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Uncle-Solomon"
          >
            <BsGithub className="h-9 w-9 text-gray-50 hover:scale-110 transition duration-300" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/ameh-solomon-onyeke-a69874162/"
          >
            <BsLinkedin className="h-9 w-9 text-gray-50 hover:scale-110 transition duration-300" />
          </a>
          <BiLogoGmail
            className="h-9 w-9 text-gray-50 hover:scale-110 transition duration-300"
            onClick={sendEmail}
          />
          <a href="tel:+2348182606754">
            <BsFillTelephoneFill className="h-9 w-9 text-gray-50 hover:scale-110 transition duration-300" />
          </a>
        </div>
      </div>
      <div className=" -mt-16 mb-4 md:mb-0 col-span-12 md:col-span-5 order-1 md:order-2 flex justify-center md:items-start lg:ml-8 md:mt-10 lg:mt-6 items-center">
        <img
          src={picture}
          alt="portfolio picture"
          className="w-[348px] h-[348px] md:w-[348px] md:h-[521px] object-fill rounded-full md:rounded-3xl"
        />
      </div>
    </div>
  );
}

export default Hero;
