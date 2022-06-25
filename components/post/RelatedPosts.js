import Link from 'next/link';

export default function RelatedPosts({posts}) {
  if(!posts.length) return <></>;

  return (
    <div className="bg-white mt-5 p-5 rounded">
      <h3 className="mb-4">相關文章</h3>
      {posts.map(post => (
      <div className="card border-0 text-secondary" key={post.id}>
        <div className="row">
            <a className='border-bottom' href={`/posts/${post.slug}`}>
                <div className="col-md-12">
                    <div className="card-body px-0 py-1">
                        <div className="card-text" dangerouslySetInnerHTML={{__html: post.title.rendered}}></div>
                    </div>
                </div>
            </a>
        </div>
      </div>
    ))}
    </div>
  )
}
