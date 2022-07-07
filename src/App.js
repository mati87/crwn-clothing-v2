import Home from "./routes/home/home.component";
import { Routes, Route, } from 'react-router-dom';
import Navigation from "./routes/navigation/navigation.component";
import Signin from "./routes/sign-in/sign-in.component";


const Shop = () =>{
  return<h1>I am the shop page</h1>;
}

const App = () => {
  return (
  <Routes>
    <Route path= '/' element={<Navigation/>}>
      <Route index element={<Home />}></Route>
      <Route path='/shop' element={<Shop />}></Route>
      <Route path='/Sign-in' element={<Signin/>}></Route>

    </Route>          
  </Routes>
   ) ;
};

export default App;
