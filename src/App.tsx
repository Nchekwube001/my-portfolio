import Experiences from "./components/Experiences";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

function App() {
  return (
    <div className="w-full bg-mainDark min-h-screen px-8 md:px-20  py-6">
      <Header />
      <Hero />
      <Technologies />
      <Projects />
      <Experiences />
      {/* <div className="flex flex-row">
        <PhotoBox />
        <div className="pl-10">
          <TitleBox />
        </div>
      </div> */}
    </div>
  );
}

export default App;
