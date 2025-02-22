import { CancelOutlined, CheckCircleOutlined, RadioButtonUncheckedOutlined, VisibilityOffOutlined, VisibilityOutlined } from "@mui/icons-material"
import { useState } from "react"
import { Link } from "react-router-dom"

const SignupForm = () => {
    const [showPassword, setShowPassword] = useState(false)
    const handleshowPassword = () => setShowPassword(!showPassword)
    return (
        <div>
            <div className="">
                <div className="">
                    <form action="">
                        <div className="flex flex-col gap-5">
                            <div>
                                <h6 className="font-medium text-text1 mb-2">Legal name</h6>
                                <label htmlFor="phone" className="text-text3">
                                    First name on ID
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        id="phone"
                                        className="py-2 px-2 rounded border-text3 w-full"
                                        placeholder="First name on ID"
                                    />
                                    <input
                                        type="text"
                                        id="phone"
                                        className="py-2 px-2 rounded border-text3 w-full mt-2"
                                        placeholder="Last name on ID"
                                    />
                                </div>
                                <p className="text-text3 mt-1 text-sm">
                                    Make sure this matches the name on your government ID. If you go by another name, you can add a
                                    <span className="underline">
                                        preferred first name.
                                    </span>
                                </p>
                            </div>
                            <div>
                                <h6 className="font-medium text-text1 mb-2">Date of birth</h6>
                                <div className="mt-1">
                                    <div className="relative">
                                        <input
                                            type="date"
                                            id="phone"
                                            className="py-2 px-2 rounded border border-text3 w-full "
                                            placeholder="Date of birth"
                                        />
                                        {/* <span className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center"><CalendarMonthOutlined className="!text-lg" /></span> */}
                                    </div>
                                </div>
                                <p className="text-text3 mt-1 text-sm">
                                    To sign up, you need to be at least 18. Your birthday won’t be shared with other people who use Airbnb.
                                </p>
                            </div>
                            <div>
                                <h6 className="font-medium text-text1 mb-2">Contact info</h6>
                                <label htmlFor="phone" className="text-text3">
                                    Email
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="email"
                                        id="phone"
                                        className="py-2 px-2 rounded border border-text3 w-full "
                                        placeholder="Email"
                                    />
                                </div>
                                <p className="text-text3 mt-1 text-sm">
                                    We'll email you trip confirmations and receipts.
                                </p>
                            </div>
                            <div>
                                <h6 className="font-medium text-text1 mb-2">Password</h6>
                                <div>
                                    <div className="mt-1">
                                        <div className='relative'>
                                            <input
                                                type={showPassword ? "text" : "password"}
                                                id="phone"
                                                className="py-2 px-2 rounded border-text3 w-full pr-8"
                                                placeholder="Password"
                                            />
                                            <span className='absolute top-1/2 -translate-y-1/2 right-3 text-text3 cursor-pointer' onClick={handleshowPassword}>{showPassword
                                                ? <VisibilityOutlined className='!text-lg' /> : <VisibilityOffOutlined className='!text-lg' />}</span>
                                        </div>
                                    </div>
                                </div>
                                <ul className="text-sm mt-2 flex flex-col gap-1">
                                    <li className="flex items-center gap-2 text-text3"><RadioButtonUncheckedOutlined className="!text-lg" /> At least 8 characters</li>
                                    <li className="flex items-center gap-2 text-[#07BC35]"><CheckCircleOutlined className="!text-lg" /> Password strength weak</li>
                                    <li className="flex items-center gap-2 text-[#FF3B30]"><CancelOutlined className="!text-lg" /> Can't contain your name or email address</li>
                                    <li className="flex items-center gap-2 text-[#FF3B30]"><CancelOutlined className="!text-lg" /> Contains a number or symbol</li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-5">
                            <p className="text-sm text-text1">By selecting <span
                                className="font-medium text-primary underline">Agree and continue</span>, I agree to Airbnb’s <Link to="/"><span
                                    className="font-medium text-primary underline">Terms of Service</span></Link>, <Link to="/"><span
                                        className="font-medium text-primary underline">Payments Terms of Service</span></Link>, and <Link to=""><span
                                            className="font-medium text-primary underline">Nondiscrimination Policy</span></Link> and acknowledge the <Link to=""><span
                                                className="font-medium text-primary underline">Privacy Policy.</span></Link></p>
                        </div>
                        <hr className="my-7 border-border1" />
                        <div className="">
                            <button className="btn1 w-full">Agree and continue</button>
                        </div>
                        <div className="mt-5">
                            <p className="text-sm text-text1">Airbnb will send you members-only deals, inspiration, marketing emails, and push notifications. You can opt out of receiving these at any time in your account settings or directly from the marketing notification.</p>
                        </div>
                        <div className="mt-3">
                            <div className="flex items-center gap-2">
                                <input type="checkbox" id="agree" className="focus:outline-0 " />
                                <label htmlFor="agree" className="text-sm">I don’t want to receive marketing messages from Airbnb.</label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignupForm