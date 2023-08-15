import http from "./httpServices";

export async function registerGate(data) {
    const apiEndPoint = '/gates/register';
    const response = await http().post(apiEndPoint, data);
    return response;
}

export async function getGates() {
    const apiEndPoint = '/gates';
    const access_token = localStorage.getItem('access_token');

    // const response = await http.get(apiEndPoint, {
    //     headers: {
    //         'Authorization': `Bearer ${access_token}`,
    //         'Content-Type': 'application/json'
    //     }
    // });
    const response = await http().get(apiEndPoint);
    console.log('responce------------', response);
    return response;
}


export function saveGate({id,name}) {

    localStorage.setItem('gate_id', id)
    localStorage.setItem('gate_name', name)
  
  
  }
