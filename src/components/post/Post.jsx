import { MoreVert } from "@mui/icons-material"
import "./post.css"

export default function Post(){
    return(
        <div className="post" >
           <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src="/assets/profile pic/pp1.jpg" alt="" className="postProfileImg" />
                    <span className="postUsername">Amir khan</span>
                    <span className="postDate">5 mins ago</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">Hey! Its my first post :)</span>
                <img src="/assets/post pic/place1.jpg" alt="" className="postImg" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src="/assets/like.png" alt="" className="likeIcon" />
                    <img src="/assets/heart.png" alt="" className="likeIcon" />
                    <span className="postLikeCounter">32 poeple like it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCOmmentText">9 comments</span>
                </div>

            </div>
           </div>
        </div>
    )
}