import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { close, menu } from "../assets";
import { useCartContext } from "../context/cartContext";
import { useUserContext } from "../context/userContext";

import axios from "axios";
import ProfileModal from "./ProfileModal";

const Nav = () => {
  const API = "https://shopzilla-z3p7.onrender.com/api/v1";
  const [toggle, setToggle] = useState(false);
  const { total_item } = useCartContext();
  const { isAuthenticated, userProfile, handleLogout, getToken } =
    useUserContext();
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState(null);

  const handleModal = async () => {
    console.log("calling user");
    try {
      const token = getToken();
      const response = await axios.get(`${API}/userdashboard`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);
      setUser(response.data.user);
    } catch (error) {
      console.log(error);
    }
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };
  return (
    <nav className="md:basis-[40%]">
      <div className="">
        <ul className="hidden md:flex list-none  text-white justify-between">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li>
            <NavLink to={"/products"}>Products</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>Contact</NavLink>
          </li>
          {isAuthenticated && (
            <li>
              <NavLink to={"/myorders"}>My orders</NavLink>
            </li>
          )}
          <li>
            <NavLink to={"/cart"} className={"relative"}>
              <ShoppingBagIcon className="" />
              <span className="absolute top-[-0.2rem] right-[-0.5rem] z-10 bg-yellow-300 text-black rounded-full w-5 h-5 text-center text-sm">
                {total_item}
              </span>
            </NavLink>
          </li>

          {isAuthenticated ? (
            <li onClick={handleModal}>
              <NavLink className={"relative"}>
                <img
                  className="h-9 w-9 rounded-full object-cover "
                  src={`${userProfile?.photo?.secure_url}`}
                  alt="Dan_Abromov"
                />
                <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-green-600 ring-1 ring-white"></span>
              </NavLink>
            </li>
          ) : (
            <li>
              <NavLink to={"/signin"} className={"relative"}>
                <img
                  className="h-9 w-9 rounded-full object-cover "
                  src="https://eliaslealblog.files.wordpress.com/2014/03/user-200.png?w=700"
                  alt="Dan_Abromov"
                />
                <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-green-600 ring-1 ring-white"></span>
              </NavLink>
            </li>
          )}
        </ul>
      </div>
      <div className="md:hidden  ">
        <button
          onClick={() => {
            setToggle(!toggle);
          }}
          type="button"
        >
          <img src={toggle ? close : menu} alt="" />
        </button>
        <div
          className={` ${
            toggle ? "absolute " : "hidden "
          }w-[100vw] h-40 bg-primary-500 inset-0 top-16 z-50`}
        >
          <ul className="list-none flex flex-col items-center gap-2 text-white justify-between">
            <li>
              <NavLink
                to={"/"}
                onClick={() => {
                  setToggle(!toggle);
                }}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to={"/about"}
                onClick={() => {
                  setToggle(!toggle);
                }}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/products"}
                onClick={() => {
                  setToggle(!toggle);
                }}
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/contact"}
                onClick={() => {
                  setToggle(!toggle);
                }}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/cart"}
                className={"relative"}
                onClick={() => {
                  setToggle(!toggle);
                }}
              >
                <ShoppingBagIcon className="" />
                <span className="absolute top-[-0.2rem] right-[-0.5rem] z-10 bg-yellow-300 text-black rounded-full w-5 h-5 text-center text-sm p-1">
                  {total_item}
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <ProfileModal
        user={user}
        onClose={handleModalClose}
        visible={showModal}
      />
    </nav>
  );
};

export default Nav;
