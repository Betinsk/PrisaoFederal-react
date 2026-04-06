import 'react-toastify/dist/ReactToastify.css';
import { authHeader } from '../auth/loginService'

const apiBaseUrl = process.env.REACT_APP_API_URL;


export async function uploadProfilePicture(personId, file) {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch(`${apiBaseUrl}files/upload/${personId}`, {
    method: "POST",
    headers: { ...authHeader() }, // 👈 sem Content-Type, o browser define automaticamente com boundary
    body: formData,
  });

  if (!response.ok) throw new Error("Erro ao fazer upload");
  return response.text();
}

export async function uploadMugshot(personId, file) {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch(`${apiBaseUrl}files/uploadMugshot/${personId}`, {
    method: "POST",
    headers: { ...authHeader() },
    body: formData,
  });

  if (!response.ok) throw new Error("Erro ao fazer upload");
  return response.text();
}