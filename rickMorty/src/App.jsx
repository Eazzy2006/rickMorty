import React, { useState, useEffect } from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import CharacterList from './components/CharacterList.jsx';
import LanguageSwitcher from './components/LanguageSwitcher.jsx';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});

const translations = {
  en: {
    name: 'Name',
    status: 'Status',
    species: 'Species',
    gender: 'Gender',
    origin: 'Origin',
    title: 'Rick and Morty Characters',
  },
  de: {
    name: 'Name',
    status: 'Status',
    species: 'Art',
    gender: 'Geschlecht',
    origin: 'Herkunft',
    title: 'Rick und Morty Charaktere', // German title
  },
};

function App() {
  const [language, setLanguage] = useState('en');


  useEffect(() => {
    document.title = translations[language].title;
  }, [language]);

  return (
    <ApolloProvider client={client}>
      <div className="app-container">
        <header>
          <h1>Rick and Morty Characters</h1>
        </header>

        <CharacterList language={language} labels={translations[language]} />

        <LanguageSwitcher setLanguage={setLanguage} />
      </div>
    </ApolloProvider>
  );
}

export default App;
