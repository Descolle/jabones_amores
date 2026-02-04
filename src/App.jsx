import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import WeAre from "./components/WeAre";
import Jabones from "./components/Jabones";
import Footer from "./components/Footer";
import Wsp from "./components/Wsp";
import Benefits from "./components/Benefits";

function App() {
  return (
    <>
      <WeAre></WeAre>
      <Benefits></Benefits>
      <Jabones></Jabones>
      <Wsp></Wsp>
      <Footer></Footer>
    </>
  );
}

export default App;
