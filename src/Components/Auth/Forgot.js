
import Link from "next/link";
import AuthLayout from "../../Layout/AuthLayout";

const Forgot = () => {
  return (
    <AuthLayout>
      <div className="signIn">
        <div className="flex justify-end gap-2 items-center">
          <p className="dont">Don’t have any account?</p>{" "}
          <Link href="/sign-up" className="signUn_btn text-[20px]">
            Sign Up
          </Link>
        </div>
        <form>
          <h2 className="text-[32px]">Forgot Password </h2>
          <p className="fs-6 subtitle">
            Enter your email and a password reset will be sent to you
          </p>
          <div className="mb-2">
            <label className="fs-6" htmlFor="email">
              <span>*</span> Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email address"
            />
          </div>
          <p className="err_sms mb-5">Invalid Email Address</p>

          <Link href="/reset-password">
            <button className="signIn_btn fs-5">Reset Password</button>
          </Link>
        </form>
        <div></div>
      </div>
    </AuthLayout>
  );
};

export default Forgot;
