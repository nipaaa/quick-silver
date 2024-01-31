import Validate from "@/Utils/Validate";
import { useParams } from "next/navigation";

import React from "react";

const ValidEmail = () => {
  const { email } = useParams() || {};

  return (
    <div>
      <Validate veriation="Email" title="email account" email={email} />
    </div>
  );
};

export default ValidEmail;
