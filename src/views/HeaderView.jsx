import { Link, NavLink } from "react-router-dom";

const HeaderView = () => {
  return (
    <div className="flex justify-between bg-gradient-to-l from-gray-400 to-white">
      <Link to={"/"}>
        <img className="w-[70px] m-1" src="/logo.png" alt="logo" />
      </Link>
      <nav className="flex items-center justify-center mr-5">
        <div>
          <NavLink
            className="mr-3 text-darkred text-xl cursor-pointer"
            to={"/home"}
          >
            Home
          </NavLink>
          <NavLink
            className="mr-3 text-darkred text-xl cursor-pointer"
            to={"/"}
          >
            Sign Up
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default HeaderView;
