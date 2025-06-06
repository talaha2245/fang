import React, { useState, useEffect } from 'react';
import LoadingSpeedometer from './LoadingSpeedometer';

function EnterDetailsForm({sendingdata , submitedform } ) {
  const [formData, setFormData] = useState({
    leetcode: '',
    collegeTier: '',
    knowDevelopment: false,
    haveProjects: false,
    haveCsFundamentals: false,
    doneInternships: false,
  });
  const [isVisible, setIsVisible] = useState(false);
  const [result, setResult] = useState(null);
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = async (e) => {
    submitedform(1)
    e.preventDefault();
    try {
      const response = await fetch(`https://fang-nugo-talahas-projects.vercel.app/fetch`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const data = await response.json();
        sendingdata(data)
        setResult(data);
        // console.log('Form submitted successfully:', formData);
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };


  return (
    <div
      className={`bg-gray-100 rounded-lg shadow-lg p-8 max-w-md w-full transform transition-all duration-500 ease-in-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
    >
      <h1 className="text-2xl font-bold mb-6 text-center text-blue-700 animate-pulse">
        Enter Details
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="leetcode"
            className="block font-medium mb-2 text-gray-700 transition-colors duration-200 hover:text-blue-600"
          >
            LeetCode Username
          </label>
          <input
            id="leetcode"
            type="text"
            placeholder="Enter your LeetCode username"
            value={formData.leetcode}
            onChange={(e) => setFormData({ ...formData, leetcode: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
          />
        </div>

        <div>
          <span className="block font-medium mb-2 text-gray-700">College Tier</span>
          <div className="flex flex-wrap gap-4">
            {['tier1', 'tier2', 'tier3'].map((tier) => (
              <label
                key={tier}
                className="flex items-center gap-2 cursor-pointer group"
              >
                <input
                  type="radio"
                  id={tier}
                  name="collegeTier"
                  value={tier}
                  checked={formData.collegeTier === tier}
                  onChange={() => setFormData({ ...formData, collegeTier: tier })}
                  className="accent-blue-600 transition-transform duration-200 group-hover:scale-110"
                />
                <span className="text-gray-700 group-hover:text-blue-600 transition-colors duration-200">
                  {tier.replace('tier', 'Tier ')}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {[
            { id: 'knowDevelopment', label: 'I know development', key: 'knowDevelopment' },
            { id: 'haveProjects', label: 'Have projects', key: 'haveProjects' },
            { id: 'haveCsFundamentals', label: 'Have CS fundamentals', key: 'haveCsFundamentals' },
            { id: 'doneInternships', label: 'Done internships', key: 'doneInternships' },
          ].map((item) => (
            <div key={item.id} className="flex items-center gap-2">
              <input
                type="checkbox"
                id={item.id}
                checked={formData[item.key]}
                onChange={(e) => setFormData({ ...formData, [item.key]: e.target.checked })}
                className="accent-blue-600 h-5 w-5 transition-transform duration-200 hover:scale-110"
              />
              <label
                htmlFor={item.id}
                className="text-gray-700 transition-colors duration-200 hover:text-blue-600"
              >
                {item.label}
              </label>
            </div>
          ))}
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg active:scale-95"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default EnterDetailsForm;