import React from 'react';
import { useSelector } from 'react-redux';
import LazyLoad from 'react-lazyload';
import NewsItemContainer from '../news-item/news-item.container';
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
      {fileteredNews.map(newsItem => {
        return (
          <LazyLoad key={newsItem.title} height={200}>
            <NewsItemContainer
              wholeItem={newsItem}
              title={newsItem.title}
              imgUrl={newsItem.urlToImage}
              desc={newsItem.description}
              url={newsItem.url}
            />
          </LazyLoad>
        );
      })}
    </Styled.NewsList>
  );
};

export default News;
