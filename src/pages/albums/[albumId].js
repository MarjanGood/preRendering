function AlbumDetails({album}) {
    return ( <div>

<h1>AlbumDetails</h1>
<h3>
    {album.id} - {album.userId} =  { album.title}
</h3>
    </div> );
}

export default AlbumDetails;
export async function getServerSideProps(context){

    const {params} =context;
    const res= await fetch(`http://localhost:3001/albums/${params.albumId}`);
    const data = await res.json();

    if(!data.title){
        return{
            redirect:{ destination:"/albums"}
        }
    }

    return {
        props:{
            album:data
        }
    }
}