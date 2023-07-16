import http from "./httpServices";

export async function registerGuest(data) {
    const apiEndPoint = '/entry/guestRegistration';
    const response = await http.post(apiEndPoint, data);
    return response;
}

export default { registerGuest };