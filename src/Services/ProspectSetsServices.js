import http from "./httpService";
let apiEndpoint="http://localhost:4000/api/prospectSets"

// API - Get Prospect Set
export async function getProspectSet() {
    const data = await http.get(`${apiEndpoint}/getProspectSet`);
    console.log("service", data);
    return data;
  }

  export default {
    getProspectSet
  }