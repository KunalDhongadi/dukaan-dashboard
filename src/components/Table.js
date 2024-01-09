import React from "react";

const Table = () => {
  const data = [
    { id: "#281209", date: "7 July 23", OrderAmt: "₹1,278.23", TxnFees: "₹22" },
    { id: "#281209", date: "7 July 23", OrderAmt: "₹1,278.23", TxnFees: "₹22" },
    { id: "#281209", date: "7 July 23", OrderAmt: "₹1,278.23", TxnFees: "₹22" },
    { id: "#281209", date: "7 July 23", OrderAmt: "₹1,278.23", TxnFees: "₹22" },
    { id: "#281209", date: "7 July 23", OrderAmt: "₹1,278.23", TxnFees: "₹22" },
    { id: "#281209", date: "7 July 23", OrderAmt: "₹1,278.23", TxnFees: "₹22" },
    { id: "#281209", date: "7 July 23", OrderAmt: "₹1,278.23", TxnFees: "₹22" },
    { id: "#281209", date: "7 July 23", OrderAmt: "₹1,278.23", TxnFees: "₹22" },
    { id: "#281209", date: "7 July 23", OrderAmt: "₹1,278.23", TxnFees: "₹22" },
    { id: "#281209", date: "7 July 23", OrderAmt: "₹1,278.23", TxnFees: "₹22" },
    { id: "#281209", date: "7 July 23", OrderAmt: "₹1,278.23", TxnFees: "₹22" },
    { id: "#281209", date: "7 July 23", OrderAmt: "₹1,278.23", TxnFees: "₹22" },
  ];

  return (
    <div className="flex flex-col">
      <p className="text-left font-medium py-4">Transactions | This Month</p>

      <div className="bg-white shadow-sm mb-4 rounded-lg">
        <div className="bg-white sticky top-16 pt-3 px-3">
        <div className="flex w-full justify-between gap-2">
          <div className="border border-[#D9D9D] hover:outline hover:outline-black/10 rounded-[4px] text-sm flex gap-2 items-center px-4 py-2">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.95 10.5263C3.4412 10.5263 1.4 8.48 1.4 5.96491C1.4 3.44982 3.4412 1.40351 5.95 1.40351C8.4588 1.40351 10.5 3.44982 10.5 5.96491C10.5 8.48 8.4588 10.5263 5.95 10.5263ZM10.7443 9.48281C11.4674 8.49474 11.9 7.2814 11.9 5.96491C11.9 2.67579 9.2309 0 5.95 0C2.6691 0 0 2.67579 0 5.96491C0 9.25403 2.6691 11.9298 5.95 11.9298C7.4137 11.9298 8.7542 11.3944 9.7909 10.5116L12.2528 12.9796C12.3893 13.1165 12.5685 13.1853 12.7477 13.1853C12.9269 13.1853 13.1061 13.1165 13.2426 12.9796C13.5163 12.7053 13.5163 12.2618 13.2426 11.9874L10.7443 9.48281Z"
                fill="#999999"
              />
            </svg>

            <input placeholder="Search by order ID..." className="bg-inherit focus:outline-none" />
          </div>
          <div className="flex gap-2">
            <button className="flex rounded-[4px] items-center px-4 py-2 gap-2 text-sm border border-[#D9D9D]" aria-label="sort">
              Sort
              <svg
                width="14"
                height="12"
                viewBox="0 0 14 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.623006 7.93375C0.831286 7.72547 1.16897 7.72547 1.37725 7.93375L3.641 10.1975L5.90474 7.93375C6.11302 7.72547 6.45071 7.72547 6.65899 7.93375C6.86727 8.14203 6.86727 8.47972 6.65899 8.688L4.01812 11.3289C3.80984 11.5371 3.47215 11.5371 3.26387 11.3289L0.623006 8.688C0.414727 8.47972 0.414727 8.14203 0.623006 7.93375Z"
                  fill="#4D4D4D"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.64095 0.515153C3.9355 0.515153 4.17428 0.753934 4.17428 1.04849L4.17428 10.9517C4.17428 11.2463 3.9355 11.4851 3.64095 11.4851C3.3464 11.4851 3.10762 11.2463 3.10762 10.9517L3.10762 1.04849C3.10762 0.753934 3.3464 0.515153 3.64095 0.515153Z"
                  fill="#4D4D4D"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.3772 4.06646C13.169 4.27474 12.8313 4.27474 12.623 4.06646L10.3592 1.80272L8.0955 4.06646C7.88722 4.27474 7.54953 4.27474 7.34126 4.06646C7.13298 3.85818 7.13298 3.52049 7.34126 3.31221L9.98212 0.671346C10.1904 0.463067 10.5281 0.463067 10.7364 0.671346L13.3772 3.31221C13.5855 3.52049 13.5855 3.85818 13.3772 4.06646Z"
                  fill="#4D4D4D"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.3593 11.4851C10.0647 11.4851 9.82596 11.2463 9.82596 10.9517L9.82596 1.04847C9.82596 0.753922 10.0647 0.515141 10.3593 0.515141C10.6538 0.515142 10.8926 0.753922 10.8926 1.04847L10.8926 10.9517C10.8926 11.2463 10.6538 11.4851 10.3593 11.4851Z"
                  fill="#4D4D4D"
                />
              </svg>
            </button>

            <button className="border border-[#D9D9D] rounded-[4px] flex px-3 py-2 justify-center items-center" aria-label="export">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.9993 10.9414C17.371 10.9414 17.6811 11.2102 17.7435 11.5968L17.75 11.7L17.7495 15.2321C17.7495 16.5585 16.7164 17.655 15.3813 17.7448L15.2153 17.75L2.77794 17.7499C1.44615 17.7499 0.345286 16.7208 0.255253 15.391L0.25 15.2258V11.6863C0.25 11.2749 0.585964 10.9414 1.00027 10.9414C1.37194 10.9414 1.68197 11.2102 1.74442 11.5968L1.75092 11.7L1.75044 15.2321C1.75044 15.7555 2.14596 16.2013 2.65248 16.2534L2.76695 16.2599L15.2217 16.2602C15.7449 16.2602 16.1902 15.8642 16.2423 15.3577L16.2489 15.2429L16.2492 11.6863C16.2492 11.2749 16.585 10.9414 16.9993 10.9414ZM9.01207 0.25C9.37149 0.250378 9.68151 0.519212 9.74396 0.905762L9.75046 1.00892L9.75124 9.8297L12.9124 6.67494C13.1433 6.44469 13.4923 6.39342 13.7961 6.54761L13.9083 6.61495L13.9846 6.68297C14.2334 6.92976 14.2646 7.33058 14.0409 7.65049L13.9652 7.73721L9.51424 12.1745L9.43271 12.2409L9.32712 12.3035L9.23677 12.3399L9.15501 12.3617L9.07541 12.374L9.01331 12.3765L8.89007 12.3697L8.78548 12.3471L8.70291 12.3166L8.6007 12.2643L8.54241 12.2224L8.4569 12.1479L4.02399 7.726C3.73169 7.43447 3.73275 6.96287 4.02636 6.67264C4.28648 6.41551 4.69029 6.38633 5.01149 6.60986L5.09848 6.68534L8.25064 9.82956L8.24964 0.995196C8.24964 0.618676 8.53272 0.302507 8.90546 0.256191L9.01207 0.25Z"
                  fill="#4D4D4D"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 bg-[#F2F2F2] text-[#4D4D4D] rounded-[4px] text-sm py-3 mt-2">
          <p className="text-left ps-3 font-medium">Order ID</p>
          <p className="font-medium">Order date</p>
          <p className="text-right font-medium">Order amount</p>
          <p className="text-right pe-3 font-medium">Transaction fees</p>
        </div>

        </div>

        {data.map((d,index) => {
          return (
            <div key={index} className="grid grid-cols-4 gap-4 border-b border-[#E6E6E6] text-sm py-3 mx-3 mt-2">
              <p className="text-left ps-3 text-[#146EB4] font-medium">{d.id}</p>
              <p>{d.date}</p>
              <p className="text-right">{d.OrderAmt}</p>
              <p className="text-right pe-3">{d.TxnFees}</p>
            </div>
          );
        })}

        <div>
            

<nav aria-label="Page navigation example">
  <ul className="inline-flex -space-x-px text-sm my-4">
    <li>
      <a href="/" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight border border-[#D9D9D9] rounded-[4px] font-medium">Previous</a>
    </li>
    <li>
      <a href="/" className="flex items-center justify-center px-3 h-8 leading-tight">1</a>
    </li>
    <li>
      <a href="/" className="flex items-center justify-center px-3 h-8 leading-tight">...</a>
    </li>

    <li>
      <a href="/" aria-current="page" className="flex items-center justify-center px-3 h-8 text-white bg-[#146EB4] rounded-[4px]">10</a>
    </li>
    <li>
      <a href="/" className="flex items-center justify-center px-3 h-8 leading-tight">11</a>
    </li>
    <li>
      <a href="/" className="flex items-center justify-center px-3 h-8 leading-tight">12</a>
    </li>
    <li>
      <a href="/" className="flex items-center justify-center px-3 h-8 leading-tight">13</a>
    </li>


    <li>
      <a href="/" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight border border-[#D9D9D9] rounded-[4px] font-medium">Next</a>
    </li>
  </ul>
</nav>

        </div>
      </div>
    </div>
  );
};

export default Table;
