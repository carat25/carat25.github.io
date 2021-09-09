import styles from "./NavBar.module.scss";

export const NavBar = () => {
  return (
    
      <nav className={styles.navbar}>
        <li className={styles.navbar__brand}>
          <a href="#brand" className={styles.navbar__brand_name}>
            C<span className={styles.navbar__brand_tiny}>j</span>T
            <span className={styles.navbar__brand_tiny}>ran</span>
          </a>
        </li>
        <ol className={styles.navbar__links}>
          <li className={styles.navbar__links_item}>
            <a href="#about" className={styles.navbar__links_item}>
              About
            </a>
          </li>
          <li className={styles.navbar__links_item}>
            <a href="#project" className={styles.navbar__links_item}>
              Projects
            </a>
          </li>
          <li className={styles.navbar__links_item}>
            <a href="#contact" className={styles.navbar__links_item}>Contact</a>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/1uiWEA-P7Ae5QbhsN1tWPb3-oq4yBOayz/view?usp=sharing" className={styles.navbar__links_cv}>CV</a>
          </li>
        </ol>
      </nav>
   
  );
};
