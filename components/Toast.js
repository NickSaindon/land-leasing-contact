import { useToastDispatchContext } from '../context/ToastContext';

export default function Toast({ type, message }) {
  const dispatch = useToastDispatchContext();
  return (
    <>
      {type == 'success' && (
        <div className="alert alert-success d-flex align-items-center" role="alert">
            <i className="bi bi-check-circle"></i>
            <div>
                {message}
            </div>
        </div>
      )}
      {type == 'error' && (
        <div className="alert alert-danger d-flex align-items-center" role="alert">
            <i className="bi bi-x-circle"></i>
            <div>
                {message}
            </div>
        </div>
      )}
    </>
  );
}