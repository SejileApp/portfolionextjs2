interface ICardInfoContact {
    id:number,
    icon:string,
    title: string,
    desc: string,
  }
  export const cardInfoContact:ICardInfoContact[] = [
    {
      id: 1,
      icon:`
      <svg
        className="w-6 h-6 text-gray-800 dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 20 16"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m19 2-8.4 7.05a1 1 0 0 1-1.2 0L1 2m18 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1m18 0v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2"
        />
      </svg>
      `,

      title: "call me",
      desc: "+212 00 00 00 00",
    },]

   