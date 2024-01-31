import Reset from "@/Components/Auth/Reset";
import { useUpdatePasswordMutation } from "@/features/auth/authApi";
import React from "react";

const ResetPassword = () => {
  const [updatePassword, { isLoading }] = useUpdatePasswordMutation();
  return (
    <div>
      <Reset updatePassword={updatePassword} isLoading={isLoading} />
    </div>
  );
};

export default ResetPassword;
