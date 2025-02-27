import { VisibilityOffOutlined, VisibilityOutlined } from '@mui/icons-material';
import React, { useState } from 'react';
import { useResetPasswordMutation } from '../../services/apiSlice';
import { toast } from 'react-toastify';

interface ApiError {
    data?: { message?: string };
    status?: number;
}

const ConfirmPassword = ({ resetToken, setStep }: { resetToken: string, setStep: (step: string) => void }) => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [resetPassword] = useResetPasswordMutation();

    // **Live Letter-by-Letter Password Match Validation**
    const passwordMismatch = confirmPassword.length > 0 && !newPassword.startsWith(confirmPassword);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (newPassword !== confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }

        const data = { resetToken, newPassword };
        try {
            const res = await resetPassword(data).unwrap();
            toast.success(res.message);
            setStep("Login");
        } catch (error) {
            const apiError = error as ApiError;
            toast.error(apiError?.data?.message || "Something went wrong. Please try again.");
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col gap-3'>
                    <div>
                        <label htmlFor="new-password" className="text-text3">
                            New Password
                        </label>
                        <div className="mt-1 relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="new-password"
                                className="py-2 px-2 rounded border-text3 w-full pr-8"
                                placeholder="New Password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                            />
                            <span 
                                className='absolute top-1/2 -translate-y-1/2 right-3 text-text3 cursor-pointer'
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <VisibilityOutlined className='!text-lg' /> : <VisibilityOffOutlined className='!text-lg' />}
                            </span>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="confirm-password" className="text-text3">
                            Confirm Password
                        </label>
                        <div className="mt-1 relative">
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                id="confirm-password"
                                className="py-2 px-2 rounded border-text3 w-full pr-8"
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            <span 
                                className='absolute top-1/2 -translate-y-1/2 right-3 text-text3 cursor-pointer'
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            >
                                {showConfirmPassword ? <VisibilityOutlined className='!text-lg' /> : <VisibilityOffOutlined className='!text-lg' />}
                            </span>
                        </div>
                        {passwordMismatch && <p className='text-red-600 mt-2 text-sm'>Password does not match</p>}
                    </div>
                </div>

                <div className="mt-5">
                    <button type='submit' className="btn1 w-full" disabled={!newPassword || !confirmPassword || passwordMismatch}>
                        Reset Password
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ConfirmPassword;
