import Forgot from "@/Components/Auth/Forgot";
import { useSendResetPasswordLinkMutation } from "@/features/auth/authApi";
import React from "react";

const ForgetPassword = () => {
  const [sendResetPasswordLink, { isLoading }] =
    useSendResetPasswordLinkMutation();
  return (
    <div>
      <Forgot
        sendResetPasswordLink={sendResetPasswordLink}
        isLoading={isLoading}
      />
    </div>
  );
};

export default ForgetPassword;
