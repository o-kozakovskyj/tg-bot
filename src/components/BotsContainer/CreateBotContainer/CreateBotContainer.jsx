import { useLocation, useNavigate, useParams } from 'react-router-dom';
import './CreateBotContainer.css'

const CreateBotContainer = () => {
  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();

  let currentLocale = params.locale;
  if (!currentLocale) {
    const pathMatch = location.pathname.match(/^\/(en|uk)/);
    currentLocale = pathMatch ? pathMatch[1] : "en";
  }

  const handleNavigate = () => {
    navigate(`/${currentLocale}`);
  };

  return (
    <div>
      <div>
        <h2>Create Bot</h2>
      </div>
      <div>
        {/* <img src="" alt="" className="createbot_logo" /> */}
        <h3>Type name</h3>
      </div>
      <div className="createbot_main">
        {/* <img src="" alt="" className="createbot_mainpic" /> */}
        <button>Select number</button>
        <button>En</button>
        <input type="text" placeholder="@username_bot" />
        <input type="text" placeholder="Description" />
        <input type="text" placeholder="Text message" />
      </div>
      <div>
        <h2>CTA</h2>
        <button>Add CTA</button>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Link" />
        <button>Yes</button>
        <button>No</button>
      </div>
      <div>
        <button onClick={handleNavigate}>Cancel</button>
        <button>Create</button>
      </div>
    </div>
  );
};

export default CreateBotContainer;