import http from "./httpServices";

export async function getDetails() {
  const apiEndPoint = "/admin/entrance-records";
  const response = await http.get(apiEndPoint);
  return response;
}

export default { getDetails };
