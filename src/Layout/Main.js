import useAuthCheck from "@/hooks/useAuthCheck";
import React from "react";

const Main = ({ children }) => {
  const authChecked = useAuthCheck();
  return !authChecked ? "" : <>{children}</>;
};

export default Main;
