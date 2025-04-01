import Header from "./components/Header";
import PhotoBox from "./components/PhotoBox";
import TitleBox from "./components/TitleBox";

function App() {
  return (
    <div className="w-full bg-mainDark min-h-screen px-32 py-6">
      <Header />
      <div className="flex flex-row">
        <PhotoBox />
        <div className="pl-10">
          <TitleBox />
        </div>
      </div>
    </div>
  );
}

export default App;
