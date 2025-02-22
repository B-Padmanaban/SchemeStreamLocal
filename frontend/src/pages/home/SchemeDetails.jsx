import React from "react";
import { useParams } from "react-router-dom";

const SchemeDetails = () => {
  const { schemeId } = useParams(); // Get the scheme ID from the URL

  // Placeholder data (Replace this with actual backend data later)
  const scheme = {
    name: "Sample Scheme",
    description: "This is a brief description of the scheme.",
    eligibility: "Must be a resident of Tamil Nadu and meet the criteria.",
  };

  return (
    <div className="min-h-screen bg-[#30347c] text-white p-8">
      <h1 className="text-4xl font-bold">{scheme.name}</h1>
      <p className="text-lg mt-4">{scheme.description}</p>

      <h2 className="text-2xl font-semibold mt-6">Eligibility Criteria:</h2>
      <p className="text-lg">{scheme.eligibility}</p>

      <button className="mt-6 bg-white text-[#30347c] px-6 py-2 rounded-lg hover: cursor-pointer text-red">
        Apply Now
      </button>
    </div>
  );
};

export default SchemeDetails;
