import React, { Component } from 'react';
import ArticleList from '../components/news/ArticleList';
import { getAllNews, searchNews } from '../services/newsApi';
import Controls from '../components/news/Controls';

export default class NewsSearch extends Component {
  state = {
    articleList: [],
    articleSearch: '',
    loading: true,
  };

  async componentDidMount() {
    const articleList = await getAllNews();
    this.setState({ articleList, loading: false });
  }

  handleSearchChange = ({ target }) => {
    this.setState({ articleSearch: target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const articleList = await searchNews(this.state.articleSearch);
    this.setState({ articleList, loading: false });
  };

  render() {
    const { articleList, loading, articleSearch } = this.state;

    if (loading) return <h2>Loading...</h2>;
    return (
      <>
        <Controls
          search={articleSearch}
          onChange={this.handleSearchChange}
          onSubmit={this.handleSubmit}
        />
        <ArticleList articles={articleList} />
      </>
    );
  }
}
