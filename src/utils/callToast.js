import { toast } from 'react-toastify';

export const callToast = ({message, type = 'success', position = 'TOP_RIGHT'}) => {
    toast[type](message, {
        position: toast.POSITION[position],
    });
};

