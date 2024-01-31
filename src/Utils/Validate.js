import { useParams } from "next/navigation";
import logo from "../assets/logo-black.png";
import {
  useResendEmailVerifictionCodeMutation,
  useVerifyEmailWithOtpMutation,
} from "@/features/auth/authApi";
import { useRouter } from "next/router";
import Swal from "sweetalert2";

const Validate = ({ title, veriation, email }) => {
  const { push } = useRouter();

  const [verifyEmailWithOtp, { isLoading }] = useVerifyEmailWithOtpMutation();
  const [resendEmailVerifictionCode, { isLoading: Resending }] =
    useResendEmailVerifictionCodeMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const otp = e.target.otp.value;

    try {
      const data = {
        email,
        otp,
      };

      const res = await verifyEmailWithOtp(data);

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
        push("/dashboard");

        Swal.fire({
          icon: "success",
          title: "Successfull!",
          text: `${res?.data?.message}`,
          showConfirmButton: false,
          timer: 1500,
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

  const handleResendEmail = async (e) => {
    try {
      const res = await resendEmailVerifictionCode({ email });

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
        // push("/dashboard");

        Swal.fire({
          icon: "success",
          title: "Successfull!",
          text: `${res?.data?.message}`,
          // showConfirmButton: false,
          // timer: 1500,
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
    <div className="validate">
      <img src={logo.src} alt="" />
      <div className="valid_box text-center">
        <form
          onSubmit={handleSubmit}
          style={{ maxWidth: "560px", width: "100%", margin: "auto" }}
        >
          <h2 className="text-[32px] font-bold">Validate {title}</h2>
          <p className="font-normal">A unique 6 digit code has been sent</p>
          <input
            type="number"
            className="mb-6"
            name="otp"
            placeholder="Enter 6 digit code sent to your email address"
            required
            min="1"
          />
          {/* <p className="err_sms text-start mb-4">
            Invalid Code - You have 2 more attempts left before your account is
            locked!
          </p> */}
          <div className="flex items-center  flex-wrap lg:flex-nowrap gap-3 gap-lg-5">
            <button className=" p-3 w-full" type="submit">
              Validate
            </button>
            <button
              className="p-3 w-full"
              type="button"
              onClick={handleResendEmail}
              disabled={Resending}
            >
              {Resending ? "Resending..." : `Resend ${veriation}`}
            </button>
          </div>
        </form>
      </div>
      <div></div>
    </div>
  );
};

export default Validate;
