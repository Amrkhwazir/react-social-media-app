import "./rightbar.css"
import { users } from "../../dummyData"

export default function Rightbar({profile}){
    
    const HomeRightbar =()=>{
        return(
<>
<div className="birthdayContainer">
                    {/* <img src="" alt="/assets/birthdayImg.jpg" className="birthdayImg" /> */}
                    <span className="birthdayText">
                    🎁 <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today 
                    </span>
                </div>
                <img src="/assets/addPoster.jpg" alt="" className="rightbarAd" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">

                    <>
                    {users.map((u)=>(
                    <li className="rightbarFriend">
                    <div className="rightbarProfileImgContainer">
                        <img src={u?.profilePic} alt="" className="rightbarProfileImg" />
                        <span className="rightbarOnline"></span>
                    </div>
                    <span className="rightbarUsername">{u?.username}</span>
                </li>     
                    ))}
                    </>
                    
                 </ul>
</>
        )
    }

    const ProfileRightbar =()=>{
        return(
            <>
            <h4 className="rightbarTitle">User information</h4>
            <div className="rightbarInfo">
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">City:</span>
                    <span className="rightbarInfoValue">Karachi</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">From:</span>
                    <span className="rightbarInfoValue">Swat</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">Relationship:</span>
                    <span className="rightbarInfoValue">Single</span>
                </div>
            </div>
            <h4 className="rightbarTitle">User information</h4>
            <div className="rightbarFollowings">
                <div className="rightbarFollowing">
                    <img src="assets/profile pic/pp1.jpg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">John Doe</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/profile pic/pp2.jpg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">John Doe</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/profile pic/pp3.webp" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">John Doe</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/profile pic/pp4.jpeg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">John Doe</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/profile pic/pp4.webp" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">John Doe</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/profile pic/pp5.jpeg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">John Doe</span>
                </div>
            </div>
            </>

        )
    }

    return(
        <div className="rightbar">
            <div className="rightbarWrapper">
                {profile ? <ProfileRightbar/>: <HomeRightbar/>}
            </div>
        </div>
    )
}