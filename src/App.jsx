import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import WeAre from "./components/WeAre";
import Jabones from "./components/Jabones";
import Footer from "./components/Footer";
import Wsp from "./components/Wsp";

function App() {
  return (
    <>
      <WeAre></WeAre>
      <Jabones></Jabones>
      <Wsp></Wsp>
      <Footer></Footer>
    </>
  );
}

export default App;
