import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { clearStoreItems } from '../../actions/index';
import * as Styled from './bookmark-header.styles';

const BookmarkHeader = () => {
  const dispatch = useDispatch();
  const store = useSelector(state => state.itemsStore.store);
  const history = useHistory();
  const onClickRender = () => {
    history.push('/bookmarks');
    window.scrollTo(0, 0);
  };
  return (
    <Styled.BookmarkHeader>
      <Styled.BookmarkSvgAndCountBox onClick={onClickRender}>
        <Styled.BookmarkHeaderSvg />
        <Styled.BookmarkCount>{store.length}</Styled.BookmarkCount>
      </Styled.BookmarkSvgAndCountBox>
      <Styled.ClearItems onClick={() => dispatch(clearStoreItems())}>Clear items</Styled.ClearItems>
    </Styled.BookmarkHeader>
  );
};

export default BookmarkHeader;
