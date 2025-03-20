import { motion } from "motion/react";
import TalkButtons from "./TalkButtons";
function TitleBox() {
  return (
    <div>
      <div className="justify-center flex-row items-center">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          // transition={{
          //   duration: 500,
          //   delay: 500,
          // }}
          className="text-9xl text-white font-rubikMono text-center"
        >
          SOFTWARE
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          //   transition={{
          //     duration: 500,
          //     delay: 1000,
          //   }}
          className="text-9xl text-gray-300 font-rubikMono pt-2"
        >
          DEVELOPER
        </motion.div>
      </div>
      <TalkButtons />
    </div>
  );
}

export default TitleBox;
