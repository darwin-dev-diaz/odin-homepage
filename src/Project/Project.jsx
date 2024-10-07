import styles from "./Project.module.css";
import PropTypes from "prop-types";

function Project(props) {
  return (
    <div className={styles.project}>
      <div className={styles.project_image}>
        <img src={props.screenshot} alt="Software screenshot" />
      </div>
      <div className={styles.project_info}>
        <div className={styles.project_info_top}>
          <h3 className={styles.project_name}>{props.projectName}</h3>

          <div className={styles.icons}>
            <a href={props.githubLink}>
              <img
                className={styles.svg}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
              />
            </a>

            <a href={props.liveLink}>
              <svg
                className={styles.svg}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <title>open-in-new</title>
                <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
              </svg>
            </a>
          </div>
        </div>
        <p className={styles.project_description}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, atque
          ipsam, voluptatum
        </p>
      </div>
    </div>
  );
}

Project.propTypes = {
  screenshot: PropTypes.string,
  projectName: PropTypes.string,
  githubLink: PropTypes.string,
  liveLink: PropTypes.string,
};

export default Project;
