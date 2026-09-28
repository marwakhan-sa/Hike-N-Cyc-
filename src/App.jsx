import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import AdminLogin from "./pages/Admin-login";
import AddItem from "./pages/Add-item";
import EditItem from "./pages/Edit-item";
import DeleteItem from "./pages/Delete-item";
import Dashboard  from "./pages/Dashboard.jsx";
import CustomerRegister from "./pages/Customer-register.jsx";
import RentCycle from "./pages/Rent-cycle";
import CustomerLogin from "./pages/Customer-login.jsx";
import SubmitComplaint from "./pages/Submit-complaint.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/add-item" element={<AddItem />} />
        <Route path="/admin/edit-item" element={<EditItem />} />
        <Route path="/admin/delete-item" element={<DeleteItem />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/customer/register" element={<CustomerRegister />} />
        <Route path="/customer/rent-cycle" element={<RentCycle />} />
        <Route path="/customer/login" element={<CustomerLogin />} />
        <Route path="/customer/submit-complaint" element={<SubmitComplaint />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;