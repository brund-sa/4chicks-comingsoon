import Main from "./Components/Main";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

function App() {
  return (
    <div className="App">
        <Main />
    </div>
  );
}

export default App;
