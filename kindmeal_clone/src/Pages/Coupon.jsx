import React from "react";
import styles from "../Styles/Coupon.module.css";
const Coupon = () => {
  return (
    <>
      <div className={styles.backgroundimg}></div>
      <div className={styles.headers}>
        <p>Overview</p>
        <p>Meal Deals</p>
        <p>Food Menu</p>
        <p> Location</p>
      </div>
      <div className={styles.offerdiv}>
        <div className={styles.leftdiv}></div>
        <div className={styles.rightdiv}>

        </div>

      </div>
    </>
  );
};

export default Coupon;
