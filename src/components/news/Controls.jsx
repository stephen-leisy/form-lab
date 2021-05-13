import React from 'react';
import PropTypes from 'prop-types';

function Controls({ search, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="search-for-news">Search For News</label>
      <input
        id="search-for-news"
        type="text"
        value={search}
        onChange={onChange}
      />
      <button aria-label="find-news">Search</button>
    </form>
  );
}

Controls.propTypes = {
  search: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Controls;
