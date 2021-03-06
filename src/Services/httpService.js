import axios from "axios";
import { toast } from "react-toastify";
axios.interceptors.response.use(null, error => {
  console.log(error);
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    console.log(error);
    toast.error("An unexpected error occurrred.");
  }

  return Promise.reject(error);
});


async function getFetch(apiEndpoint) {
  let response = await fetch(`${apiEndpoint}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  });
  response = await response.json();
  if(response.status === 401){
    toast.error(response.message);
  }else{
    return response;
  }
}

async function deleteFetch(apiEndpoint) {
  let response = await fetch(`${apiEndpoint}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    }
  });
  response = await response.json();
  if(response.status === 401){
    toast.error(response.message);
    window.location.href = "/";
  }else{
    return response;
  }
}

async function postFetch(apiEndpoint, data) {

  let response = await fetch(`${apiEndpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  });
  response = await response.json();
  if(response.status === 401){
    toast.error(response.message);
    window.location.href = "/";
  }else{
    return response;
  }
}

async function putFetch(apiEndpoint,data) {
  let response = await fetch(`${apiEndpoint}`, {
    method: 'PUT', // Method itself
    headers: {
      'Content-type': 'application/json;', // Indicates the content 
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(data) // We send data in JSON format
  });
  response = await response.json();
  if (response.status === 401) {
    toast.error(response.message);
    window.location.href = "/";
  } else {
    return response;
  }
}

export default {
  get: getFetch,
  post: postFetch,
  put: putFetch,
  delete: deleteFetch,
};
