import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { Postlist as PostListData } from "../store/Postlist-context";
import WelcomeMessage from "./WelcomeMessage";


const PostList = () => {
  const { postList,addInitialPost} = useContext(PostListData);
  // const [fetching,setFetching]=useState(false);
  
  // useEffect(()=>{
    
  //   setFetching(true);
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //   .then((response) => response.json())
  //   .then
  //     ((json) => {
  //       addInitialPost(json);
  //       setFetching(false);
  //     })

  // },[]) 
  
  const handleGetPostClick=()=>{
    
  }

  return (
    <>
    {/* {fetching && <LoadingSpinner/>} */}
      {postList.length === 0 && 
        <WelcomeMessage onGetPostClick={handleGetPostClick}/>
      }
      { postList.map((post) => (
        <Post key={post.id}  post={post} />
      ))}
    </>
  );
};

export default PostList;
