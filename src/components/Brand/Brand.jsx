import styles from "./Brand.module.scss";
import { useState, useEffect } from "react";
import Typist from "react-typist";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";



export const Brand = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    setCount(1);
  }, [count]);

  return (
    <>
      <section id="brand" className={styles.container}>
        <div className={styles.brand}>
          <div className={styles.brandBody}>
            {count ? ( 
              <Typist avgTypingDelay={300} onTypingDone={() => setCount(0)}>
              <span className={styles.brandBody__greeting}>Hi There!</span>
              <Typist.Backspace count={10} delay={300} />
                <span className={styles.brandBody__greeting}>Kumusta!</span>
                <Typist.Backspace count={10} delay={300} />
                <span className={styles.brandBody__greeting}>Chào bạn!</span>
                <Typist.Backspace count={10} delay={300} />
                <span className={styles.brandBody__greeting}>Salut!</span>
                <Typist.Backspace count={10} delay={300} />
                <span className={styles.brandBody__greeting}>Ni hao!</span>
                <Typist.Backspace count={10} delay={300} />
                <span className={styles.brandBody__greeting}>Hola!</span>
                <Typist.Backspace count={10} delay={300} />
                <span className={styles.brandBody__greeting}>
                  annyeonghaseyo!
                </span>
                <Typist.Backspace count={20} delay={300} />
                <span className={styles.brandBody__greeting}>namaste!</span>
                <Typist.Backspace count={10} delay={300} />
              </Typist>
              ) : (
              ""
            )}

            <div className={styles.brandBody__header}>
              <h1 className={styles.brandBody__header_name}>
                <span className={styles.brandBody__header_tiny}>I'm</span>Cara
                Jane Tran.
              </h1>
              <h1 className={styles.brandBody__header_title}>
                Junior Software Developer | Software QA Engineer
              </h1>

              <p className={styles.brandBody__header_par}>
                I have recently made a career change from Software Testing to
                Software Development. I enjoy front end web development,
                designing websites and testing software applications. How can I
                help?
              </p>
              <a href="mailto:cjbtran@gmail.com" className={styles.link}>
              <button className={styles.brandBody__header_btn}>
                Get in Touch
              </button>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.brandContact}>
            <a href="https://www.linkedin.com/in/carajanetran">
              <FontAwesomeIcon
                icon={faLinkedinIn}
                size="2x"
                className={styles.brandIcon__icon}
              />
            </a>
            <a href="https://github.com/carat25">
              <FontAwesomeIcon
                icon={faGithub}
                size="2x"
                className={styles.brandIcon__icon}
              />
            </a>
            <a href="mailto:cjbtran@gmail.com">
              <FontAwesomeIcon
                icon={faAt}
                size="2x"
                className={styles.brandIcon__icon}
              />
            </a>
        </div>
      </section>
    </>
  );
};
