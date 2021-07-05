import { useEffect } from "react";
import styles from "./balloons.module.scss";

const Balloons = () => {
  //   const random = (num) => {
  //     return Math.floor(Math.random() * num);
  //   };

  //   const getRandomStyles = () => {
  //     let r = random(255);
  //     let g = random(255);
  //     let b = random(255);
  //     let mt = random(200);
  //     let ml = random(50);
  //     let dur = random(5) + 5;
  //     return {
  //       backgroundColor: `rgba(${r},${g},${b},0.7)`,
  //       color: `rgba(${r},${g},${b},0.7)`,
  //       boxShadow: `-7px -3px 10px rgba(${r - 10},${g - 10},${b - 10},0.7)`,
  //       margin: `${mt}px 0 0 ${ml}px`,
  //       animation: `float ${dur}s ease-in infinite`,
  //     };
  //   };

  //   const createBalloons = (num) => {
  //     for (let i = num; i > 0; i--) {
  //       return (
  //         <div
  //           className={styles.balloon}
  //           style={{
  //             backgroundColor: getRandomStyles().backgroundColor,
  //             color: getRandomStyles().color,
  //             boxShadow: getRandomStyles().boxShadow,
  //             margin: getRandomStyles().margin,
  //             animation: getRandomStyles.animation,
  //           }}
  //         ></div>
  //       );
  //     }
  //   };

  return (
    <div className={styles.balloonWrapper}>
      <div className={styles.balloon}></div>
      <div className={styles.balloon}></div>
      <div className={styles.balloon}></div>
      <div className={styles.balloon}></div>
      <div className={styles.balloon}></div>
    </div>
  );
};

export default Balloons;
