import { useState } from 'react';
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { FiArrowUp } from "react-icons/fi";

function LeadsTable(){
    const leads = [
        {
            id: '#3066',
            customer: 'Olivia Rhye',
            company: 'Empire Mark',
            email: 'rhye@empiremark.io',
            phone: '+1 (218) 699-3149',
            value: '$1,821.02',
            tag: 'Important',
            tagColor: "bg-red-100 text-red-600",
            source: 'Facebook',
            status: 'Customer',
            statusColor: "bg-green-100 text-green-600",
            created: 'Just now',
            avatar: "https://randomuser.me/api/portraits/women/4.jpg",
            icon: <HiOutlineDotsVertical />
        },
        {
            id: '#3065',
            customer: 'Phoenix Baker',
            company: 'Wit Ventures',
            email: 'baker@witventures.com',
            phone: '+1 (326) 507-6709',
            value: '$8,398.70',
            tag: 'Follow up',
            tagColor: "bg-yellow-100 text-yellow-600",
            source: 'Facebook',
            status: 'Qualified',
            statusColor: "bg-yellow-100 text-yellow-700",
            created: '44 mins ago',
            avatar: "https://randomuser.me/api/portraits/women/2.jpg",
            icon: <HiOutlineDotsVertical />
        },
        {
            id: '#3064',
            customer: 'Lana Steiner',
            company: 'Factor Four',
            email: 'steiner@factorfour.com',
            phone: '+1 (208) 608-6292',
            value: '$5,286.94',
            tag: 'Review',
            tagColor: "bg-gray-100 text-gray-600",
            source: 'LinkedIn',
            status: 'Working',
            statusColor: "bg-gray-100 text-gray-600",
            created: '3 hr ago',
            avatar: "https://randomuser.me/api/portraits/men/1.jpg",
            icon: <HiOutlineDotsVertical />
        },
        {
            id: '#3063',
            customer: 'Demi Wilkinson',
            company: 'Market Square',
            email: 'wilkinson@marketsq.com',
            phone: '+1 (317) 234-6462',
            value: '$2,968.95',
            tag: 'Follow up',
            tagColor: "bg-yellow-100 text-yellow-600",
            source: 'Dribble',
            status: 'Contacted',
            statusColor: "bg-gray-100 text-gray-600",
            created: '7 hr ago',
            avatar: "https://randomuser.me/api/portraits/women/3.jpg",
            icon: <HiOutlineDotsVertical />
        },
        {
            id: '#3062',
            customer: 'Candice Wu',
            company: 'Voice Firm',
            email: 'candice@voicefirm.com',
            phone: '+1 (680) 539-0761',
            value: '$7,005.23',
            tag: 'Review',
            tagColor: "bg-gray-100 text-gray-600",
            source: 'LinkedIn',
            status: 'Qualified',
            statusColor: "bg-yellow-100 text-yellow-600",
            created: '12 hr ago',
            avatar: "https://randomuser.me/api/portraits/men/2.jpg",
            icon: <HiOutlineDotsVertical />
        },
        {
            id: '#3061',
            customer: 'Natali Craig',
            company: 'Maxus Media',
            email: 'matali@maxusmedia.net',
            phone: '+1 (540) 683-1441',
            value: '$2,595.82',
            tag: 'Review',
            tagColor: "bg-gray-100 text-gray-600",
            source: 'Upwork',
            status: 'Proposal Sent',
            statusColor: "bg-gray-100 text-gray-600",
            created: 'Yesterday',
            avatar: "https://randomuser.me/api/portraits/men/3.jpg",
            icon: <HiOutlineDotsVertical />
        }
    ]

    const [currentPage, setCurrentPage] = useState(1)

    return (
        <>
        <div>
        <div className="border overflow-x-auto rounded-lg ml-6 mr-10 md:mr-15 lg:mr-15 xl:mr-8">
            <table className="min-w-full text-xs lg:text-sm">
                <thead className="text-gray-500 text-left">
                    <tr className='bg-white'>
                        <th className="pl-1"><input type="checkbox" /></th>
                        <th className="px-1 py-3">Lead ID</th>
                        <th className="px-1 py-3">Customer</th>
                        <th className="px-1 py-3">Company</th>
                        <th className="px-1 py-3">Email</th>
                        <th className="px-1 py-3">Phone</th>
                        <th className="px-1 py-3">Value</th>
                        <th className="px-1 py-3">Tags</th>
                        <th className="px-1 py-3">Source</th>
                        <th className="px-1 py-3">Assigned</th>
                        <th className="px-1 py-3">Status</th>
                        <th className="px-1 py-3 flex items-center gap-1">Created <FiArrowUp /></th>
                        <th className="px-1 py-3"></th>
                    </tr>
                </thead>

                <tbody className="bg-white divide-y divide-gray-100">
                {leads.map((lead, index) => (
                    <tr key={index} className="odd:bg-gray-100 even:bg-white hover:bg-gray-50">
                    <td className="pl-1">
                        <input type="checkbox" />
                    </td>
                    <td className="px-2 py-3">{lead.id}</td>
                    <td className="px-2 py-3 font-medium text-blue-600">{lead.customer}</td>
                    <td className="px-2 py-3">{lead.company}</td>
                    <td className="px-2 py-3 font-medium text-blue-600">{lead.email}</td>
                    <td className="px-2 py-3 font-medium text-blue-600">{lead.phone}</td>
                    <td className="px-2 py-3">{lead.value}</td>
                    <td className="px-2 py-3">
                        <span className={`px-2 py-1 text-xs rounded-full font-medium ${lead.tagColor} border`}>
                        {lead.tag}
                        </span>
                    </td>
                    <td className="px-2 py-3">{lead.source}</td>
                    <td className="px-2 py-3 flex justify-center">
                        <img src={lead.avatar} alt="avatar" className="h-8 w-8 rounded-full object-cover" />
                    </td>
                    <td className="px-1 py-3">
                        <span className={`px-2 py-1 text-xs rounded-full font-medium ${lead.statusColor} border`}>
                            {lead.status}
                        </span>
                    </td>
                    <td className="px-2 py-3">{lead.created}</td>
                    <td className="pr-4 py-3 text-lg cursor-pointer">{lead.icon}</td>
                    </tr>
                    ))}
                </tbody>
            </table>

            {/* Pagination */}
            <div className="text-xs md:text-sm flex justify-between items-center px-4 py-3 bg-white">
                <button
                className="flex items-center gap-1 px-3 py-1 border rounded-2 text-sm"
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                >
                <IoArrowBack/> Previous
                </button>

                <div className="flex gap-1">
                {Array.from({ length: 10 }, (_, i) => (
                    <button
                    key={i}
                    className={`px-3 py-1 rounded-md text-sm ${
                        currentPage === i + 1 ? "bg-blue-500 text-white" : "border"
                    }`}
                    onClick={() => setCurrentPage(i + 1)}
                    >
                    {i + 1}
                    </button>
                ))}
                </div>

                <button
                className="flex items-center gap-1 px-3 py-1 border rounded-2 text-md"
                onClick={() => setCurrentPage((p) => Math.min(p + 1, 10))}
                >
                Next <IoArrowForward/>
                </button>
            </div>
        </div>
        </div>
        </>
    )
}

export default LeadsTable;