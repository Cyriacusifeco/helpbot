import { useReducer } from 'react';
import { useContext } from 'react';
import { createContext } from 'react';

const initialState = {
  user: null,
  isAuthenticated: false,
};
const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload.user,
        isAuthenticated: true,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

// Create a custom provider component to wrap your app
// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

// Create custom hooks for using your context
<<<<<<< HEAD
// eslint-disable-next-line react-refresh/only-export-components
=======
>>>>>>> 94e56a626a050d6b90cf00c79ebc6454f7138216
export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
};
