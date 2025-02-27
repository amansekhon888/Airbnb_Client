import { ToggleSwitch } from 'flowbite-react';
import React, { useState } from 'react'

const PrivacyAndSharing = () => {
  const [switches, setSwitches] = useState(false);

  return (
    <div className='flex flex-col gap-8'>
      <div className=''>
        <h6 className='text-lg text-text1 font-medium mb-4'>Activity sharing</h6>
        <ul className='flex flex-col items-center gap-3 w-full max-w-[500px]'>
          <li className='flex items-center justify-between w-full'>
            <span>Read receipts</span>
            <ToggleSwitch checked={switches} onChange={setSwitches} sizing='sm' />
          </li>
          <li className='flex items-center justify-between w-full'>
            <span>Include my listing(s) in search engines</span>
            <ToggleSwitch checked={switches} onChange={setSwitches} sizing='sm' />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PrivacyAndSharing