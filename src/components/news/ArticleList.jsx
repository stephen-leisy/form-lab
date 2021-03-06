import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

function ArticleList({ articles }) {
  return (
    <ul aria-label="news-articles">
      {articles.map((article) => (
        <li key={article.url} data-testid="article-li">
          <Article {...article} />
        </li>
      ))}
    </ul>
  );
}

ArticleList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
    })
  ),
};

export default ArticleList;
