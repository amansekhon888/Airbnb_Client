import { CloseOutlined } from '@mui/icons-material'
import React from 'react'

const Notifications = () => {
    return (
        <div className='pb-10 sm:pb-14 md:pb-16'>
            <div className="container mx-auto">
                <h2 className='text-3xl font-semibold'>Notifications</h2>
                <div className='mt-8'>
                    <ul className='flex items-center flex-col gap-4'>
                        <li className='border-b border-border1 pb-4'>
                            <div className='flex items-center justify-between gap-6'>
                                <div>
                                    <p className='text-text1 mb-1 line-clamp-2 font-medium'>Lorem ipsum dolor sit amet consectetur. Fermentum elementum ornare donec volutpat amet posuere enim maecenas. In morbi diam elementum aliquam vitae quisque ac. Morbi id eros nunc at. At tempus pellentesque urna a aenean neque tincidunt felis.</p>
                                    <span className='text-sm text-text3'>March 1, 2025</span>
                                </div>
                                <button><CloseOutlined className='!text-lg' /></button>
                            </div>
                        </li>
                        <li className='border-b border-border1 pb-4'>
                            <div className='flex items-center justify-between gap-6'>
                                <div>
                                    <p className='text-text1 mb-1 line-clamp-2 opacity-80'>Lorem ipsum dolor sit amet consectetur. Fermentum elementum ornare donec volutpat amet posuere enim maecenas. In morbi diam elementum aliquam vitae quisque ac. Morbi id eros nunc at. At tempus pellentesque urna a aenean neque tincidunt felis.</p>
                                    <span className='text-sm text-text3'>March 1, 2025</span>
                                </div>
                                <button><CloseOutlined className='!text-lg' /></button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Notifications