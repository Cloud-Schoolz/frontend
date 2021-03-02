import axios from "axios"
import axiosWithAuth from "./../axiosWithAuth";

const baseURL = 'https://cloud-schoolz.herokuapp.com/api';

// Handles GET Requests
// Resource can be: admin, students, volunteers, tasks
export const fetchResource = async (resource) => {
  try {
    const response = (resource === "tasks")
      ? await axiosWithAuth().get(`${baseURL}/${resource}`)
      : await axios.get(`${baseURL}/${resource}`);
    return response.data;
  } catch (err) {
    console.log(`Error: ${err.response.data.message}`);
    throw err;
  }
};

// Handles POST Requests for register and login
// Resource can be: admin, students, volunteers
// Action can be: register, login
export const postResource = async (resource, action, credentials) => {
  try {
    const response = await axios.post(`${baseURL}/${resource}/${action}`, credentials);
    return response.data;
  } catch (err) {
    console.log(`Error: ${err.response.data.message}`);
    throw err;
  }
};

// Handles GET Requests for a volunteer's tasks
export const fetchTasks = async (id) => {
  try {
    const response = await axiosWithAuth().get(`${baseURL}/volunteers/tasks/${id}`);
    return response.data;
  } catch (err) {
    console.log(`Error: ${err.response.data.message}`);
    throw err;
  }
}
