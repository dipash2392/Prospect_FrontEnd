import http from "./httpService";
let apiEndpoint = "http://localhost:4000/api/prospectSets";

// API - Get Prospect Set
export async function getProspectSet() {
  const data = await http.get(`${apiEndpoint}/getProspectSet`);
  console.log("service", data);
  return data;
}

export async function insertProspectSet(prospectSet) {
  console.log("service", prospectSet);
  const data = await http.post(`${apiEndpoint}/insertProspectSet`, prospectSet);
  return data;
}

export async function editProspectSet(prospectSet) {
  console.log("service", prospectSet);
  const data = await http.post(`${apiEndpoint}/editProspectSet`, prospectSet);
  return data;
}
export async function deleteProspectSet(prospectSetID) {
  console.log("service", prospectSetID);
  const data = await http.post(`${apiEndpoint}/deleteProspectSet`, prospectSetID);
  return data;
}

export async function searchProspectSetByName(value) {
  const {
    prospectSet
  } = await http.get(`${apiEndpoint}/searchProspect/${value}`);
  console.log(prospectSet);
  return prospectSet;
}

export default {
  getProspectSet,
  insertProspectSet,
  editProspectSet,
  deleteProspectSet,
  searchProspectSetByName
};
