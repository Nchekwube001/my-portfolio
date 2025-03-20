import { myEmail } from "../constants/utils";

const openMailApp = () => {
  window.location.href = `mailto:${myEmail}`;
};
function TalkButtons() {
  return (
    <div className="flex-row  px-6 gap-4">
      <button
        onClick={openMailApp}
        className="bg-black text-white p-4 rounded-full font-rubikMono"
      >
        Talk with me
      </button>
      <button className="bg-transparent border-black border-2 text-white ml-4 p-4 rounded-full font-rubikMono">
        See Works
      </button>
    </div>
  );
}

export default TalkButtons;
