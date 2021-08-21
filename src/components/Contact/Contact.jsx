import styles from "./Contact.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";

export const Contact = () => {
  return (
    <span className={styles.contact}>
        
    <FontAwesomeIcon
      icon={faLinkedinIn}
      size="2x"
      className={styles.navbar__contact_icon}
    />
  

    <FontAwesomeIcon
      icon={faGithub}
      size="2x"
      className={styles.navbar__contact_icon}
    />

  <FontAwesomeIcon
      icon={faAt}
      size="2x"
      className={styles.navbar__contact_icon}
    />

  </span>
  );
};
