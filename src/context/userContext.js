import { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
    
    return (
        <UserContext.Provider value={{ theme, toggleTheme }}>
          {children}
        </UserContext.Provider>
      );
};

export default function useTheme() {
    const context = useContext(UserContext);
    if (context === undefined) {
      throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
  }
export { UserProvider };