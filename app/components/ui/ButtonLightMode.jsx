import React from "react";

export default function ButtonLightMode({on_click}) {
  return (
    <button
        onClick={on_click}
      className="hidden dark:flex   items-center"
      title="Light mode"
    >
      <svg
        className="w-6 h-6  text-color-text hover:scale-110 "
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 20 20"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10 3V1m0 18v-2M5.05 5.05 3.636 3.636m12.728 12.728L14.95 14.95M3 10H1m18 0h-2M5.05 14.95l-1.414 1.414M16.364 3.636 14.95 5.05M14 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
        />
      </svg>
    </button>
  );
}
