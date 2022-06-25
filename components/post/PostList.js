import Post from "../Post"
import Pagination from "./Pagination"

export default function PostList({posts, query, pageCount}) {
  return (
    <>
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