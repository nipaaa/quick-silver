import AuthLayout from "@/Layout/AuthLayout";

import SignIn from "@/Components/Auth/SignIn";
import { useLoginMutation } from "@/features/auth/authApi";

export default function Home() {
  const [login, { isLoading }] = useLoginMutation();
  return (
    <AuthLayout>
      <SignIn login={login} isLoading={isLoading} />
    </AuthLayout>
  );
}
