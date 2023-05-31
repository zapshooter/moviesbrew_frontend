import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { AuthContextProvider } from './context/AuthContext';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ContactPage from './components/Contactpage';
import { useState } from 'react';

function App() {
  const [isLogged, setIsLogged] = useState(false)
  const [isLoggedOut, setIsLoggedOut] = useState(false)
  const handleLogin = (loggedIn) => {
    setIsLogged(loggedIn)
  }
  const handleLogout = (loggedOut) => {
    setIsLogged(loggedOut)
  }
  return (
    <>

      <AuthContextProvider>
        <Navbar isLogin={isLogged} isShowing={handleLogout}/>
        <Routes>
        <Route path="/login" element={isLogged? <Home /> : <Login onLogin={handleLogin}/>}/>
        <Route path="/signup" element={isLogged? <Home /> : <Signup/>}/>
        <Route path="/" element={isLogged? <Home /> : <Login onLogin={handleLogin}/>}/> 
                    <Route path="/contactpage" element={isLogged? <ContactPage /> : <Login onLogin={handleLogin}/>} />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;

