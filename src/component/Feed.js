import React,{useState,useEffect} from 'react'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'
import './Feed.css'
import { q,db } from './firebase'
import { getDocs,serverTimestamp,onSnapshot,doc,query,collection } from "firebase/firestore";

function Feed() {
    const [posts,setPosts] = useState([])
    
    // v8.0
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
    //v9.0


    
    
    
    
   


    
useEffect(() => {
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const data = [];
    querySnapshot.forEach((doc) => {
        data.push({data: doc.data(),id:doc.id});
        
    });
    setPosts(data)
});
    
},[])   

    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />

        {posts.map((post)=>{
            console.log(post.id)
              return(
            <Post 
            key={post.id}
            profilePic={post.data.profilePic}
            image={post.data.image}
            username={post.data.username}
            // timestamp={post.timestamp}
            message={post.data.message}
        />
        )
        })}

        </div>
    )
}

export default Feed
