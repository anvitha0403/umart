
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import Header from "./components/navigation/Header"
import ProductCard from "./templates/ProductCard";
import "./App.css"
 const App = () => {
   return (
     <BrowserRouter>
       <Header></Header>
       <div className="demo">
         <ProductCard></ProductCard>
         <ProductCard></ProductCard>
         <ProductCard></ProductCard>
         <ProductCard></ProductCard>
         <ProductCard></ProductCard>
         <ProductCard></ProductCard>
         <ProductCard></ProductCard>
       </div>

       <Routes>
         <Route path="/" element={<Home />} />
         {/* <Route path="" element={< />} />
      <Route path="invoices" element={< />} /> */}
       </Routes>
     </BrowserRouter>
   );
}
export default App;

