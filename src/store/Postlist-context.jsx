import { createContext, useReducer } from "react";
import React from 'react'



export const Postlist= createContext({

  postList:[],
  addPost:()=>{},
  deletePost:()=>{},
});


 /*REDUCER FUNCTION */

const postListReducer=(currPostList,action)=>{
  let newPostList=currPostList;
  
  if(action.type === "DELETE_POST"){
    newPostList=currPostList.filter((post_item)=> post_item.id !== action.payload.postId);
  }else if(action.type === "ADD_POST"){
    newPostList=[action.payload,...currPostList];
  }
   
  return newPostList;
 };

const PostListProvider = ({children}) => {

   const [postList,dispatchPostList]= useReducer(postListReducer,[]); 

   /*ADD POST METHOD ****/

let addPost=(userIdData,postTitleData,PostDescData,reactionsData,tagsData)=>{
  dispatchPostList({
    type:"ADD_POST",
    payload:{
      id:Date.now(),
      title:postTitleData,
      body:PostDescData,
      reactions:reactionsData,
      userId:userIdData,
      tags:tagsData,
    },
  }
)

};


/*DELETE POST METHOD ****/

let deletePost=(postId)=>{

  dispatchPostList({
  type:"DELETE_POST",
  payload:{
    postId,
  }
})

};

  return (
    <Postlist.Provider value={{ postList,addPost,deletePost}}>
      {children}
    </Postlist.Provider>
  )
};

export default PostListProvider;



