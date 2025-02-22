import { CloseOutlined, KeyboardArrowLeftOutlined } from "@mui/icons-material";
import { Modal } from "flowbite-react";
import { Link } from "react-router-dom";
import Login from "./Login.tsx";
import { useState } from "react";
import SignupForm from "./SignupForm.tsx";
import Password from "./Password.tsx";
import ForgotPassword from "./ForgotPassword.tsx";
import ConfirmPassword from "./ConfirmPassword.tsx";
import ConfirmNumber from "./ConfirmNumber.tsx";

interface IndexProps {
  title?: string;
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
  onBack?: () => void;
}

const Index = ({ openModal, setOpenModal }: IndexProps) => {
  const [step, setStep] = useState("Login"); // Track current step
  const [formData, setFormData] = useState({
    number: "",
    email: "",
  });

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
      case "ConfirmNumber":
        return {
          title: "Confirm your number",
          back: ""
        };;
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
          back: "Login"
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
      case "ConfirmNumber":
        return <ConfirmNumber />;
      case "SignupForm":
        return <SignupForm />;
      case "Password":
        return <Password setStep={setStep} formData={formData} setOpenModal={setOpenModal} />;
      case "ForgotPassword":
        return <ForgotPassword />;
      case "ConfirmPassword":
        return <ConfirmPassword />;
      default:
        return null;

    }
  };

  return (
    <div>
      <Modal show={openModal} onClose={() => { setOpenModal(false); setStep("Login") }} size="xl" className="" >
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
            <button className="text-text1" onClick={() => { setOpenModal(false); setStep("Login") }}><CloseOutlined /></button>
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