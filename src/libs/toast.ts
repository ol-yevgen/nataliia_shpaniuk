import "react-toastify/dist/ReactToastify.css";
import { toast } from 'react-toastify';

export const successToast = (message: string) => {
    toast.success(message, {
        position: toast.POSITION.BOTTOM_RIGHT,
    });
}

export const errorToast = (message: string) => {
    toast.error(message, {
        position: toast.POSITION.BOTTOM_RIGHT,
    });
}

export const infoToast = (message: string) => {
    toast.info(message, {
        position: toast.POSITION.BOTTOM_RIGHT,
    });
}