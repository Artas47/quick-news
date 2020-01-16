import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as Styled from './news-item.styles';
import Spinner from '../spinner/spinner';

import Fade from '../fade-animation/fade';

export const NewsItem = props => {
  const ref = useRef();
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
    setImgHeight
  } = props;
  useEffect(() => {
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
  }, [setImgHeight, setImgWidth]);

  const shortenTitleTextForAlt = titleForAlt => {
    return `${titleForAlt.slice(0, 20)}...`;
  };

  return (
    <Styled.NewsItem background={isLoaded === 'error'} height={imgHeight} width={imgWidth}>
      <Styled.Bookmark isbookmarked={isBookmarked()} onClick={handleOnClick} />
      <a href={url} rel="noopener noreferrer" target="_blank">
        <Styled.ImageNotLoaded>{isLoaded === 'loading' ? <Spinner /> : ''}</Styled.ImageNotLoaded>
        <Fade in={isAnimationLoading}>
          <Styled.NewsItemImg
            visible={isLoaded === 'loaded'}
            onLoad={handleImageLoaded}
            onError={handleImageError}
            ref={ref}
            src={imgUrl}
            alt={shortenTitleTextForAlt(title)}
          />
        </Fade>
        <Styled.NewsItemTitle visible={isLoaded === 'error' || isLoaded === 'loaded'}>
          {title}
        </Styled.NewsItemTitle>
      </a>
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
