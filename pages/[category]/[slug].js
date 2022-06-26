import RelatedPosts from "../../components/post/RelatedPosts";
import PostExtras from "../../components/post/PostExtras";

import {getCategories, getCategoriesSlug, getCategoryPost, getPost} from "../../utils/wordpress";
import PostList from "../../components/post/PostList";

export default function PostPage({posts, post, categories, slug, pageCount}){

  if(/^\d+$/.test(slug)) {
    return <PostList posts={posts} page={slug} pageCount={pageCount} categories={categories} />
  }

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

export async function getStaticPaths() {
  const pages = [];
  const elements = await getCategoriesSlug();
  const categories = await getCategories();
  
  categories.map(async (element) => {
    const result = await getCategoryPost({
      page: 1,
      slug: element.slug
    });
    Array.from({length: result.pageCount}, (_, index) => {
      pages.push({
        params: {
          category: element.slug,
          slug: (index + 1).toString()
        },
      });
    });
  });

  return {
    paths: pages.concat(elements),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  let result;
   
  // if not number
  if(!/^\d+$/.test(params.slug)) {
    result = {
      page: params.category,
      ...await getPost(params.slug)
    }
  } else {    
    result = await getCategoryPost({
      page: params.slug,
      slug: params.category
    })
  }    

  return {
    props: {
      slug: params.slug,
      ...result,
    },
  }
}

