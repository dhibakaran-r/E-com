import { NavLink } from "react-router-dom";
import "../../css/Style.css";
import "../../css/Navigation.css";
import { CgMoreVertical } from "react-icons/cg";
const Bottomnav = () => {
  const navlist = [
    {
      name: "Mobiles",
      url: "/mobiles",
    },

    {
      name: "Electronics",
      url: "/electronics",
    },

    {
      name: "Furnitures",
      url: "/furnitures",
    },

    {
      name: "Appliances",
      url: "/appliances",
    },

    {
      name: "Fashion",
      url: "/fashion",
    },

    {
      name: "Beauty Products",
      url: "/beautyProducts",
    },

    {
      name: "Glasses & Fraimes",
      url: "/glassesFraimes",
    },

    {
      name: "Toys",
      url: "/toys",
    },

    // {
    //   name: "Himachal Pradesh",
    //   url: "https://www.mapsofindia.com/maps/himachalpradesh/himachal-pradesh-map.jpg",
    // },
  ];

  const nav = navlist.map((navlist, index) => {
    return (
      <li key={index}>
        <NavLink
          to={navlist.url}
          className={({ isActive }) => {
            return isActive ? "isactive" : "";
          }}
        >
          {navlist.name}
        </NavLink>
      </li>
    );
  });

  return (
    <ul className="nav-items">
      {nav}
      <li>
        <NavLink to="/more">
          <CgMoreVertical />
        </NavLink>
      </li>
    </ul>
  );
};

export default Bottomnav;
