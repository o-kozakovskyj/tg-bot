import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Bots from "./pages/Bots";
import Push from "./pages/Push";
import Landings from "./pages/Landings";
import CreateBot from "./components/BotsContainer/CreateBotContainer/CreateBotContainer";
import EditBot from "./components/BotsContainer/EditBotContainer/EditBotContainer";
import CreatePush from "./pages/CreatePush";
import EditPush from "./pages/EditPush";
import Statistics from "./pages/Statistics";
import Users from "./pages/Users";
import {
  CurrentUserContext
} from "./context/CurrentUserContext";
import { useContext, useEffect, useState } from "react";
import Login from "./pages/Login";
import enMessages from "./locales/en.json";
import ukMessages from "./locales/uk.json";
import { IntlProvider } from "react-intl";

const messages = {
  en: enMessages,
  uk: ukMessages,
};

function App() {
  const [currentLocale, setCurrentLocale] = useState("en");

  useEffect(() => {
    const savedLocale = localStorage.getItem("preferred-locale");
    if (savedLocale && messages[savedLocale]) {
      setCurrentLocale(savedLocale);
    }
  }, []);

  const { currentUser } = useContext(CurrentUserContext);

  const usersData = [
    { id: 1, userName: "John Dawton", role: "Admin" },
    { id: 2, userName: "Oliver Lewis", role: "User" },
  ];

  return (
    <IntlProvider
      locale={currentLocale}
      messages={messages[currentLocale]}
      defaultLocale="en"
    >
      <BrowserRouter>
        {currentUser ? (
          <Routes>
            <Route
              path="/"
              element={<Navigate to={`/${currentLocale}`} replace />}
            />
            <Route
              path="/:locale"
              element={
                <Layout
                  currentLocale={currentLocale}
                  setCurrentLocale={setCurrentLocale}
                />
              }
            >
              <Route index element={<Bots />} />
              <Route path="createBot" element={<CreateBot />} />
              <Route path="editBot/:botId" element={<EditBot />} />
              <Route path="statistics" element={<Statistics />} />
              <Route path="push" element={<Push />} />
              <Route path="createPush" element={<CreatePush />} />
              <Route path="editPush/:pushId" element={<EditPush />} />
              <Route path="landings" element={<Landings />} />
              <Route path="users" element={<Users usersData={usersData} />} />
            </Route>
            <Route
              path="*"
              element={<Navigate to={`/${currentLocale}`} replace />}
            />
          </Routes>
        ) : (
          <Login usersData={usersData} />
        )}
      </BrowserRouter>
    </IntlProvider>
  );
}

export default App;
