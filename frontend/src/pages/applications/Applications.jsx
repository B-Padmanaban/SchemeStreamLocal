import React from "react";

const ApplicationStatusPage = () => {
  // Dummy data for testing (this will later come from the backend)
  const appliedSchemes = [
    { id: 1, name: "Scheme A", status: "Pending", date: "2024-02-10" },
    { id: 2, name: "Scheme B", status: "Approved", date: "2024-02-08" },
    { id: 3, name: "Scheme C", status: "Rejected", date: "2024-02-05" }
  ];

  return (
    <div className="min-h-screen bg-[#30347c] text-white p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center">Application Status</h1>

      <div className="mt-8 w-full max-w-2xl space-y-4">
        {appliedSchemes.map((scheme) => (
          <div key={scheme.id} className="bg-white text-[#30347c] p-6 rounded-lg shadow-md w-full flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold">{scheme.name}</h2>
              <p className="mt-2 text-gray-600">Applied on: {scheme.date}</p>
            </div>

            {/* Status Badge */}
            <span
              className={`px-4 py-2 rounded-lg text-white ${
                scheme.status === "Approved" ? "bg-green-500" :
                scheme.status === "Pending" ? "bg-yellow-500" :
                "bg-red-500"
              }`}
            >
              {scheme.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplicationStatusPage;
