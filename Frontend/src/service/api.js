import axios from 'axios';

const API_URL = "http://localhost:5000";

export async function addCycleAxiosFunction(data) {
console.log("Add-cycle function called..", data);
return await axios.post("http://localhost:5000/cycles", data);
}

export async function editCycleAxiosFunction(data) {
console.log("Edit-cycle function called..", data);
return await axios.put(`${API_URL}/cycles/${data.cycleid}`, data);
}

export const getCycles = () => {
  return axios.get(`${API_URL}/cycles`);
};

export async function deleteCycleAxiosFunction(data) {
console.log("Delete-cycle function called..", data);
return await axios.delete(`${API_URL}/cycles/${data.selectcycle}`);
}

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