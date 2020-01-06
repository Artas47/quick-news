import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { showItemsFromStore } from '../../actions/index';
import * as Styled from './bookmark-header.styles';

const BookmarkHeader = () => {
  const dispatch = useDispatch();
  const store = useSelector(state => state.itemsStore.store);
  const onClickRender = () => {
    dispatch(showItemsFromStore(store));
    window.scrollTo(0, 0);
  };
  return (
    <Styled.BookmarkHeader onClick={onClickRender}>
      <Styled.BookmarkCount>{store.length}</Styled.BookmarkCount>
      <Styled.BookmarkHeaderSvg />
    </Styled.BookmarkHeader>
  );
};

export default BookmarkHeader;
