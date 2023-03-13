import useSWR from 'swr';

function SWRTodos() {
   // const [todos,setTodos]= useState([]);

    const {data,error}= useSWR("http://localhost:3001/todos",(url)=>fetch(url).then((res)=>res.json()));

    console.log({data,error})
    return ( <div>
    {
    data ? data.map(t=><h3 key={t.id}>{t.title}</h3>) 
    :
    <h1>Loading...</h1>
    }
    </div> );

}

export default SWRTodos; 