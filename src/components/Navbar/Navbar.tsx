import { useState } from "react";
import { IoOptions, IoSunny, IoMoon, IoBagAdd } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  // Toggle Navbar
  const [toggleNavbar, settoggleNavbar] = useState(false);
  const isToggleNavbar = () => {
    settoggleNavbar(!toggleNavbar);
  };

  // Toggle Theme
  const [toggleTheme, settoggleTheme] = useState(false);
  const isToggleTheme = () => {
    settoggleTheme(!toggleTheme);
    if (toggleTheme === false) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  };
  return (
    <>
      <div className="w-full max-w-tablet h-auto items-center fixed z-50 top-0 bg-dark-neutral dark:bg-dark-primary px-4 py-2">
        <div className="flex items-center justify-between">
          <Navbar.NavbarUser user="Edi Koswara" />
          <div className="flex items-center justify-between gap-4">
            <div className="flex">
              <Link
                to={"/shop"}
                className="flex items-center justify-between gap-1"
              >
                <IoBagAdd className="w-6 h-6" />
                <span className="font-semibold">0</span>
              </Link>
            </div>
            <IoSunny
              className={`${toggleTheme ? "block" : "hidden"} h-6 w-6`}
              onClick={isToggleTheme}
            />
            <IoMoon
              className={`${toggleTheme ? "hidden" : "block"} h-6 w-6`}
              onClick={isToggleTheme}
            />
            <IoOptions className="h-6 w-6" onClick={isToggleNavbar} />
          </div>
        </div>
        <div
          className={`${
            toggleNavbar ? "block" : "hidden"
          } my-4 w-full min-h-screen`}
          onClick={isToggleNavbar}
        >
          <Navbar.NavbarLinks />
        </div>
      </div>
    </>
  );
};

// NAVBAR BRAND
type NavbarUserProps = {
  user?: string;
};
const NavbarUser = (props: NavbarUserProps) => {
  return (
    <>
      <div className="flex flex-row items-center gap-2">
        <div className="h-10 w-10 overflow-hidden relative rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-700 p-[2px]">
          <img
            src="https://images.unsplash.com/photo-1503104834685-7205e8607eb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z2lybHN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
            alt="user"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div className="flex flex-col">
          <h4 className="text-[12px] font-light">Howdy</h4>
          <h3 className="text-[14px] font-semibold">{props.user}</h3>
        </div>
      </div>
    </>
  );
};

// Navbar Links
const NavbarLinks = () => {
  return (
    <ul className="w-full flex flex-col items-start justify-between gap-4 ">
      <li className="text-sm">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "text-dark-primary dark:text-dark-textprimary font-semibold"
              : "text-dark-textsecondary dark:text-dark-textsecondary font-normal"
          }
        >
          Home
        </NavLink>
      </li>
      <li className="text-sm font-normal">
        <NavLink
          to={"/search"}
          className={({ isActive }) =>
            isActive
              ? "text-dark-primary dark:text-dark-textprimary font-semibold"
              : "text-dark-textsecondary dark:text-dark-textsecondary font-normal"
          }
        >
          Search
        </NavLink>
      </li>
      <li className="text-sm font-normal">
        <NavLink
          to={"/book"}
          className={({ isActive }) =>
            isActive
              ? "text-dark-primary dark:text-dark-textprimary font-semibold"
              : "text-dark-textsecondary dark:text-dark-textsecondary font-normal"
          }
        >
          Books
        </NavLink>
      </li>
      <li className="text-sm font-normal">
        <NavLink
          to={"/shop"}
          className={({ isActive }) =>
            isActive
              ? "text-dark-primary dark:text-dark-textprimary font-semibold"
              : "text-dark-textsecondary dark:text-dark-textsecondary font-normal"
          }
        >
          Shop
        </NavLink>
      </li>
      <li className="text-sm font-normal">
        <NavLink
          to={"/user"}
          className={({ isActive }) =>
            isActive
              ? "text-dark-primary dark:text-dark-textprimary font-semibold"
              : "text-dark-textsecondary dark:text-dark-textsecondary font-normal"
          }
        >
          User
        </NavLink>
      </li>
    </ul>
  );
};

Navbar.NavbarUser = NavbarUser;
Navbar.NavbarLinks = NavbarLinks;

export default Navbar;
