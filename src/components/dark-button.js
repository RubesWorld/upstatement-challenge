import React from "react";

function DarkButton() {
  return (
    <>
      <button className="theme-button">
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          data-reactroot=""
        >
          <path
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-width="2.5"
            stroke="#221b38"
            fill="none"
            d="M20.9999 12.79C20.8399 14.49 20.1999 16.11 19.1599 17.47C18.1199 18.82 16.7099 19.85 15.0999 20.43C13.4899 21.01 11.7499 21.12 10.0799 20.75C8.40988 20.38 6.87988 19.54 5.67988 18.33C4.46988 17.12 3.6299 15.59 3.2599 13.92C2.8899 12.25 2.99988 10.51 3.57988 8.89999C4.15988 7.28999 5.1899 5.88 6.5399 4.84C7.8899 3.79 9.51989 3.16 11.2199 3C10.2199 4.35 9.73989 6.00999 9.86989 7.67999C9.99989 9.34999 10.7199 10.92 11.8999 12.11C13.0899 13.3 14.6599 14.02 16.3299 14.14C17.9899 14.27 19.6499 13.79 20.9999 12.79Z"
          ></path>
        </svg>
      </button>
    </>
  );
}

export default DarkButton;
