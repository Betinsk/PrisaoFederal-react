import { toast } from "react-toastify";

export async function requestWithToast(promise, successMsg) {
  try {
    const response = await promise;

    toast.success(successMsg);

    return response;
  } catch (error) {
    const msg = error.message || "Unexpected error";

    toast.error(msg);

    throw error;
  }
}