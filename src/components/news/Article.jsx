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
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Article;
