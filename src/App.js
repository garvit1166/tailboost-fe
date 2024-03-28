import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main/Main';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/login';
import Signup from './pages/Signup/signup';
import { UserProvider } from './context/userContext';
function App() {
  return (
    <UserProvider>
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path="/dashboard" element={<Main />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
    </UserProvider>
  );
}

export default App;
