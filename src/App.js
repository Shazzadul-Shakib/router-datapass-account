import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import NotFound from './components/NotFound/NotFound';
import Profiles from './components/Profiles/Profiles';
import SignUp from './components/SignUp/SignUp';

function App() {
  const [userData, setUserData] = useState({});
  // console.log(userData);
  // console.log(userData);
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Header></Header>}></Route>
        <Route path='/profiles' element={<Profiles data={userData}></Profiles>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/signup' element={<SignUp state={{setUserData}}></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
