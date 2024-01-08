import { useEffect } from 'react';

const useEscapeKey = (callback) => {
    useEffect(() => {
        const handleKeyDown = (event) => {
          if (event.key === "Escape") {
            callback(event);
          }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [callback]);
};

export default useEscapeKey;