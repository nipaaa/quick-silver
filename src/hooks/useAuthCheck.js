import { userLoggedIn } from "@/features/auth/authSlice";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const useAuthCheck = () => {
  const dispatch = useDispatch();
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const getCookie = (name) => {
      const value = "; " + document.cookie;
      const parts = value.split("; " + name + "=");
      if (parts.length === 2) return parts.pop().split(";").shift();
    };

    const cookieValue = getCookie("quickSilverAuth");

    // console.log(cookieValue, "ddd");

    if (cookieValue) {
      const urlDecodedString = decodeURIComponent(cookieValue);
      //   console.log(urlDecodedString, "ddd");
      const userDataFromCookies = JSON.parse(urlDecodedString);
      console.log(userDataFromCookies, "ddd");
      if (userDataFromCookies?.accessToken && userDataFromCookies?.user) {
        dispatch(
          userLoggedIn({
            accessToken: userDataFromCookies.accessToken,
            user: userDataFromCookies.user,
          })
        );
      }
    }
    setAuthChecked(true);
  }, [dispatch]);
  return authChecked;
};

export default useAuthCheck;
