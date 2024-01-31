import Link from "next/link";
import AuthLayout from "../../Layout/AuthLayout";
import { useRouter } from "next/router";
import Swal from "sweetalert2";

const Forgot = ({ sendResetPasswordLink, isLoading }) => {
  const { push } = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    try {
      const res = await sendResetPasswordLink({ email });
      if (res?.error?.error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${res?.error?.error}`,
        });
      }
      if (res?.error?.data?.message) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${res?.error?.data?.message}`,
        });
      }
      if (res?.data?.success) {
        push("/");
        Swal.fire({
          icon: "success",
          title: "Successful!",
          text: `${res?.data?.message}`,
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${error?.message}`,
      });
    }
  };
  return (
    <AuthLayout>
      <div className="signIn">
        <div className="flex flex-wrap justify-end gap-2 items-center">
          <p className="dont">Don’t have any account?</p>{" "}
          <Link href="/sign-up" className="signUn_btn text-[20px]">
            Sign Up
          </Link>
        </div>
        <form onSubmit={handleSubmit}>
          <h2 className="text-[32px]">Forgot Password </h2>
          <p className="fs-6 subtitle">
            Enter your email and a password reset will be sent to you
          </p>
          <div className="mb-2">
            <label className="fs-6" htmlFor="email">
              <span>*</span> Email Address
            </label>
            <input
              className="p-5 h-[unset]"
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email address"
              required
            />
          </div>
          {/* <p className="err_sms mb-5">Invalid Email Address</p> */}

          {/* <Link href="/reset-password"> */}
          <button className="signIn_btn text-[20px]" disabled={isLoading}>
            {isLoading ? "Loading..." : "Reset Password"}
          </button>
          {/* </Link> */}
        </form>
        <div></div>
      </div>
    </AuthLayout>
  );
};

export default Forgot;
