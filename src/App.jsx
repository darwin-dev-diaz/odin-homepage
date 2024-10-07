import "./reset.css";
import Header from "./Header/Header";
import styles from "./App.module.css";
import Project from "./Project/Project";
import Footer from "./Footer/Footer";
import screenshot1 from "./assets/screenshot1.png";
import screenshot2 from "./assets/screenshot2.png";
import screenshot3 from "./assets/screenshot3.png";
import screenshot4 from "./assets/screenshot4.png";
import screenshot5 from "./assets/screenshot5.png";
import screenshot6 from "./assets/screenshot6.jpeg";
import screenshot7 from "./assets/screenshot7.png";
import screenshot8 from "./assets/screenshot8.jpg";
import screenshot9 from "./assets/screenshot9.png";
function App() {
  const projectScreenshots = [
    screenshot1,
    screenshot2,
    screenshot3,
    screenshot4,
    screenshot5,
    screenshot6,
    screenshot7,
    screenshot8,
    screenshot9,
  ];

  return (
    <div className={styles.app}>
      <Header></Header>
      <body>
        <h2 className={styles.projects_title}>Projects</h2>
        <div className={styles.projects_container}>
          {projectScreenshots.map((screenshot, i) => (
            <Project
              key={i}
              screenshot={screenshot}
              projectName="Project Name"
              liveLink="https://www.google.com"
              githubLink="https://www.github.com"
            ></Project>
          ))}
        </div>
      </body>

      <Footer></Footer>
    </div>
  );
}

export default App;
