import React, { useEffect, useState } from "react";
import "./loginPage.css";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate()
  const ColName = styled.label`
    font-size: 30px;
  `;
 const [username, setUsername] = useState("");
  const [email, setMail] = useState("");
  const [password, setpassword] = useState("");
  const [allData, setAllData] = useState([]);
  function updateEmail(event) {
    setMail(event.target.value);
  }
  const updatePassword = (event) => {
    setpassword(event.target.value);
  };

  const updateUserName = (event) => {
    setUsername(event.target.value);
  };

  const submitData = () => {
    
    const newData = { email: email, password: password };
    setAllData([...allData, newData]);

    if (email && email.length > 1 && password && password.length > 1 && username.length >1) {
      localStorage.setItem("userEmail", JSON.stringify(email));
      localStorage.setItem("Password", JSON.stringify(password));
      localStorage.setItem("Username", username);

      localStorage.setItem('login',true)
      navigate('/home')
    }
  };

  useEffect(() => {
    let userIsLogin = localStorage.getItem('login');
    if(userIsLogin ) {
      navigate('/home')
    }  
  })
  const getStoredEmail = localStorage.getItem("userEmail");
  const getStoredPasswd = localStorage.getItem("Password");
  return (
    <div className="container">
        <h1 style={{color: '#fdfcfc', fontStyle: 'bold'}}> Log In</h1>
      <form className="formContainer" onSubmit={submitData}>
        {/* <img src={props.logo} className="App-logo" alt="logo" /> */}
      
       

        <div className = "divContent">
          <ColName> UserName:- </ColName>
          <input
            type="text"
            className="inputBox"
            name=" username"
            value={username}
            onChange={updateUserName}
           
          />
          <br />
     
          <ColName> Email:- </ColName>
          <input
            type="email"
            className="inputBox"
            name=" email"
            value={email}
            onChange={updateEmail}
           
          />
          <br />
          <ColName>Password:-  </ColName>
          <input
             className="inputBox"
            type="password"
            name=" password"
            value={password}
            onChange={updatePassword}
            style = {{marginTop: "20px"}}
          />
          <br /> <br />
        </div>
        <button
          style={{ fontSize: "150%", marginTop: "80%", textAlign: "right" }}
          type="submit"
        >
          Login
        </button>
      </form>

      {/* <p>
        Email is:- {getStoredEmail} and its Password is:- {getStoredPasswd}
      </p> */}
    </div>
  );
};
