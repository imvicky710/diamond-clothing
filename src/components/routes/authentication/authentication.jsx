import SignUpForm from "../../sign-up-form/sign-up-form";
import SignInForm from "../../sign-in-form/sign-in-form";
import "./authentication.scss"

const Autentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Autentication;
