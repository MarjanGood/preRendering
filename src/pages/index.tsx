import styles from '@/styles/Home.module.css'

export default function Home({posts}:any) {

  console.log(posts);
  return (
  <div className={styles.container}>
   <h3>Botostart Next.js Course</h3>
   <ul>
    {
      posts.map((post:any)=>(<li key={ post.id }>{ post.title }</li>))
    }
   </ul>
  </div>
  )
}

export async function getStaticProps() {

  // fetch data from api
  // const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  // const data = await res.json();
  // console.log(data);

     const res = await fetch("http://localhost:3001/posts");
     const data = await res.json();

  return {
    props:{
      posts: data,
    }
  };

}