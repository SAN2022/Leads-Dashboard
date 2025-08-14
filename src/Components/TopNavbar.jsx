import { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { MdOutlineNotificationsActive } from "react-icons/md";

const TopNavBar = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="flex justify-between items-center pl-5 pr-4 py-2 md:pr-6 bg-white border-b-1 border-gray-200">
      <div className="flex items-center gap-3">
        <button>
          <HiMenuAlt1 size={24}/>
        </button>
        <div className="relative w-full max-w-sm">
          <BiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="w-48 xl:w-80 pl-10 pr-4 py-2 border rounded-md text-sm focus:ring"
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <MdOutlineNotificationsActive className="text-gray-500 cursor-pointer" size={24}/>

        <div className="flex gap-1 items-center relative">
          <img
            src={"https://randomuser.me/api/portraits/women/1.jpg"}
            className="w-8 h-8 rounded-full cursor-pointer object-cover"
            alt="Profile"
            onClick={() => setOpen(!open)}
          />

          <div className="flex flex-col hidden md:block text-xs">
            <span className="relative font-semibold text-gray-800">Pamela Cain</span>
            <span className="absolute left-5 top-8 -translate-y-4/4 w-2 h-2 bg-green-500 border border-white rounded-full ml-1"></span><br />
            <span className="text-gray-500">pamela@dyson.com</span>
          </div>  

          {open && (
            <div className="absolute top-10 right-0 w-38 bg-white border shadow-md rounded-2 z-50">
              <ul className="text-sm m-0 p-0">
                <li className="hover:bg-gray-100 px-3 py-2.5 cursor-pointer">Account</li>
                <li className="hover:bg-gray-100 px-3 py-2.5 cursor-pointer">Billing</li>
                <li className="hover:bg-gray-100 px-3 py-2.5 cursor-pointer">Settings</li>
                <li className="hover:bg-red-100 text-red-500 px-3 py-2.5 cursor-pointer">Logout</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default TopNavBar;