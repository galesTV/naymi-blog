import React from 'react';

interface RetroWindowProps {
  title: string;
  children: React.ReactNode;
}

export default function RetroWindow({ title, children }: RetroWindowProps) {
  return (
    <div className="border-[3px] border-t-white border-l-white border-b-gray-800 border-r-gray-800 bg-[#c0c0c0] p-[2px] shadow-lg max-w-xl w-full">
      <div className="bg-gradient-to-r from-blue-800 to-blue-500 px-2 py-1 flex justify-between items-center mb-1">
        <span className="text-white font-bold text-sm tracking-wider">{title}</span>
        <button className="bg-[#c0c0c0] border-2 border-t-white border-l-white border-b-gray-800 border-r-gray-800 px-2 text-xs font-bold text-black active:border-t-gray-800 active:border-l-gray-800 active:border-b-white active:border-r-white">
          X
        </button>
      </div>
      
      <div className="bg-white border-2 border-t-gray-800 border-l-gray-800 border-b-white border-r-white p-4">
        {children}
      </div>
    </div>
  );
}