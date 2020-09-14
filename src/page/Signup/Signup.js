import React, { useEffect } from "react";

import SignupComponent from "../../components/Signup/Signup";

const Signup = () => {
  const title = "Signup - Clone twitter by sufyan";

  useEffect(() => {
    document.title = title;
  }, []);

  return (
    <div>
      <SignupComponent open={true} title={title} page="signup" />
    </div>
  );
};

export default Signup;
