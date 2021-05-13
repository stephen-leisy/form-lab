const newsMunge = (articles) => {};

export const getAllNews = async () => {
  const news = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API_KEY}`
  );
  const json = await news.json();
  const articles = json.articles;

  return articles.map(({ author, title, description, url }) => ({
    author,
    title,
    description,
    url,
  }));
};

export const searchNews = async (query) => {
  const search = await fetch(
    `https://newsapi.org/v2/everything?q=${query}&apiKey=${process.env.NEWS_API_KEY}`
  );
  const json = await search.json();
  const articles = json.articles;

  return articles.map(({ author, title, description, url }) => ({
    author,
    title,
    description,
    url,
  }));
};
