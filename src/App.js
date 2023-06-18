import { Routes, Route } from "react-router-dom";
import Home from './Home';
import BookListing from './Book-Listing';
import BookDetails from './Book-Details';
import Checkout from './Checkout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/BookListing" element={<BookListing/>}></Route>
        <Route path="/BookDetails" element={<BookDetails/>}></Route>
        <Route path="/Checkout" element={<Checkout/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
