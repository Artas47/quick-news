import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import NewsItem from '../news-item/news-item';
import * as Styled from './news-list.styles';

export const News = () => {
  const topNews = useSelector(state => state.news.topNews);

  const fileteredNews = topNews.filter(news => {
    return news.urlToImage;
  });
  console.log(fileteredNews);
  return (
    <Styled.NewsList>
      {fileteredNews.map(top => {
        return (
          <NewsItem
            title={top.title}
            imgUrl={top.urlToImage}
            desc={top.description}
          />
        );
      })}
    </Styled.NewsList>
  );
};

export default News;
