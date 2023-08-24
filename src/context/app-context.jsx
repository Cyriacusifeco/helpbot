import { useReducer } from 'react';
import { useContext } from 'react';
import { createContext } from 'react';
import { reducer } from './reducer';

const AppContext = createContext();

const initialState = {
  admin: false,
  selectedService: {},
};

// eslint-disable-next-line react/prop-types
export const AppProvider = ({ children }) => {
  const [state] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state }}>{children}</AppContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => {
  return useContext(AppContext);
};
