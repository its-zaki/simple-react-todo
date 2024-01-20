import React from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext";

const Nav = () => {
    const {isUser, setIsUser} = useContext(UserContext)
    
  return (
    <>
        
      <ul style={{display:"flex", justifyContent:'space-around' , fontSize:"20px"}}>
        <li>Home</li>
        <li>About</li>
        {isUser ? <div>
            <li onClick={()=>setIsUser(false)}>Login</li>
            <li onClick={()=>setIsUser(false)}>Register</li>
        </div> : <div>
             <li onClick={()=>setIsUser(true)}>Logout</li>
        </div>
        }
      </ul>
      <div style={{textAlign:'center'}}>

        {isUser ? <h3>Login Or Register To Add Todo</h3>:<h3>Welcome To My Todo</h3>}
      </div>
    </>
  );
};

export default Nav;
