import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./navLink.css";
export function NavLinks() {
  const [state, setState] = useState(false);
  const navigate = useNavigate()

  const showDropdown = () => {
    setState(true);
  };

  const hideDropdown = () => {
    setState(false);
  };
  const NavLink = styled(Nav)`
    margin-top: 3px;
    margin-right: 5%;
    /* height:200%; */
    text-align: right;
    display: flex;
  `;

  const LinkItem = styled(Link)`
    color: white;
    font-size: 25px;
    margin: 0 10px; 
    padding: 0 5px;
  `;
  const logOut = () => {
    localStorage.clear();
    navigate('/login')
  };


const userName = localStorage.getItem('Username');
  return (
    <div className="navbar">
      <nav>
        <NavLink>
          <Link className=" link-Items " to="/home">Home</Link>{" "}
          {!userName ?
          <Link className=" link-Items" to="/login">
            Log in{" "}
          </Link> :null}
          {
            userName ? 
            <div className="dropdown">
            <div
              className="dropdown-menu link-Items"
              onClick={showDropdown}
              onMouseLeave={hideDropdown}
            >
              
            {
              userName
            }   
            <i className="fi fi-rr-caret-down"></i>         
             {state ? (
                <ul onClick={showDropdown}>
                  <li className="dropdown-content" onClick={logOut}> Logout</li>
                 
                </ul>
              ) : null}
            </div>
          </div> 
          :null

          }
       
        </NavLink>
      </nav>
    </div>
  );
}
