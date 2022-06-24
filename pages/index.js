import Head from 'next/head'
import { getPosts } from '../utils/wordpress';

import Post from "../components/Post";


export default function Home({posts}) {
  return (
    <>
      <Head>
        <title>FureverKids</title>
      </Head>
      {posts.map(post => (
        <Post post={post} key={post.id}/>
      ))}
    </>
  )

}

export async function getStaticProps({ params }) {
  return {
    props: {
     posts: await getPosts(),
    },
    revalidate: 10, // In seconds
  }
}
