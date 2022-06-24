const BASE_URL = "https://moneymaker.monster/wp-json/wp/v2";

export async function getPosts(args) {
  try {
    const query = new URLSearchParams({
      _embed: '',
      page: 1,
      ...args
    }).toString()
    const postsRes = await fetch(BASE_URL + "/posts?" + query);
    const posts = await postsRes.json();
    return posts;
  } catch (e) {
    console.log(e);
    return {};
  }
}

export async function getPost(slug) {
  try {
    const postArray = await getPosts({slug})
    const post = postArray.length > 0 ? postArray[0] : null;

    return {
      posts: await getPosts(post ? {
        categories: post.categories.join(",")
      }: {}), 
      post
    };
  } catch (e) {
    console.log(e);
    return {post: {}, posts: {}};
  }
}

export async function getSlugs(type) {
  let elements = [];
  switch (type) {
    case "posts":
      elements = await getPosts();
      break;
  }
  const elementsIds = elements.map((element) => {
    return {
      params: {
        slug: element.slug,
      },
    };
  });
  return elementsIds;
}

