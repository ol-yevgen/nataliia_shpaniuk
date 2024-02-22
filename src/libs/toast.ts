import "react-toastify/dist/ReactToastify.css";
import { toast } from 'react-toastify';

export const successToast = (message: string) => {
    toast.success(message, {
        position: "bottom-right",
    });
}

export const errorToast = (message: string) => {
    toast.error(message, {
        position: "bottom-right",
    });
}

export const infoToast = (message: string) => {
    toast.info(message, {
        position: "bottom-right",
    });
}