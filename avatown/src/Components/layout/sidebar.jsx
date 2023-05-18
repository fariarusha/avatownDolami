import React from "react";
import "../../assets/scss/main.css";
import {
  Link,
  NavLink,
  Redirect,
  Route,
  Router,
  Routes,
} from "react-router-dom";
import { Box } from "@mui/material";
import Dashboard from "../../pages/dashboard";
import Products from "../product-block/products";
const Sidebar = () => {
  return (
    <React.Fragment>
    <aside className="sidebar">
      <div className="sidebar_items">
        <ul className="nav_list">
          <li>
            <NavLink to={"/products"}>Products</NavLink>
          </li>
        </ul>

        {/* <div className="bottom_div">
          <div className="copy_right">
            <a href="" className="">
              © Capital Logistics Limited
            </a>
          </div>
          <ul className="social_div ">
            <li className="social_item">
              <a
                href="https://www.facebook.com/CExpressDelivery"
                target="_blank"
                className="social_link"
                rel="noreferrer"
              >
                <img src="./images/Icons/face-book.svg" alt="" />
              </a>
            </li>{" "}
            <li className="social_item">
              <a
                href="https://www.linkedin.com/company/capital-logistics-c-express-limited/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="./images/Icons/link-din.svg" alt="" />
              </a>
            </li>{" "}
            <li className="social_item">
              <a
                href="https://www.pinterest.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="./images/Icons/pinterest.svg" alt="" />
              </a>
            </li>{" "}
            <li className="social_item">
              <a href="https://twitter.com/#" target="_blank" rel="noreferrer">
                <img src="./images/Icons/twitter.svg" alt="" />
              </a>
            </li>
          </ul>
        </div> */}
      </div>
    </aside>
    </React.Fragment>
  );
};

export default Sidebar;
