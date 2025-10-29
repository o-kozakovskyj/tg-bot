import { useNavigate } from "react-router-dom";
import Bot from "./Bot/Bot";
import './BotsContainer.css'
import { useContext } from "react";
import { CurrentUserContext } from "../../context/CurrentUserContext";

const BotsContainer = () => {

    const { currentUser } = useContext(CurrentUserContext);

    const navigate = useNavigate();

    const botsData = [
        { id: 1, botName: 'Chatty Charlie', status: 'active', updatedDate: '23/09/23', createdDate: '23/03/24', cta: 'offer', usersIdList: [1] },
        { id: 2, botName: 'Botanica Tester', status: 'disabled', updatedDate: '23/09/23', createdDate: '23/03/24', cta: 'offer', usersIdList: [1, 2] },
        { id: 3, botName: 'Helper Hattie', status: 'disabled', updatedDate: '23/09/23', createdDate: '23/03/24', cta: 'offer', usersIdList: [1] },
        { id: 4, botName: 'Lorem', status: 'disabled', updatedDate: '23/09/23', createdDate: '23/03/24', cta: 'offer', usersIdList: [2] },
        { id: 5, botName: 'UZ Test Bot', status: 'disabled', updatedDate: '23/09/23', createdDate: '23/03/24', cta: 'offer', usersIdList: [1, 2] },
    ]

    return <div>
        <div className="bot_header">
            <h3 className="bot_title">Bots</h3>
            <button className="bot_button" onClick={() => navigate('/createBot')}>
                Create Bot
            </button>
        </div>
        <div className="bot_created">
            <h2>Created by you</h2>
            {botsData
                .filter(botData => botData.usersIdList.includes(currentUser.id))
                .map(botData => <Bot botData={botData} key={botData.id} />)}
        </div>

    </div>
}

export default BotsContainer;