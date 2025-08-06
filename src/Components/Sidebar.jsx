import { useState } from "react";
import { RiHome6Line } from "react-icons/ri";
import { LuUsers, LuPhoneCall } from "react-icons/lu";
import { FiFileText, FiLayers } from "react-icons/fi";
import { FaListUl } from "react-icons/fa6";
import { BiBarChart } from "react-icons/bi";
import { MdEventNote, MdOutlineMailOutline } from "react-icons/md";
import { TbFolderQuestion, TbUserSquareRounded } from "react-icons/tb";
import logo from '../assets/Logo.png';

const Sidebar = () => {  
  const [activeIndex, setActiveIndex] = useState(0);

  const icons = [
    { icon: <RiHome6Line />, label: "Home" },
    { icon: <LuUsers />, label: "Users" },
    { icon: <MdOutlineMailOutline />, label: "Mail" },
    { icon: <LuPhoneCall />, label: "Phone" },
    { icon: <FiFileText />, label: "File" },
    { icon: <FiLayers />, label: "Layers" },
    { icon: <FaListUl />, label: "List" },
    { icon: <BiBarChart />, label: "Stats" },
    { icon: <MdEventNote />, label: "Note" },
    { icon: <TbFolderQuestion className="mt-30"/>, label: "Help" },
    { icon: <TbUserSquareRounded />, label: "User" }
  ];

  return (
    <div className='w-12 md:w-14 h-screen fixed top-0 left-0 bg-white border-r border-gray-200 flex flex-col items-center py-3 z-40'>
      <div>
        <img 
        src={logo} 
        alt="Logo" 
        className="h-8 w-8 object-contain"/>
      </div>

      <nav className="mt-3 flex flex-col space-y-4">
        <button className="text-gray-500 hover:text-blue-600">
          {icons.map((item, index) => (
            <div
              key={index}
              className={`text-xl p-2 sm:py-0 rounded-md cursor-pointer ${
                activeIndex === index
                  ? "bg-gray-100 text-blue-600"
                  : "text-gray-500 hover:text-blue-600"
              }`}
              onClick={() => setActiveIndex(index)}
              title={item.label}
              >
              {item.icon}
            </div>
            ))}
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;