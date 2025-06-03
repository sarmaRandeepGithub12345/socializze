import React, { useState } from "react";
import logo from "../../media/images/handshake.svg";
import "../../App.css";
import { useNavigate } from "react-router";
import useCommonItems from "../../utils/useCommonItems";
import { changeToken, changeUserData } from "../../utils/redux_config";
import { setLocalItem } from "../../utils/local_storage_helpers";
import axios from "axios";
import { backendUrl } from "../../utils/commonItems";
import NavLoggedInDropDown from "./NavLoggedInDropDown";
// media/images/handshake.svg";

export const Navbar = ({ openLoginModal }) => {
  const navigate = useNavigate();
  const { obj } = useCommonItems();
  const { dispatch, isLoading, setisLoading } = useCommonItems();

  const handleLogout = async (e) => {
    e.preventDefault();
    if (isLoading == true) return;
    setisLoading(true);
    console.log(`Logout clicked ${obj.token}`);
    try {
      const res = await axios.post(
        `${backendUrl}auth/logout`,
        {},
        {
          headers: {
            Authorization: `Bearer ${obj.token}`,
            // "Content-Type": "application/json",
          },
        }
      );
      console.log(res);
      setLocalItem("user", null);
      setLocalItem("token", null);
      dispatch(changeUserData(null));
      dispatch(changeToken());
      navigate("/");
    } catch (error) {}
    setisLoading(false);
  };
  return (
    <div className="fixed top-0 left-0 right-0 bg-white w-[100vw] h-[10%] flex items-center shadow-[-1px_-1px_5px_3px_rgba(0,0,0,0.3)] justify-between pl-[2%] pr-[2%] z-50">
      <div className="flex flex-row h-full items-center">
        <div className="h-full bg-white flex items-center ml-[2%] mb-[2%] mt-[2%]">
          <div className="rounded-full overflow-hidden w-[70%] h-[50%] border-[0.3vh] border-[#999999] flex items-center justify-center">
            <img src={logo} alt="Logo" className="h-full w-full object-cover" />
          </div>
        </div>
        <p className="font-cursive1 text-[170%]">Socializze</p>
      </div>
      <div className="flex space-x-4 mt-4">
        {!obj.user && !obj.token && (
          <button
            onClick={openLoginModal}
            className="bg-[#4a85c3] text-white px-[2vh] py-[10%] rounded-lg shadow-md transition cursor-pointer"
          >
            Login
          </button>
        )}
        {obj.user && obj.token && (
          // <button
          //   onClick={handleLogout}
          //   className="bg-[#4a85c3] text-white px-[2vh] py-[10%] rounded-lg shadow-md transition cursor-pointer"
          // >
          //   Logout
          // </button>
          <NavLoggedInDropDown onLogout={handleLogout} />
        )}
      </div>
    </div>
  );
};
