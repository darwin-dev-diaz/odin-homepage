import styles from "./Footer.module.css";
import photo from "../assets/footer-photo.jpg";
import photoSmall from "../assets/footer-photo-s.jpg";
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_left}>
        <h2>Contact Me</h2>
        <p>
          Get in touch if you like Meerkats. <br /> Get off this site not if you
          don&apos;t like Meerkats
        </p>
        <p>
          1234 Meerkat Drive
          <br />
          Meerkat Town, Meerkat State 1235
        </p>

        <div className={styles.icon_with_text}>
          <svg
            className={styles.svg}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <title>phone</title>
            <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
          </svg>
          <p>(555) 555-5555</p>
        </div>
        <div className={styles.icon_with_text}>
          <svg
            className={styles.svg}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <title>email-heart-outline</title>
            <path d="M10 9C8.9 9 8 9.92 8 11.05C8 11.62 8.22 12.12 8.59 12.5L12 16L15.42 12.5C15.78 12.13 16 11.61 16 11.05C16 9.92 15.1 9 14 9C13.46 9 12.95 9.23 12.59 9.6L12 10.2L11.42 9.61C11.05 9.23 10.54 9 10 9M20 4C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4H20M16.7 8.06L20 6H4L7.3 8.06C6.89 8.45 6.55 8.92 6.33 9.45L4 8V18H20V8L17.67 9.45C17.45 8.92 17.11 8.45 16.7 8.06Z" />
          </svg>
          <p>meer@kat.com</p>
        </div>
        <div className={styles.info_box_bottom}>
          <img
            className={styles.social_svg}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
          />
          <img
            className={styles.social_svg}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg"
          />
          <img
            className={styles.social_svg}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/twitter/twitter-original.svg"
          />
        </div>
      </div>
      <div className={styles.footer_right}>
        <div className={styles.footer_image_container}>
          {/* <img src={photo} alt="Meerkat family" /> */}
          <picture>
            <source srcSet={photoSmall} media="(max-width: 1000px)" />
            {/* <source srcset={photoSmall} media="(min-width: 600px)" /> */}
            <img src={photo} alt="Meerkat family" />
          </picture>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
