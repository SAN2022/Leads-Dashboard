const leadStats = [
  { label: "New", value: "127" },
  { label: "Contacted", value: "705k" },
  { label: "Qualified", value: "249k" },
  { label: "Working", value: "57k" },
  { label: "Proposal Sent", value: "1.1k" },
  { label: "Customer", value: "3.7k", color: "text-green-600" },
  { label: "Lost Leads", value: "5.2k", color: "text-red-600" },
];

function LeadStatus() {
  return (
    <div className="bg-white px-6 pt-2 rounded-lg border ml-6 mr-4 mt-2">
      <div className="p-0 grid grid-cols-4 md:grid-cols-7 text-left">
        {leadStats.map(({ label, value, color }, idx) => (
          <div key={idx}>
            <p className={`text-xs md:text-sm font-semibold ${color || "text-gray-600"}`}>{label}</p>
            <p className={'text-xs md:text-sm lg:text-lg font-semibold'}>{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LeadStatus;