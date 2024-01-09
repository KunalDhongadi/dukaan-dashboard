import React, { useState } from "react";

// import { ReactComponent as YourSvg } from '../assets/navbar-icons/Name';

const MenuNavbar = () => {
  const navMenuItems = [
    { name: "Home", beta: false, badgeCount: null },
    { name: "Orders", beta: false, badgeCount: 3 },
    { name: "Products", beta: false, badgeCount: null },
    { name: "Delivery", beta: false, badgeCount: null },
    { name: "Marketing", beta: false, badgeCount: null },
    { name: "Analytics", beta: false, badgeCount: null },
    { name: "Payments", beta: false, badgeCount: null },
    { name: "Tools", beta: false, badgeCount: null },
    { name: "Discounts", beta: false, badgeCount: null },
    { name: "Audience", beta: false, badgeCount: null },
    { name: "Appearance", beta: false, badgeCount: null },
    { name: "Plugins", beta: false, badgeCount: null },
  ];

  const [currentPage, setCurrentPage] = useState("Payments");

  return (
    <nav className="h-screen w-[224px] bg-[#1E2640] pt-3 fixed px-2">
      <div className="h-full flex flex-col overflow-hidden justify-between">
        <div className="flex justify-between items-center p-2 gap-3 hover:bg-white/5 cursor-pointer rounded-[4px]">
          <div className="w-10 h-10">
            <div className="w-full h-full bg-gradient-to-br from-blue-600 to-slate-200 rounded-sm"></div>
          </div>

          <div className="grow text-start">
            <p className="text-white font-medium text-base">Nishyan</p>
            <p className="underline opacity-80 text-white/80 text-sm hover:text-white">
              Visit Store
            </p>
          </div>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.84685 7.22185C3.26727 6.80143 3.92516 6.76321 4.38876 7.10719L4.52157 7.22185L10 12.6997L15.4784 7.22185C15.8988 6.80143 16.5567 6.76321 17.0203 7.10719L17.1532 7.22185C17.5736 7.64227 17.6118 8.30016 17.2678 8.76376L17.1532 8.89657L10.8374 15.2124C10.4169 15.6328 9.75905 15.671 9.29545 15.327L9.16264 15.2124L2.84685 8.89657C2.38438 8.43411 2.38438 7.68431 2.84685 7.22185Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="navbarItems border-t border-white/5 flex flex-col gap-1 mt-2 grow overflow-y-auto">
          {navMenuItems.map((item) => {
            const isCurrentPage = currentPage === item.name;
            return (
              <div
                className={`flex px-4 py-2 cursor-pointer rounded-[4px] hover:bg-white/5 ${
                  isCurrentPage && "bg-white/10"
                }`}
                onClick={()=>setCurrentPage(item.name)}
                key={item.name}
              >
                <img
                  src={`/assets/navbar-icons/Name=${item.name}, State=${
                    isCurrentPage ? "True" : "False"
                  }.svg`}
                  alt={`Icon for ${item.name}`}
                  className={`h-5 w-5 ${!isCurrentPage && "opacity-80"}`}
                />
                <p
                  className={`font-medium text-sm ms-3 ${
                    isCurrentPage ? "text-white" : "text-white/80"
                  }`}
                >
                  {item.name}
                </p>
                {item.badgeCount &&
                    <span className="ml-auto rounded-xl text-white text-sm bg-[#EE741F] px-2">{item.badgeCount}</span>
                }
              </div>
            );
          })}
        </div>

        <div className="sticky bottom-0 py-2 border-t border-white/5 ">
          <div className="flex bg-[#353C53] rounded-[4px] px-3 py-2 items-center">
            <div className="flex justify-center items-center rounded-[4px] w-9 h-9 bg-white/10">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.0002 3.79727C2.42343 3.79727 1.8002 4.35527 1.8002 5.24727V18.7473C1.8002 19.6393 2.42343 20.1973 3.0002 20.1973H21.0002C21.577 20.1973 22.2002 19.6393 22.2002 18.7473V15.8473H17.0003C14.874 15.8473 13.1503 14.1236 13.1503 11.9973C13.1503 9.87097 14.874 8.14727 17.0003 8.14727H22.2002V5.24727C22.2002 4.35527 21.577 3.79727 21.0002 3.79727H3.0002ZM23.8002 8.14727V5.24727C23.8002 3.65398 22.6326 2.19727 21.0002 2.19727H3.0002C1.36782 2.19727 0.200195 3.65398 0.200195 5.24727V18.7473C0.200195 20.3405 1.36782 21.7973 3.0002 21.7973H21.0002C22.6326 21.7973 23.8002 20.3405 23.8002 18.7473V15.8473H23.8503V8.14727H23.8002ZM16.0002 11.9473C16.0002 11.4778 16.3808 11.0973 16.8502 11.0973H18.1502C18.6197 11.0973 19.0002 11.4778 19.0002 11.9473C19.0002 12.4167 18.6197 12.7973 18.1502 12.7973H16.8502C16.3808 12.7973 16.0002 12.4167 16.0002 11.9473ZM14.8503 11.9973C14.8503 10.8099 15.8129 9.84727 17.0003 9.84727H22.1503V14.1473H17.0003C15.8129 14.1473 14.8503 13.1847 14.8503 11.9973Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="text-left ml-2">
              <p className="text-xs text-white/80">Available Credits</p>
              <p className="font-medium text-white">222.10</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MenuNavbar;
