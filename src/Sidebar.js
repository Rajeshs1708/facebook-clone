import LocalHospitalIcon  from '@mui/icons-material/LocalHospital';
import EmojiFlagsIcon  from '@mui/icons-material/EmojiFlags';
import PeopleIcon  from '@mui/icons-material/People';
import ChatIcon  from '@mui/icons-material/Chat';
import StorefrontIcon  from '@mui/icons-material/Storefront';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import ExpandMoreOutlinedIcon  from '@mui/icons-material/ExpandMoreOutlined';
import React from 'react';
import './Sidebar.css'
import SidebarRow from './SidebarRow';

function Sidebar() {
    return (
        <div className='sidebar'>
            <SidebarRow src='https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmVhdXRpZnVsJTIwbWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60' title='Rajesh' />
            <SidebarRow Icon={LocalHospitalIcon} title='COVID-19 Information Center' />
            <SidebarRow Icon={EmojiFlagsIcon} title='Pages' />
            <SidebarRow Icon={PeopleIcon} title='Friends' />
            <SidebarRow Icon={ChatIcon} title='Messenger' />
            <SidebarRow Icon={StorefrontIcon} title='Marketplace' />
            <SidebarRow Icon={VideoLibraryIcon} title='Videos' />
            <SidebarRow Icon={ExpandMoreOutlinedIcon} title='Marketplace' />
            
        </div>
    )
}

export default Sidebar
