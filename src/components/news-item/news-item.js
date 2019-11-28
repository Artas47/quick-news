import React, { useRef, useState, useEffect } from 'react';
import * as Styled from './news-item.styles';

export const NewsItem = props => {
  const ref = useRef();
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    ref.current.addEventListener('load', getImgHeight);
  }, []);
  const getImgHeight = () => {
    const width = ref.current.naturalWidth;
    const height = ref.current.naturalHeight;
    console.log(ref.current.naturalHeight);
    setWidth(width);
    setHeight(height);
  };

  return (
    <Styled.NewsItem height={height} width={width}>
      <Styled.NewsItemImg ref={ref} src={props.imgUrl} />
      <Styled.NewsItemTitle>{props.title}</Styled.NewsItemTitle>
    </Styled.NewsItem>
  );
};

export default NewsItem;
