// src/App.tsx

import { useState } from 'react';
import LoginPage from "./components/LoginPage";
import WelcomePage from './components/WelcomePage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  const handleLogin = (email: string) => {
    setUserEmail(email);
    setIsLoggedIn(true);
  };

  return (
    <>
      {isLoggedIn ? (
        <WelcomePage email={userEmail} />
      ) : (
        <LoginPage onLoginSuccess={handleLogin} />
      )}
    </>
  );
}

export default App;