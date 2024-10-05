import "../../css/Style.css";
import "../../css/Navigation.css";
import { FaBars } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { FiSearch } from "react-icons/fi";
import { HiOutlineLogin } from "react-icons/hi";
import { BsSignIntersectionFill } from "react-icons/bs";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoIosCart } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
// import pink from '../../images/pink.png'
import icon from "../../images/E.png";
import brand from "../../images/zone.png";
import { NavLink } from "react-router-dom";
import Search from "../utils/Search";

// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
const Topnav = () => {
  return (
    <>
      <div className="icon">
        <img src={icon} className="site-logo" alt="site-logo"></img>
      </div>

      <span className="bar">
        <FaBars />
      </span>

      <span className="search-sec">
        <Search />
      </span>

      <span className="user">
        <FaRegCircleUser />
      </span>
      <div className="user-block">
        <NavLink to="/login">
          <span className="login design">
            <span className="login-icon">
              <FaRegUserCircle />
            </span>
            <span>Login</span>
            {/* <span className="down-icon">
            <MdOutlineKeyboardArrowDown />
          </span> */}
          </span>
        </NavLink>
        <span className="signin design">
          <span>Cart</span>
          <span className="sign-icon">
            <IoIosCart />
          </span>
        </span>

        <span className="wishlist design">
          <span>Wishlist</span>
          <span className="wishlist-icon">
            <FaRegHeart />
          </span>
        </span>
      </div>

      {/* <ul className="nav-items">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#picture">Pictures</a>
        </li>
        <li>
          <a href="#category">Category</a>
        </li>
        <li>
          <a href="#explore">Explore</a>
        </li>
        <li>
          <a href="#">Uplode</a>
        </li>
      </ul> */}
    </>
  );
  // return(
  //     <div className='pink'>
  //         <img src={pink} alt='img'></img>
  //     </div>
  // )
};

export default Topnav;
