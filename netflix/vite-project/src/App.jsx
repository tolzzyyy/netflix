import React from 'react'
import NavBar from './components/NavBar.jsx'
import Body from './components/Body.jsx'
//   import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import SignUp from './components/SignUp'
// import SignUp2 from './components/SignUp2'
// import SignIn from './components/SignIn'
// import SignUp1 from './components/SignUp1'

const App = () => {
  return (
    <div>
      {/* <NavBar/> */}
      <Body/>
{/* 
    <BrowserRouter>
     <Routes> */}
     {/* <Route path='/signup2' element={<SignUp2/>}/> */}
    {/* <Route path='/body' element={<Body/>}/> */}
    {/* <Route path='/signup' element={<SignUp/>}/>
    <Route path='/signup1' element={<SignUp1/>}/>
    <Route path='/signin' exact element={<SignIn/>}/>
      </Routes>
      </BrowserRouter> */}
      
    </div>
  )
}

export default App