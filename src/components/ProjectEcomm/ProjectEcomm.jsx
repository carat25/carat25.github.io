import React, {useState, useEffect} from "react";
import {useTransition, animated} from "@react-spring/web";

const ecommSlides = ['ecommerce_main.png', 'ecommerce_product.png','ecommerce_cart.png']

export const ProjectEcomm = () => {
    const [index, setIndex] = useState(0);
    const transitions = useTransition(index,{
        key: index,
        from: {opacity: 0},
        enter: {opacity: 1},
        leave: {opacity: 0},
        config: {duration: 3000},
    })

useEffect(() => {
    const t = setInterval(() => setIndex(state => (state + 1) % slides.length), 4000)
    return () => clearTimeout(t)
}, [])


  return (
    <div className={styles.projects__list_items}>
    {transitions((style, i) => (
        <animated.div
        style={{
            ...style,
            img: `${ecommSlides[i]}`,
        }}
        />
    ))}
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
  );
};
