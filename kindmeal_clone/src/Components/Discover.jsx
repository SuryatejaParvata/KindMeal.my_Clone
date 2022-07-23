import React from 'react'
import styles from "../Styles/Discover.module.css"
const Discover = () => {
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        <div style={{display:"flex"}}>
          <a href=""> 
Discover Restaurants</a>
        </div>
        <div style={{gap:"30px"}}>
        <a href=""> Vegetarian Directory </a>
        <a href="">  •   Restaurant Menu  </a>
        <a href=""> •   Food Map</a>
        </div>
        
      </div>
      <div className={styles.images}>
        <a
          href="https://www.kindmeal.my/Rawsome/menuitem-5477.htm"
          target="_blank"
        >
          <img src="https://www.kindmeal.my/photos/item/0/467-5477-s.jpg" />
          <p>
          Spicy Garlic Tomato Chips
          </p>
        </a>
        <a
          href="https://www.kindmeal.my/Veggielicious/menuitem-6427.htm"
          target="_blank"
        >
          <img src="https://www.kindmeal.my/photos/item/0/514-6427-s.jpg" />
          <p>
          Deep Fried Crispy Tofu
          </p>
        </a>
        <a
          href="https://www.kindmeal.my/BatteryAcidClub/menuitem-3684.htm"
          target="_blank"
        >
          <img src="https://www.kindmeal.my/photos/item/0/341-3684-s.jpg" />
          <p>The Default</p>
        </a>
        <a
          href="https://www.kindmeal.my/Alam-N-Ion/menuitem-8074.htm"
          target="_blank"
        >
          <img src="https://www.kindmeal.my/photos/item/0/572-8074-s.jpg" />
          <p>Eggs on Toast - Single</p>
        </a>
        <a
          href="https://www.kindmeal.my/LovingCafe/menuitem-1827.htm"
          target="_blank"
        >
          <img src="https://www.kindmeal.my/photos/item/0/192-1827-s.jpg" />
          <p>Loving Cafe Burger</p>
        </a>
      </div>
    </div>
  )
}

export default Discover