import React from "react";
import { useParams } from "react-router-dom";
import {Link} from "react-router-dom"

const CategoryPage = () => {
  const { categoryName } = useParams(); // Get category from URL

  // Dummy data for testing
  const dummySchemes = [
    { id: 1, name: "Scheme A", description: "Description of Scheme A" },
    { id: 2, name: "Scheme B", description: "Description of Scheme B" },
    { id: 3, name: "Scheme C", description: "Description of Scheme C" }
  ];

  return (
    <div className="min-h-screen bg-[#30347c] text-white p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center">{categoryName} Schemes</h1>

      <div className="mt-8 w-full max-w-2xl space-y-4">
        {dummySchemes.map((scheme) => (
          <Link to={`/scheme/${scheme.id}`} key={scheme.id} className="block w-full ">
              <div key={scheme.id} className="bg-gray-100 text-[#30347c] p-6 rounded-lg shadow-md w-full max-w-2xl flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold">{scheme.name}</h2>
                    <p className="mt-2">{scheme.description}</p>
                </div>
                <button className="bg-[#30347c] text-white px-6 py-2 rounded-lg hover:bg-[#1f255e] transition">
                  Apply
                </button>
              </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
