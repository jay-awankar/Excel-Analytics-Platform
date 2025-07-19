import React from 'react';

export const DataBlob = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-1/4 -left-1/6 md:-left-1 w-96 h-96 bg-[#c9bbff] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-1/3 -right-1/6 md:-right-1 w-96 h-96 bg-[#1EAEDB] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-1/4 left-1/3 w-96 h-96 bg-[#6E59A5] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
    </div>
  );
};