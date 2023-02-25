import styles from '@/styles/Home.module.css'

export default function Home({posts}) {

  console.log(posts);
  return (
  <div className={styles.container}>
   <h3>Botostart Next.js Course</h3>
   <ul>
    {
      posts.map((post)=>(<li key={ post.id }>{ post.title }</li>))
    }
   </ul>
   {/* <h1>{data} you can do it</h1>  */}
  </div>
  )
}

export async function getStaticProps() {
  //fetch data from api

  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  
 
  console.log(data);

  return {
    props:{
      posts:data,
    }
  };
}