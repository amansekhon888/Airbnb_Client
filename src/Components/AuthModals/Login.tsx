import { useState } from "react";
import { Link } from "react-router-dom";
import phone from "../../assets/icons/phone.png";
import email from "../../assets/icons/email.png";
import google from "../../assets/icons/google.png";
import facebook from "../../assets/icons/facebook2.png";
import { useVerifyMutation } from "../../services/apiSlice";

const Login = ({ setStep, formData, setFormData }: { setStep: (step: string) => void; formData: { number: string; email: string }; setFormData: (data: { number: string; email: string }) => void }) => {
    const [inputMode, setInputMode] = useState<"Phone" | "Email">("Phone");
    const [verify] = useVerifyMutation();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
        try {
            const res = await verify(formData).unwrap();
            console.log(res);

            if (res?.data?.registered) {
                setStep("Password"); // Open Password Modal if user exists
            } else {
                setStep("SignupForm"); // Open Signup Modal if user doesn't exist
            }
        } catch (error) {
            console.error("Verification failed:", error);
        }
    };

    return (
        <div>
            <h4 className="text-2xl font-semibold">Welcome to Airbnb</h4>
            <div className="mt-4">
                <form onSubmit={handleSubmit}>
                    {inputMode === "Phone" ? (
                        <div>
                            <label htmlFor="phone" className="text-text3">
                                Phone number
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    id="phone"
                                    name="number"
                                    className="py-2 px-2 rounded border-text3 w-full"
                                    placeholder="Phone number"
                                    value={formData.number}
                                    onChange={(e) => setFormData({ ...formData, number: e.target.value })}
                                />
                            </div>
                            <p className="text-text1 mt-1 text-sm">
                                We’ll call or text you to confirm your number. Standard message
                                and data rates apply.{" "}
                                <Link to="/" className="underline">
                                    Privacy Policy
                                </Link>
                            </p>
                        </div>
                    ) : (
                        <div>
                            <label htmlFor="email" className="text-text3">
                                Email
                            </label>
                            <div className="mt-1">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="py-2 px-2 rounded border-text3 w-full"
                                    placeholder="Email address"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                            <p className="text-text1 mt-1 text-sm">
                                We’ll email you to confirm your email address.{" "}
                                <Link to="/" className="underline">
                                    Privacy Policy
                                </Link>
                            </p>
                        </div>
                    )}
                    <div className="mt-5">
                        <button type="submit" className={`btn1 w-full ${!formData.email && !formData.number && "disabled"}`} disabled={!formData.email && !formData.number}>
                            Continue
                        </button>
                    </div>
                </form>
            </div>

            <div className="mt-5 relative before:absolute before:w-full before:h-[1px] before:bg-border1 flex items-center justify-center w-full">
                <span className="text-text1 bg-white px-4 relative">or</span>
            </div>

            <div className="mt-4">
                <div className="flex flex-col gap-3">
                    {inputMode === "Phone" ? (
                        <button
                            className="border py-3 w-full rounded-lg flex items-center justify-center gap-3 border-text1 hover:text-primary hover:border-primary duration-300"
                            onClick={(e) => {
                                e.preventDefault();
                                setInputMode("Email");
                                setFormData({ number: "", email: "" }); // Reset form data
                            }}
                        >
                            <img src={email} className="w-4" alt="Email Icon" /> Continue with email
                        </button>
                    ) : (
                        <button
                            className="border py-3 w-full rounded-lg flex items-center justify-center gap-3 border-text1 hover:text-primary hover:border-primary duration-300"
                            onClick={(e) => {
                                e.preventDefault();
                                setInputMode("Phone");
                                setFormData({ number: "", email: "" }); // Reset form data
                            }}
                        >
                            <img src={phone} className="w-4" alt="Phone Icon" /> Continue with phone
                        </button>
                    )}
                    <button className="border py-3 w-full rounded-lg flex items-center justify-center gap-3 border-text1 hover:text-primary hover:border-primary duration-300">
                        <img src={facebook} className="w-5" alt="Facebook Icon" /> Log in with Facebook
                    </button>
                    <button className="border py-3 w-full rounded-lg flex items-center justify-center gap-3 border-text1 hover:text-primary hover:border-primary duration-300">
                        <img src={google} className="w-5" alt="Google Icon" /> Log in with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
