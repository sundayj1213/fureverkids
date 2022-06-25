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
        {posts.length ? 
          (
            <div className="rounded bg-white">
              {posts.map(post => (
                <Post post={post} key={post.id}/>
              ))}
            </div>
          ): (
            <div className='bg-white min-vh-100 d-flex justify-content-center align-items-center '>
              <div className='d-flex justify-content-center align-items-center'>
                <h1 style={{
                  borderRight: '1px solid rgba(0, 0, 0,.3)',
                  padding: '10px',
                  fontSize: '24px'
                }}>404</h1>
                <h2 style={{
                  fontSize: '14px',
                  fontWeight: 'normal',
                  padding: '10px',
                }}>
                  Nothing to display
                </h2>
              </div>
            </div>
        )}
      <Pagination posts={posts} pageCount={pageCount} query={query}/>
    </>
  )
}

export async function getServerSideProps(context) {
  // The query params are set on `context.query`
  const { query, res } = context
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  );
  if(query.category) {
    query.categories = query.category;
  }
  return {
    props: { 
      query: query,
      ...await getPosts({
        ...query
      })
    }
  }
}
