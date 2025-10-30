import { useNavigate } from 'react-router-dom';
import './Bot.css'

const Bot = ({ botData }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`editBot/${botData.id}`);
  };

  return (
    <div className="bot_container">
      {/* <img src="./" alt="bot_logo" className="bot_image" /> */}
      <h4 className="bot_name">
        {botData.botName}
        <button>{botData.status}</button>
      </h4>
      <h5 className="bot_cta">
        <span>{botData.cta}</span>
        <span>Updated: {botData.updatedDate}</span>
      </h5>
      <div>
        <div className="bot_buttons">
          <button>Delete</button>
          <button onClick={handleNavigate}>Edit</button>
          <button>Start</button>
        </div>
      </div>
      <h5 className="bot_cta">{botData.createdDate}</h5>
    </div>
  );
};

export default Bot;