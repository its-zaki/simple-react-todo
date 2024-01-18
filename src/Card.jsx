import React, { useRef, useState } from "react";

const Card = ({title, Del, edit, index}) => {
    const [ showTodo, setShowTodo] = useState(true)
    const  editRef = useRef()
    const edited =(index)=>{
        // console.log(editRef.current.value, index);
        edit(index, editRef.current.value )
        setShowTodo(true)
    }
    
  return (
    <>
      <div className="card">
        {showTodo ? <div><h4>{title}</h4>
        <div style={{ display: 'flex' }}>
          <button onClick={()=>Del(index)}>delete</button>
          <button onClick={()=>setShowTodo(false)}>edit</button>
        </div></div> : <div style={{marginTop: '50px'}}>
            <input ref={editRef} type="text" placeholder="Enter Edited Value" />
            <button onClick={()=>edited(index)}>Save</button>
        </div> }
      </div>
    </>
  );
};

export default Card;
