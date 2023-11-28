import React from 'react';
import DiamondsList from './Components/DiamondsList';
import AjoutDiamonds from './Components/AjoutDiamonds';
import EditArticle from './Components/EditArticle';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Menu from './Components/Menu';
import  ListArticlesCard from './Components/ClientSide/ListArticlesCard';
import { CartProvider } from "use-shopping-cart";
import Cart from "./Components/ClientSide/Cart";
import PdfCart from "./Components/ClientSide/PdfCart ";
import Loginclient from './Components/authentificationClient/loginClient';
import Signup from "./Components/authentificationClient/Signup";





function App() {
  return(
    <CartProvider>
   
    <Router>
      
     <Menu/>
      <Routes>
      
        
        <Route path='/AjoutDiamonds' element={<AjoutDiamonds/>}/>
        <Route path='EditArticle/:id' element={<EditArticle/>}/>
        <Route path='/diamonds' element={<DiamondsList/>}/>
        <Route path='/' element={< ListArticlesCard/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/pdfCart' element={<PdfCart/>}/>
        <Route path="/loginclient" exact element={<Loginclient/>}/>
        <Route path="/signup" exact element={<Signup/>}/>

        

      </Routes>
     
      </Router>
      </CartProvider> 


  );

}


export default App

