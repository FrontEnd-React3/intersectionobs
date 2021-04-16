import React, { useRef, useEffect, useState } from "react";
import { styles } from "./App.css";

const useElementOnScreen = () => {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  };

  const containerRef = useRef(null);

  const callbackFunction = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      const intersectedElement = entry.target.className;
      alert(intersectedElement);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef, options]);

  return containerRef;
};

function App() {
  const sections = document.querySelectorAll("section");
  const [section] = sections;

  const homeRef = useElementOnScreen();
  const projectRef = useElementOnScreen();
  const contactRef = useElementOnScreen();

  return (
    <div className="app">
      <header>
        <nav>
          <ul>
            <li>
              <a id="home" data-page="home" href="#">
                Home
              </a>
            </li>
            <li>
              <a id="project" data-page="project" href="#">
                Project
              </a>
            </li>
            <li>
              <a id="contact" data-page="contact" href="#">
                Contact
              </a>
            </li>
            <div className="bubble"></div>
          </ul>
        </nav>
      </header>

      <main>
        <section data-index="0" className="intersection">
          <div ref={homeRef} className="home">
            <h2>home</h2>
          </div>
        </section>
        <section data-index="1" className="intersection">
          <div ref={projectRef} className="project">
            <h2>project</h2>
          </div>
        </section>
        <section data-index="2" className="intersection">
          <div ref={contactRef} className="contact">
            <h2>contact</h2>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
