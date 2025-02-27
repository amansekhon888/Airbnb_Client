import { ToggleSwitch } from 'flowbite-react';
import React, { useState } from 'react';

const Notifications = () => {
  const categories = [
    {
      title: 'Offers and updates',
      items: [
        'Hosting insights and rewards',
        'News and updates',
        'Travel tips and offers',
      ],
    },
    {
      title: 'Account',
      items: [
        'Guest and Host messages',
        'Reminders',
        'Listing activity',
        'Account activity',
      ],
    },
  ];

  const initialState = categories.reduce((acc, category) => {
    category.items.forEach((item) => {
      acc[item] = true; // Default state
    });
    return acc;
  }, {});

  const [switches, setSwitches] = useState(initialState);

  const handleToggle = (item) => {
    setSwitches((prev) => ({
      ...prev,
      [item]: !prev[item],
    }));
  };

  return (
    <div className='flex flex-col gap-8'>
      {categories.map((category) => (
        <div key={category.title} className=''>
          <h6 className='text-lg text-text1 font-medium mb-4'>{category.title}</h6>
          <ul className='flex flex-col items-center gap-3 w-full max-w-[500px]'>
            {category.items.map((item) => (
              <li key={item} className='flex items-center justify-between w-full'>
                <span>{item}</span>
                <ToggleSwitch checked={switches[item]} onChange={() => handleToggle(item)} sizing='sm' />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Notifications;
