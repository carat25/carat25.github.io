import React, { useCallback, useState, useEffect } from "react";
import {
  animated,
  useTransition,
  config,
  AnimatedProps,
  useSpringRef,
} from "@react-spring/web";

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

import styles from "./FeatureProject.module.scss";


const FeatureProject = ({array}) => {
  const [index, setIndex] = useState(0);

  const transitions = useTransition(index, {
    key: index,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 3000 },
  });

  useEffect(() => {
    const t = setInterval(
      () => setIndex((state) => (state + 1) % array.length),
      4000
    );
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={styles.container}>
      {transitions((style, i) => (
        <animated.img
          className={styles.container__photos}
          src={`${array[i]}`}
          style={style}
          width = "800"
          height = "400"
        />
      ))}
    </div>
  );
};
export default FeatureProject;
