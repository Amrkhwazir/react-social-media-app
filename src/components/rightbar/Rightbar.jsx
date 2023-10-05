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
        return(<h1>hey its profile right bar</h1>)
    }
    return(
        <div className="rightbar">
            <div className="rightbarWrapper">
                <ProfileRightbar/>
            </div>
        </div>
    )
}