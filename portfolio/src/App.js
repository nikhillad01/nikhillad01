import "./App.css";
import Header from "./components/header";
import Navbar from "./components/navbar";
import AboutWrapper from "./components/aboutWrapper";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        <Header />
        <AboutWrapper />
      </div>
    </div>
  );
}

export default App;
