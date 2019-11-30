import React from 'react';
import { useSelector } from 'react-redux';
import NewsItem from '../news-item/news-item';
import * as Styled from './news-list.styles';
import Spinner from '../spinner/spinner';

export const News = () => {
  const isLoading = useSelector(state => state.news.isLoading);
  const topNews = useSelector(state => state.news.topNews);

  const fileteredNews = topNews.filter(news => {
    return news.urlToImage;
  });

  if (isLoading) {
    return <Spinner />;
  } else if (!isLoading && !topNews.length) {
    return <div>News not found</div>;
  }
  return (
    <Styled.NewsList>
      {fileteredNews.map(top => {
        return (
          <NewsItem
            title={top.title}
            imgUrl={top.urlToImage}
            desc={top.description}
            url={top.url}
          />
        );
      })}
    </Styled.NewsList>
  );
};

export default News;
