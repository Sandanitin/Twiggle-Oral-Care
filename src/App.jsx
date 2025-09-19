import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Products from './components/Products'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import QueryForm from './components/QueryForm'

function App() {
  const [isQueryFormOpen, setIsQueryFormOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)

  const openQueryForm = (product = null) => {
    setSelectedProduct(product)
    setIsQueryFormOpen(true)
  }

  const closeQueryForm = () => {
    setIsQueryFormOpen(false)
    setSelectedProduct(null)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero onQueryClick={() => openQueryForm()} />
        <Products onQueryClick={openQueryForm} />
        <About />
        <Contact />
      </main>
      <Footer />
      
      {isQueryFormOpen && (
        <QueryForm 
          product={selectedProduct}
          onClose={closeQueryForm}
        />
      )}
    </div>
  )
}

export default App
