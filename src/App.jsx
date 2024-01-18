import React from 'react'
import { useRef, useState } from 'react'
import Card from './Card'


const App = () => {
  const [data, setData] = useState([])
  const inpRef = useRef()

  const AddTodo = (e)=>{
    e.preventDefault()
    data.push(inpRef.current.value)
    setData([...data])
    inpRef.current.value = ''
    

  }

  // delete funciton 
  const Delete = (index)=>{
    data.splice(index, 1)
    setData([...data])
    

  }
  const edit = ( index ,value)=>{
    data.splice(index, 1, value  )
    setData([...data])
    
    
  }
  return (
    <>
    <h1>Todo-App</h1>
    <form onSubmit={AddTodo}>
      <input type="text" placeholder='Enter Your Todo' ref={inpRef}/>
      <button type='submit'>Add Todo</button>
    </form>
    {data.length > 0 ? data.map((item, index)=>{
      return  <Card key={index} title={item} Del={Delete} edit={edit} index={index}/>

    }) : <h4>No Todo...</h4>}
    </>
  )
}

export default App