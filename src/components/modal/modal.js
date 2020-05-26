import React from 'react';
import ReactDOM from 'react-dom';
import * as Styled from './modal.styles';
import { Spinner } from '../spinner/spinner';

const Modal = ({ news, toggleModal }) => {
  const renderModalContent = () => {
    return (
      <Styled.Modal onClick={() => toggleModal()}>
        {news ? (
          <Styled.ModalContent onClick={e => e.stopPropagation()}>
            <Styled.ModalImage alt={news.title} src={news.urlToImage}>
              <Styled.ModalTitle>{news.title}</Styled.ModalTitle>
            </Styled.ModalImage>
            <Styled.ModalDescription>
              <Styled.ModalCancel onClick={() => toggleModal()} />
              <Styled.ModalRelease>
                Published at {news.publishedAt.slice(0, 10)}
              </Styled.ModalRelease>
              <Styled.ModalDetails>
                {/* {news.description}
                <br />
                <br /> */}
                {!news.content ? 'Content not found ...' : news.content}
              </Styled.ModalDetails>
              <Styled.ModalButton target="_blank" rel="noopener" href={news.url}>
                Read more
                <Styled.ArrowRight />
              </Styled.ModalButton>
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
