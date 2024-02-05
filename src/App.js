import './App.css';
import SignUp from "./Componenst/SignUp"
import Login from "./Componenst/Login"
import Home from "./Componenst/Home"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import axios from 'axios'
import Create from './Componenst/Create';
import Edit from './Componenst/Edit';

function App() {
  axios.defaults.withCredentials=true
  return (

<BrowserRouter>
<Routes>

  <Route path="/" element={<SignUp/>} />
  <Route path="/login" element={<Login/>} />
  <Route path="/home" element={<Home/>} />
  <Route path="/create" element={<Create/>} />
  <Route path="/edit/:id" element={<Edit/>} />


</Routes>

</BrowserRouter>
  );
}

export default App;
