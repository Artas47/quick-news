import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import LazyLoad from 'react-lazyload';
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
  if (!isLoading && !fileteredNews.length) {
    return (
      <div style={{ position: 'relative', minHeight: '100%' }}>
        <Styled.NewsNotFoundText>News not found</Styled.NewsNotFoundText>
      </div>
    );
  }
  return (
    <Styled.NewsList>
      {fileteredNews.map(top => {
        return (
          <LazyLoad key={top.title} height={200}>
            <NewsItem
              wholeItem={top}
              title={top.title}
              imgUrl={top.urlToImage}
              desc={top.description}
              url={top.url}
            />
          </LazyLoad>
        );
      })}
    </Styled.NewsList>
  );
};

export default News;
