import React, { useState} from 'react'
import Home from './sections/Home'
import ProductDetails from './pages/ProductDetails'
import Nav from './components/Nav'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  const [searchMeal, setSearchMeal] = useState('');

  const handleChange = (e) => {
    setSearchMeal(e.target.value);
  }

  return (
    <Router>
      <Nav 
        handleChange={handleChange}
        searchMeal={searchMeal}
      />
      <Routes>
        <Route path='/' element={<Home searchMeal={searchMeal}/>} />
        <Route path='/product/:idMeal' element={<ProductDetails />} />
      </Routes>
    </Router>
  )
}

export default App