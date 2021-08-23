import styles from "./ProjectSection.module.scss";
import GoogleBooksProj from "../../styles/GoogleBooksProj.png";
import ecommerce_main from "../../styles/ecommerce_main.png";
import {useSpring, a} from "@react-spring/web";
import {useState} from "react";

export const ProjectSection = () => {

  return (
    <div id="project" className={styles.projects}>
      <h2 className={styles.projects__title}>
        ☞ Thing's I've built and worked on
      </h2>
      <div className={styles.projects__list}>
        <div className={styles.projects__list_items}>
          <img
            src={ecommerce_main}
            height="400px"
            className={styles.ecommerce__image}
          ></img>
          <div className={styles.ecommerce__desc}>
            <h5 className={styles.ecommerce__header}>Featured Project</h5>
            <h3 className={styles.ecommerce__title}>Ecommerce App</h3>
            <p className={styles.ecommerce__detail}>
              My version of book search engine that uses the Google Books API
            </p>
            <p className={styles.ecommerce__tech}>
              React | Sass | Javascript | Firebase
            </p>
          </div>
        </div>

        {/* <div className={styles.projects__list_items}>
          <div className={styles.googlebook__desc}>
            <h5 className={styles.googlebook__desc_header}>Featured Project</h5>
            <h3 className={styles.googlebook__desc_title}>Google Books</h3>
            <p className={styles.googlebook__desc_detail}>
              My version of book search engine that uses the Google Books API
            </p>
            <p className={styles.googlebook__desc_tech}>HTML | Sass | Javascript | API</p>
          </div>
          <img
            src={GoogleBooksProj}
            height="400px"
            className={styles.googlebook__image}
          ></img>
        </div> */}
      </div>
    </div>
  );
};
