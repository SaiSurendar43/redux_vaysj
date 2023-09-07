import React from 'react'
import Submits from './Submit/Submit'
import Table from './Table/Table'
import { BrowserRouter, Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
           <Route path = '/' element = {<Submits />}/>
           <Route path = '/table' element= {<Table/>}/>
        </Routes>
        </BrowserRouter>
  )
}

export default App