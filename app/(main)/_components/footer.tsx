import {
  FaDiscord,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full flex flex-col items-center text-gray-300 p-6 gap-6">
      <div className="h-full w-full flex flex-wrap items-start justify-evenly gap-6">
        <div className="flex flex-col gap-6 w-[250px]">
          <h2 className="text-xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-purple-600">
            Community
          </h2>
          <div className="flex flex-col gap-y-6">
            <p className="flex flex-row items-center justify-center gap-x-1">
              <FaYoutube />
              Youtube
            </p>
            <p className="flex flex-row items-center justify-center gap-x-1">
              <FaGithub /> Github
            </p>
            <p className="flex flex-row items-center justify-center gap-x-1">
              <FaDiscord /> Discord
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6 w-[250px]">
          <h2 className="text-center text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-purple-600">
            Socials
          </h2>
          <div className="flex flex-col gap-y-6">
            <p className="flex flex-row items-center justify-center gap-x-1">
              <FaInstagram />
              Instagram
            </p>
            <p className="flex flex-row items-center justify-center gap-x-1">
              <FaTwitter /> Twitter
            </p>
            <p className="flex flex-row items-center justify-center gap-x-1">
              <FaLinkedin /> Linkedin
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6 w-[250px]">
          <h2 className="text-center text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-purple-600">
            About
          </h2>
          <div className="flex flex-col gap-y-6">
            <p className="flex flex-row items-center justify-center gap-x-1">
              Become sponsor
            </p>
            <p className="flex flex-row items-center justify-center gap-x-1">
              Learning about me
            </p>
            <p className="flex flex-row items-center justify-center gap-x-1">
              duttakoushik779@gmail.com
            </p>
          </div>
        </div>
      </div>
      <div className="text-center">
        ©Koushik Dutta 2024 Inc.All right reserved
      </div>
    </div>
  );
};

export default Footer;
