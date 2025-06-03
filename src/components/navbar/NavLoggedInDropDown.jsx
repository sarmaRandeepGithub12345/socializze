import { useState, useRef, useEffect } from "react";
import { FaCog } from "react-icons/fa";
import defaultAvatar from "../../media/Default_pic.png"; // fallback image if user.image is null
import useCommonItems from "../../utils/useCommonItems";
import { isValidImage } from "../../utils/commonItems";

const NavLoggedInDropDown = ({ onLogout }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const { obj } = useCommonItems();

  // Close dropdown on outside click
  useEffect(() => {
    console.log(obj.user.imageUrl);
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative flex items-center space-x-2" ref={menuRef}>
      {/* Profile Image */}
      {/* <img
        src={obj.user.imageUrl || defaultAvatar}
        alt="Profile"
        className="w-10 h-10 rounded-full border border-gray-300 object-cover"
      /> */}
      <img
        src={
          //   obj.user?.imageUrl && isValidImage(obj.user.imageUrl)
          //     ? obj.user.imageUrl
          //     :
          defaultAvatar
        }
        alt="Profile"
        className="w-10 h-10 rounded-full border border-gray-300 object-cover
         "
      />

      {/* Settings Icon */}
      <button onClick={() => setMenuOpen((prev) => !prev)}>
        <FaCog size={20} className="text-gray-600 hover:text-gray-800" />
      </button>

      {/* Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-12 right-0 bg-white shadow-md  rounded w-32 z-50">
          <button
            onClick={onLogout}
            className="w-full px-4 py-2 text-left hover:bg-gray-100 text-[red]"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default NavLoggedInDropDown;
