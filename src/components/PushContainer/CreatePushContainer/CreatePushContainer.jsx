import { useNavigate } from 'react-router-dom';
import './CreatePushContainer.css'

const CreatePushContainer = () => {

    let navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/push');
    }

    return <div>
        <div>
            <img src="" alt="push_mainImage" className="pushContainer_mainImage"/>
        </div>
        <div>
            <button>Select type</button>
            <button>Select time</button>
            <button>Select date</button>
            <button>En</button>
            <input type="text" placeholder='Title' />
            <input type="text" placeholder='Link' />
            <input type="text" placeholder='Text message' />
            <button>Add Bot</button>
            <button>Select Bot</button>
        </div>
        <div>
            <p>Created: 25/09/25</p>
            <button onClick={() => handleNavigate()}>Cancel</button>
            <button>Create</button>
        </div>
    </div>
}

export default CreatePushContainer;