import styles from "./Contact.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";

export const Contact = () => {
  return (
    <span className={styles.contact}>
      <a href="https://www.linkedin.com/in/carajanetran">
        <FontAwesomeIcon
          icon={faLinkedinIn}
          size="2x"
          className={styles.contact__icon}
        />
      </a>
      <a href="https://github.com/carat25">
        <FontAwesomeIcon
          icon={faGithub}
          size="2x"
          className={styles.contact__icon}
        />
      </a>
      <a href="mailto:cjbtran@gmail.com">
      <FontAwesomeIcon icon={faAt} size="2x" className={styles.contact__icon} />
      </a>
    </span>
  );
};
