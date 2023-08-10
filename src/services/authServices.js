import jwtDecode from 'jwt-decode';
import http from './httpServices';

export async function login(email, password) {

  const response = await http.post(
    apiEndpoint,
    {
      username: email,
      password: password
    }
  )
  const data = response.data
  return response
}

function loginWithJwt(access_token, refresh_token) {

  localStorage.setItem('access_token', access_token)
  localStorage.setItem('refresh_token', refresh_token)

}


export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem('access_token')
    const user = jwtDecode(jwt)
    return user
  } catch (ex) {
    return null
  }
}

export function logout() {
  localStorage.removeItem('access_token')
  localStorage.removeItem('refresh_token')
}

export function getJwt() {
  return localStorage.getItem('access_token')
}

export function getForcePassword() {
  return localStorage.getItem('force_change')
}

export function getUserRole() {
  const user = getCurrentUser()
  return user.authorities[0]
}



export default {
  login,
  loginWithJwt,
  getCurrentUser,
  logout,
  getJwt,
  getUserRole,
  setForcePassword,
  getForcePassword,
}