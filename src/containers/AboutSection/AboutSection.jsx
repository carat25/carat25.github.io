import styles from "./AboutSection.module.scss";
import { SkillsList } from "../../components/SkillsList/SkillsList";
import myPhoto from "../../styles/myPhoto.png";

export const AboutSection = () => {
  return (
    <div id="about" className={styles.about}>
      <div className={styles.aboutme}>
        <h2 className={styles.aboutme__normal}>☞ About Me</h2>
        <p className={styles.aboutme__par}>
          Hello! My name is Cara and I am a Software QA Analyst/ Engineer turned
          Software Developer. I have recently completed a 12-weeks Software
          Development course in{" "}
          <span className={styles.aboutme__par_bold}>_nology.io</span>. My
          interest in software development started when I was at the peek of my
          Software QA career. I have always relied on developers to create test
          data, fixed test environments and change configurations in the
          application I was testing and I thought it looks exciting and figured
          if they can do it, so can I. And here I am.
        </p>
        <p className={styles.aboutme__par}>
          Other than coding/ testing, I also enjoy travelling and baking is my
          therapy!
        </p>
        <p className={styles.aboutme__par}>
          Here's the list of technologies that I have learned and used during
          the course:
        </p>
        <div className={styles.aboutme__skills}>
          <SkillsList />
        </div>
      </div>
      <div className={styles.aboutphoto}>
        <img
          src={myPhoto}
          height="280px"
          className={styles.aboutphoto__myphoto}
        ></img>
      </div>
    </div>
  );
};
