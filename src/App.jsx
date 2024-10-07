import "./reset.css";
import Header from "./Header/Header";
import styles from "./App.module.css";
import Project from "./Project/Project";

import screenshot from "./assets/software_screenshot.png";
function App() {
  return (
    <div className={styles.app}>
      <Header></Header>
      <div className={styles.projects_container}>
        <Project
          screenshot={screenshot}
          projectName="Project Name"
          liveLink="https://www.google.com"
          githubLink="https://www.github.com"
        ></Project>
        <Project
          screenshot={screenshot}
          projectName="Project Name"
          liveLink="https://www.google.com"
          githubLink="https://www.github.com"
        ></Project>
        <Project
          screenshot={screenshot}
          projectName="Project Name"
          liveLink="https://www.google.com"
          githubLink="https://www.github.com"
        ></Project>
        <Project
          screenshot={screenshot}
          projectName="Project Name"
          liveLink="https://www.google.com"
          githubLink="https://www.github.com"
        ></Project>
        <Project
          screenshot={screenshot}
          projectName="Project Name"
          liveLink="https://www.google.com"
          githubLink="https://www.github.com"
        ></Project>
        <Project
          screenshot={screenshot}
          projectName="Project Name"
          liveLink="https://www.google.com"
          githubLink="https://www.github.com"
        ></Project>
        <Project
          screenshot={screenshot}
          projectName="Project Name"
          liveLink="https://www.google.com"
          githubLink="https://www.github.com"
        ></Project>
        <Project
          screenshot={screenshot}
          projectName="Project Name"
          liveLink="https://www.google.com"
          githubLink="https://www.github.com"
        ></Project>
        <Project
          screenshot={screenshot}
          projectName="Project Name"
          liveLink="https://www.google.com"
          githubLink="https://www.github.com"
        ></Project>
      </div>
    </div>
  );
}

export default App;
