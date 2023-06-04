export const ArrowRight = ({ className }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g strokeWidth={0} />
      <g strokeLinecap="round" strokeLinejoin="round" />
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <path data-name="Right" d="m16.4 7 5.1 5-5.1 5" />
        <path d="M2.5 12h16.7" />
      </g>
    </svg>
  );
};

export const StarRating = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      xmlSpace="preserve"
      className={className}
    >
      <g strokeWidth={0} />
      <g strokeLinecap="round" strokeLinejoin="round" />
      <path
        fill="currentColor"
        d="M62.799 23.737a3.941 3.941 0 0 0-3.139-2.642l-16.969-2.593-7.622-16.237a3.938 3.938 0 0 0-7.13 0l-7.623 16.238-16.969 2.593a3.937 3.937 0 0 0-2.222 6.642l12.392 12.707-2.935 17.977a3.94 3.94 0 0 0 5.797 4.082l15.126-8.365 15.126 8.365a3.94 3.94 0 0 0 5.796-4.082l-2.935-17.977 12.393-12.707a3.942 3.942 0 0 0 .914-4.001z"
      />
    </svg>
  );
};
