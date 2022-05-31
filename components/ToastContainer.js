import Toast from '../components/Toast';
import { useToastStateContext } from '../context/ToastContext';

export default function ToastContainer() {
  const { toasts } = useToastStateContext();
  return (
    <div className="toast-container">
    {toasts && toasts.map((toast) => (
            <Toast
                id={toast.id}
                key={toast.id}
                type={toast.type}
                message={toast.message}
            />
        ))}
    </div>
  );
}