/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
const ArrowIcon = ({ color }) => {
  return (
    <svg
      width="14"
      height="9"
      viewBox="0 0 14 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2275_606)">
        <path
          d="M12.7989 4.7636H1.72852V4.00789H12.7989L8.81627 1.41562L9.6398 0.870799L15.04 4.38575L15.013 4.39453H15.0265L9.6803 7.88312L8.84327 7.3383L12.7989 4.7636Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_2275_606">
          <rect
            width="14"
            height="9"
            fill="white"
            transform="matrix(1 0 0 -1 0 9)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ArrowIcon;
