import {useRouter} from "next/router"

function UserDetail({data}) {

    const router = useRouter();
    if(router.isFallback){
        return <h2>Fallback page!</h2>
    }

    return ( 
    <div>
        UserDetail
        <h1>
           {data.name}
        </h1>
        <h3>
           {data.email}
        </h3>
    </div> 
    );
}

export default UserDetail;

export async function getStaticPaths(){

    const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data = await res.json();
    const usersData = data.slice(0,4);

    const paths = usersData.map(user=>({ params: {userId: user.id.toString()} } ));

    return{

        // paths:[
        //     {params:{userId:"1"}},
        //     {params:{userId:"2"}},
        //     {params:{userId:"3"}},
        //     {params:{userId:"4"}},
        //     {params:{userId:"5"}},
        //     {params:{userId:"6"}},
        //     {params:{userId:"7"}},
        //     {params:{userId:"8"}},
        //     {params:{userId:"9"}},
        //     {params:{userId:"10"}},
        // ],
        //paths : paths,
        paths,
        //fallback:false
        fallback:true

    }
}


export async function getStaticProps(context){

    const {params} = context;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`);
    const data = await res.json();

    if(!data.name){
        return {
            notFound: true,
        };
    }

    console.log(params)

    return {
        props:{ data },
    }

}