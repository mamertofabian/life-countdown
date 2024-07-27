import { Clock } from "lucide-react";

const formatNumber = (number) => {
  return number.toLocaleString(undefined, { maximumFractionDigits: 1 });
};

const getProgressColor = (percentage) => {
  const hue = ((percentage / 100) * 120).toString(10);
  return `hsl(${hue}, 100%, 50%)`;
};

export const TimeUnit = ({ value, unit, timeWasterHours }) => {
  const remainingPercentage = (value.remainingWithWaste / value.total) * 100;
  const progressColor = getProgressColor(remainingPercentage);

  return (
    <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-4 rounded-lg shadow-lg text-white transition-all duration-300 hover:scale-105 hover:animate-pulse">
      <div className="flex items-center justify-between mb-3">
        <Clock className="w-5 h-5" />
        <span className="text-sm font-medium uppercase">{unit}</span>
      </div>
      <div className="space-y-2">
        <p className="text-2xl font-bold">
          {formatNumber(value.remaining)} {unit} remaining
        </p>
        <div className="text-s text-red-300 mt-2">
          <p>{formatNumber(timeWasterHours)} hours/day wastage results in: </p>
          <p className="text-xl">
            <span className="font-semibold text-red-400">
              {formatNumber(value.wasted)} {unit.toLowerCase()} wasted
            </span>
          </p>
        </div>
        <p className="text-2xl font-bold text-yellow-300">
          {formatNumber(value.remainingWithWaste)} Effective{" "}
          {unit.toLowerCase()} remaining
        </p>
        <p className="text-xs text-indigo-200 mt-1">
          of {formatNumber(value.total)} total {unit.toLowerCase()} of life
          expectancy
        </p>
      </div>
      <div className="w-full bg-indigo-200 rounded-full h-4 mt-3 overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{
            width: `${remainingPercentage}%`,
            backgroundColor: progressColor,
          }}
        ></div>
      </div>
      <p className="text-xs text-center mt-2">
        {remainingPercentage.toFixed(1)}% remaining
      </p>
    </div>
  );
};
