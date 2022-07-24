import React from "react";
import styles from "../Styles/Mealdeals.module.css";
import { useNavigate } from "react-router-dom";
const Mealdeals = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/coupon`;
    navigate(path);
  };
  return (
    <>
      <div className={styles.textcontainer}>
        <h4>Meal Deals | Restauants in Malasiya</h4> <br />
        <p>
          Browse delicious meat-free, vegetarian deals from top restaurants and
          cafes! Just click on "Get Free Coupon" to obtain instant discounts and
          dine at the restaurants. No <br /> upfront payment, booking or
          printing is needed. If you share it on social media, you'll even
          DOUBLE your discount!
        </p>
        <br />
        <p>
          Download our mobile app now to easily get coupons and start dining in
          a few seconds. Effortlessly save lives, health, environment and money
          now!
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          <input placeholder="Search Shop or Deal Name" />
          <select>
            <option value="">All Categories</option>
            <option value="">INDIAN</option>
            <option value="">Pasta</option>
            <option value="">Burger</option>
            <option value="">Salad</option>
          </select>

          <select>
            <option value="">All Locations</option>
            <option value="">Kulalampur</option>
            <option value="">Cheras</option>
            <option value="">Ipoh</option>
            <option value="">Other Locations</option>
          </select>

          <button
            style={{
              backgroundColor: "#f53838",
              borderRadius: "5px",
              color: "white",
            }}
          >
            Search Deals
          </button>
          <button
            style={{
              backgroundColor: "#04be5a",
              borderRadius: "5px",
              color: "white",
            }}
          >
            Browse Restauants
          </button>
        </div>
      </div>

      <div className={styles.imgdiv}>
        <img
          src="https://www.kindmeal.my/images/banner_directory.jpg"
          alt="img"
        />
      </div>

      <div className={styles.cardcontainer}>
        <div className={styles.eachdiv}>
          <div className={styles.bgimg}>
            <h1>Malasiyan Vegan Experience</h1>
          </div>
          <h4>Hijau - Kuala Lumpur, Wilayah Persekutuan</h4>
          <p>
            Indulge in Malay-Indo fusion cuisine, a plant-based comfort food and
            healthy pleasure! Hijau is your go-to, where you can embrac..
          </p>
          <button
            style={{
              borderRadius: "5px",
              backgroundColor: "#f53838",
              color: "white",
            }}
            onClick={routeChange}
          >
            <h2>Get Free Coupon</h2>
          </button>
        </div>

        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};

export default Mealdeals;
