import styles from "./ProjectSection.module.scss";
import GoogleBooksProj from "../../images/GoogleBooksProj.png";

import React, { useCallback, useState, useEffect } from "react";
import { OtherProjects } from "../../components/OtherProjects/OtherProjects";
import morsecode from "../../images/morsecode.png";
import precourse from "../../images/precourse.png";
import { animated, useTransition, config } from "react-spring";
import FeatureProject from "../FeatureProject/FeatureProject";
import mothdx_login from "../../images/mothdx_login.png";
import mothdx_inventory from "../../images/mothdx_inventory.png";
import mothdx_inv_info from "../../images/mothdx_inv_info.png";
import mothdx_edit_inv from "../../images/mothdx_edit_inv.png";
import mothdx_reagent_batch from "../../images/mothdx_reagent_batch.png";
import mothdx_modal from "../../images/mothdx_reagent_batch.png";
import ecommerce_main from "../../images/ecommerce_main.png";
import ecommerce_main2 from "../../images/ecommerce_main2.png";
import ecommerce_product from "../../images/ecommerce_product.png";
import ecommerce_cart from "../../images/ecommerce_cart.png";

const mothdx = [
  mothdx_login,
  mothdx_inventory,
  mothdx_inv_info,
  mothdx_edit_inv,
  mothdx_reagent_batch,
  mothdx_modal,
];

const ecommerce = [
  ecommerce_main,
  ecommerce_main2,
  ecommerce_product,
  ecommerce_cart,
];

export const ProjectSection = () => {
  return (
    <div id="project" className={styles.projects}>
      <h2 className={styles.projects__title}>
        ☞ Thing's I've built and worked on
      </h2>
      <div className={styles.projects__feature}>
        <FeatureProject array={mothdx} />
        <div className={styles.projects__firstFeatured}>
          <p className={styles.projects__firstFeatured_category}>
            Featured Project
          </p>
          <p className={styles.projects__firstFeatured_title}>
            MOTH Diagnostics
          </p>
          <p className={styles.projects__firstFeatured_desc}>
            An inventory management system created for{" "}
            <a
              href="https://www.mothdx.com/"
              className={styles.projects__firstFeatured_desc_link}
            >
              Moth Diagnostics
            </a>
            .. This is a team project comprised of 12 junior software developer
            trainees from Nology. We used the pair programming technique and
            agile scrum in the duration of this project. My role was mainly
            doing frontend development using React, Axios, Bootstrap and a
            little bit of JAVA/ Spring in the backend.{" "}
          </p>
          <ul className={styles.projects__firstFeatured_tools}>
            <li className={styles.projects__firstFeatured_tools_li}>React</li>
            <li className={styles.projects__firstFeatured_tools_li}>
              Javascript
            </li>
            <li className={styles.projects__firstFeatured_tools_li}>Axios</li>
            <li className={styles.projects__firstFeatured_tools_li}>
              Bootstrap
            </li>
            <li className={styles.projects__firstFeatured_tools_li}>Java</li>
            <li className={styles.projects__firstFeatured_tools_li}>
              SpringBoot
            </li>
            <li className={styles.projects__firstFeatured_tools_li}>MySQL</li>
          </ul>
        </div>
      </div>
      <div className={styles.projects__feature}>
        <div className={styles.projects__secondFeatured}>
          <p className={styles.projects__secondFeatured_category}>
            Featured Project
          </p>
          <p className={styles.projects__secondFeatured_title}>
            Sprinkles and Dreams
          </p>
          <p className={styles.projects__secondFeatured_desc}>
            A simple ecommerce website. Website contains 3 pages: products page
            that displays the list of products available, product details page
            that contains more information on the product selected from the
            products page, and cart page which displays the list of items added
            by the customer. There are different variety of each product and
            customer has an option of how much quantity they need. The cart page
            display total price which automatically calculates the total price
            of each product depending on how many quantity and the total price
            for the products in their cart.{" "}
          </p>
          <ul className={styles.projects__secondFeatured_tools}>
            <li className={styles.projects__secondFeatured_tools_li}>React</li>
            <li className={styles.projects__secondFeatured_tools_li}>
              Javascript
            </li>
            <li className={styles.projects__secondFeatured_tools_li}>Sass</li>
            <li className={styles.projects__secondFeatured_tools_li}>
              Firebase
            </li>
          </ul>
        </div>
        <FeatureProject array={ecommerce} />
      </div>

      <h3 className={styles.projects__title_other}>
        Other Projects I have created
      </h3>
      <div className={styles.projects__list}>
        <OtherProjects
          image={GoogleBooksProj}
          category="Featured Project"
          title="Google Books search engine"
          description="My version of book search engine that uses the Google Books API. Searchbar allows user to search for books and the book search engine will display list of books available in google books."
          tool1="HTML & API"
          tool2="Sass"
          tool3="Javascript"
          account="https://github.com/carat25/GoogleBooks"
          demo="https://carat25.github.io/GoogleBooks/"
        />
        <OtherProjects
          image={morsecode}
          category="Featured Project"
          title="Morse Code Translator"
          description="A two way morse code translator that allows user to translate english words to morse and vice versa. The morse code is currently set to 4 spaces in between words."
          tool1="HTML"
          tool2="Sass"
          tool3="Javascript"
          account="https://github.com/carat25/MorseCodeTranslator"
          demo="https://carat25.github.io/MorseCodeTranslator/"
        />
        <OtherProjects
          image={precourse}
          category="Featured Project"
          title="Precourse Work"
          description="A simple website created before the start of the course. Website contains 2 pages: the home page and contact page that has user form submission. "
          tool1="HTML"
          tool2="CSS"
          tool3="Javascript"
          account="https://github.com/carat25/PreCourse"
          demo=""
        />
      </div>
    </div>
  );
};
