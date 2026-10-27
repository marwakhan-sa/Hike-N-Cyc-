import axios from 'axios';

const API_URL = "http://localhost:5000";

export async function addCycleAxiosFunction(data) {
console.log("Add-cycle function called..", data);
return await axios.post("http://localhost:5000/add-cycle", data);
}

export async function editCycleAxiosFunction(data) {
  const { selectcycle, ...cycleData } = data;
  return await axios.put( `${API_URL}/add-cycle/${selectcycle}`,cycleData);
}

// export async function getCyclesAxiosFunction() {
// console.log("Get cycles function called..");
// return await axios.get(`${API_URL}/add-cycle`);
// }

// export async function deleteCycleAxiosFunction(data) {
// console.log("Delete-cycle function called..", data);
// return await axios.delete(`${API_URL}/add-cycle/${data.selectcycle}`, {
//   data: {
//     reasonforremoval: data.reasonforremoval,
//     additionalnotes: data.additionalnotes,
//     quantityavailable: data.quantityavailable,
//   },
// });
// }

export async function registerCustomerAxiosFunction(data) {
console.log("Customer register function called..", data);
return await axios.post(`${API_URL}/customer/register`, data);
}

export async function loginCustomerAxiosFunction(data) {
console.log("Customer login function called..", data);
return await axios.post(`${API_URL}/customer/login`, data);
}

export async function registerGuideAxiosFunction(data) {
console.log("Guide register function called..", data);
return await axios.post(`${API_URL}/guide/register`, data);
}

export async function loginGuideAxiosFunction(data) {
console.log("Guide login function called..", data);
return await axios.post(`${API_URL}/guide/login`, data);
}

// export async function loginAdminAxiosFunction(data) {
// console.log("Admin login function called..", data);
// return await axios.post(`${API_URL}/admin/login`, data);
// }

export async function rentCycleAxiosFunction(data) {
console.log("Rent-cycle function called..", data);
return await axios.post(`${API_URL}/rent-cycle`, data);
}

export async function markAttendanceAxiosFunction(data) {
console.log("Mark-attendance function called..", data);
return await axios.post(`${API_URL}/mark-attendance`, data);
}

export async function cancelBookingAxiosFunction(data) {
console.log("Cancel-booking function called..", data);
return await axios.post(`${API_URL}/cancel-booking`, data);
}

export async function submitComplaintAxiosFunction(data) {
console.log("Submit-complaint function called..", data);
return await axios.post(`${API_URL}/submit-complaint`, data);
}