const newsMunge = async (articles) => {};

export const getAllNews = async () => {
  const news = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API_KEY}`
  );
  const json = await news.json();

  return json.articles.map((article) => ({
    author: article.author,
    title: article.title,
    description: article.description,
    url: article.url,
  }));
};

export const searchNews = async (query) => {
  const search = await fetch(
    `https://newsapi.org/v2/everything?q=${query}&apiKey=${process.env.NEWS_API_KEY}`
  );
  const json = await search.json();

  return json.articles.map((article) => ({
    author: article.author,
    title: article.title,
    description: article.description,
    url: article.url,
  }));
};
