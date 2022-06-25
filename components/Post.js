import PostExtras from "./post/PostExtras";

export default function Post({post}) {
    return (
        <div className="card border-0 mx-3">
            <a className='border-bottom' href={`/posts/${post.slug}`}>
                <div className="col-md-12">
                    <div className="card-body mx-4 px-0 py-4">
                        <div className="card-text" dangerouslySetInnerHTML={{__html: post.title.rendered}}></div>
                        <PostExtras post={post} />
                    </div>
                </div>
            </a>
        </div>
    )

}