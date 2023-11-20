import React from 'react';

export const ContextPortfolio = React.createContext({});

export const ContextProvider = ({ children }) => {
  const [navigation, setNavigation] = React.useState(false);
  const [audio, setAudio] = React.useState(false);

  const [title, setTitle] = React.useState('');

  return (
    <ContextPortfolio.Provider
      value={{ navigation, setNavigation, audio, setAudio, title, setTitle }}>
      {children}
    </ContextPortfolio.Provider>
  );
};
