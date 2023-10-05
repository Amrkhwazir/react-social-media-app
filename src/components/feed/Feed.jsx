import Post from "../post/Post"
import Share from "../share/Share"
import "./feed.css"
import { post } from "../../dummyData.js"

export default function Feed(){
    return(
        <div className="feed">
            <div className="feedWrapper">
                <Share/>  
                {post.map((p)=>{
                
                return <Post key={p.id} post={p}/>    
                
                })}  
         

            </div>


        </div>
    )
}