import logo from "../assets/logo-black.png";

const Validate = ({ title, veriation }) => {
  return (
    <div className="validate">
      <img src={logo.src} alt="" />
      <div className="valid_box text-center">
        <div style={{ maxWidth: "560px", width: "100%", margin: "auto" }}>
          <h2 className="text-[32px] font-bold">Validate {title}</h2>
          <p className="font-normal">A unique 6 digit code has been sent</p>
          <input
            type="number"
            className="mb-2"
            placeholder="Enter 6 digit code sent to your email address"
          />
          <p className="err_sms text-start mb-4">
            Invalid Code - You have 2 more attempts left before your account is
            locked!
          </p>
          <div className="flex items-center  flex-wrap lg:flex-nowrap gap-3 gap-lg-5">
            <button className=" p-3 w-full">Validate</button>
            <button className="p-3 w-full">Resend {veriation}</button>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Validate;
