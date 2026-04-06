import 'react-toastify/dist/ReactToastify.css';
import { authHeader } from '../auth/loginService'
import { apiFetch } from '../api/api';

const apiBaseUrl = process.env.REACT_APP_API_URL;

export async function createPersonWithAddress(data) {
  const res = await apiFetch(`${apiBaseUrl}person`, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...authHeader() },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function getPersons() {
  const res = await apiFetch(`${apiBaseUrl}person`, {
    method: "GET",
    headers: { "Content-Type": "application/json", ...authHeader() },
  });
  return res.json();
}

export async function findById(id) {
  const res = await apiFetch(`${apiBaseUrl}person/${id}`, {
    method: "GET",
    headers: { "Content-Type": "application/json", ...authHeader() },
  });
  return res.json();
}

export async function updatePerson(id, person) {
  const res = await apiFetch(`${apiBaseUrl}person/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json", ...authHeader() },
    body: JSON.stringify(person),
  });
  return res.json();
}