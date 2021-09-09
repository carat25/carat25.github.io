import React from "react";
import styles from "./OtherProjects.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";

export const OtherProjects = ({
  image,
  title,
  description,
  tool1,
  tool2,
  tool3,
  tool4,
  demo,
  account,
}) => {
  return (
    <div className={styles.Thumbnail}>
      <img
        src={image}
        alt="Project Image"
        height={200}
        className={styles.Thumbnail__img}
      />

      <div className={styles.Thumbnail__detail}>
        <div className={styles.Thumbnail__detail_icon}>
          <a href={demo} className={styles.Thumbnail__icon}>
            <FontAwesomeIcon
              icon={faDesktop}
              className={styles.Thumbnail__icon}
            />
          </a>
          <a href={account} className={styles.Thumbnail__icon}>
            <FontAwesomeIcon
              icon={faGithub}
              className={styles.Thumbnail__icon}
            />
          </a>
        </div>
        <p className={styles.Thumbnail__detail_title}>{title}</p>
        <p className={styles.Thumbnail__detail_desc}>{description}</p>
        <ul className={styles.Thumbnail__detail_tools}>
          <li className={styles.Thumbnail__detail_tools_li}>{tool1}</li>
          <li className={styles.Thumbnail__detail_tools_li}>{tool2}</li>
          <li className={styles.Thumbnail__detail_tools_li}>{tool3}</li>
        </ul>
      </div>
    </div>
  );
};
