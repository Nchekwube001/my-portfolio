import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { FaSwift, FaFlutter } from "react-icons/fa6";
import { SiKotlin, SiTypescript } from "react-icons/si";

function Technologies() {
  return (
    <div className="pb-24">
      <h2 className="my-20 text-center text-4xl font-rubikMono text-white">
        Stack
      </h2>

      <div className="flex flex-wrap items-center justify-center gap-5">
        <div className="p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>
        <div className="p-4">
          <FaSwift className="text-7xl text-orange-500" />
        </div>
        <div className="p-4">
          <SiKotlin className="text-7xl text-purple-400" />
        </div>
        <div className="p-4">
          <FaFlutter className="text-7xl text-blue-400" />
        </div>
        <div className="p-4">
          <SiTypescript className="text-7xl text-blue-400" />
        </div>
        <div className="p-4">
          <FaNodeJs className="text-7xl text-green-500" />
        </div>
      </div>
    </div>
  );
}

export default Technologies;
