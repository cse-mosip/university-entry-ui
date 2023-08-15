import http from "./httpServices";

// fingerprint authentication
export async function authenticateFingerprint(fingerprintData) {
    const apiEndPoint = "/admin/entrance-records";
    const response = await http.post(apiEndPoint, fingerprintData);
    return response
}

export default { authenticateFingerprint };
