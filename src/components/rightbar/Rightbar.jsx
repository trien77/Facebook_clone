import React from 'react'
import "./rightbar.css"
import {Users} from "../../dummyData"
import Online from '../online/Online'
import Profile from '../../pages/profile/Profile'
const Rightbar = ({profile}) => {

  const HomeRightbar=()=>{
    return (
      <>
      <div className="birthdayContainer">
          <img className='birthdayImg' src="assets/gift.png" alt="" />
          <span className="birthdayText"><b>Polo Foster</b> and <b>3 other friend</b> hve a birthday today</span>
        </div>

        <img src="assets/ad.png" alt="" className="rightbarAd" />

        <h4 className="rightTitle">Online Friends</h4>

         {/*list online friend*/}
        <ul className="rightbarFriendList">
           {Users.map(user =>(
            <Online key={user.id} user={user}/>
           ))}
           
        </ul>
      </>
    )
  }

   const ProfileRightbar=()=>{
    return (
      <>
          <h4 className='rightbarTitle'>User Information</h4>
          <div className="rightbarInfo">
                <div className="rightbarInforItem">
                  <span className="rightbarInfoKey">
                    City:
                  </span>
                  <span className="rightbarInfoValue">
                    Newyork
                  </span>
                </div>
                <div className="rightbarInforItem">
                  <span className="rightbarInfoKey">
                    From:
                  </span>
                  <span className="rightbarInfoValue">
                   Marid
                  </span>
                </div>
                <div className="rightbarInforItem">
                  <span className="rightbarInfoKey">
                    Relationship:
                  </span>
                  <span className="rightbarInfoValue">
                    Single
                  </span>
                </div>
          </div>
          <h4 className='rightbarTitle'>User Friends</h4>
          <div className="rightbarFollowings">
              <div className="rightbarFollowing">
                <img className="rightbarFollowingImg" src="assets/person/1.jpeg" alt="" />
                <span className="rightbarFollowingName">John Cater</span>
              </div>
              <div className="rightbarFollowing">
                <img className="rightbarFollowingImg" src="assets/person/2.jpeg" alt="" />
                <span className="rightbarFollowingName">John Cater</span>
              </div>
              <div className="rightbarFollowing">
                <img className="rightbarFollowingImg" src="assets/person/3.jpeg" alt="" />
                <span className="rightbarFollowingName">John Cater</span>
              </div>
              <div className="rightbarFollowing">
                <img className="rightbarFollowingImg" src="assets/person/4.jpeg" alt="" />
                <span className="rightbarFollowingName">John Cater</span>
              </div>
              <div className="rightbarFollowing">
                <img className="rightbarFollowingImg" src="assets/person/5.jpeg" alt="" />
                <span className="rightbarFollowingName">John Cater</span>
              </div>
              <div className="rightbarFollowing">
                <img className="rightbarFollowingImg" src="assets/person/6.jpeg" alt="" />
                <span className="rightbarFollowingName">John Cater</span>
              </div>
          </div>
      </>
    )
   }

  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
       {profile? <ProfileRightbar/>:<HomeRightbar/>}

      </div>
    </div>
  )
}

export default Rightbar
