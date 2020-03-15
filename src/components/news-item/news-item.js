import React, { useRef, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import * as Styled from './news-item.styles';
import Spinner from '../spinner/spinner';
import Fade from '../fade-animation/fade';
import Modal from '../modal/modal';
import ReactDOM from 'react-dom';

export const NewsItem = props => {
  const ref = useRef();
  const areNewsOneSized = useSelector(state => state.settings.oneSizedNews.value);
  const [showModal, setShowModal] = useState(false);
  const {
    isLoaded,
    imgHeight,
    imgWidth,
    isBookmarked,
    handleOnClick,
    url,
    isAnimationLoading,
    handleImageError,
    handleImageLoaded,
    imgUrl,
    title,
    setImgWidth,
    setImgHeight,
    wholeItem
  } = props;
  useEffect(() => {
    if (areNewsOneSized) {
      return;
    }
    const getImgHeightAndWidth = () => {
      try {
        const width = ref.current.naturalWidth;
        const height = ref.current.naturalHeight;
        setImgWidth(width);
        setImgHeight(height);
      } catch (error) {
        console.log(error);
      }
    };
    ref.current.addEventListener('load', getImgHeightAndWidth);
  }, [setImgWidth, setImgHeight, areNewsOneSized]);

  // const shortenTitleTextForAlt = titleForAlt => {
  //   return `${titleForAlt.slice(0, 20)}...`;
  // };

  const onClickHandler = () => {
    setShowModal(!showModal);
  };

  return (
    <Styled.NewsItem
      onClick={onClickHandler}
      background={isLoaded === 'error'}
      height={imgHeight}
      width={imgWidth}
    >
      {showModal ? <Modal news={wholeItem} /> : ''}
      <Styled.Bookmark isbookmarked={isBookmarked()} onClick={handleOnClick} />

      <Styled.ImageNotLoaded>{isLoaded === 'loading' ? <Spinner /> : ''}</Styled.ImageNotLoaded>
      <Fade in={isAnimationLoading}>
        <Styled.NewsItemImg
          visible={isLoaded === 'loaded'}
          onLoad={handleImageLoaded}
          onError={handleImageError}
          ref={ref}
          src={imgUrl}
        />
      </Fade>
      <Styled.NewsItemTitle visible={isLoaded === 'error' || isLoaded === 'loaded'}>
        {title}
      </Styled.NewsItemTitle>
    </Styled.NewsItem>
  );
};

export default NewsItem;

NewsItem.propTypes = {
  imgHeight: PropTypes.number.isRequired,
  imgWidth: PropTypes.number.isRequired,
  isBookmarked: PropTypes.func.isRequired,
  handleOnClick: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
  isAnimationLoading: PropTypes.bool.isRequired,
  handleImageError: PropTypes.func.isRequired,
  handleImageLoaded: PropTypes.func.isRequired,
  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  setImgWidth: PropTypes.func.isRequired,
  setImgHeight: PropTypes.func.isRequired,
  isLoaded: PropTypes.string.isRequired
};
