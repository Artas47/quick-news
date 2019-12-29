import React, { useRef, useState } from 'react';
import * as Styled from './news-item.styles';
import Spinner from '../spinner/spinner';
import Fade from '../fade-animation/fade';

export const NewsItem = props => {
  const ref = useRef();
  const [imgWidth, setImgWidth] = useState(0);
  const [imgHeight, setImgHeight] = useState(0);
  const [isLoaded, setIsLoaded] = useState('loading');
  const [isAnimationLoading, setIsAnimationLoading] = useState(false);
  const { url, imgUrl, title } = props;
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
  // useEffect(() => {
  //   ref.current.addEventListener('load', getImgHeightAndWidth);
  // }, []);

  const handleImageLoaded = () => {
    getImgHeightAndWidth();
    setIsLoaded('loaded');
    setIsAnimationLoading(true);
  };

  const handleImageError = () => {
    setIsLoaded('error');
  };

  return (
    <Styled.NewsItem
      href={url}
      background={isLoaded === 'error'}
      target="_blank"
      height={imgHeight}
      width={imgWidth}
    >
      <Styled.ImageNotLoaded>{isLoaded === 'loading' ? <Spinner /> : ''}</Styled.ImageNotLoaded>
      <Fade in={isAnimationLoading}>
        <Styled.NewsItemImg
          visibility={isLoaded === 'loaded'}
          onLoad={() => handleImageLoaded()}
          onError={() => handleImageError()}
          ref={ref}
          src={imgUrl}
          alt={title}
        />
      </Fade>
      <Styled.NewsItemTitle visibility={isLoaded === 'error' || isLoaded === 'loaded'}>
        {title}
      </Styled.NewsItemTitle>
    </Styled.NewsItem>
  );
};

export default NewsItem;
