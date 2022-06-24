
//to use Image with an external url, add some config on next.config.js
//for more info, check out these docs https://nextjs.org/docs/basic-features/image-optimization

import PostExtras from "./post/PostExtras";

export default function Post({post}) {
    return (
        <div className="card border-0">
            <div className="row g-0">
                <a href={`/posts/${post.slug}`} className='border-bottom'>
                    <div className="col-md-12">
                        <div className="card-body mx-4 px-0 py-4">
                            <div className="card-text" dangerouslySetInnerHTML={{__html: post.excerpt.rendered}}></div>
                            <PostExtras post={post} />
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )

}