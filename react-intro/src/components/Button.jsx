import React from 'react';

// This function is a component because it starts with a capital letter
export function Button({ text, className, onClick }) {
  // const { text, prop2 } = props;
  return (
    // <button className={'btn ' + className}>
    <button className={`btn ${className}`} onClick={() => onClick(className)}>
      {text}
    </button>
  );
}
