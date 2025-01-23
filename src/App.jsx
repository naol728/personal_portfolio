import React from "react";
import Home from "./pages/Home";
import { TracingBeam } from "./components/ui/tracing-beam";
import About from "./pages/About";
import Skill from "./pages/Skill";
import Products from "./pages/Products";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="h-fit">
      <TracingBeam>
        <Home />
        <About />
        <Skill />
        <Products />
        <Footer />
      </TracingBeam>
    </div>
  );
}
