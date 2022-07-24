import React from "react";
import styles from "../Styles/Coupon.module.css";
import { useNavigate } from "react-router-dom";
const Coupon = () => {
  let navigate = useNavigate(); 
  const pageChange = () =>{ 
    let path = `/couponcode`; 
    navigate(path);
  }
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
        <div className={styles.leftdiv}>
          <h4>Offer ends in 12 days</h4>
        </div>
        <div className={styles.rightdiv}>
          <div style={{ display: "flex", textAlign: "center" }}>
            <div style={{ textAlign: "center" }}>
              <p>Normal Price</p>
              <h2>RM15.00</h2>
              <p>&  Above</p>
            </div>
            <div>
                <p>Kind Meal Discount</p>
            </div>
          </div>
          <div><p>No pre-payment or booking needed. Get coupon & dine instantly!</p>
            <button className={styles.getcoupon}  onClick={pageChange}>Get Free Coupon</button>
            <p>Grab this KindMeal Coupon now to enjoy 10% off!   How it works</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Coupon;
