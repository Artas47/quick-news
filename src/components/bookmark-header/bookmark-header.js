import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { showItemsFromStore, clearStoreItems } from '../../actions/index';
import * as Styled from './bookmark-header.styles';

const BookmarkHeader = () => {
  const dispatch = useDispatch();
  const store = useSelector(state => state.itemsStore.store);
  const onClickRender = () => {
    window.scrollTo(0, 0);
  };
  return (
    <Link to="/bookmarks">
      <Styled.BookmarkHeader>
        <Styled.BookmarkSvgAndCountBox onClick={onClickRender}>
          <Styled.BookmarkHeaderSvg />
          <Styled.BookmarkCount>{store.length}</Styled.BookmarkCount>
        </Styled.BookmarkSvgAndCountBox>
        <Styled.ClearItems onClick={() => dispatch(clearStoreItems())}>
          Clear items
        </Styled.ClearItems>
      </Styled.BookmarkHeader>
    </Link>
  );
};

export default BookmarkHeader;
