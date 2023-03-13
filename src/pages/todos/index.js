import Link from 'next/link';
import React, { useEffect ,useState } from 'react'

function Todos() {
    const [todos,setTodos]= useState([]);

    useEffect(()=>{
        fetch("http://localhost:3001/todos")
        .then(res=> res.json())
        .then(data=> setTodos(data));
    },[])

    return ( <div>
    {todos ? todos.map(t=><Link href={`/todos/${t.id}`} key={t.id}> <h3>{t.title}</h3></Link>) 
    :<h1>Loading...</h1>}
    </div> );
}

export default Todos;