import React, { useRef, useEffect, useState } from "react";
import "./App.css";

const useElementOnScreen = (options) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const callbackFunction = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef, options]);

  return [containerRef, isVisible];
};

function App() {
  const sections = document.querySelectorAll("section");
  const [section] = sections;

  const [homeRef, isHome] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  });

  const [projectRef, isProject] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  });

  const [contactRef, isContact] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  });

  return (
    <div className="app">
      <header>
        <nav>
          <ul>
            <li>
              <a data-page="home" href="#">
                {isHome ? "IN VIEWPORT" : "NOT IN VIEWPORT"}
              </a>
            </li>
            <li>
              <a data-page="project" href="#">
                {isProject ? "IN VIEWPORT" : "NOT IN VIEWPORT"}
              </a>
            </li>
            <li>
              <a data-page="contact" href="#">
                {isContact ? "IN VIEWPORT" : "NOT IN VIEWPORT"}
              </a>
            </li>
            <div className="bubble"></div>
          </ul>
        </nav>
      </header>

      <main>
        <section data-index="0" className="home">
          <h2 ref={homeRef}>home</h2>
        </section>
        <section data-index="1" className="project">
          <h2 ref={projectRef}>project</h2>
        </section>
        <section data-index="2" className="contact">
          <h2 ref={contactRef}>contact</h2>
        </section>
      </main>
    </div>
  );
}

export default App;
