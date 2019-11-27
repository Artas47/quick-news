import React from 'react';
import { useSelector } from 'react-redux';

export const News = () => {
  const topNews = useSelector(state => state.news.topNews);
  return (
    <div>
      {topNews.map(top => {
        return <li>{top.title}</li>;
      })}
    </div>
  );
};

export default News;
