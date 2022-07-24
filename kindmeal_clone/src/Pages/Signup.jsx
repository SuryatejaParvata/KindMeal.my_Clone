import React, { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import styles from "../Styles/Signup.module.css";
const Signup = () => {
  const navigate = useNavigate();
  const [FormData, setFormData] = useState({});
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const handleChange = (e) => {
    const inputName = e.target.name;
    if (e.target.type === "checkbox") {
      setFormData({
        ...FormData,
        [inputName]: e.target.checked,
      });
    } else {
      setFormData({
        ...FormData,
        [inputName]: e.target.value,
      });
    }
  };
  // console.log(FormData)
  const post = () => {
    let arr = [];

    arr.push(FormData);
    localStorage.setItem("RegisteredData", JSON.stringify(arr));
    setIsAuth(true);
    console.log(arr);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    post();
    if (FormData) {
      //    console.log(FormData)
      navigate("/login");
    } else {
      alert("Fill the details Correctly");
    }
  };
  return (
    <>
      <div>
        
        
        <div>
          
          
          <br />
          <div>
            <p>
              KindMeal is a fun, exciting and cool new way for you to show your
              compassion towards animals. We collaborate with kind restaurants
              and cafes across the nation to bring you delicious meat-free foods
              that will not only help save precious animal lives, but improve
              your health and save your money at the same time!
            </p>
          </div>
          <br />
          <br />
          <form onSubmit={handleSubmit}>
            <div style={{ display: "flex", marginLeft: "110px" }}>
              <label></label>
              <label style={{ marginLeft: "200px" }}></label>
            </div>
            <div>
              {" "}
              Your Name
              <input
                name="firstName"
                onChange={handleChange}
                type="first name"
                required
                placeholder="firstname"
              />
              <input
                type="last name"
                name="lastName"
                onChange={handleChange}
                required
                placeholder="lastname"
              />
            </div>
            <br />
            <div style={{ display: "flex", marginLeft: "110px" }}>
              <label>
                Your email must be correct to receive activation email
              </label>
            </div>
            <div>
              {" "}
              Email
              <input
                name="email"
                type="email"
                onChange={handleChange}
                required
              ></input>
            </div>
            <div>
              {" "}
              Re-Enter Email{" "}
              <input
                name="email"
                type="email"
                onChange={handleChange}
                required
              ></input>
            </div>
            <div>
              {" "}
              Password{" "}
              <input
                name="password"
                type="password"
                onChange={handleChange}
                required
              ></input>
            </div>
            <br />
            <div>
              <div style={{ marginLeft: "110px" }}>
                <label>
                  Choose a cool username for your Personal Profile page,
                  comments & reviews
                </label>
                <br />
                <a href="" style={{ textDecoration: "none", color: "blue" }}>
                  {" "}
                  http://KindMeal.my/Username
                </a>
              </div>{" "}
              Username
              <input
                name="username"
                type="username"
                onChange={handleChange}
                required
              ></input>
            </div>
            <br />
            <div style={{ marginLeft: "110px" }}>
              <label>Only your age will be publicly visible</label>
            </div>
            <div>
              Birth Date{" "}
              <input
                name="dob"
                onChange={handleChange}
                type="date"
                required
              ></input>
            </div>
            <br />
            <div>
              {" "}
              Country
              <select name="country" onChange={handleChange} required>
                <option>Your Country</option>
                <option>INDIA</option>
                <option>CHINA</option>
                <option>BANGALADESH</option>
                <option>SRILANKA</option>
                <option>ENGLAND</option>
                <option>NEWZEALAND</option>
                <option>AUSTRALIA</option>
                <option>PAKISTAN</option>
                <option>FRANCE</option>
                <option>RUSSIA</option>
                <option>AMERICA</option>
                <option>BRAZIL</option>
                <option>CANANDA</option>
                <option>UKRAINE</option>
                <option>GERMANY</option>
                <option>AUSTRIA</option>
                <option>ARGENTINA</option>
                <option>COLOMBIA</option>
              </select>
            </div>
            <br />
            <div>
              State
              <select name="state" onChange={handleChange} required>
                <option>Select State</option>
                <option>PATNA</option>
                <option>BANGALORE</option>
                <option>KOLKATA</option>
                <option>GANDHINAGAR</option>
                <option>LUCKNOW</option>
                <option>ITNANAGAR</option>
                <option>MUMBAI</option>
                <option>DEHRADUN</option>
              </select>
            </div>
            <br />
            <div>
              Gender
              <input
                name="gender"
                onChange={handleChange}
                value="male"
                type="radio"
                style={{ marginLeft: "65px", marginRight: "5px" }}
              />
              Male
              <input
                name="gender"
                onChange={handleChange}
                value="female"
                type="radio"
                style={{ marginLeft: "12px", marginRight: "5px" }}
              />
              Female
            </div>
            <br />
            <div>
              Profile Photo{" "}
              <input
                required
                name="photo"
                type="link"
                placeholder="Select Photo"
                onChange={handleChange}
              />
            </div>
            <br />
            <div>
              <input
                required
                type="checkbox"
                name="agree"
                onChange={handleChange}
              />{" "}
              I agree to KindMeal.my's{" "}
              <a href="https://www.kindmeal.my/terms.htm">Terms & Conditions</a>
            </div>
            <br />
            <br />
            <div>
              <button type="submit">Join Now</button>
            </div>
          </form>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          backgroundColor: "#e0e0e0",
          height: "280px",
          verticalAlign: "middle",
          marginTop: "100px",
        }}
      >
        <img
          src="https://www.kindmeal.my/images/how_kindmeal_works.png"
          style={{
            marginLeft: "150px",
            marginTop: "30px",
            marginBottom: "0px",
          }}
        />
      </div>
    </>
  );
};

export default Signup;
