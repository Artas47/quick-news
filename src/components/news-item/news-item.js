import React, { useRef, useState, useEffect } from 'react';
import * as Styled from './news-item.styles';

export const NewsItem = props => {
  const ref = useRef();
  const [imgWidth, setImgWidth] = useState(0);
  const [imgHeight, setImgHeight] = useState(0);
  const { url, imgUrl, title } = props;
  const getImgHeightAndWidth = () => {
    try {
      const width = ref.current.naturalWidth;
      const height = ref.current.naturalHeight;
      setImgWidth(width);
      setImgHeight(height);
    } catch (error) {
      console.log('refs', error);
    }
  };
  useEffect(() => {
    ref.current.addEventListener('load', getImgHeightAndWidth);
  }, []);

  return (
    <Styled.NewsItem href={url} target="_blank" height={imgHeight} width={imgWidth}>
      <Styled.NewsItemImg ref={ref} src={imgUrl} alt={title} />
      <Styled.NewsItemTitle>{title}</Styled.NewsItemTitle>
    </Styled.NewsItem>
  );
};

export default NewsItem;
