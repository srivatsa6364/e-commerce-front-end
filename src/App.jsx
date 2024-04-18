import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './components/Cart/Checkout';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Order from './components/order/Order';

function App() {
  return (
    /* 
    {/ * 
    <>
      <Navbar />
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Checkout />} />
            {/ * Define other routes here if needed * /}
          </Routes>
        </Router>
      </div>
      <Footer />
    </> * /}
    */
   <div>
    <Navbar />

<Order />
<Footer />

   </div>
  
  );
}

export default App;
