import { KeyboardArrowDownOutlined } from '@mui/icons-material'
import React from 'react'

const PayWith = () => {
    return (
        <div className='flex flex-col gap-3'>
            <div className='border border-border1 rounded-lg flex items-center justify-between py-2.5 px-3'>
                <p>Credit or debit card</p>
                <span><KeyboardArrowDownOutlined /></span>
            </div>
            <div className='flex flex-col gap-3'>
                <div className='border border-border1 rounded-lg'>
                    <div className='flex flex-col py-2.5 px-3'>
                        <label htmlFor="" className='text-sm'>Card number</label>
                        <input type="text" className='placeholder:text-text3 focus:ring-0 border-none p-0' placeholder='1234 5678 1234 5678' />
                    </div>
                    <hr className='border-border1' />
                    <div className="grid grid-cols-2">
                        <div className='flex flex-col py-2.5 px-3 border-r border-border1'>
                            <label htmlFor="" className='text-sm'>Expiry</label>
                            <input type="text" className='placeholder:text-text3 focus:ring-0 border-none p-0' placeholder='MM / YY' />
                        </div>
                        <div className='flex flex-col py-2.5 px-3'>
                            <label htmlFor="" className='text-sm'>CVV/CVC</label>
                            <input type="text" className='placeholder:text-text3 focus:ring-0 border-none p-0' placeholder='XXX' />
                        </div>
                    </div>
                </div>
                <div>
                    <input type="text" className='border border-border1 w-full rounded-lg py-2.5 placeholder:text-text3 focus:ring-0 focus:border-border1' placeholder='Cardholder name' />
                </div>
            </div>
        </div>
    )
}

export default PayWith