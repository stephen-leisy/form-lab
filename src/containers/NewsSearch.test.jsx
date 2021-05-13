import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NewsSearch from './NewsSearch';
import dotenv from 'dotenv';
dotenv.config();

describe('test news api endpoint', () => {
  it('returns a list of news stories', async () => {
    render(<NewsSearch />);

    screen.getByText('Loading...');
    const ul = await screen.findByRole('list', { name: 'news-articles' });
    expect(ul).not.toBeEmptyDOMElement();

    const input = await screen.findByLabelText('Search For News');
    userEvent.type(input, 'Portland Trail Blazers pound pacers skid');

    const button = await screen.findByRole('button', { name: 'find-news' });
    userEvent.click(button);

    return waitFor(() => {
      const news = screen.getAllByText('Portland Trail Blazers', {
        exact: false,
      });
      expect(news).toHaveLength(1);
      expect(news).toMatchSnapshot();
    });
  });
});
