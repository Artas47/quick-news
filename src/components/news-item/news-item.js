import React, { useRef, useEffect } from 'react';
import * as Styled from './news-item.styles';
import Spinner from '../spinner/spinner';

import Fade from '../fade-animation/fade';

export const NewsItem = props => {
  const ref = useRef();
  const {
    isLoaded,
    imgHeight,
    imgWidth,
    isMarked,
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

  return (
    <Styled.NewsItem background={isLoaded === 'error'} height={imgHeight} width={imgWidth}>
      <Styled.Bookmark
        /*idk why isMarked has to be lowercase*/ ismarked={isMarked()}
        onClick={handleOnClick}
      />
      <a href={url} rel="noopener noreferrer" target="_blank">
        <Styled.ImageNotLoaded>{isLoaded === 'loading' ? <Spinner /> : ''}</Styled.ImageNotLoaded>
        <Fade in={isAnimationLoading}>
          <Styled.NewsItemImg
            visible={isLoaded === 'loaded'}
            onLoad={handleImageLoaded}
            onError={handleImageError}
            ref={ref}
            src={imgUrl}
            alt={title}
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
