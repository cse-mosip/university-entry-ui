import http from "./httpServices";

export async function registerGate(data) {
    const apiEndPoint = '/entry/guestRegistration';
    const response = await http.post(apiEndPoint, data);
    return response;
}