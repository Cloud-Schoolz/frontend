// Instructions to use this hook:
// 1. From your component, import this hook and any api functions you might need
//   1a. To import every action along with the hook, use this:
//         import {useApi} from "./utils/hooks/useApi";
//         import {fetchResource, postResource, fetchTasks, postTask, putTask} from "./utils/api";
// 2. Call the hook by passing the api function and any necessary arguments
//   2a. Here are the HTTP Request options:
//        - fetchResource(resource)
//        - postResource(resource, action, credentials)
//        - fetchTasks(id)
//        - postTask(task)
//        - putTask(task, id)
//   2b. Some examples for using the hook:
//        - For getting all admins in the database:
//            const [allAdmins, getAllAdmins] = useApi(() => fetchResource("admin"));
//        - For registering a new admin:
//            const adminToRegister = {
//              name: "Example",
//              email: "example@test.com",
//              password: "password"
//            };
//            const [newAdmin, createNewAdmin] = useApi(() => postResource("admin", "register", adminToRegister));
//        - For logging in an admin:
//            const adminToLogIn = {
//              email: "hook@test.com",
//              password: "password"
//            };
//            const [logIn, executeLogIn] = useApi(() => postResource("admin", "login", adminToLogIn));
// 3. Once the hook is set up, you can call the setter function in your code and the variable (i.e. slice of state) will be set with the API response
// 4. Use the variable in your component as needed

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

