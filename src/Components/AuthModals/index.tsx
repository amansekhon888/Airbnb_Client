import { CloseOutlined, KeyboardArrowLeftOutlined } from "@mui/icons-material";
import { Modal } from "flowbite-react";
import Login from "./Login.tsx";
import { useState } from "react";
import SignupForm from "./SignupForm.tsx";
import Password from "./Password.tsx";
import ForgotPassword from "./ForgotPassword.tsx";
import ConfirmPassword from "./ConfirmPassword.tsx";
import OtpVerify from "./OtpVerify.tsx";
import { useAuth } from "../../Context/AuthContext.tsx";

const Index = () => {
  const { isAuthenticated, openModal, setOpenModal } = useAuth();
  const [step, setStep] = useState("Login"); // Track current step
  const [formData, setFormData] = useState({
    number: "",
    email: "",
  });
  const [maskedContact, setMaskedContact] = useState("");
  const [resetToken, setResetToken] = useState("")

  const handleClose = () => {
    setOpenModal(false);
    setStep("Login");
    setFormData({ number: "", email: "" });
    setMaskedContact("");
    setResetToken("");

    if (!isAuthenticated) {
      window.location.href = "/"; // Redirect to home if not logged in
    }
  };
  const getTitle = () => {
    switch (step) {
      case "Login":
        return {
          title: "Log in or sign up",
          back: ""
        };
      case "SignupForm":
        return {
          title: "Finish signing up",
          back: "Login"
        };
      case "OtpVerify":
        return {
          title: "OTP Verification",
          back: "ForgotPassword"
        };
      case "Password":
        return {
          title: "Log in",
          back: "Login"
        };;
      case "ForgotPassword":
        return {
          title: "Forgotten your password?",
          back: "Password"
        };;
      case "ConfirmPassword":
        return {
          title: "Confirm Password",
          back: "ForgotPassword"
        };;
      default:
        return {
          title: "Log in or sign up",
          back: ""
        };;
    }
  };
  const renderContent = () => {
    switch (step) {
      case "Login":
        return <Login setStep={setStep} formData={formData} setFormData={setFormData} />;
      case "OtpVerify":
        return <OtpVerify setStep={setStep} maskedContact={maskedContact} setResetToken={setResetToken} />;
      case "SignupForm":
        return <SignupForm />;
      case "Password":
        return <Password setStep={setStep} formData={formData} setOpenModal={setOpenModal} />;
      case "ForgotPassword":
        return <ForgotPassword setStep={setStep} setMaskedContact={setMaskedContact} />;
      case "ConfirmPassword":
        return <ConfirmPassword setStep={setStep} resetToken={resetToken} />;
      default:
        return null;

    }
  };

  return (
    <div>
      <Modal show={openModal} onClose={handleClose} size="xl" className="" >
        <Modal.Body className="p-0">
          <div className="flex items-center justify-between px-6 py-4 border-b border-border1">
            {getTitle().back ?
              <button onClick={() => setStep(getTitle().back)}>
                <KeyboardArrowLeftOutlined />
              </button>
              : <span></span>
            }
            <div>
              <h4 className="text-text1 text-lg lg:text-xl font-semibold">{getTitle().title}</h4>
            </div>
            <button className="text-text1" onClick={handleClose}><CloseOutlined /></button>
          </div>
          <div className="p-6">
            {renderContent()}
          </div>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default Index