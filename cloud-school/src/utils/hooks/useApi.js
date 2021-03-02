// Instructions to use this hook:
// 1. From your component, import this hook and any api functions you might need
//   - for example,
//         import {useApi} from "./utils/hooks/useApi";
//         import {fetchAdmins, postAdmin} from "./utils/api";
// 2. Call the hook by passing the api function and set two variables: the response and the creator function
//   - for example, to get all admins,
//         const [adminsResponse, getAdmins] = useApi(() => fetchResource("admin"));
//   - for example, to register a new admin,
//         const [createAdminResponse, createAdmin] = useApi(async () => {
//           await postAdmin("admin", {
//             name: "clark",
//             email: "ck@superhuman.com",
//             password: "crypto"
//           });
//         });
//   - and you would use the same hook for logging in but with different variable names, for example,
//         const [logInAdminResponse, logInAdmin] = useApi(async () => {
//           await postAdmin("admin", "register", {
//             email: "ck@superhuman.com",
//             password: "crypto"
//           });
//         });


import { useState } from 'react';

export const useApi = apiFunction => {
  const [response, setResponse] = useState({
    data: null,
    isFetching: false,
    error: null,
    isSuccess: false
  })

  const fetchMethod = async () => {
    setResponse({
      data: null,
      isFetching: true,
      error: null,
      isSuccess: false
    });
    try {
      const apiData = await apiFunction();
      setResponse({
        data: apiData,
        isFetching: false,
        error: null,
        isSuccess: true
      });
    } catch (err) {
      setResponse({
        data: null,
        isFetching: false,
        error: err.message,
        isSuccess: false
      });
    }
  };

  return [response, fetchMethod];
}

