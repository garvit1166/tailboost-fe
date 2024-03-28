import { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState('Guest');
  const [userloggedIn, setUserLoggedIn] = useState(false);
  return (
    <UserContext.Provider
      value={{ userName, setUserName, userloggedIn, setUserLoggedIn }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
export { UserProvider };
