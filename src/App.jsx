import AppRoutes from './routes/index';
import Layout from './components/Layout/Layout';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <div className='app-container'>
      <div className='content-container'>
        <BrowserRouter>
          <Layout>
            <AppRoutes />
          </Layout>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
