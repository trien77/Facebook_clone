import React, {useState} from 'react'
import "./post.css" 
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Users} from "../../dummyData"



const Post = ({post}) => {
  const {id,desc,photo,date,userId,like,comment} = post  

{/*set usestate for like and heart buttons*/}
 const [likes,setLikes] =useState(like)
 const [isLiked,setIsLiked]=useState(false)


 {/*likeHandler is using for changing the liked number*/}
  const likeHandler=()=>{
  setLikes(isLiked ? likes-1 : likes+1)
  setIsLiked(!isLiked)
  }


  return (
    <div className='post'>
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className='postProfileImg' src={Users.filter((user) => user.id===userId)[0].profilePicture } alt="" />
            <span className="postUsername">{Users.filter((user) => user.id===userId)[0].username }</span>
            <span className="postDate">{date}</span>
          </div>
          <div className="postTopRight">
             <MoreVertIcon/>
          </div>
        </div>
        <div className="postCenter">
            <span className="postText">{desc}</span>
            <img className="postImg" src={photo} alt="firstpost" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
              <img className='likeIcon' src="assets/like.png" onClick={likeHandler}alt="like" />
              <img className='likeIcon' src="assets/heart.png"  onClick={likeHandler} alt="like" />
              <span className="postLikeCounter">{likes} people liked it</span>
          </div>
          <div className="postBottomRight">
              <span className="postCommentText">
                  {comment} comments
              </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
