import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import CategoryIcon from '@mui/icons-material/Category';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AndroidIcon from '@mui/icons-material/Android';
import FaceIcon from '@mui/icons-material/Face';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeContext';
import { useContext } from 'react';

const Sidebar = () => {
    const { dispatch } = useContext(DarkModeContext);

  return (
    <div className='sidebar'>
      <div className='top'>
        <Link to='/admin-panel' style={{ textDecoration: 'none' }}>
          <span className='logo'>Admin</span>
        </Link>
      </div>
      <hr />
      <div className='center'>
        <ul>
          <p className='title'>Main</p>
          <li>
            <DashboardIcon className='icon' />
            <span>Dashbord</span>
          </li>
          <p className='title'>List</p>
          <li>
            <PersonIcon className='icon' />
            <Link to='/admin-panel/users' style={{ textDecoration: 'none' }}>
              <span>Users</span>
            </Link>
          </li>
          <li>
            <CategoryIcon className='icon' />
            <Link to='/products' style={{ textDecoration: 'none' }}>
              <span>Products</span>
            </Link>
          </li>
          <li>
            <CreditCardIcon className='icon' />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className='icon' />
            <span>Delivery</span>
          </li>
          <p className='title'>Useful</p>
          <li>
            <QueryStatsIcon className='icon' />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsIcon className='icon' />
            <span>Notification</span>
          </li>
          <p className='title'>Service</p>
          <li>
            <AndroidIcon className='icon' />
            <span>System</span>
          </li>
          <li>
            <FaceIcon className='icon' />
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon className='icon' />
            <span>Settings</span>
          </li>
          <p className='title'>User</p>
          <li>
            <PersonPinIcon className='icon' />
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className='icon' />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className='bottom'>
        <div className='colorOption' onClick={() => dispatch({ type: 'LIGHT' })}></div>
        <div className='colorOption' onClick={() => dispatch({ type: 'DARK' })}></div>
      </div>
    </div>
  );
};

export default Sidebar;
