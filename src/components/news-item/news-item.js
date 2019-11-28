import React, { useRef, useState, useEffect } from 'react';
import * as Styled from './news-item.styles';

export const NewsItem = props => {
  const ref = useRef();
  const [width, setWidth] = useState(0);
  useEffect(() => {
    ref.current.addEventListener('load', getImgHeight);
  }, []);
  const getImgHeight = () => {
    const width = ref.current.naturalWidth;
    setWidth(width);
  };

  return (
    <Styled.NewsItem width={width}>
      <Styled.NewsItemImg ref={ref} src={props.imgUrl} />
      <Styled.NewsItemTitle>{props.title}</Styled.NewsItemTitle>
    </Styled.NewsItem>
  );
};

export default NewsItem;
