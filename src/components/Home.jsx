import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const [value, setValue] = useState("");
    const navigate = useNavigate();

    const navigateToRoom = ()=>{
        navigate(`/room/${value}`)
  
    };

  return (
    <>
    <div className='nav'>
        <p>Home</p>
    </div>
        <div className="container">
            <h1>Welcome to Live Streaming App!</h1>
       <h2>Enter the id to join the room</h2>
        <input type="text" 
        value={value} 
        onChange={(e)=> setValue(e.target.value)} />
        <button onClick={navigateToRoom} disabled ={!value}>JOIN ROOM</button>

      </div>
    </>
  )
}

export default Home