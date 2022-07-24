import React from "react";
import styles from "../Styles/Couponcode.module.css";
import { Link } from "react-router-dom";
const Couponcode = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.code}>
          <div>
            <Link to="/">
              <img
                src="https://www.kindmeal.my/images/logo-kindmeal.png"
                alt=""
              />
            </Link>
          </div>
          <div>
            <h4>Live Coupon</h4>
            <h3>35-CD796D</h3>
            <p>Verification: 117</p>
          </div>
          <div>
            <img
              src="https://www.kindmeal.my/photos/coupon/62/62167.png"
              style={{ height: "100px" }}
            ></img>
          </div>
        </div>

        <div className={styles.detail}>
          <div className={styles.left}></div>
          <div className={styles.right}>
            <p>Hijau</p>
            <h4>Malaysian Vegan Experience</h4>
            <h1>10 % Off</h1>
            <button className={styles.button}>
              <h4>Use Live Coupon</h4>
            </button>
          </div>
        </div>

        <div>
          <h4>Expiring in : 5 Days</h4>
        </div>

        <div className={styles.restaurant}>
          <div className={styles.hijau}>
            <h4>Hijau</h4>
            <a href="https://KindMeal.my/Hijau">https://KindMeal.my/Hijau</a>

            <h4>Phone</h4>
            <p>011-37507708</p>

            <h4>Location</h4>
            <p>
              Hijau <br />
              REX KL, 80, Jalan Sultan, City Centre, 50000 Kuala <br /> Lumpur,
              Kuala Lumpur, Malaysia
            </p>
          </div>

          <div className={styles.tnc}>
            <h4>Terms & Conditions</h4>
            <li>Coupon valid from Jul 24th, 2022 till Jul 29th, 2022</li>
            <li>Valid with other KindMeal.my coupons only
No Service Charge & SST</li>
<li>Discount is not valid other promotional items</li>
<li>Discount is not valid for delivery, only for dine-in and take-away
</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Couponcode;
