import Link from "next/link"
function Users({data}) {
    return ( <div>
        <ul>
        {
            data.map(user => <li key={user.id}><Link href={`/users/${user.id}`}>{user.name}</Link></li>)
        }
        </ul>
          </div> );
}

export default Users;

export async function getStaticProps(){
   const res = await fetch(`http://localhost:3001/users`);
   const data = await res.json();

   console.log("index page revalidate");

    return {

    props:{ data },
    revalidate:15,
   // redirect:{destination: "/"}

    }
}