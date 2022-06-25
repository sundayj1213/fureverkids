const BASE_URL = "https://moneymaker.monster/wp-json/wp/v2";

export async function getCategories(args) {
  try {
    const query = new URLSearchParams({
      _embed: '',
      page: 1,
      per_page: 100,
      exclude: '1',
      ...args
    }).toString();
    const postsRes = await fetch(BASE_URL + "/categories?" + query);
    return await postsRes.json();
  } catch (e) {
    return {};
  }
}

export async function getPosts(args) {
  try {
    const categories = await getCategories();
    const query = new URLSearchParams({
      _embed: '',
      page: 1,
      ...args
    }).toString();

    const postsRes = await fetch(BASE_URL + "/posts?" + query);

    if(!postsRes.ok) return {categories};

    const posts = await postsRes.json();
    const pageCount = parseInt(postsRes.headers.get('x-wp-totalpages'), 10);

    return { posts, pageCount, categories };
  } catch (e) {
    return {};
  }
}

export async function searchPosts(query) {
  try {
    const postsRes = await fetch(BASE_URL + "/posts?_embed&search=" + query);
    const posts = await postsRes.json();
    return { posts };
  } catch (e) {
    return {};
  }
}

export async function getPost(id) {
  try {
    const {posts: postArray} = await getPosts({id});
    const post = postArray && postArray.length > 0 ? postArray[0] : null;

    return {
      ...await getPosts(post ? {
        categories: post.categories.join(",")
      }: {}), 
      categories: await getCategories(),
      post
    };
  } catch (e) {
    return {post: {}, posts: {}};
  }
}

export async function getSlugs() {
  let elements = (await getPosts()).posts;
   
  const elementsIds = elements.map((element) => {
    return {
      params: {
        id: element.id,
      },
    };
  });
  return elementsIds;
}

export async function getCategoriesSlug() {
  let elements = await getCategories();
   
  const elementsIds = elements.map((element) => {
    return {
      params: {
        category: element.slug,
      },
    };
  });
  return elementsIds;
}


export async function getCategoryPost({page, slug}) {
  try {
    const result = await getCategories({
      slug
    });
    const category = result.length > 0 ? result[0] : {};
    
    return await getPosts({
      categories: category.id, 
      page
    });
  } catch (e) {
    return {post: {}, posts: {}};
  }
}