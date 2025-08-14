import { FiFilter, FiRefreshCw } from 'react-icons/fi';
import { BsStack } from 'react-icons/bs';
import { BiSearch } from "react-icons/bi";
import { RiCarouselView } from "react-icons/ri";

function Toolbar() {
  return (
    <div className="w-full flex flex-wrap justify-between items-center gap-2 pl-6 pr-4 my-3  lg:text-sm text-xs text-black">
      {/* Left Section: Buttons */}
      <div className="flex gap-2">
        <button className="flex items-center gap-1 bg-white border p-2 rounded-3 font-medium">
          <FiFilter className="text-sm" /> Filter
        </button>

        <button className="flex items-center gap-1 bg-white border p-2 rounded-3 font-medium">
          <BsStack className="text-sm" /> Bulk Actions
        </button>

        <button className="flex items-center gap-1 bg-white border p-2 rounded-3">
          <FiRefreshCw className="text-sm" />
        </button>
      </div>

      {/* Right Section: Search and View */}
      <div className="flex items-center gap-2">
        <div className="relative">
            <BiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={'20px'}/>
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 border rounded-3 text-sm w-40 md:w-60 xl:w-80 focus:outline-none focus:ring-2 bg-white focus:ring-blue-400"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <button className="flex items-center gap-1 border p-2 rounded-3 font-medium bg-white">
          <RiCarouselView />View
        </button>
      </div>
    </div>
  );
};

export default Toolbar;