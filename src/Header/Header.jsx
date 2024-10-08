import styles from "./Header.module.css";
import photo from "../assets/header-photo.jpg";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.photo}>
        <img src={photo} alt="Your headshot" />
        <h3 className={`${styles.name} ${styles.linear_wipe}`}>Meerkat</h3>
      </div>
      <div className={styles.info_box}>
          <h1>About Me</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita id
            unde dolore veniam nam iure reiciendis error corporis. Neque
            repellendus possimus cum nihil vero aperiam ipsa provident porro
            suscipit atque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita id
            unde dolore veniam.
          </p>

        <div className={styles.info_box_bottom}>
          <img
            className={styles.svg}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
          />
          <img
            className={styles.svg}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg"
          />
          <img
            className={styles.svg}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/twitter/twitter-original.svg"
          />
        </div>
      </div>
    </header>

  );
}

export default Header;
