import React, { useState } from 'react';
import { Content } from './FooterData';

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
        <h1>{item.name}</h1>
      ))}
    </div>
  );
};

export default Accordion;