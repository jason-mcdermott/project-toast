import React from 'react';
import useKeydown from "../../hooks/useKeydown";
export const ToastContext = React.createContext();

function ToastProvider({children}) {
  const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];
  const [toasts, setToasts] = React.useState([])
  const [message, setMessage] = React.useState("");
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);

  const handleEscape = React.useCallback(() => {
    setToasts([]);
  }, []);

  useKeydown("Escape", handleEscape);
  
  function handleCreateToast(event) {
    event.preventDefault();

    const nextToasts = [
      ...toasts,
      {
        id: crypto.randomUUID(),
        message,
        variant,
      },
    ];

    setToasts(nextToasts);
    setMessage("");
    setVariant(VARIANT_OPTIONS[0]);
  }

  function handleDismiss(id) {
    const nextToasts = toasts.filter((toast) => {
      return toast.id !== id;
    });

    setToasts(nextToasts);
  }

  return (
    <ToastContext.Provider value={{toasts, message, setMessage, variant, setVariant, handleCreateToast, handleDismiss}}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
