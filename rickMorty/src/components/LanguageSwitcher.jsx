
import React from 'react';

const LanguageSwitcher = ({ setLanguage }) => {
  return (
    <footer>
      <button onClick={() => setLanguage('en')}>English</button>
      <button onClick={() => setLanguage('de')}>Deutsch</button>
    </footer>
  );
};

export default LanguageSwitcher;
