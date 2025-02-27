import { useState } from "react";
import { useOtpVerifyMutation } from "../../services/apiSlice";
import { toast } from "react-toastify";

interface ApiError {
    data?: { message?: string };
    status?: number;
}
const OtpVerify = ({ setStep, maskedContact, setResetToken }: { setStep: (step: string) => void, maskedContact: string, setResetToken: (token: string) => void }) => {
    const [otp, setOtp] = useState('');
    const isPhoneNumber = /^\d/.test(maskedContact)
    const [verifyOTP] = useOtpVerifyMutation()
    const maskEmail = (email: string) => {
        const parts = email.split("@");
        return parts[0][0] + "*****" + "@" + parts[1];
    };
    const maskPhone = (phone: string) => {
        return "+91 *****" + phone.slice(-4);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = { otp, ...(isPhoneNumber ? { number: maskedContact } : { email: maskedContact }) }
        try {
            const res = await verifyOTP(data).unwrap();
            console.log(res);
            // toast.success(res.message);
            setResetToken(res?.data)
            setStep("ConfirmPassword");
        } catch (error) {
            console.log(error);

            const apiError = error as ApiError;
            toast.error(apiError?.data?.message || "Something went wrong. Please try again.");
        }
    }
    return (
        <div>
            <div className="">
                <p className="text-text1 mb-3 font-medium">
                    Enter the code we've sent via {isPhoneNumber ? "SMS" : "Email"} to <span className="font-semibold">{isPhoneNumber ? maskPhone(maskedContact) : maskEmail(maskedContact)}</span>
                </p>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="phone" className="text-text3">
                            Enter otp
                        </label>
                        <div className="mt-1">
                            <input
                                type="text"
                                id="phone"
                                className="py-2 px-2 rounded border-text3 w-full"
                                placeholder="- - - - - -"
                                onChange={e => setOtp(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="mt-5">
                        <button className={`btn1 w-full ${!otp && "disabled"}`} disabled={!otp}> Continue</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default OtpVerify