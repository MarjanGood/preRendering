import React, { useEffect ,useState } from 'react'

function Todos() {
    const [todos,setTodos]= useState([]);

    useEffect(()=>{
        fetch("http://localhost:3001/todos")
        .then(res=> res.json())
        .then(data=> setTodos(data));
    },[])

    return ( <div>
    {todos.length ? todos.map(t=><h3 key={t.id}>{t.title}</h3>) 
    :<h1>Loading...</h1>}
    </div> );
}

export default Todos;