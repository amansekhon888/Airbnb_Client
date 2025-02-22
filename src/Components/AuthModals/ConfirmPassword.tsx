import { VisibilityOffOutlined, VisibilityOutlined } from '@mui/icons-material'
import React, { useState } from 'react'

const ConfirmPassword = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const handleshowPassword = () => setShowPassword(!showPassword)
    const handleshowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword)

    return (
        <div>
            <div className="">
                <form action="">
                    <div className='flex flex-col gap-3'>
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
                                    />
                                    <span className='absolute top-1/2 -translate-y-1/2 right-3 text-text3 cursor-pointer' onClick={handleshowPassword}>{showPassword
                                        ? <VisibilityOutlined className='!text-lg' /> : <VisibilityOffOutlined className='!text-lg' />}</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="phone" className="text-text3">
                                Confirm Password
                            </label>
                            <div className="mt-1">
                                <div className='relative'>
                                    <input
                                        type={showConfirmPassword ? "text" : "password"}
                                        id="phone"
                                        className="py-2 px-2 rounded border-text3 w-full pr-8"
                                        placeholder="Confirm Password"
                                    />
                                    <span className='absolute top-1/2 -translate-y-1/2 right-3 text-text3 cursor-pointer' onClick={handleshowConfirmPassword}>{showConfirmPassword
                                        ? <VisibilityOutlined className='!text-lg' /> : <VisibilityOffOutlined className='!text-lg' />}</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="mt-5">
                        <button className="btn1 w-full"> Login</button>
                    </div>
                </form>
            </div></div>
    )
}

export default ConfirmPassword