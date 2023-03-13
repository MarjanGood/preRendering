import { useState } from "react";
function TodoDetail({todo}) {

    const [data, setData] = useState(todo);


    const updateHandler=async (id)=>{ 

   const res =await fetch(`http://localhost:3001/todos/${id}`)

   const data=await res.json();
    setData(data);
    };

    return ( 
    <div>
        TodoDetail
        <h1>
           {data.title}
        </h1>
        <h3>
           {`${data.completed}`}
        </h3>
        <button onClick={()=>updateHandler(data.id)}>Update</button>
    </div>
    );

}

export default TodoDetail;



export async function getServerSideProps(context){

    const {params} = context;
    const res = await fetch(`http://localhost:3001/todos/${params.todoId}`);
    const data = await res.json();

    if(!data.id){
       return {
           redirect:{destination:"/"}
       // notFound: true,
       };
    }

    return {
        props:{ todo:data },
       
    }

}