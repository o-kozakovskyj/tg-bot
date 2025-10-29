import { useNavigate } from 'react-router-dom';
import Push from './Push/Push';
import './PushContainer.css'

const PushContainer = () => {

    const navigate = useNavigate();

    const pushData = [
        { id: 1, pushName: 'Push Text 1', description: 'Description for push', time: '9:30', day: 'Monday', status: 'pending', updatedDate: '25/09/25' },
        { id: 2, pushName: 'Push Text 2', description: 'Description for push', time: '17:00', day: 'Tuesday', status: 'pending', updatedDate: '25/09/25' },
    ]

    return <div>
        <div className="pushContainer_title">
            <h2>Push</h2>
            <button onClick={() => navigate('/createPush')}>Create Push</button>
        </div>
        <div>
            <div className='pushContainer_btns'>
                <button>Scheldue</button>
                <button>Custom</button>
            {pushData.map(pushData => <Push pushData={pushData} key={pushData.id} />)}
            </div>
          

        </div>
    </div>

}

export default PushContainer;