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
  }
  if (!isLoading && !topNews.length) {
    return <Styled.NewsNotFoundText>News not found</Styled.NewsNotFoundText>;
  }
  return (
    <Styled.NewsList>
      {fileteredNews.map(top => {
        return (
          <NewsItem
            key={top.title}
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
