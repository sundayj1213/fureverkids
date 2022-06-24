import Link from 'next/link';

export default function SearchResult({post}) {
  return (
    <div className="card border-0">
      <div className="row g-0">
          <a className='border-bottom' href={`/posts/${post.slug}`}>
            <div className="col-md-12">
              <div className="card-body px-0 py-2">
                <div className="card-text" dangerouslySetInnerHTML={{__html: post.title.rendered}}></div>
              </div>
            </div>
          </a>
      </div>
    </div>
  )
}