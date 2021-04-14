import { useInView } from "react-intersection-observer";
import "./App.css";
function App() {
  const sections = document.querySelectorAll("section");
  const bubble = document.querySelectorAll(".bubble");
  const gradients = ["orange", "red", "blue"];
  const options = { threshold: 0.2 };

  const observer = new IntersectionObserver(navCheck, options);
  console.log("sections" + sections);

  function navCheck(entries) {
    entries.forEach(entry => {
      console.log("entry" + entry);
      const className = entry.target.className;
      console.log("clName" + className);
    });
    console.log("entries" + entries);
  }

  sections.forEach(section => {
    observer.observe(section);
    console.log("section" + section);
  });
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li>
              <a data-page="home" href="#">
                Home
              </a>
            </li>
            <li>
              <a data-page="project" href="#">
                Project
              </a>
            </li>
            <li>
              <a data-page="contact" href="#">
                Contact
              </a>
            </li>
            <div className="bubble"></div>
          </ul>
        </nav>
      </header>

      <main>
        <section data-index="0" className="home">
          <h2>home</h2>
        </section>
        <section data-index="1" className="project">
          <h2>project</h2>
        </section>
        <section data-index="2" className="contact">
          <h2>contact</h2>
        </section>
      </main>
    </div>
  );
}

export default App;
