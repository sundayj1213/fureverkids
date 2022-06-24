import Head from 'next/head'
import { getPosts } from '../utils/wordpress';

import Post from "../components/Post";
import Pagination from '../components/post/Pagination';


export default function Home({posts, pageCount, query}) {
  return (
    <>
      <Head>
        <title>FureverKids</title>
      </Head>
      <div className="rounded">
        {posts.length ? posts.map(post => (
          <Post post={post} key={post.id}/>
        )): (<div className='min-vh-100'>No posts found</div>)}
      </div>
      <Pagination posts={posts} pageCount={pageCount} query={query}/>
    </>
  )

}

export async function getServerSideProps(context) {
  // The query params are set on `context.query`
  const { query } = context
  return {
    props: { 
      query: query,
      ...await getPosts({
        page: query.page ?? 1
      })
    }
  }
}
