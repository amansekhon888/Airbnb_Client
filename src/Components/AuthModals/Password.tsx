import { VisibilityOffOutlined, VisibilityOutlined } from '@mui/icons-material'
import React, { useState } from 'react'
import { useLoginMutation } from '../../services/apiSlice';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { setIsAuthenticated, setOpenModal } from '../../services/slices/AuthSlice';

interface ApiError {
    data?: { message?: string };
    status?: number;
}
const Password = ({ setStep, formData }: { setStep: (step: string) => void; formData: { number: string; email: string }; setOpenModal: (open: boolean) => void }) => {
    const [showPassword, setShowPassword] = useState(false)
    const handleshowPassword = () => setShowPassword(!showPassword)
    const [password, setPassword] = useState("")
    const [login] = useLoginMutation()
    const dispatch = useDispatch()

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = { email: formData.email, number: formData.number, password }
        console.log(data);
        try {
            const res = await login(data).unwrap()
            localStorage.setItem('token', res.token)
            dispatch(setIsAuthenticated(true));
            dispatch(setOpenModal(false))
        } catch (error) {
            const apiError = error as ApiError;
            toast.error(apiError?.data?.message || "Something went wrong. Please try again.")
        }
    }

    return (
        <div>
            <div className="">
                <form action="" onSubmit={handleLogin}>
                    <div className='flex flex-col gap-3'>
                        <div>
                            <label className="text-text3">
                                {formData?.number ? "Phone number" : "Email"}
                            </label>
                            <div className="mt-1">
                                <input
                                    disabled
                                    type={formData?.number ? "number" : "text"}
                                    id="phone"
                                    name="number"
                                    className="py-2 px-2 rounded border-text3 w-full bg-gray-200"
                                    placeholder="Phone number"
                                    value={formData?.number ? formData?.number : formData?.email}
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="phone" className="text-text3">
                                Password
                            </label>
                            <div className="mt-1">
                                <div className='relative'>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        id="phone"
                                        className="py-2 px-2 rounded border-text3 w-full pr-8"
                                        placeholder="Password"
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <span className='absolute top-1/2 -translate-y-1/2 right-3 text-text3 cursor-pointer' onClick={handleshowPassword}>{showPassword
                                        ? <VisibilityOutlined className='!text-lg' /> : <VisibilityOffOutlined className='!text-lg' />}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-2'>
                        <p className='text-text-1 underline font-medium text-sm text-end'><span className='cursor-pointer' onClick={() => setStep("ForgotPassword")}>Forgot your password?</span></p>
                    </div>
                    <div className="mt-5">
                        <button type='submit' className={`btn1 w-full ${!password && "disabled"}`} disabled={!password}> Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Password