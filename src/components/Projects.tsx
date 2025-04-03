import { PROJECTS } from "../constants/utils";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaAppStoreIos } from "react-icons/fa";

// const getTechnologyIndex = (key: string) => {
//   const index = technologyList.findIndex(
//     (item) => Object.keys(item)[0] === key
//   );
//   const val = technologyList?.[index]?.[key];
//   return val;
// };
// console.log({
//   technologyList: technologyList.findIndex((item) => {
//     console.log({
//       item,
//       keys: Object.keys(item),
//     });
//   }),
// });

function Projects() {
  return (
    <div className="pb-4">
      <h2 className="my-20 text-center text-3xl lg:text-4xl font-rubikMono text-white">
        Projects
      </h2>
      <div>
        {PROJECTS.map(({ desc, icon, title, appUrl, playUrl }) => (
          <div key={title} className="flex flex-wrap  mb-8 justify-center">
            <div className="w-full lg:w-1/4 justify-center items-center flex ">
              <img
                className="w-40 lg:w-64 h-40 lg:h-64 mb-6 rounded"
                src={icon}
                alt={title}
              />
            </div>
            <div className="w-full max-w-xl lg:w-3/4 lg:pl-8 justify-center items-center lg:items-start flex flex-col">
              <h3 className="font-rubikMono text-2xl mb-2 text-white">
                {title}
              </h3>
              <p className="font-montserratAlt mb-4 text-stone-400">{desc}</p>
              <div className="flex flex-row gap-2">
                {playUrl && (
                  <a
                    href={playUrl}
                    target="_blank"
                    aria-label={title}
                    key={title}
                  >
                    <IoLogoGooglePlaystore className="text-3xl text-white" />
                  </a>
                )}
                {appUrl && (
                  <a
                    href={appUrl}
                    target="_blank"
                    aria-label={title}
                    key={title}
                  >
                    <FaAppStoreIos className="text-3xl text-white" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
