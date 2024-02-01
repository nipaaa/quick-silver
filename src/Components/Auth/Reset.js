import Link from "next/link";
import AuthLayout from "../../Layout/AuthLayout";
import eyeOff from "../../assets/eye-off.png";
import eye from "../../assets/eye.png";
import { useState } from "react";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import { useUpdatePasswordMutation } from "@/features/auth/authApi";

const Reset = ({ updatePassword, isLoading }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConPassword, setShowConPassword] = useState(false);
  const { query, push } = useRouter();

  console.log(query?.user, "ggg");

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (!passwordRegex.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password must contain at least one uppercase, one lowercase, one special character, one digit and it should be at least 8 characters long.",
      });
      return;
    }

    if (password !== confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password doesn't matched!",
      });
      return;
    }

    try {
      const data = {
        id: query?.user,
        password,
      };
      const res = await updatePassword(data);

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
          title: "Successfull!",
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
          <Link href="/" className="signUn_btn text-[20px] ">
            Sign In
          </Link>
        </div>
        <form onSubmit={handleSubmit}>
          <h2 className="text-[32px]">Reset Password</h2>
          <p className=" subtitle">
            Enter a new Password and Confirm to reset your password
          </p>

          <div className="mb-4">
            <label htmlFor="password">
              <span>*</span> Password
            </label>
            <div className="relative">
              <input
                className="mb-2 p-5 h-[unset]"
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Enter your password"
              />
              <img
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  top: "50%",
                  transform: "translateY(-50%)",
                  right: "20px",
                  cursor: "pointer",
                }}
                className="absolute "
                src={showPassword ? eye.src : eyeOff.src}
                alt=""
              />
            </div>
          </div>
          <div className="mb-5">
            <label htmlFor="confirmPassword">
              <span>*</span> Confirm Password
            </label>
            <div className="relative">
              <input
                className="mb-2 p-5 h-[unset]"
                type={showConPassword ? "text" : "password"}
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm your password"
              />
              <img
                onClick={() => setShowConPassword(!showConPassword)}
                style={{
                  top: "50%",
                  transform: "translateY(-50%)",
                  right: "20px",
                  cursor: "pointer",
                }}
                className="absolute "
                src={showConPassword ? eye.src : eyeOff.src}
                alt=""
              />
            </div>
          </div>

          <button className="signIn_btn text-[20px]">Reset Password</button>
        </form>
        <div></div>
      </div>
    </AuthLayout>
  );
};

export default Reset;
