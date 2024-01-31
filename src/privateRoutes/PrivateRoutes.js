import useIsAuthenticated from "@/hooks/useIsAuthenticated";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const PrivateRoutes = ({ children }) => {
  const router = useRouter();

  const isAuthenticated = useIsAuthenticated();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/");
    }
  }, []);

  return isAuthenticated ? children : null;
};

export default PrivateRoutes;
