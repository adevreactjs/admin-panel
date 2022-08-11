import './navbar.scss';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import { DarkModeContext } from '../../context/darkModeContext';
import { useContext } from 'react';

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='search'>
          <input type='text' placeholder='Search ...' />
          <SearchIcon />
        </div>
        <div className='items'>
          <div className='item'>
            <LanguageIcon className='icon' />
            En
          </div>
          <div className='item' onClick={() => dispatch({ type: 'TOGGLE' })}>
            <DarkModeOutlinedIcon className='icon' />
          </div>
          <div className='item'>
            <FullscreenExitIcon className='icon' />
          </div>
          <div className='item'>
            <NotificationsNoneOutlinedIcon className='icon' />
            <div className='counter'>1</div>
          </div>
          <div className='item'>
            <ChatBubbleOutlineOutlinedIcon className='icon' />
            <div className='counter'>1</div>
          </div>
          <div className='item'>
            <FormatListBulletedOutlinedIcon className='icon' />
          </div>
          <div className='item'>
            <img
              src='https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
              alt='avatar'
              className='avatar'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
