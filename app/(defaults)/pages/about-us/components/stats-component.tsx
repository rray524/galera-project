import React from "react";

interface StatItemProps {
  value: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ value, label }) => {
  return (
    <div className="text-center">
      <h2 className="text-6xl font-bold text-yellow-500">
        {value}
        <sup>+</sup>
      </h2>
      <p className="text-xl font-medium text-gray-700 dark:text-gray-300">
        {label}
      </p>
    </div>
  );
};

const StatsSection: React.FC = () => {
  return (
    <div className="max-w-[1320px] mx-auto relative">
      <div
        className="flex justify-around  py-10 gap-20 flex-col md:flex-row"
        data-testid="stats-container"
      >
        <StatItem value="10" label="Years Experience" />
        <StatItem value="300" label="New Properties" />
        <StatItem value="100" label="Happy Customers" />
        <StatItem value="20" label="Awards Win" />
      </div>
    </div>
  );
};

export default StatsSection;
