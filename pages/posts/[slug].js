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

//hey Next, these are the possible slugs
export async function getStaticPaths() {

    const paths = await getSlugs("posts");
  
    return {
        paths,
        //this option below renders in the server (at request time) pages that were not rendered at build time
        //e.g when a new blogpost is added to the app
        fallback: 'blocking'
    }
  
  }
  
//access the router, get the id, and get the data for that post

export async function getStaticProps({ params }) {

    const result = await getPost(params.slug);
    
    return {
        props: {
            ...result,
        },
        revalidate: 10, // In seconds
    }
}

