import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faSass,
  faJsSquare,
  faGithub,
  faReact,
  faJava,
  faGitAlt
} from "@fortawesome/free-brands-svg-icons";
import styles from "./SkillsList.module.scss";
import spring from "../../styles/spring.svg";
import firebase from "../../styles/firebase.svg";
import mySQL from "../../styles/mySQL.png";
import java from "../../styles/java.jpg";
import Javascript from "../../styles/Javascript.png";




export const SkillsList = () => {
  return (
    <div className={styles.skills}>
      <div className={styles.skills__icon}>
        <FontAwesomeIcon icon={faHtml5} size="3x" className={styles.skills__icon_html}/>
      </div>
      <div className={styles.skills__icon}>
        <FontAwesomeIcon icon={faCss3Alt} size="3x" className={styles.skills__icon_css}/>
      </div>
      <div className={styles.skills__icon}>
        <FontAwesomeIcon icon={faSass} size="3x" className={styles.skills__icon_sass}/>
      </div>
      <div className={styles.skills__icon}>
        <img src={Javascript} height="40" className={styles.skills__icon_img}></img>
      </div>
      <div className={styles.skills__icon}>
        <FontAwesomeIcon icon={faGithub} size="3x" />
      </div>
      <div className={styles.skills__icon}>
        <FontAwesomeIcon icon={faReact} size="3x" className={styles.skills__icon_react}/>
      </div>
      <div className={styles.skills__icon}>
        <img src={java} height="40" className={styles.skills__icon_img}></img>
      </div>
      <div className={styles.skills__icon}>
      <FontAwesomeIcon icon={faGitAlt} size="3x" className={styles.skills__icon_git}/>
      </div>
      <div className={styles.skills__icon}>
        <img src={spring} height="40" className={styles.skills__icon_img}></img>
      </div>
      <div className={styles.skills__icon}>
        <img src={firebase} height="40" className={styles.skills__icon_img}></img>
      </div>
      <div className={styles.skills__icon}>
        <img src={mySQL} height="40" className={styles.skills__icon_img}></img>
      </div>
    </div>
  );
};
