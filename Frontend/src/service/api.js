import axios from 'axios';

// const API_URL = "http://localhost:5000";

export async function addCycleAxiosFunction(data) {
console.log("Add-cycle function called..", data);
return await axios.post("http://localhost:5000/add-cycle", data);
}

