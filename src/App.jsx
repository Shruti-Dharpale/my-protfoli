import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
function App() {
  return (
    <div className="bg-[#171d32] w-full h-auto overflow-hidden">
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
