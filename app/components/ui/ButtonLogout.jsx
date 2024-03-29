

export default function ButtonLogout({on_click}) {
  return (
    <button
      className="w-[30px] h-[30px] p-1 rounded-full  hover:scale-110"
      title="Logout"
      onClick={on_click}
    >
      <svg
        className="w-6 h-6  dark:text-color-text"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 18 15"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 7.5h11m0 0L8 3.786M12 7.5l-4 3.714M12 1h3c.53 0 1.04.196 1.414.544.375.348.586.82.586 1.313v9.286c0 .492-.21.965-.586 1.313A2.081 2.081 0 0 1 15 14h-3"
        />
      </svg>
    </button>
  );
}
