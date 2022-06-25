import RelatedPosts from "../../components/post/RelatedPosts";
import PostExtras from "../../components/post/PostExtras";

import {getPost} from "../../utils/wordpress";

export default function PostPage({posts, post, categories}){

    if(!post || !post.title) return (
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
    );

    return (
        <div className="row">
            <div className="container-fluid rounded bg-white p-5">
                <h1 className="mb-4">{post.title.rendered}</h1>
                <PostExtras post={post} />
                <div className="card-text text-secondary mt-3" dangerouslySetInnerHTML={{__html: post.content.rendered}}></div>
            </div>
            <RelatedPosts posts={posts} categories={categories} />
        </div>
    )
}

export async function getServerSideProps({ query, res, params }) {
    const result = await getPost(params.post_id);

    return {
        props: {
            ...result,
        },
    }
}

