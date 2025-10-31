import { useNavigate } from 'react-router-dom';
import './EditBotContainer.css'

const EditBotContainer = () => {

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/');
    }

    return <div>
        <div>
            <h2>Edit Bot</h2>
        </div>
        <div>
            {/* <img src="" alt="" className='createbot_logo' /> */}
            <h3>Type name</h3>
        </div>
        <div className='createbot_main'>
            <img src="" alt="" className='createbot_mainpic' />
            <button>Select number</button>
            <button>En</button>
            <input type="text" placeholder='@username_bot' />
            <input type="text" placeholder='Description' />
            <input type="text" placeholder='Text message' />
        </div>
        <div>
            <h2>CTA</h2>
            <button>Add CTA</button>
            <input type="text" placeholder='Name' />
            <input type="text" placeholder='Link' />
            <button>Yes</button>
            <button>No</button>
        </div>
        <div>
            <button onClick={() => handleNavigate()}>Cancel</button>
            <button>Save</button>
        </div>
        <div>
            <p>Created 25/09/25</p>
            <p>Updated 30/09/25</p>
        </div>
    </div>
}

export default EditBotContainer;