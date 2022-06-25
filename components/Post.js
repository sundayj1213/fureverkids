import PostExtras from "./post/PostExtras";

export default function Post({post, categories}) {
    const category = categories.find( i => i.id == post.categories[0]);

    if(!category) return <></>;
    
    return (
        <div className="card border-0 mx-3">
            <a className='border-bottom' href={`/${category.slug}/${post.id}`}>
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