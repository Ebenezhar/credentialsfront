import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Dashboard';
import Login from './Login';
import Register from './Register';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path = '/' element={<Login/>}/>
        <Route path = '/register' element={<Register/>}/>
        <Route path = '/Dashboard' element={<Dashboard/>}/>
    </Routes>
</BrowserRouter>
  );
}

export default App;
