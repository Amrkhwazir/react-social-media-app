import "./profile.css"
import Feed from "../../components/feed/Feed.jsx";
import Rightbar from "../../components/rightbar/Rightbar.jsx";
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import Topbar from "../../components/topbar/Topbar.jsx";
export default function Profile(){
    
    return(
        <>
     <Topbar/>
           <div className="profile">
            <Sidebar/>
            <div className="profileRight">
                <div className="profileRightTop">
                    <div className="profileCover">
                        <img src="/assets/coverpic.jpg" alt="" className="profileCoverImg" />
                        <img src="/assets/profile pic/pp1.jpg" alt="" className="profileUserImg" />
                    </div>
                    <div className="profileInfo">
                        <h4 className="profileInfoName">Amir khan</h4>
                        <h4 className="profileInfoDesc">Hello my friends, Welcome to my profile.</h4>
                    </div>
                </div>
                <div className="profileRightBottom">
            <Feed/>
            <Rightbar Profile/>
                </div>
            </div>
           </div>
        </>
    )
}