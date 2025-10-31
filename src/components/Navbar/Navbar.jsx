import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { FormattedMessage } from "react-intl";

const Navbar = ({ currentLocale, onLocaleChange }) => {
  const getLocalizedPath = (path) => {
    return `/${currentLocale}${path}`;
  };

  const handleLanguageChange = (newLocale) => {
    onLocaleChange(newLocale);
  };

  return (
    <div>
      <nav className="navbar_Menu">
        <NavLink
          to={getLocalizedPath("/")}
          className={({ isActive, isPending }) =>
            isPending ? "isPending" : isActive ? "isActive" : ""
          }
        >
          <FormattedMessage id="nav.bots" />
        </NavLink>
        <NavLink
          to={getLocalizedPath("/statistics")}
          className={({ isActive, isPending }) =>
            isPending ? "isPending" : isActive ? "isActive" : ""
          }
        >
          <FormattedMessage id="nav.statistics" />
        </NavLink>
        <NavLink
          to={getLocalizedPath("/push")}
          className={({ isActive, isPending }) =>
            isPending ? "isPending" : isActive ? "isActive" : ""
          }
        >
          <FormattedMessage id="nav.push" />
        </NavLink>
        <NavLink
          to={getLocalizedPath("/landings")}
          className={({ isActive, isPending }) =>
            isPending ? "isPending" : isActive ? "isActive" : ""
          }
        >
          <FormattedMessage id="nav.landings" />
        </NavLink>
        <NavLink
          to={getLocalizedPath("/users")}
          className={({ isActive, isPending }) =>
            isPending ? "isPending" : isActive ? "isActive" : ""
          }
        >
          <FormattedMessage id="nav.users" />
        </NavLink>
      </nav>
      <div style={{ marginTop: "1rem" }}>
        <select
          value={currentLocale}
          onChange={(e) => handleLanguageChange(e.target.value)}
        >
          <option value="en">English</option>
          <option value="uk">Ukrainian</option>
        </select>
      </div>
    </div>
  );
};

export default Navbar;
