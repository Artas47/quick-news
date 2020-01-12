import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeLanguage } from '../../actions/index';
import * as Styled from './language-choose.styles';
import { languages } from './languages';

const LanguageChoose = () => {
  const dispatch = useDispatch();
  const activeLanguage = useSelector(state => state.language.activeLanguage);
  const onClickChange = language => {
    dispatch(changeLanguage(language));
  };
  return (
    <Styled.LanguageChoose>
      {Object.keys(languages).map(lang => {
        return (
          <Styled.Language
            key={lang}
            onClick={() => onClickChange(languages[lang].language)}
            active={activeLanguage === languages[lang].language}
          >
            {languages[lang].language}
          </Styled.Language>
        );
      })}
    </Styled.LanguageChoose>
  );
};

export default LanguageChoose;
