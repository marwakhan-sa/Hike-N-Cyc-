import { createBrowserRouter } from "react-router-dom";

// Landing + logins/registers
import Home from "./pages/Home";
import AdminLogin from "./pages/Admin-login";
import GuideLogin from "./pages/Guide-login";
import GuideRegister from "./pages/Guide-register";
import CustomerLogin from "./pages/Customer-login";
import CustomerRegister from "./pages/Customer-register";

// Admin dashboard + admin components
import AdminDashboard from "./pages/Admin-dashboard";
import AddItem from "./pages/Add-item";
import EditItem from "./pages/Edit-item";
import DeleteItem from "./pages/Delete-item";

// Guide components
import AssignedEvents from "./pages/Assigned-events";
import MarkAttendance from "./pages/Mark-attendance";

// Customer components
import RentCycle from "./pages/Rent-cycle";
import ViewMyBookings from "./pages/View-my-bookings";
import CancelBooking from "./pages/Cancel-booking";
import SubmitComplaint from "./pages/Submit-complaint";

export const router = createBrowserRouter([
  // Landing page
  { path: "/", element: <Home /> },

  // Logins / registers (linked from the landing page)
  { path: "/admin-login", element: <AdminLogin /> },
  { path: "/guide-login", element: <GuideLogin /> },
  { path: "/guide-register", element: <GuideRegister /> },
  { path: "/customer-login", element: <CustomerLogin /> },
  { path: "/customer-register", element: <CustomerRegister /> },

  // Admin dashboard
  { path: "/admin-dashboard", element: <AdminDashboard /> },

  // Admin components
  { path: "/add-item", element: <AddItem /> },
  { path: "/edit-item", element: <EditItem /> },
  { path: "/delete-item", element: <DeleteItem /> },

  // Guide components
  { path: "/assigned-events", element: <AssignedEvents /> },
  { path: "/mark-attendance", element: <MarkAttendance /> },

  // Customer components
  { path: "/rent-cycle", element: <RentCycle /> },
  { path: "/view-my-bookings", element: <ViewMyBookings /> },
  { path: "/cancel-booking", element: <CancelBooking /> },
  { path: "/submit-complaint", element: <SubmitComplaint /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;