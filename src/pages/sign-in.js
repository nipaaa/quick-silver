import SignIn from "@/Components/Auth/SignIn";
import AuthLayout from "@/Layout/AuthLayout";
import { useLoginMutation } from "@/features/auth/authApi";
import React from "react";

const SignInPage = () => {
  const [login, { isLoading }] = useLoginMutation();
  return (
    <AuthLayout>
      <SignIn login={login} isLoading={isLoading} />
    </AuthLayout>
  );
};

export default SignInPage;
