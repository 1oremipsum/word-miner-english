import React from 'react'
import AppRoutes from './routes/index';
import Header from './components/Layout/Header/Header';
import Footer from './components/Layout/Footer/Footer';

const App = () => {
  return (
    <div className='app-container'>
      <Header />
        <div className='content-container'>
          <AppRoutes />
        </div>
      <Footer />
    </div>
  )
}

export default App
