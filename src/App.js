import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import ProductList from './pages/ProductList';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/product/' element={<ProductList/>}/>
          <Route path='/product/:productId' element={<Products/>}/>
                  
            </Routes>
      </BrowserRouter>
     </QueryClientProvider>
    
  );
}

export default App;
