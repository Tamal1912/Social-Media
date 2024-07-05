import React, { useContext } from "react";
import { MdDeleteForever } from "react-icons/md";
import { Postlist } from "../store/Postlist-context";

const Post = ({ post }) => {
  
  const {deletePost}=useContext(Postlist)

  return (
    <>
      <div className="card post-card" style={{ width: "26rem" }}>
        <div className="card-body">
          <h5 className="card-title">
            {post.title}

            <span 
            onClick={()=>deletePost(post.id)}
            className=" deleteBtn position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              <MdDeleteForever/>
            </span>
          </h5>
          <p className="card-text">{post.body}</p>
           {post.tags.map((tag) => (
            <span key={tag} className="badge text-white bg-primary mx-1">{tag}</span>
          ))} 

           <div className="alert alert-success reaction" role="alert">
            This Post has been reacted by {post.reactions} peoples
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;