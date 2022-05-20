
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import Header from "./components/navigation/Header"
import "./App.css"
 const App = () => {
   return (<BrowserRouter>
    <Header></Header>
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="" element={< />} />
      <Route path="invoices" element={< />} /> */}
    </Routes>
  </BrowserRouter>);
}
export default App;

