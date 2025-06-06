import React, { useEffect, useState } from 'react';
import Header from '../Header';

const Rankings = () => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [count,setcount] = useState(0)

  const fetchRanking = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(`https://fang-nugo-talahas-projects.vercel.app/ranking`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.details || 'Failed to fetch rankings');
      }

      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error('Error fetching ranking:', error);
      setError(error.message || 'Failed to fetch rankings');
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchRanking();
  }, [count])
  

  const handleFetch = () => {
    setcount(count+1)
  };

  const renderTable = (title, data) => {
    return (
      <div className="bg-white shadow-md rounded-lg p-4 mb-4">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">{title}</h2>
        {data && data.length > 0 ? (
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="p-2 text-left">Rank</th>
                <th className="p-2 text-left">Username</th>
                <th className="p-2 text-left">Score</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row) => (
                <tr
                  key={row.rank}
                  className="even:bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <td className="p-2">
                    {row.rank <= 3 ? (
                      <span>
                        {row.rank}{' '}
                        {row.rank === 1 ? '🥇' : row.rank === 2 ? '🥈' : '🥉'}
                      </span>
                    ) : (
                      row.rank
                    )}
                  </td>
                  <td className="p-2">{row.username}</td>
                  <td className="p-2">{row.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-gray-500 italic text-center">No data available</p>
        )}
      </div>
    );
  };

  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-900">
          Rankings
        </h1>
        <center><button
          onClick={handleFetch}
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-2xl p-3 mb-6 transition-colors disabled:opacity-50"
          disabled={loading}
        >
          {loading ? 'Loading...' : '😳 Refresh score'}
        </button></center>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
            {error}
          </div>
        )}

        {loading ? (
          <p className="text-center text-gray-600">Loading rankings...</p>
        ) : result ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {renderTable('LeetCode Rank', result.leetcodeRank)}
            {renderTable('Dev Rank', result.devRank)}
            {renderTable('Total Rank', result.totalRank)}
          </div>
        ) : (
          <p className="text-center text-gray-500">
            Click the button above to fetch rankings
          </p>
        )}
      </div>
    </>
  );
};

export default Rankings;