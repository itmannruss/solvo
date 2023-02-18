import Header from './components/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Detail from './pages/Detail/Detail';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header isAuth={false} />

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="*" element="not found" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
