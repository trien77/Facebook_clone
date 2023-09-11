import React from 'react'
import "./sidebar.css"
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PeopleIcon from '@mui/icons-material/People';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import EventRepeatIcon from '@mui/icons-material/EventRepeat';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import {Users} from "../../dummyData"
import CloseFriend from '../closeFriend/CloseFriend';
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
         <ul className="sidebarList">
          <li className="sidebarListItem">
             <RssFeedIcon className='sidebarIcon'/>
             <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
             <ChatIcon className='sidebarIcon'/>
             <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
             <PlayCircleIcon className='sidebarIcon'/>
             <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
             <PeopleIcon className='sidebarIcon'/>
             <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
             <BookmarkIcon className='sidebarIcon'/>
             <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
             <HelpOutlineIcon className='sidebarIcon'/>
             <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
             <WorkOutlineIcon className='sidebarIcon'/>
             <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
             <EventRepeatIcon className='sidebarIcon'/>
             <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
             <FolderSharedIcon className='sidebarIcon'/>
             <span className="sidebarListItemText">Courses</span>
          </li>
         </ul>

         <button className="sidebarButton">Show More</button>

          <hr className='sidebarHr'/>
          <ul className="sidebarFriendList">
             {Users.map((user)=>(<CloseFriend key={user.id} user={user}/>))}
          </ul>
      </div>
    </div>
  )
}

export default Sidebar
