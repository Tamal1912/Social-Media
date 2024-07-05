import React from 'react'

const WelcomeMessage = ({onGetPostClick}) => {
  return (
    <center className='welcome_msg '>
        <h1 className='display-3'>There are no posts Yet</h1>
        <button
        onClick={onGetPostClick}
         type="button"
         className="btn btn-primary mt-2">Get Posts From Server</button>
    </center>
  )
}

export default WelcomeMessage;