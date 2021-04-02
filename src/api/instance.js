import axios from "axios";

export const instance = axios.create({
  withCredentials: true,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json'
  }
});

instance.interceptors.response.use(function (response) {
  return response;
}, function (error) {

  if (error?.response?.status === 401) {
      console.log('%c401 ошибка', 'color: #3A4699; font-size: 16px;');
      const url = new URL(window.location);
      if(url.pathname.includes('admin') && localStorage.getItem('JWT')) {
          window.location.href = `${url.origin}/admin/login`;
      } else if(!url.pathname.includes('admin') && localStorage.getItem('JWT')) {
          window.location.href = `${url.origin}`;
      }
      try {localStorage.removeItem('JWT') } catch (e) { }
  }

    if (error?.response?.status === 503) {
        window.location.href = '/'
    }

  return Promise.reject(error);
});


instance.interceptors.request.use(function (config) {

  let token = localStorage.getItem('JWT');

  if (token) config.headers.authorization = `Bearer ${token}`;

  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});