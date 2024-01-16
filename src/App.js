import logo from "./logo.svg";
import "./App.css";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import MarginForm from "./components/MarginForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import WhySection from "./components/WhySection";
import HowSection from "./components/HowSection";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <ResponsiveAppBar />
      <MarginForm />
      <WhySection />
      <HowSection />
      <Testimonials />
      <Contact />

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default App;
