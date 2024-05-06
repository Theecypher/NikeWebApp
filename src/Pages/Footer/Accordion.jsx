import React, { useState } from 'react';
import { Content } from './FooterData';
import { FaPlus } from 'react-icons/fa';

const Accordion = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      {/* <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? '-' : '+'}</div>
      </div> */}
      {/* {isActive && <div className="flex">{content}</div>} */}
      {Content.map((item, index) => (
        <div key={index} className='py-7 flex justify-between'>
        <h1>{item.name}</h1>
        <FaPlus className='' />
        </div>
      ))}
    </div>
  );
};

export default Accordion;