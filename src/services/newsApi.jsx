export const searchNews = async (query) => {
  let search;
  if (query) {
    search = await fetch(
      // eslint-disable-next-line max-len
      `https://newsapi.org/v2/everything?q=${query}&apiKey=${process.env.NEWS_API_KEY}`
    );
  } else {
    search = await fetch(
      // eslint-disable-next-line max-len
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API_KEY}`
    );
  }
  const { articles } = await search.json();

  return articles.map(({ author, title, description, url }) => ({
    author,
    title,
    description,
    url,
  }));
};
