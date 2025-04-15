import { createContext, useState } from 'react';

const UiContext = createContext({
  Error: '',
  isLoading: false,
  setError: () => {},
  setIsLoading: () => {},
});

export function UiContextProvider(props) {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const context = {
    error: error,
    setError: setError,
    isLoading: isLoading,
    setIsLoading: setIsLoading,
  };

  return (
    <UiContext.Provider value={context}>{props.children}</UiContext.Provider>
  );
}

export default UiContext;
