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
import MarkAttendance from "./pages/Mark-attendance.jsx";
import AssignedEvents from "./pages/Assigned-events.jsx";
import GuideRegister from "./pages/Guide-register.jsx";
import GuideLogin from "./pages/Guide-login.jsx";
import ViewmyBookings from "./pages/View-my-bookings.jsx";
import CancelBooking from "./pages/Cancel-booking.jsx";
import Menu from "./pages/Menu.jsx";
import {createBrowserRouter} from "react-router-dom";
import {RouterProvider} from "react-router-dom";

export const router =createBrowserRouter([
  {
    path: "/", element: <Home />},
  {
    path: "/adminLogin",element: <AdminLogin /> },
  {
    path: "/addItem", element: <AddItem />},
  {
    path: "/editItem", element: <EditItem />},
  {
    path: "/deleteItem", element: <DeleteItem /> },
  {
    path: "/dashboard", element: <Dashboard />},
  {
    path: "/customerRegister", element: <CustomerRegister />},
  {
    path: "/customerLogin", element: <CustomerLogin />},
  {
    path: "/rentCycle", element: <RentCycle />},
  {
    path: "/viewMyBookings", element: <ViewmyBookings />},
  {
    path: "/cancelBooking", element: <CancelBooking />},
  {
    path: "/submitComplaint", element: <SubmitComplaint />},
  {
    path: "/guideRegister", element: <GuideRegister />},
  {
    path: "/guideLogin", element: <GuideLogin />},
  {
    path: "/markAttendance", element: <MarkAttendance /> },
  {
    path: "/assignedEvents", element: <AssignedEvents /> }
]);

function App() {
  return (
    <>
       {/* <Home /> 
      <AdminLogin /> 
      <AddItem />
      <EditItem />
      <DeleteItem />
       <Dashboard /> 
      <CustomerRegister />
       <CustomerLogin />
      <RentCycle />
       <ViewmyBookings />
       <CancelBooking />
      <SubmitComplaint />
      <GuideRegister />
      <GuideLogin />
      <MarkAttendance />
       <AssignedEvents />  */}
     <RouterProvider router={router} />

    </>
  );
}

export default App;