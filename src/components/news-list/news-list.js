import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LazyLoad from 'react-lazyload';
import { useParams } from 'react-router-dom';
import NewsItemContainer from '../news-item/news-item.container';
import * as Styled from './news-list.styles';
import { fetchNewsStart, fetchSearchNewsStart } from '../../actions/index';
import Spinner from '../spinner/spinner';

export const News = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.news.isLoading);
  const topNews = useSelector(state => state.news.topNews);
  const areNewsOneSized = useSelector(state => state.settings.oneSizedNews);
  const activeLanguage = useSelector(state => state.language.activeLanguage);
  const activeSort = useSelector(state => state.activeSort.activeSort);
  const params = useParams();
  useEffect(() => {
    if (params.searchTerm && params.sortBy) {
      dispatch(fetchSearchNewsStart(params.searchTerm, params.sortBy, activeLanguage));
      return;
    }
    if (params.searchTerm) {
      dispatch(fetchSearchNewsStart(params.searchTerm, 'popularity', activeLanguage));
      return;
    }
    dispatch(
      fetchNewsStart(
        `?country=${activeLanguage === 'en' ? 'us' : 'pl'}&category=${
          params.category ? params.category : 'general'
        }&`,
        activeSort
      )
    );
  }, [areNewsOneSized, activeLanguage, dispatch, params]);

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
