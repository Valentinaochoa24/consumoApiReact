import React from 'react';

const InputField = ({ label, type, placeholder, onChange }) => {
  return (
    <div>
      <span className="block text-sm font-medium text-slate-700">{label}</span>
      <input
        type={type}
        className="px-4 py-2 border rounded-md w-full"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
