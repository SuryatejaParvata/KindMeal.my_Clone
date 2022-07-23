import React from "react";
import { Carousel } from "react-bootstrap";
import styles from "../Styles/Slider.module.css";
const Slider = () => {
  return (
    <div className={styles.slider}>
      <Carousel fade={true} pause={false}>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="https://www.kindmeal.my/photos/deal/5/565-4023-m.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="https://www.kindmeal.my/photos/deal/6/687-4507-m.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="https://www.kindmeal.my/photos/deal/7/712-5119-m.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3></h3>
            <p>
             
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
