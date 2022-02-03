import React,{useState,useEffect} from 'react'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'
import './Feed.css'
import db from './firebase'

function Feed() {
    const [post,setPosts] = useState([])

    // useEffect(() => {
    //     db.collections('posts').onSnapshot(snapshot => {
    //         setPosts(snapshot.docs.map(doc=>{
    //             return ({
    //                 id:doc.id,
    //                 data: doc.data()
    //             })
    //         }))
    //     })
    // },[])

    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />

            <Post 
                profilePic="https://joeschmoe.io/api/v1/random"
                image="https://media-cdn.laodong.vn/storage/newsportal/2020/8/21/829850/Bat-Cuoi-Truoc-Nhung-09.jpg?w=720&crop=auto&scale=both"
                username="tranminhDuc"
                timestamp="12:00"
                message="is Workis Workis Workis Workis Workis Workis Workis Workis Workis Workis Workis Workis Workis Workis Workis Workis Workis Workis Workis Workis Workis Workis Workis Workis Workis Workis Workis Workis Workis Workis Workis Work"
            />  
        </div>
    )
}

export default Feed
