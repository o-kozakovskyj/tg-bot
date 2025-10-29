import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css'
import Layout from './components/Layout/Layout'
import Bots from "./pages/Bots";
import Push from "./pages/Push";
import Landings from "./pages/Landings";
import CreateBot from "./components/BotsContainer/CreateBotContainer/CreateBotContainer";
import EditBot from "./components/BotsContainer/EditBotContainer/EditBotContainer";
import CreatePush from "./pages/CreatePush";
import EditPush from "./pages/EditPush";
import Statistics from "./pages/Statistics";
import Users from "./pages/Users";
import { CurrentUserContext, CurrentUserProvider } from "./context/CurrentUserContext";
import { useContext, useEffect, useState } from "react";
import Login from "./pages/Login";
import enMessages from "./locales/en.json";
import uaMessages from "./locales/ua.json";
import { IntlProvider } from "react-intl";

const messages = {
  en: enMessages,
  ua: uaMessages,
};

function App() {

  const [currentLocale, setCurrentLocale] = useState("en");

  useEffect(() => {
    const savedLocale = localStorage.getItem("preferred-locale");
    if (savedLocale && messages[savedLocale]) {
      setCurrentLocale(savedLocale);
    }
  }, []);

  const onLocaleChange = (newLocale) => {
    setCurrentLocale(newLocale);
    localStorage.setItem("preferred-locale", newLocale);

    const currentPath = window.location.pathname;
    const newPath = currentPath.replace(/^\/(en|es|fr)/, `/${newLocale}`);
    window.history.replaceState(null, "", newPath);
  };

  const { currentUser } = useContext(CurrentUserContext);

  const usersData = [
    { id: 1, userName: 'John Dawton', role: 'Admin', },
    { id: 2, userName: 'Oliver Lewis', role: 'User', },
  ]



  return (
    <IntlProvider
    locale={currentLocale}
    messages={messages[currentLocale]}
    defaultLocale="en"
    >
      <BrowserRouter>
        {currentUser ? <Layout currentLocale={currentLocale} onLocaleChange={onLocaleChange}>
          <Routes>
            <Route path="/" element={<Bots />} />
            <Route path="/createBot" element={<CreateBot />} />
            <Route path="/editBot/:botId" element={<EditBot />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/push" element={<Push />} />
            <Route path="/createPush" element={<CreatePush />} />
            <Route path="/editPush/:pushId" element={<EditPush />} />
            <Route path="/landings" element={<Landings />} />
            <Route path="/users" element={<Users usersData={usersData} />} />
          </Routes>
        </Layout> : <Login usersData={usersData} />}
      </BrowserRouter>
      {/* <BrowserRouter>
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
                onLocaleChange={onLocaleChange}
              />
            }
          >
           <Route path="/" element={<Bots />} />
            <Route path="/createBot" element={<CreateBot />} />
            <Route path="/editBot/:botId" element={<EditBot />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/push" element={<Push />} />
            <Route path="/createPush" element={<CreatePush />} />
            <Route path="/editPush/:pushId" element={<EditPush />} />
            <Route path="/landings" element={<Landings />} />
            <Route path="/users" element={<Users usersData={usersData} />} />
          </Route>
  
        </Routes>
      </BrowserRouter> */}
    </IntlProvider>

  )
}


export default App
