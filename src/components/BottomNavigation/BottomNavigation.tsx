import { IoBag, IoBook, IoHome, IoPerson, IoSearch } from "react-icons/io5";
import { NavLink } from "react-router-dom";
type Props = {};

function BottomNavigation({}: Props) {
  return (
    <div className="flex items-center justify-between w-full max-w-tablet h-auto p-4 bottom-0 fixed z-50 bg-dark-neutral dark:bg-dark-primary">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-dark-primary dark:text-dark-textprimary"
            : "text-dark-textsecondary dark:text-dark-textsecondary"
        }
      >
        <IoHome className="h-6 w-6" />
      </NavLink>
      <NavLink
        to="/search"
        className={({ isActive }) =>
          isActive
            ? "text-dark-primary dark:text-dark-textprimary"
            : "text-dark-textsecondary dark:text-dark-textsecondary"
        }
      >
        <IoSearch className="h-6 w-6" />
      </NavLink>
      <NavLink
        to="/blogs"
        className={({ isActive }) =>
          isActive
            ? "text-dark-primary dark:text-dark-textprimary"
            : "text-dark-textsecondary dark:text-dark-textsecondary"
        }
      >
        <IoBook className="h-6 w-6" />
      </NavLink>
      <NavLink
        to="/shop"
        className={({ isActive }) =>
          isActive
            ? "text-dark-primary dark:text-dark-textprimary"
            : "text-dark-textsecondary dark:text-dark-textsecondary"
        }
      >
        <IoBag className="h-6 w-6" />
      </NavLink>
      <NavLink
        to="/user"
        className={({ isActive }) =>
          isActive
            ? "text-dark-primary dark:text-dark-textprimary"
            : "text-dark-textsecondary dark:text-dark-textsecondary"
        }
      >
        <IoPerson className="h-6 w-6" />
      </NavLink>
    </div>
  );
}

export default BottomNavigation;
