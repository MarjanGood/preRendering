function Albums({albums}) {
    return ( 
        <div>
            <h1>Albums</h1>

            <il>
                {
                    albums.map((album)=>(
                        <li key={album.id}>
                            <h3>
                              {album.id}.{album.title}
                            </h3>
                        </li>
                    ))
                }
            </il>
        </div>
     );
}

export default Albums;

export async function getServerSideProps(){
const res= await fetch("https://jsonplaceholder.typicode.com/albums");
const data= await res.json();

return {

    props:{albums:data},
}
}