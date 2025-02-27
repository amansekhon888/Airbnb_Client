import { useState } from "react";
import { useForgotPasswordMutation } from "../../services/apiSlice";
import { toast } from "react-toastify";

interface ApiError {
    data?: { message?: string };
    status?: number;
}

const ForgotPassword = ({ setStep, setMaskedContact }: { setStep: (step: string) => void, setMaskedContact: (contact: string) => void }) => {
    const [input, setInput] = useState("");
    const isPhoneNumber = /^\d/.test(input);
    const [forgotPassword] = useForgotPasswordMutation()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value;
        if (isPhoneNumber) {
            value = value.replace(/\D/g, "");
        }
        setInput(value);
    };
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = isPhoneNumber ? { number: input } : { email: input };
        try {
            const res = await forgotPassword(data).unwrap();
            toast.success(res.message);
            setMaskedContact(input);
            setStep("OtpVerify");
        } catch (error) {
            console.log(error);
            
            const apiError = error as ApiError;
            toast.error(apiError?.data?.message || "Something went wrong. Please try again.");
        }
    };

    return (
        <div>
            <p className="text-text1 mb-3">
                Enter the email address or phone number associated with your account, and we’ll send you a link to reset your password.
            </p>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="contact" className="text-text3">
                        Email/Number
                    </label>
                    <div className="mt-1">
                        <input
                            type={isPhoneNumber ? "tel" : "email"}
                            id="contact"
                            className="py-2 px-2 rounded border-text3 w-full"
                            placeholder=""
                            value={input}
                            onChange={handleChange}
                            pattern={isPhoneNumber ? "[0-9]*" : undefined} // Ensure only numbers for phone
                        />
                    </div>
                </div>
                <div className="mt-5">
                    <button type="submit" className={`btn1 w-full ${!input && "disabled"}`} disabled={!input}>Send OTP</button>
                </div>
            </form>
        </div>
    );
};

export default ForgotPassword;
