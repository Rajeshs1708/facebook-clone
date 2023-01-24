import React from 'react';
import './Header.css';
import { Search, Home, Flag, StorefrontOutlined, SubscriptionsOutlined, SupervisedUserCircle,Add, Forum, NotificationsActive, ExpandMore } from '@mui/icons-material';
import { Avatar, IconButton} from '@mui/material';

function Header() {
    return (
        <div className='header'>

            <div className='header__left'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facbook_f_logo_%282019%29.svg.png' alt='' />
                <div className='header__input'>
                    <Search />
                    <input placeholder='Search Facebook' type='text' />
                </div>
            </div>
            <div className='header__center'>
                <div className='header__option header__option--active'>
                    <Home fontSize='large' />
                </div>
                <div className='header__option'>
                    <Flag fontSize='large' />
                </div>
                <div className='header__option'>
                    <SubscriptionsOutlined fontSize='large' />
                </div>
                <div className='header__option'>
                    <StorefrontOutlined fontSize='large' />
                </div>
                <div className='header__option'>
                    <SupervisedUserCircle fontSize='large' />
                </div>
            </div>

            <div className='header__right'>
                <div className='header__info'>
                    <Avatar />
                    <h4>Rajesh</h4>
                </div>

                <IconButton>
                    <Add />
                </IconButton>
                <IconButton>
                    <Forum />
                </IconButton>
                <IconButton>
                    <NotificationsActive />
                </IconButton>
                <IconButton>
                    <ExpandMore />
                </IconButton>
            </div>

        </div>
    )
}

export default Header
