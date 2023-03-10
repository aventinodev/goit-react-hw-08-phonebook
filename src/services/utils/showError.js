import { toast } from 'react-toastify';
export const showError = () => {
  toast.error('Somthing wrong. Try again', {
    theme: 'colored',
    position: 'top-center',
  });
};
