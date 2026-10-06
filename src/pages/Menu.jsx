import {Link} from "react-router-dom";

function Menu(){
    return (
        <>
{/* <Link to="/menu">Menu</Link> */}
<Link to="/adminLogin">Admin-login</Link>
<Link to="/addItem">Add-item</Link>
<Link to="/editItem">Edit-item</Link>
<Link to="/deleteItem">Delete-item</Link>
<Link to="/dashboard">Dashboard</Link>
<Link to="/customerRegister">Customer-register</Link>
<Link to="/customerLogin">Customer-login</Link>
<Link to="/rentCycle">Rent-cycle</Link>
<Link to="/viewMyBookings">View-my-bookings</Link>
<Link to="/cancelBooking">Cancel-booking</Link>
<Link to="/submitComplaint">Submit-complaint</Link>
<Link to="/guideRegister">Guide-register</Link>
<Link to="/guideLogin">Guide-login</Link>
<Link to="/markAttendance">Mark-attendance</Link>
<Link to="/assignedEvents">Assigned-events</Link>
<Link to="/home">Home</Link>
        </>
    )
}
export default Menu;