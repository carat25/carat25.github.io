import styles from "./Brand.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";

export const Brand = () => {
  return (
    <>
    <section id="brand" className={styles.container}>
      <div className={styles.brand}>
        <div className={styles.brandcontainer}>
        <p className={styles.brand__par}>
          Hi there <span className={styles.brand__par_wave}>👋 </span>, I'm{" "}
        </p>
        </div>
        <div className={styles.brandheader}>
        <h1 className={styles.brand__name}>Cara Jane Tran.</h1>
        <h1 className={styles.brand__title}>Junior Software Developer | Software QA Engineer</h1>
        </div>

        <div className={styles.brandcontainer}>
        <p className={styles.brand__par}>
          I have recently made a career change from Software Testing to Software Development. I enjoy front end web development, designing websites and testing software applications. How can I help?
        </p>
        </div>
        <div className={styles.brandcontainer}>
        <button className={styles.brand__btn}>Get in Touch</button>
        </div>
      </div>
      </section>
    </>
  );
};
