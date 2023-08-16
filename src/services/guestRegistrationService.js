import http from "./httpServices";

export async function registerGuest(data) {
    const apiEndPoint = '/entry/guest-register';
    const response = await http().post(apiEndPoint, data);
    return response;
}

export default { registerGuest };