import axios from 'axios'



const axiosWithAuth = () => {
    const token = localStorage.getItem("token");
    return axios.create({
      headers: {
        Authorization: token,
      },
      baseURL:'https://cloud-schoolz.herokuapp.com/api'
    });

  };

export default axiosWithAuth;
