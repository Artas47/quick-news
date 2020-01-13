import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { addItemToStore, deleteItemFromStore } from '../../actions/index';
import NewsItem from './news-item';

const NewsItemContainer = props => {
  const dispatch = useDispatch();
  const [imgWidth, setImgWidth] = useState(0);
  const [imgHeight, setImgHeight] = useState(0);
  const [isLoaded, setIsLoaded] = useState('loading');
  const [isAnimationLoading, setIsAnimationLoading] = useState(false);
  const { url, imgUrl, title, wholeItem } = props;

  const handleImageLoaded = () => {
    setIsLoaded('loaded');
    setIsAnimationLoading(true);
  };

  const handleImageError = () => {
    setIsLoaded('error');
  };
  const store = useSelector(state => state.itemsStore.store);
  const isMarked = () => {
    return store.find(item => item.title === wholeItem.title);
  };
  const handleOnClick = () => {
    if (isMarked()) {
      dispatch(deleteItemFromStore(wholeItem));
    } else {
      dispatch(addItemToStore(wholeItem));
    }
  };
  return (
    <NewsItem
      isMarked={isMarked}
      imgWidth={imgWidth}
      imgHeight={imgHeight}
      isLoaded={isLoaded}
      isAnimationLoading={isAnimationLoading}
      url={url}
      imgUrl={imgUrl}
      title={title}
      handleImageLoaded={handleImageLoaded}
      handleImageError={handleImageError}
      handleOnClick={handleOnClick}
      setImgWidth={setImgWidth}
      setImgHeight={setImgHeight}
    />
  );
};

export default NewsItemContainer;

NewsItemContainer.propTypes = {
  url: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  wholeItem: PropTypes.shape({
    title: PropTypes.string.isRequired,
    urlToImage: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }).isRequired
};
