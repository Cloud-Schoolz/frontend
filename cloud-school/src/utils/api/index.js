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
    console.log(response);
    return response;
  } catch (err) {
    console.log(`Error: ${err.response.data.message}`);
    return err;
  }
};

// Handles POST Requests for register and login
// Resource can be: admin, students, volunteers
// Action can be: register, login
export const postResource = async (resource, action, credentials) => {
  try {
    const response = await axios.post(`${baseURL}/${resource}/${action}`, credentials);
    console.log(response);
    return response;
  } catch (err) {
    console.log(`Error: ${err.response.data.message}`);
    throw err;
  }
};

// If tasks, then we need axiosWithAuth for Post and Put
// If logging in, we need axiosWithAuth to pass the token
