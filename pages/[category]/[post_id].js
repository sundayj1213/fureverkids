import RelatedPosts from "../../components/post/RelatedPosts";
import PostExtras from "../../components/post/PostExtras";

import {getPost, getSlugs} from "../../utils/wordpress";

export default function PostPage({posts, post}){
    return (
        <div className="row">
            <div className="container-fluid rounded bg-white p-5">
                <h1 className="mb-4">{post.title.rendered}</h1>
                <PostExtras post={post} />
                <div className="card-text text-secondary mt-3" dangerouslySetInnerHTML={{__html: post.content.rendered}}></div>
            </div>
            <RelatedPosts posts={posts} />
        </div>
    )
}

export async function getServerSideProps({ query, res, params }) {
    const result = await getPost(params.post_id);

    res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=59'
    );

    return {
        props: {
            ...result,
        },
    }
}

