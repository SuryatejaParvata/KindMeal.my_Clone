import React, { useContext } from "react";

import styles from "../Styles/Login.module.css";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const Login = () => {
  let data;
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [visibility, setVisibility] = useState(false);

  const getData = () => {
    data = JSON.parse(localStorage.getItem("RegisteredData")) || [];
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    getData();

    if (data.length > 0) {
      if (
        data[0].email === formData.email &&
        data[0].password === formData.password
      ) {
        navigate("/");
        setIsAuth(true);
      } else if (formData.email !== data[0].email) {
        alert("User Not Found, Please Sign in First");
        navigator("/join");
        setVisibility(false);
      } else if (formData.password !== data[0].password) {
        alert("Wrong Password, Try again");
      }
    } else {
      alert("Signup");
      navigate("/signup");
      setVisibility(false);
    }
  };

  const handleChange = (e) => {
    let inputName = e.target.name;
    setFormData({ ...formData, [inputName]: e.target.value });
  };

  return (
    <>
      {/* <button
        onClick={(e) => setVisibility(!visibility)}
        style={{ backgroundColor: "white", color: "black" }}
      >
        Login
      </button> */}

      <form>
        <div>
          <img
            src="https://www.kindmeal.my/images/logo-kindmeal.png"
            alt="img"
          />
          <h3>Member Login</h3>
          <br />
          <div>
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Your Password"
              name="password"
              onChange={handleChange}
            />

            <div>
              <button onClick={handleSubmit}>Login</button>
              <br />
              <br />
              <hr />
              <br />
              <a
                href="https://www.kindmeal.my/login.php?action=facebook"
                target="https://www.facebook.com/KindMeal.my"
              >
                <button className={styles.facebook}>
                  <img
                    src="https://www.kindmeal.my/images/icon_button_fb.png"
                    alt="facebook"
                  />
                  Login With Facebook
                </button>
              </a>
            </div>
          </div>

          <div>
            <p>Forgot password?</p>
            <p onClick={() => navigate("/join")}>Not a member? Sign up FREE!</p>
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;
