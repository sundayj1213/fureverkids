import Link from 'next/link';

export default function SearchResult({post}) {
  return (
    <div className="card border-0">
      <div className="row g-0">
          <Link href={`/posts/${post.slug}`}>
            <a className='border-bottom'>
              <div className="col-md-12">
                <div className="card-body px-0 py-2">
                  <div className="card-text" dangerouslySetInnerHTML={{__html: post.title.rendered}}></div>
                    <div className="text-muted d-flex align-items-center justify-content-end">
                      <div style={{marginLeft: '6px'}}>
                        {(Math.floor(Math.random() * 100) + 1)} Likes
                      </div>
                    </div>
                </div>
              </div>
            </a>
          </Link>
      </div>
    </div>
  )
}