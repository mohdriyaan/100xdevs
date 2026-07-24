export const RevenueCard = ({ title, showWarning, orderCount, amount }) => {
  return (
    <div className="bg-white rounded shadow-md p-4">
      <div className="flex items-center gap-1.5 text-gray-500 text-sm">
        <span>{title}</span>
        {showWarning ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-4 text-gray-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.879 9.879a3 3 0 1 1 4.242 4.242M12 17h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        ) : null}
      </div>

      <div className="flex justify-between items-center pt-2 gap-3">
        <div className="font-bold text-3xl text-gray-900">₹{amount}</div>

        {orderCount ? (
          <div className="flex items-center gap-1 shrink-0">
            <span className="text-brand-accent-700 underline cursor-pointer font-medium text-sm">
              {orderCount} Orders
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="size-4 text-brand-accent-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        ) : null}
      </div>
    </div>
  );
};