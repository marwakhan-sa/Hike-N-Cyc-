import axios from "axios";

const API_URL = "http://localhost:5000";

// In-memory token storage 
let accessToken = null;
export const setAccessToken = (token) => {
  accessToken = token;
};
const api = axios.create({
  baseURL: API_URL,
});
// Automatically attach Authorization: Bearer <accessToken> to every request
api.interceptors.request.use((config) => {
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

export async function addCycleAxiosFunction(data) {
  console.log("Add-cycle function called..", data);
  return await api.post("/cycles", data);
}

export async function editCycleAxiosFunction(data) {
  console.log("Edit-cycle function called..", data);
  return await api.put(`/cycles/${data.cycleid}`, data);
}

export const getCycles = () => {
  return api.get("/cycles");
};

export async function deleteCycleAxiosFunction(data) {
  console.log("Delete-cycle function called..", data);
  return await api.delete(`/cycles/${data.selectcycle}`);
}

export async function registerCustomerAxiosFunction(data) {
  console.log("Customer register function called..", data);
  return await api.post("/customer/register", data);
}

export async function loginCustomerAxiosFunction(data) {
  console.log("Customer login function called..", data);
  const response = await api.post("/customer/login", data);
  if (response.data?.accessToken) {
    setAccessToken(response.data.accessToken);
  }
  return response;
}

export async function registerGuideAxiosFunction(data) {
  console.log("Guide register function called..", data);
  return await api.post("/guide/register", data);
}

export async function loginGuideAxiosFunction(data) {
  console.log("Guide login function called..", data);
  const response = await api.post("/guide/login", data);
  if (response.data?.accessToken) {
    setAccessToken(response.data.accessToken);
  }
  return response;
}

export async function loginAdminAxiosFunction(data) {
  const response = await api.post("/admin/login", data);
  if (response.data?.accessToken) {
    setAccessToken(response.data.accessToken);
  }
  return response;
}

export async function rentCycleAxiosFunction(data) {
  console.log("Rent-cycle function called..", data);
  return await api.post("/rent-cycle", data);
}

export async function markAttendanceAxiosFunction(data) {
  console.log("Mark-attendance function called..", data);
  return await api.post("/mark-attendance", data);
}

export async function cancelBookingAxiosFunction(data) {
  console.log("Cancel-booking function called..", data);
  return await api.post("/cancel-booking", data);
}

export async function submitComplaintAxiosFunction(data) {
  console.log("Submit-complaint function called..", data);
  return await api.post("/submit-complaint", data);
}
export const getRentals = () => {
  return api.get("/rent-cycle");
};

export const getComplaints = () => {
  return api.get("/submit-complaint");
};

export const getAttendance = () => {
  return api.get("/mark-attendance");
};