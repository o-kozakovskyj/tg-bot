import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './Layout.css'

const Layout = ({ currentLocale, setCurrentLocale }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const onLocaleChange = (newLocale) => {
    // Get current route without locale
    const currentRoute = location.pathname.replace(/^\/(en|uk)/, "");
    const newPath = `/${newLocale}${currentRoute || ""}`;

    setCurrentLocale(newLocale);
    localStorage.setItem("preferred-locale", newLocale);

    // Navigate to maintain the same route
    navigate(newPath, { replace: true });
  };

  return (
    <div className="layout_main">
      <div className="layout_background">
        <Navbar currentLocale={currentLocale} onLocaleChange={onLocaleChange} />
      </div>
      <Outlet />
    </div>
  );
};
export default Layout;