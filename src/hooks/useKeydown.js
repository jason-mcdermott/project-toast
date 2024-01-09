import React from "react";

const useKeydown = (key, callback) => {
  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === key) {
        callback(event);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [key, callback]);
};

export default useKeydown;
