import React from 'react';

const FieldStyle = ({ field }) => {
  // Define a function to determine the border color based on the field value
  const getBorderColor = (field) => {
    switch (field) {
      case 'Company':
        return 'border-red-500';
      case 'Engineering':
        return 'border-purple-500';
      case 'Growth':
        return 'border-green-500';
      default:
        return 'border-gray-500'; // Default border color
    }
  };

  // Define a function to determine the text color based on the field value
  const getTextColor = (field) => {
    switch (field) {
      case 'Company':
        return 'text-red-500';
      case 'Engineering':
        return 'text-purple-500';
      case 'Growth':
        return 'text-green-500';
      default:
        return 'text-gray-500'; // Default text color
    }
  };

  // Get the border color based on the field value
  const borderColor = getBorderColor(field);
  // Get the text color based on the field value
  const textColor = getTextColor(field);

  return (
    <div style={{width:'fit-content',padding:'6px'}} className={`${textColor} rounded-full border-2 ${borderColor} mt-5 mx-6`}>
      {field}
    </div>
  );
};

export default FieldStyle;
