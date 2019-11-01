import React from 'react';

function DisplayEmployee({ employee }) {
  return (
    <div className="DisplayEmployee">
      <img
        src={employee.image}
        alt={employee.character}
      />
      <ul>
        <li>
          Name: {employee.character}
        </li>
        <li>
          Quote: {employee.quote}
        </li>
      </ul>
    </div>
  );
};

export default DisplayEmployee;