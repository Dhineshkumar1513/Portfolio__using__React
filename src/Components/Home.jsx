import React from 'react'
import Header from './Header'
import { Route, Routes,BrowserRouter } from "react-router-dom";
import Contact from './Contact';


function Home() {
  return (
    <div>
        <BrowserRouter>
     <Routes>
        <Route path='/' element={<Header></Header>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
     </Routes>
     </BrowserRouter>
    

    </div>
  )
}

export default Home
