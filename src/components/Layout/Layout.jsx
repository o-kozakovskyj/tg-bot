import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './Layout.css'

const Layout = ({ currentLocale, onLocaleChange }) => {
    return <div className='layout_main'>
        <div className='layout_background' >
            <Navbar currentLocale={currentLocale} onLocaleChange={onLocaleChange}/>
        </div>
        <Outlet />
    </div>


}

export default Layout;