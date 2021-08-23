import styles from "./Brand.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub, faWordpressSimple } from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import {useState, useEffect} from "react";
import Typist from "react-typist";


export const Brand = () => {
const [count, setCount] = useState(1);

useEffect(() => {
  setCount(1);
},[count]);

  return (
    <>
    <section id="brand" className={styles.container}>
      <div className={styles.brand}>
        <div className={styles.brandcontainer}>
        {count ? (
        <Typist avgTypingDelay={300} onTypingDone={() => setCount(0)}>
        <span className={styles.brand__greeting}>Hi There!</span>
        <Typist.Backspace count={10} delay={500} />
        <span className={styles.brand__greeting}>Kumusta!</span>
        <Typist.Backspace count={10} delay={500} />
        <span className={styles.brand__greeting}>Chào bạn!</span>
        <Typist.Backspace count={10} delay={500} />
        <span className={styles.brand__greeting}>Salut!</span>
        <Typist.Backspace count={10} delay={500} />
        <span className={styles.brand__greeting}>Nǐ hǎo!</span>
        <Typist.Backspace count={10} delay={500} />
        <span className={styles.brand__greeting}>¡Hola!</span>
        <Typist.Backspace count={10} delay={500} />
        <span className={styles.brand__greeting}>annyeonghaseyo!</span>
        <Typist.Backspace count={20} delay={500} />
        <span className={styles.brand__greeting}>'ahla!</span>
        <Typist.Backspace count={10} delay={500} />
        <span className={styles.brand__greeting}>namaste!</span>
        <Typist.Backspace count={10} delay={500} />
        </Typist>
        ) : ("")
        }</div>
        <div className={styles.brandheader}>
        <h1 className={styles.brand__name}><span className={styles.brand__name_tiny}>I'm</span>Cara Jane Tran.</h1>
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
