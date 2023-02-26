function UserDetail() {
    return ( 
    <div>
        UserDetail
    </div> 
    );
}

export default UserDetail;
export async function getStaticProps(context){

    const {params} = context;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${Params.userId}`);
    const data = await res.json();

    console.log(params)

    return {
        props:{ data },
    }

}