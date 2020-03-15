import React from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router-dom';
import * as Styled from './modal.styles';
import { Spinner } from '../spinner/spinner';
// import Fade from '../fade-animation/fade';
// import RatingBox from '../rating-box/rating-box';
// import { useStateValue } from '../../context/state';

const Modal = ({ news }) => {
  const history = useHistory();
  const renderModalContent = () => {
    return (
      <Styled.Modal onClick={() => history.push('/')}>
        {news ? (
          <Styled.ModalContent onClick={e => e.stopPropagation()}>
            <Styled.ModalImage alt={news.title} src={news.urlToImage}>
              <Styled.ModalTitle>{news.title}</Styled.ModalTitle>
            </Styled.ModalImage>
            <Styled.ModalDescription>
              <Styled.ModalDetails>
                <Styled.ModalDetailsItem>{news.publishedAt}</Styled.ModalDetailsItem>
              </Styled.ModalDetails>
              <Styled.ModalPlot>
                {news.description}
                <br />
                <br />
                {news.content}
              </Styled.ModalPlot>
            </Styled.ModalDescription>
          </Styled.ModalContent>
        ) : (
          <Spinner />
        )}
      </Styled.Modal>
    );
  };
  return ReactDOM.createPortal(renderModalContent(), document.body);
};

export default Modal;
