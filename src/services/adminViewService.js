import http from "./httpServices";

export async function getDetails() {
  const apiEndPoint = "/info/entrance-records";
  const response = await http().get(apiEndPoint);
  return response;
}



export default { getDetails };
