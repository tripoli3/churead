import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignIn from './pages/SignIn';
import ChureadHome from './pages/ChureadHome';

function App() {
  return (
    <div className="bg-gray-900 h-full text-white overflow-auto">
      <div className="max-w-[572px] mx-auto h-full">
        <div className="h-full flex flex-col justify-center">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/chureadhome" element={<ChureadHome />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
