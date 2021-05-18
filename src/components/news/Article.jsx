import React from 'react';
import PropTypes from 'prop-types';

function Article({ author, title, description }) {
  return (
    <>
      TITLE: {title}
      BY: {author}
      DESCRIPTION: {description}
    </>
  );
}

Article.propTypes = {
  author: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default Article;
