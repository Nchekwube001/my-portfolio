import { IconContext } from "react-icons";
import myLogo from "../assets/myLogo.svg";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function Header() {
  return (
    <div className="flex flex-row items-center justify-between w-full">
      <div>
        <img src={myLogo} alt="mySvgImage" className="w-12 h-12" />
      </div>

      <div className="flex flex-row items-center justify-center">
        <IconContext.Provider value={{ color: "white", size: "32px" }}>
          <FaLinkedin />
        </IconContext.Provider>
        <IconContext.Provider value={{ color: "white", size: "32px" }}>
          <FaGithubSquare />
        </IconContext.Provider>
        <IconContext.Provider value={{ color: "white", size: "32px" }}>
          <FaSquareXTwitter />
        </IconContext.Provider>
      </div>
    </div>
  );
}

export default Header;
