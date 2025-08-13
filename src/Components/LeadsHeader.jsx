import { useState } from "react";
import { IoMdArrowDown } from "react-icons/io";
import { LuPlus } from "react-icons/lu";

const LeadsHeader = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-sm px-2 pt-3 rounded-md ml-4 border-b border-gray-200">
      {/* Title and Subtitle */}
      <div>
        <h5 className="text-sm text-gray-800">Leads Management</h5>
        <p className="text-xs text-gray-500">
          Organize leads and track their progress effectively here
        </p>
      </div>

      {/* Buttons */}
      <div className="sm:mt-0 flex gap-2 mr-2">
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-1 px-2 py-1 bg-blue-600 text-white rounded-2 hover:bg-blue-700 transition"
        >
          <LuPlus />New Leads
        </button>
        <button className="flex items-center gap-1 px-2 py-1 border border-gray-300 text-gray-700 rounded-2 bg-white">
          <IoMdArrowDown />
          Export
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="absolute -top-50 left-0 inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white p-6 rounded-lg w-11/12 max-w-md">
                <h3 className="text-lg font-semibold my-3">Add New Lead</h3>
              <form className="space-y-3">
              <input
                type="text"
                placeholder="Customer Name"
                className="w-full border mb-2 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border mb-2 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Company"
                className="w-full border mb-2 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeadsHeader;