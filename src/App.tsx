import Welcome from "./pages/Welcome";
import LoginReg from "./pages/LoginReg";
import Productview from "./pages/Productview";
import Whishlist from "./pages/Whishlist";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import ContactUS from "./pages/ContactUS";
import Userdashboard from "./pages/Userdashboard";


// admin 
import AdminDashboard from "./pages/admin/Admindashboard";
import Adminlogin from "./pages/admin/Adminlogin";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cartlist from "./pages/Cartlist";
import Adminorderdetails from "./pages/admin/Adminorderdetails";

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" >

          <Route index element={<Welcome />} />
          <Route path="LoginReg" element={<LoginReg />} />
          <Route path="view/:id" element={<Productview />} />
          <Route path="Whishlist" element={<Whishlist />} />
          <Route path="Cart" element={<Cart />} />
          <Route path="Shop" element={<Shop />} />
          <Route path="ContactUS" element={<ContactUS />} />
          <Route path="Userdashboard" element={<Userdashboard />} />
          <Route path="Admin" element={< AdminDashboard/>} />
          <Route path="Adminlog" element={< Adminlogin/>} />
          <Route path="cartlist" element={< Cartlist/>} />
          <Route path="adminorder/:id" element={< Adminorderdetails/>} />


        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}


export default App
