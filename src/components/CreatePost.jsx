import React, { useContext, useRef } from 'react'
import { Postlist } from '../store/Postlist-context';

const CreatePost = () => {

  const {addPost}=useContext(Postlist)

  const userId=useRef();
  const postTitle=useRef();
  const PostDesc=useRef();
  const reactions=useRef();
  const tags=useRef();

  let handleSubmit=(event)=>{
    event.preventDefault();
    const userIdData=userId.current.value;
    const postTitleData=postTitle.current.value;
    const PostDescData=PostDesc.current.value;
    const reactionsData=reactions.current.value;
    const tagsData=tags.current.value.split(" ");

    addPost(userIdData,postTitleData,PostDescData,reactionsData,tagsData);

    userId.current.value="";
    postTitle.current.value="";
    PostDesc.current.value="";
    reactions.current.value="";
    tags.current.value="";
  };

  return (
    <>
    <form className='create_post' onSubmit={handleSubmit}>
  <div className="mb-3">

  <div className="mb-3">
    <label htmlFor="userId" className="form-label">Enter Your User ID</label>
    <input
    ref={userId}
    type="text"
    placeholder='User ID'
    className="form-control"
    id="userId"/>   
  </div>

    <label htmlFor="title" className="form-label">Post Title</label>
    <input
    ref={postTitle}
    type="text"
    placeholder='How Are you Feeling Today?'
    className="form-control"
    id="title"/>   
  </div>

  <div className="mb-3">
    <label htmlFor="body" className="form-label">Post Description</label>
    <textarea
    ref={PostDesc}
    rows={4}
    placeholder='Tell Us More About It '
    type="text"
    className="form-control"
    id="body"/>   
  </div>



  <div className="mb-3">
    <label htmlFor="reactions" className="form-label">Reactions Count</label>
    <input
    ref={reactions}
    type="number"
    placeholder='No Of reactions'
    className="form-control"
    id="reactions"/>   
  </div>

  <div className="mb-3">
    <label htmlFor="tags" className="form-label">Hashtags</label>
    <input
    ref={tags}
    type="text"
    placeholder='please maintain space between hashtags'
    className="form-control"
    id="tags"/>   
  </div>

  
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </>
  )
}

export default CreatePost