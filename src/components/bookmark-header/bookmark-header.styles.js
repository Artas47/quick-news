import styled from 'styled-components';
import { ReactComponent as Bookmark } from '../../assets/bookmarks.svg';

export const BookmarkHeader = styled.div`
  position: absolute;
  top: 2rem;
  right: 12rem;
  cursor: pointer;
  user-select: none;

  @media only screen and (max-width: 800px) {
    left: 2rem;
    right: unset;
  }
`;

export const BookmarkHeaderSvg = styled(Bookmark)`
  width: 5rem;
  height: 5rem;
  fill: #8a8a8a;
  @media only screen and (max-width: 800px) {
    width: 4rem;
    height: 4rem;
  }
  @media only screen and (max-width: 550px) {
    width: 3rem;
    height: 3rem;
  }
`;

export const BookmarkCount = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-25%, -80%);
  font-size: 2rem;
  color: white;
  @media only screen and (max-width: 800px) {
    font-size: 1.5rem;
  }
  @media only screen and (max-width: 550px) {
    left: 48%;
  }
`;
