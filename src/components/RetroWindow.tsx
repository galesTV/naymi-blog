import React from "react";
import Link from "next/link";

interface RetroWindowProps {
  title: string;
  children: React.ReactNode;
  onCloseHref?: string;
}

const CloseButton = () => (
  <button className="bg-[#c0c0c0] border-2 border-t-white border-l-white border-b-gray-800 border-r-gray-800 px-2 text-xs font-bold text-black active:border-t-gray-800 active:border-l-gray-800 active:border-b-white active:border-r-white cursor-pointer">
    X
  </button>
);

export default function RetroWindow({
  title,
  children,
  onCloseHref,
}: RetroWindowProps) {
  return (
    <div className="border-[3px] border-t-white border-l-white border-b-gray-800 border-r-gray-800 bg-[#c0c0c0] p-[2px] shadow-lg max-w-xl w-full">
      <div className="bg-gradient-to-r from-blue-800 to-blue-500 px-2 py-1 flex justify-between items-center mb-1">
        <span
          className="text-white text-xl tracking-wider"
          style={{ fontFamily: "var(--font-vt323), monospace" }}
        >
          {title}
        </span>

        {onCloseHref ? (
          <Link href={onCloseHref}>
            <CloseButton />
          </Link>
        ) : (
          <CloseButton />
        )}
      </div>

      <div className="bg-white border-2 border-t-gray-800 border-l-gray-800 border-b-white border-r-white p-4">
        {children}
      </div>
    </div>
  );
}
