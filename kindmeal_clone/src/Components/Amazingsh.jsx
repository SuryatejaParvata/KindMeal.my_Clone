import React from 'react'
import styles from "../Styles/Discover.module.css"
const Amazingsh = () => {
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        <div style={{display:"flex"}}>
          <a href=""> 
          Amazing Superheroes</a>
        </div>
        <div style={{gap:"30px"}}>
        <a href=""> Latest Buzz </a>
        <a href=""> •   Lifestyle Ambassadors  </a>
        <a href="">  •   Win Gifts!</a>
        </div>
        
      </div>
      <div className={styles.images}>
        <a
          href="https://www.kindmeal.my/WmJohanFoong"
          target="_blank"
        >
          <img src="https://www.kindmeal.my/photos/member/36/36777-m.jpg" />
          <p>
          WmJohanFoong
          </p>
        </a>
        <a
          href="https://www.kindmeal.my/FoodLover427"
          target="_blank"
        >
          <img src="https://www.kindmeal.my/photos/member/41/41359-m.jpg" />
          <p>
          FoodLover427
          </p>
        </a>
        <a
          href="https://www.kindmeal.my/ViviAn2"
          target="_blank"
        >
          <img src="https://www.kindmeal.my/photos/member/41/41200-m.jpg" />
          <p>ViviAn2</p>
        </a>
        <a
          href="https://www.kindmeal.my/YihChoy"
          target="_blank"
        >
          <img src="https://www.kindmeal.my/photos/member/18/18960-m.jpg" />
          <p>YihChoy</p>
        </a>
        <a
          href="https://www.kindmeal.my/SamNgJiunHian"
          target="_blank"
        >
          <img src="https://www.kindmeal.my/photos/member/13/13195-m.jpg" />
          <p>SamNgJiunHian</p>
        </a>
      </div>
    </div>
  )
}

export default Amazingsh