import PostList from "../../components/post/PostList";
import {getCategoriesSlug, getCategoryPost, getPost, getSlugs} from "../../utils/wordpress";

export default function CategoryPage(pageProps){
  return (
    <PostList {...pageProps}/>
  )
}

export async function getServerSideProps({ query, res, params }) {

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  );

  return {
    props: { 
      query: query,
      ...await getCategoryPost({
        page: query.page ?? 1,
        slug: params.slug
      })
    }
  }
}