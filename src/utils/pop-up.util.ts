import Swal, { SweetAlertIcon } from "sweetalert2";

export const createPopUpSimple = (message: string) => {
  Swal.fire(message);
};

export const createPopUpWithIcon = (
  title: string,
  text: string,
  icon: SweetAlertIcon
) => {
  Swal.fire({
    title,
    text,
    icon,
  });
};

export const createPopUpQuestion = async (
  title: string,
  icon: SweetAlertIcon = "warning"
) => {
  const response = await Swal.fire({
    title,
    icon,
    confirmButtonText: "Aceptar",
    showCancelButton: true,
    cancelButtonText: "Cancelar",
  });
  return response.isConfirmed;
};
