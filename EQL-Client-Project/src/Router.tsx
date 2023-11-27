import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Category from './pages/Category/Category';
import Home from './pages/Home/Home';
import Order from './pages/Order/Order';
import Product from './pages/Product/Product';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/order/:productId" element={<Order />} />
        <Route path="/*" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
