// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Portfolio from "./components/Portfolio/Portfolio";
// import Services from "./components/Services/Services";
import About from "./components/About/About";
import Nav from "./components/Nav/Nav";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <About />
      <Experience />
      {/* <Services /> */}
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
