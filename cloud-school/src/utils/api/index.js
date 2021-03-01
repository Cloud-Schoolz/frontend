import axios from "axios"

const baseURL = 'https://cloud-schoolz.herokuapp.com/api';

export const fetchResource = async (resource) => {
  try {
    const admins = await axios.get(`${baseURL}/${resource}`);
    console.log(admins);
    return admins;
  } catch (err) {
    console.log(`Error: ${err.response.data.message}`);
    return err;
  }
};

export const postResource = async (resource, credentials) => {
  try {
    const registered = await axios.post(`${baseURL}/${resource}/register`, credentials);
    console.log(registered);
    return registered;
  } catch (err) {
    console.log(`Error: ${err.response.data.message}`);
    throw err;
  }
};

// export const getAdmins = () => {
//   axios.get(`${baseURL}/admin`)
//     .then(res => {
//       console.log(res);
//     })
//     .catch(err => {
//       console.log(err);
//     })
// }

// export const loginAdmin = async credentials => {
//   try {
//     return await axios.post(`${baseURL}/admin/register`, credentials);
//   } catch (err) {
//     throw err;
//   }
// };