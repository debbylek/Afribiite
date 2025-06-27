import React from "react";

const CoverDomeLogo = ({ className = "", style = {}, size = 64 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
  >
    <ellipse cx="24" cy="38" rx="16" ry="4" fill="#E0E0E0" />
    <path
      d="M8 38C8 27.0589 17.0589 18 28 18C38.9411 18 48 27.0589 48 38"
      fill="#F5F5F5"
    />
    <path
      d="M40 38C40 29.1634 32.8366 22 24 22C15.1634 22 8 29.1634 8 38"
      fill="#BDBDBD"
    />
    <circle cx="24" cy="14" r="3" fill="#BDBDBD" />
    <rect x="22" y="10" width="4" height="6" rx="2" fill="#BDBDBD" />
    <rect x="12" y="36" width="24" height="4" rx="2" fill="#BDBDBD" />
    <path
      d="M4 38H44"
      stroke="#757575"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export default CoverDomeLogo;
