import React from 'react';

const AmazingLoadingComponent = () => {
  const svgStyle = { transformOrigin: '50% 50%' };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(to right, #3b82f6, #8b5cf6)', // blue-500 to purple-500
      }}
    >
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(-360deg); }
        }
        @keyframes color-change {
          0% { stroke: white; }
          50% { stroke: yellow; }
          100% { stroke: white; }
        }
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.2); }
          100% { transform: scale(1); }
        }
      `}</style>

      <svg
        viewBox="0 0 100 100"
        role="status"
        aria-label="Loading"
        style={{ width: '8rem', height: '8rem' }}
      >
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="white"
          strokeWidth="5"
          fill="none"
          style={{
            ...svgStyle,
            animation: 'spin 4s linear infinite',
          }}
        />
        <circle
          cx="50"
          cy="50"
          r="35"
          stroke="white"
          strokeWidth="5"
          fill="none"
          style={{
            ...svgStyle,
            animation: 'spin-reverse 2s linear infinite, color-change 3s ease-in-out infinite',
          }}
        />
        <circle
          cx="50"
          cy="50"
          r="25"
          stroke="white"
          strokeWidth="5"
          fill="none"
          style={{
            ...svgStyle,
            animation: 'spin 1s linear infinite, pulse 1.5s ease-in-out infinite',
          }}
        />
      </svg>

      <p
        style={{
          marginTop: '1rem',
          color: 'white',
          fontSize: '1.125rem',
          fontWeight: 500,
        }}
      >
        Loading your experience...
      </p>
    </div>
  );
};

export default AmazingLoadingComponent;
