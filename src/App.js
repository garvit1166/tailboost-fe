import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main/Main';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
