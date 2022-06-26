import Head from 'next/head'
import { getPosts } from '../utils/wordpress';

import Post from "../components/Post";
import Pagination from '../components/post/Pagination';
import PostList from '../components/post/PostList';


export default function Home(pageProps) {
  return (
    <>
      <Head>
        <title>FureverKids</title>
      </Head>
      <PostList {...pageProps}/>
    </>
  )
}

export async function getStaticProps() {     
  return {
    props: { 
      page: 1,
      ...await getPosts()
    },
    revalidate: 10, // In seconds
  }
}
