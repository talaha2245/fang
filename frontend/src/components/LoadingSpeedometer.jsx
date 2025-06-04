import React, { useState, useEffect, useRef } from 'react';

function LoadingSpeedometer({ value, label }) {
  const [currentValue, setCurrentValue] = useState(0);
  const [color, setColor] = useState('red');
  const animationRef = useRef(null);

  useEffect(() => {
    let startValue = 0;
    let startTime = null;
    const duration = 1500;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;

      if (elapsed < duration) {
        const progress = elapsed / duration;
        setCurrentValue(startValue + (value - startValue) * progress);
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setCurrentValue(value);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationRef.current);
  }, [value]);

  useEffect(() => {
    if (currentValue <= 30) {
      setColor('red');
    } else if (currentValue <= 60) {
      setColor('blue');
    } else {
      setColor('green');
    }
  }, [currentValue]);

  const r = 80;
  const cx = 100;
  const cy = 100;
  const circumference = 2 * Math.PI * r;
  const clampedValue = Math.min(Math.max(currentValue, 0), 100);
  const strokeDashoffset = circumference * (1 - clampedValue / 100);

  const isLoading = currentValue < value;

  return (
    <div className="flex flex-col items-center">
      <svg width="200" height="200">
        <circle
          cx={cx}
          cy={cy}
          r={r}
          fill="none"
          stroke="#e0e0e0"
          strokeWidth="10"
        />
        <circle
          cx={cx}
          cy={cy}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth="10"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          transform={`rotate(-90 ${cx} ${cy})`}
          strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 0.05s ease-in-out, stroke 0.5s ease-in-out' }}
        />
        <text
          x={cx}
          y={cy}
          textAnchor="middle"
          dy=".3em"
          fontSize="32"
          fill={color}
          fontWeight="bold"
        >
          {Math.round(clampedValue)}%
        </text>
      </svg>
      <div className="mt-2 text-lg font-semibold text-gray-700">
        {isLoading ? "Please wait, fetching details..." : label}
      </div>
    </div>
  );
}

export default LoadingSpeedometer;