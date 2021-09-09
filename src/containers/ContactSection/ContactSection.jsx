import { Footer } from "../../components/Footer/Footer";
import { Contact } from "../../components/Contact/Contact";
import styles from "./ContactSection.module.scss";
import { useSpring, animated } from "react-spring";

export const ContactSection = () => {
  const spring = useSpring({
    loop: true,
    to: [
      { opacity: 1, color: "#fb4570" },
      { opacity: 0, color: "rgb(14,26,19)" },
    ],
    from: { opacity: 1, color: "#905171" },
  });
  return (
    <>
      <div id="contact" className={styles.Contact}>
        <h1 className={styles.Contact__header}>Get in Touch</h1>
        <p className={styles.Contact__par}>
          If you have questions or you just want to say hi, please don't
          hesitate to leave me a message.
          <animated.span style={spring} className={styles.Contact__par_thanku}>
            Thanks for dropping by!
          </animated.span>
        </p>
        <a href="mailto:cjbtran@gmail.com">
        <button className={styles.Contact__btn}>Say Hi</button>
        </a>
        <Footer />
      </div>
    </>
  );
};
