import { IconContext } from "react-icons";
import myLogo from "../assets/myLogo.svg";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

import { motion } from "motion/react";
import { TbMessage2Filled } from "react-icons/tb";

import { myEmail } from "../constants/utils";
const href = `mailto:${myEmail}`;

function Header() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -50,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 1,
        ease: "easeOut",
        delay: 0.2,
      }}
      className="flex flex-row items-center justify-between w-full "
    >
      <a href="/" aria-label="home">
        <img src={myLogo} alt="mySvgImage" className="w-12 h-12" />
      </a>

      <div className="flex flex-row items-center justify-center gap-2">
        <a
          href="https://www.linkedin.com/in/unekwe-francis-56485b1ba"
          target="_blank"
          aria-label="linkedIn"
        >
          <IconContext.Provider value={{ color: "white", size: "32px" }}>
            <FaLinkedin />
          </IconContext.Provider>
        </a>
        <a
          href="https://github.com/Nchekwube001"
          target="_blank"
          aria-label="github"
        >
          <IconContext.Provider value={{ color: "white", size: "32px" }}>
            <FaGithubSquare />
          </IconContext.Provider>
        </a>
        <a
          href="https://x.com/frxnsix_?s=21&t=QJ8FjRTEBefSuT7Z11VUPg"
          target="_blank"
          aria-label="twitter"
        >
          <IconContext.Provider value={{ color: "white", size: "32px" }}>
            <FaSquareXTwitter />
          </IconContext.Provider>
        </a>
        <a href={href} target="_blank" aria-label="twitter">
          <IconContext.Provider value={{ color: "white", size: "32px" }}>
            <TbMessage2Filled />
          </IconContext.Provider>
        </a>
      </div>
    </motion.div>
  );
}

export default Header;
