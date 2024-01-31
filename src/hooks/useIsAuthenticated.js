import { useEffect, useState } from "react";

const useIsAuthenticated = () => {
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const getCookie = (name) => {
      const value = "; " + document.cookie;
      const parts = value.split("; " + name + "=");
      if (parts.length === 2) return parts.pop().split(";").shift();
    };

    const cookieValue = getCookie("quickSilverAuth");

    if (cookieValue) {
      setAuthChecked(true);
    } else {
      setAuthChecked(false);
    }
  }, []);
  return authChecked;
};

export default useIsAuthenticated;
