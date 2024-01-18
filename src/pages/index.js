import AuthLayout from "@/Layout/AuthLayout";

import SignIn from "@/Components/Auth/SignIn";

export default function Home() {
  return (
    <AuthLayout>
     <SignIn/>
    </AuthLayout>
  );
}
