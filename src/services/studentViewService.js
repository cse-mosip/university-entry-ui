import http from "./httpServices";

export async function getStudentRecords(){
    const apiEndPoint = '/info/my/entrance-records'
    const response = await http().get(apiEndPoint);
    return response.data;
}