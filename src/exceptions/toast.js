import { toast } from "react-toastify";

export async function requestWithToast(promise, successMsg) {
  try {
    const response = await promise;
    toast.success(successMsg);
    return response;
  } catch (error) {
    let msg = "Unexpected error";

    try {
      // 👇 tenta parsear se vier JSON como string
      const parsed = JSON.parse(error.message);
      msg = parsed.message || parsed.error || "Unexpected error";
    } catch {
      // 👇 se não for JSON, usa direto
      msg = error?.message || error?.error || "Unexpected error";
    }

    toast.error(msg);
    throw error;
  }
}