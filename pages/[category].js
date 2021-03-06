import PostList from "../components/post/PostList";
import {getCategories, getCategoryPost, getPosts} from "../utils/wordpress";

export default function CategoryPage(pageProps){
  return (
    <PostList {...pageProps}/>
  )
}

export async function getStaticPaths() {
  const elements = await getPosts();
 
  const paths = elements.categories.map((element) => {
    return {
      params: {
        category: element.slug,
      },
    };
  });
  const pages = Array.from({length: elements.pageCount}, (_, index) => {
    return {
      params: {
        category: (index + 1).toString()
      },
    };
  })

  return {
    paths: pages.concat(paths),
    fallback: false
  };
}
export async function getStaticProps({params }) {
  let result;

  // if not number
  if(!/^\d+$/.test(params.category)) {
    result = await getCategoryPost({
      page: 1,
      slug: params.category
    })
  } else {
    result = {
      page: params.category,
      ...await getPosts({
        page: params.category
      })
    }
  }

  return {
    props: { 
      ...result
    },
    revalidate: 10
  }
}