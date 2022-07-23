// import React from "react";
// import styles from "../Styles/Navbar.module.css";
// import { Link } from "react-router-dom";
// import { AuthContext } from "../Context/AuthContext";
// import { useState, useContext, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import Login from "../Pages/Login";

// const Navbar = () => {
//   const [name, setName] = useState("");
//   const [isAuth, setIsAuth] = useContext(AuthContext);
//   const navigate = useNavigate();

//   const getdata = () => {
//     let data = JSON.parse(localStorage.getItem("RegisteredData")) || [];

//     if (data.length > 0) {
//       setIsAuth(true);
//       setName(data[0].firstName);
//     }
//   };
//   useEffect(() => {
//     getdata();
//   }, []);

//   const handleLogOut = () => {
//     navigate("/logout");
//     setIsAuth(false);
//   };

//   const handleSignup = () => {
//     navigate("/join")
    
//   }
//   return (
//     <>
//     <div className={styles.navcontainer}>
//       <Link to="/">
//         <img src="https://www.kindmeal.my/images/logo-kindmeal.png" alt="img" />
//       </Link>
//       <div className={styles.navsocial}>
//         <a href="https://www.kindmeal.my/widget.htm">
//           <img
//             src="https://www.kindmeal.my/images/follow_blog_grey.png"
//             alt="blog"
//           />
//         </a>
//         <a href="https://www.facebook.com/KindMeal.my">
//           <img
//             src="https://www.kindmeal.my/images/follow_facebook_grey.png"
//             alt="fb"
//           />
//         </a>
//         <a href="https://twitter.com/KindMeal">
//           <img
//             src="https://www.kindmeal.my/images/follow_twitter_grey.png"
//             alt="twitter"
//           />
//         </a>
//       </div>
//       console.log(isAuth)
//       {isAuth ? (
//         <div>
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "center",
//               marginTop: "-10px",
//             }}
//           >
//             <p style={{ marginRight: "25px", color: "black" }}>{name}</p>
//             <img
//               src="data:image/png;base64,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"
//               alt="user"
//               style={{ borderRadius: "50%", height: "50px" }}
//               // onClick={() => navigate("/userprofile")}
//             />
//             <p
//               style={{ cursor: "pointer", marginLeft: "25px", color: "black" }}
//               onClick={handleLogOut}
//             >
//               Log Out
//             </p>
//           </div>
//         </div>
//       ) : (
//         <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
//           <p style={{ fontSize: "12px" }} onClick={handleSignup}>
//             Login
//           </p>
//           <div>
//             <button className={styles.facebook}>Facebook</button>
            
//           </div>
//           <div>
//             <button>Email</button>
//           </div>

//           <Link to="/join">
//             <p>Signup</p>
//           </Link>
//         </div>
//       )}
//     </div>
//     </>
//   );
// };

// export default Navbar;

import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from '../Styles/Navbar.module.css'


import { NavLink, Link } from "react-router-dom";


import { AuthContext } from "../Context/AuthContext";



const Navbar = () => {
  const [name, setName] = useState("");
 
  
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const getdata = () => {
    let data = JSON.parse(localStorage.getItem("RegisteredData")) || [];
    // setdata([...data])
    // console.log(data[0].firstName, data[0].lastNme);
    //
    if (data.length > 0) {
      setIsAuth(true);
      setName(data[0].firstName);
     
      
    }
    // console.log(data)
    // console.log(data, isAuth);
  };
  useEffect(() => {
    getdata();
  }, []);
  const handleLogOut = () => {
    // navigate("/logout")
    navigate("/logout")
    setIsAuth(false);
  };
  //
  //   console.log(data[0].firstName,data[0].lastNme)
  const handleLogin = () => {
        navigate("/login")
        
      }
  const handleSignup = () => {
        navigate("/signup")
        
      }
  return (
    <>
      <div className={styles.navcontainer}>
        <Link to="/">
          <img
            src="https://www.kindmeal.my/images/logo-kindmeal.png"
            alt="LogoImg"
          />
        </Link>

        <div className={styles.navsocial}>
          <a href="https://www.kindmeal.my/widget.htm">
            
            <img
              src="https://www.kindmeal.my/images/follow_blog_grey.png"
              title="Saves Lives With Your Blog - KindMeal.my Widgets"
            />
          </a>
          <a href="https://www.facebook.com/KindMeal.my">
            
            <img
              src="https://www.kindmeal.my/images/follow_facebook_grey.png"
              title="Follow KindMeal.my on Facebook"
            />
          </a>
          <a href="https://twitter.com/KindMeal">
            <img
              src="https://www.kindmeal.my/images/follow_twitter_grey.png"
              title="Follow KindMeal.my on Twitter"
            />
          </a>
        </div>
        {isAuth ? (  <div>
          <div style={{ display: "flex",justifyContent:"space-between",alignItems:"center",marginTop:"-10px" }}>
             <p style={{  marginRight: "25px",color:"black" }}>
              {name} 
            </p> 
            <img src="data:image/jpeg;base64,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" alt="user" style={{borderRadius:"50%", height:"50px"}}  onClick={()=>navigate("/userprofile")}/>
           <p style={{cursor:"pointer",marginLeft:"25px",color:"black"}} onClick={handleLogOut}>Log Out</p>
         </div>
        
          
              
            {/* <div style={{marginTop:"100px",marginLeft:"200px"}}> <App1/></div> */}
           
          
       </div> ) : (
          <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <p style={{ fontSize: "20px" }} onClick={handleSignup}>
             Login
            </p>
            <div  >
              
                <button style={{borderRadius: "5px", backgroundColor: "#35619f"}}>Facebook</button>
              
                
            </div>
            <div >
              
            <button style={{borderRadius: "5px", backgroundColor: "#666666"}}>Email</button>
             
              
            </div>
          
             <div>
              <p onClick={handleSignup}>Sign Up </p>
             </div>
            
          </div>
        )}
      </div>
     
        <div className={styles.navtabs}>
          <div> 

          <NavLink
            className="NavLink" 
            to="/"
            style={{ textDecoration: "none" }}
            >
            Home
          </NavLink>
        
            </div>
            <div> 
          <NavLink
            className="NavLink"
            to="/deals"
            style={{ textDecoration: "none" }}
          >
            Meal Deals
          </NavLink>
          </div>
            <div> 
          <NavLink
            className="NavLink"
            to="/kindmoments"
            style={{ textDecoration: "none" }}
          >
            KindMoments
          </NavLink>
          </div>
            <div> 
          <NavLink
            className="NavLink"
            to="/hotpicks"
            style={{ textDecoration: "none" }}
          >
            Hot Picks
          </NavLink>
          </div>
            <div> 
          <NavLink
            className="NavLink"
            to="/recipes"
            style={{ textDecoration: "none" }}
          >
            Recipes
          </NavLink>
          </div>
            <div> 
          <NavLink
            className="NavLink"
            to="/directory"
            style={{ textDecoration: "none" }}
          >
            Directory
          </NavLink>
          </div>
            <div> 
          <NavLink
            className="NavLink"
            to="/articles"
            style={{ textDecoration: "none" }}
          >
            Articles
          </NavLink>
          </div>
            <div> 
          <NavLink
            className="NavLink"
            to="/help"
            style={{ textDecoration: "none" }}
          >
            Help
          </NavLink>
          </div>
            
          </div>
    </>
  );
};

export default Navbar;



