import React from "react";
import logo from "../../components/images/logo.svg";
import MenuIcon from "../../components/MenuIcon.js";
import { NavLink } from "react-router-dom";
const MainMenuSection = () => {
  return (
    <section className="headerbar">
      <div className="logo">
        <li>
          <img src={logo} alt="logo" />
        </li>
      </div>
      <div className="nav">
        <div className="menu">
          <NavLink className="a" to="/" end>
            Home
          </NavLink>
          <NavLink className="a" to="/categories" end>
            Categories
          </NavLink>
          <NavLink className="a" to="/products" end>
            Products
          </NavLink>
          <NavLink className="a" to="/contacts" end>
            Contacts
          </NavLink>
        </div>
      </div>
      <div className="customer_Parts">
        <div className="customer_Choice">
          <MenuIcon link="/search" icon="fa-solid fa-magnifying-glass" />
          <MenuIcon
            link="/compare"
            icon="fa-solid fa-code-compare fa-flip-horizontal"
          />
          <MenuIcon quantity="3" link="/wishlist" icon="fa-regular fa-heart" />
          <MenuIcon quantity="6" link="/shoppingcart" icon="fa-solid fa-bag-shopping" />
        </div>
      </div>
    </section>
  );
};

export default MainMenuSection;
