// Instructions to use this hook:
// 1. From your component, import this hook and any api functions you might need
//   - for example,
//         import {useApi} from "./utils/hooks/useApi";
//         import {fetchResource, postResource} from "./utils/api";
// 2. Call the hook by passing the api function and set two variables: the response and the response setter function
//   - for example, to get all admins,
//         const [allAdmins, getAllAdmins] = useApi(() => fetchResource("admin"));
//   - for example, to register a new admin,
//         const [newAdmin, postNewAdmin] = useApi(() => {
//           postResource("admin", "register", {
//             name: "clark",
//             email: "ck@superhuman.com",
//             password: "crypto"
//           });
//         });
//   - and you would use the same hook for logging in but with different variable names, for example,
//         const [logInAdminResponse, logInAdmin] = useApi(() => {
//           postAdmin("admin", "register", {
//             email: "ck@superhuman.com",
//             password: "crypto"
//           });
//         });


import { useState } from 'react';

export function useApi(apiFunction) {
  const [response, setResponse] = useState({
    data: null,
    isFetching: false,
    error: null,
    isSuccess: false
  })

  const fetchMethod = () => {
    setResponse({
      data: null,
      isFetching: true,
      error: null,
      isSuccess: false
    });

    apiFunction()
      .then(res => {
        setResponse({
          data: res,
          isFetching: false,
          error: null,
          isSuccess: true
        })
      })
      .catch(err => {
        setResponse({
          data: null,
          isFetching: false,
          error: err.message,
          isSuccess: false
        })
      })
  };

  return [response, fetchMethod];
}

