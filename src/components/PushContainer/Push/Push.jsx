import { useNavigate } from "react-router-dom";

const Push = ({ pushData }) => {

    const navigate = useNavigate();

    const handleNavigate = (pushData) => {
        navigate(`/editPush/${pushData.id}`);
    };

    return <div>
        <img src="./" alt="bot_logo" />
        <h4>
            {pushData.pushName}
            <button>{pushData.time}</button>
            <button>{pushData.day}</button>
            <button>{pushData.status}</button>
        </h4>
        <h5>
            <span>{pushData.description}</span>
            <span>Updated: {pushData.updatedDate}</span>
        </h5>
        <div>
            <div>
                <button>Delete</button>
                <button onClick={() => handleNavigate(pushData)}>
                    Edit
                </button>
            </div>
        </div>
        <h5>
            {pushData.createdDate}
        </h5>

    </div>
}

export default Push;