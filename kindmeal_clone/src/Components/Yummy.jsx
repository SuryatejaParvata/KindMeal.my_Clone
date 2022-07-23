import React from 'react'
import styles from "../Styles/Yummy.module.css"
const Yummy = () => {
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        <div style={{display:"flex"}}>
          <a href=""> Yummylicious Moments</a>
        </div>
        <div style={{gap:"30px"}}>
        <a href=""> Secret Recipes </a>
        <a href="">  •   Member Hot Picks </a>
        <a href="">  •   Photo Moments</a>
        </div>
        
      </div>
      <div style={{ display: "flex" }}>
        <a
          href="https://www.kindmeal.my/Bvelyn/moment-24198.htm"
          target="_blank"
        >
          <img src="https://www.kindmeal.my/photos/moment/24/24198-46320-s.jpg" />
          <p>
          A Delicious KindMoment <br />
Bvelyn
          </p>
        </a>
        <a
          href="https://www.kindmeal.my/EveWong/moment-24193.htm"
          target="_blank"
        >
          <img src="https://www.kindmeal.my/photos/moment/24/24193-46301-s.jpg" />
          <p>
          VECO Burger
EveWong
          </p>
        </a>
        <a
          href="https://www.kindmeal.my/ChewLengLeng/moment-24192.htm"
          target="_blank"
        >
          <img src="https://www.kindmeal.my/photos/moment/24/24192-46296-s.jpg" />
          <p>太平素乡方 Taiping Hometown Vegetarian
ChewLengLeng</p>
        </a>
        <a
          href="https://www.kindmeal.my/CindyChang/moment-24191.htm"
          target="_blank"
        >
          <img src="https://www.kindmeal.my/photos/moment/24/24191-46291-s.jpg" />
          <p>A Delicious KindMoment
CindyChang</p>
        </a>
        <a
          href="https://www.kindmeal.my/EveWong/moment-24187.htm"
          target="_blank"
        >
          <img src="https://www.kindmeal.my/photos/moment/24/24187-46271-s.jpg" />
          <p>A Delicious KindMoment
EveWong</p>
        </a>
      </div>
    </div>
  )
}

export default Yummy