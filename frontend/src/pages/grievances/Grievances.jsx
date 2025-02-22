import React, { useState } from "react";

const GrievancesPage = () => {
  // Dummy applied schemes (will later come from backend)
  const appliedSchemes = ["Scheme A", "Scheme B", "Scheme C"];

  // Form State
  const [formData, setFormData] = useState({
    name: "User Name", // Auto-filled (Later from Auth)
    scheme: "",
    description: "",
    file: null,
  });

  const [submitted, setSubmitted] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle File Upload
  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Grievance Submitted:", formData);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#30347c] text-white p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center">Submit a Grievance</h1>

      <div className="mt-8 w-full max-w-2xl bg-white text-[#30347c] p-6 rounded-lg shadow-md">
        {submitted ? (
          <p className="text-green-500 text-lg font-bold">Grievance submitted successfully!</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Field (Auto-filled) */}
            <div>
              <label className="block text-sm font-bold">Name:</label>
              <input
                type="text"
                value={formData.name}
                disabled
                className="w-full p-2 border border-gray-300 rounded-lg bg-gray-100"
              />
            </div>

            {/* Scheme Dropdown */}
            <div>
              <label className="block text-sm font-bold">Select Scheme:</label>
              <select
                name="scheme"
                value={formData.scheme}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-lg"
              >
                <option value="">Choose a scheme</option>
                {appliedSchemes.map((scheme, index) => (
                  <option key={index} value={scheme}>{scheme}</option>
                ))}
              </select>
            </div>

            {/* Grievance Description */}
            <div>
              <label className="block text-sm font-bold">Grievance Description:</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-lg h-32"
              />
            </div>

            {/* File Upload */}
            <div>
              <label className="block text-sm font-bold">Upload Supporting Document (Optional):</label>
              <input
                type="file"
                accept=".pdf,.jpg,.png"
                onChange={handleFileChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>

            {/* Submit Button */}
            <button type="submit" className="w-full bg-[#30347c] text-white p-2 rounded-lg hover:bg-[#1f255e] transition">
              Submit Grievance
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default GrievancesPage;
