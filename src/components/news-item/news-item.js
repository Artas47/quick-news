import React, { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Styled from './news-item.styles';
import Spinner from '../spinner/spinner';
import { addItemToStore, deleteItemFromStore } from '../../actions/index';
import Fade from '../fade-animation/fade';

export const NewsItem = props => {
  const ref = useRef();
  const dispatch = useDispatch();
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
  useEffect(() => {
    ref.current.addEventListener('load', getImgHeightAndWidth);
  }, []);

  const handleImageLoaded = () => {
    setIsLoaded('loaded');
    setIsAnimationLoading(true);
  };

  const handleImageError = () => {
    setIsLoaded('error');
  };

  const store = useSelector(state => state.itemsStore.store);

  const isMarked = () => {
    return store.find(item => item.title === props.wholeItem.title);
  };

  return (
    <Styled.NewsItem background={isLoaded === 'error'} height={imgHeight} width={imgWidth}>
      <Styled.Bookmark
        isMarked={isMarked()}
        onClick={() => {
          if (isMarked()) {
            dispatch(deleteItemFromStore(props.wholeItem));
          } else {
            dispatch(addItemToStore(props.wholeItem));
          }
        }}
      />
      <a href={url} rel="noopener noreferrer" target="_blank">
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
      </a>
    </Styled.NewsItem>
  );
};

export default NewsItem;
