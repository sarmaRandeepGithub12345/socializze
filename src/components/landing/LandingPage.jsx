import { Navbar } from "../navbar/Navbar";
import { Footer } from "../footer/Footer";

import React, { useState, useRef, useEffect } from "react";
import "../../App.css"; // Assuming you have some global styles
import { backendUrl } from "../../utils/commonItems";
import useCommonItems from "../../utils/useCommonItems";
import axios from "axios";
import { changeToken, changeUserData } from "../../utils/redux_config";
import { setLocalItem } from "../../utils/local_storage_helpers";
import { useNavigate } from "react-router";
export default function LandingPage({ title }) {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // Close modal if clicking outside the modal content
  const { dispatch, isLoading, setisLoading } = useCommonItems();
  const navigate = useNavigate();
  const [error, seterror] = useState({ type: "none", text: "" });
  useEffect(() => {
    document.title = title;
  }, []);
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);
  const handleLogin = async (e) => {
    e.preventDefault();
    if (isLoading) return; // Prevent multiple submissions
    setisLoading(true);
    // Handle login logic here
    try {
      const item = { email, password };

      const res = await axios.post(`${backendUrl}auth/login`, item);
      //token : res.data.token
      //user : res.data.data.user
      //message : res.data.message
      //user: res.data.data.user;
      //unseenMessageCount: res.data.data.unseenMessageCount;
      //unseenNotif:res.data.data.unseenNotif;

      console.log(res.data);
      setEmail("");
      setPassword("");
      setLocalItem("user", res.data.data.user);
      setLocalItem("token", res.data.token);
      dispatch(changeUserData(res.data.data.user));
      dispatch(changeToken(res.data.token));
      navigate("/profile");
    } catch (error) {
      seterror({
        type: error.response.data.result,
        text: error.response.data.message,
      });
    }
    // setIsOpen(false);
    setisLoading(false);
  };
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Navbar openLoginModal={() => setIsOpen(true)} />

      <main className="flex-grow relative z-0">
        {/* You can include content or just leave it empty */}
        {/* This ensures the footer is pushed down */}
      </main>

      <Footer />

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div
            ref={modalRef}
            className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm relative"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 text-2xl hover:cursor-pointer"
            >
              &times;
            </button>
            <h2 className="text-xl font-semibold mb-4">Login</h2>
            <form className="space-y-4">
              <input
                type="email"
                name="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                id="email"
                className="w-full px-3 py-2 border rounded"
              />
              <input
                type="password"
                name="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                id="password"
                className="w-full px-3 py-2 border rounded"
              />

              <p
                className={`${
                  error.type == "error" ? "text-[red]" : "text-[green]"
                } text-[2vh]`}
              >
                {error.text}
              </p>

              <button
                onClick={handleLogin}
                type="submit"
                className="bg-[#4a85c3] w-full text-white py-2 rounded hover:bg-[#3a6da1] hover:cursor-pointer"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
