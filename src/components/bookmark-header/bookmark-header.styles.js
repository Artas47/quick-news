import styled from 'styled-components';
import { ReactComponent as Bookmark } from '../../assets/bookmarks.svg';

export const BookmarkHeader = styled.div`
  position: absolute;
  top: 1rem;
  right: 15.2rem;
  cursor: pointer;
  user-select: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 900px) {
    left: 2rem;
    right: unset;
  }
  @media only screen and (max-width: 600px) {
    left: 0.5rem;
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
  top: 35%;
  left: 50%;
  transform: translate(-25%, -80%);
  font-size: 2rem;
  color: white;
  @media only screen and (max-width: 800px) {
    font-size: 1.5rem;
  }
  @media only screen and (max-width: 550px) {
    font-size: 1.2rem;
    left: 50%;
    top: 29%;
  }
`;

export const BookmarkSvgAndCountBox = styled.div`
  margin-bottom: 0.5rem;
  @media only screen and (max-width: 550px) {
    margin-bottom: 0.2rem;
  }
`;

export const ClearItems = styled.button`
  width: 8rem;
  border: none;
  border-radius: 1rem;
  height: 2rem;
  outline: none;
  background-color: ${props => props.theme.clearItemsButtonColor};
  color: #5e5e5e;
  @media only screen and (max-width: 800px) {
    font-size: 1rem;
  }
  @media only screen and (max-width: 550px) {
    width: 7rem;
    height: 1.7rem;
  }
`;
