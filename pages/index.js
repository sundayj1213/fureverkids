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

export async function getServerSideProps(context) {
  // The query params are set on `context.query`
  const { query, res } = context
  // res.setHeader(
  //   'Cache-Control',
  //   'public, s-maxage=10, stale-while-revalidate=59'
  // );

  return {
    props: { 
      query: query,
      ...await getPosts({
        ...query
      })
    }
  }
}
