import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const calculateTimeInfo = (dob, expectancy, wastedHours) => {
  const birthDate = new Date(dob);
  const now = new Date();
  const endDate = new Date(
    birthDate.getFullYear() + parseInt(expectancy),
    birthDate.getMonth(),
    birthDate.getDate()
  );

  if (now >= endDate) {
    return {
      timeInfo: {
        years: {
          remaining: 0,
          remainingWithWaste: 0,
          total: expectancy,
          wasted: 0,
        },
        months: {
          remaining: 0,
          remainingWithWaste: 0,
          total: expectancy * 12,
          wasted: 0,
        },
        weeks: {
          remaining: 0,
          remainingWithWaste: 0,
          total: expectancy * 52,
          wasted: 0,
        },
        days: {
          remaining: 0,
          remainingWithWaste: 0,
          total: expectancy * 365,
          wasted: 0,
        },
        hours: {
          remaining: 0,
          remainingWithWaste: 0,
          total: expectancy * 365 * 24,
          wasted: 0,
        },
        minutes: {
          remaining: 0,
          remainingWithWaste: 0,
          total: expectancy * 365 * 24 * 60,
          wasted: 0,
        },
        seconds: {
          remaining: 0,
          remainingWithWaste: 0,
          total: expectancy * 365 * 24 * 60 * 60,
          wasted: 0,
        },
      },
      age: expectancy,
    };
  }

  const timeDiff = endDate - now;
  const totalSeconds = Math.floor(timeDiff / 1000);
  const totalMinutes = Math.floor(totalSeconds / 60);
  const totalHours = Math.floor(totalMinutes / 60);
  const totalDays = Math.floor(totalHours / 24);
  const totalWeeks = Math.floor(totalDays / 7);
  const totalMonths = Math.floor(totalDays / 30.44);
  const years = totalDays / 365.25;

  const ageDate = new Date(now - birthDate);
  const age = Math.abs(ageDate.getUTCFullYear() - 1970);

  const wastedSeconds = wastedHours * 3600 * totalDays;
  const wastedMinutes = wastedHours * 60 * totalDays;
  const wastedHoursTotal = wastedHours * totalDays;
  const wastedDays = (wastedHours * totalDays) / 24;
  const wastedWeeks = wastedDays / 7;
  const wastedMonths = wastedDays / 30.44;
  const wastedYears = wastedDays / 365.25;

  return {
    timeInfo: {
      years: {
        remaining: years,
        remainingWithWaste: Math.max(0, years - wastedYears),
        total: expectancy,
        wasted: wastedYears,
      },
      months: {
        remaining: Math.floor(totalMonths),
        remainingWithWaste: Math.floor(Math.max(0, totalMonths - wastedMonths)),
        total: expectancy * 12,
        wasted: wastedMonths,
      },
      weeks: {
        remaining: Math.floor(totalWeeks),
        remainingWithWaste: Math.floor(Math.max(0, totalWeeks - wastedWeeks)),
        total: expectancy * 52,
        wasted: wastedWeeks,
      },
      days: {
        remaining: Math.floor(totalDays),
        remainingWithWaste: Math.floor(Math.max(0, totalDays - wastedDays)),
        total: expectancy * 365,
        wasted: wastedDays,
      },
      hours: {
        remaining: Math.floor(totalHours),
        remainingWithWaste: Math.floor(
          Math.max(0, totalHours - wastedHoursTotal)
        ),
        total: expectancy * 365 * 24,
        wasted: wastedHoursTotal,
      },
      minutes: {
        remaining: Math.floor(totalMinutes),
        remainingWithWaste: Math.floor(
          Math.max(0, totalMinutes - wastedMinutes)
        ),
        total: expectancy * 365 * 24 * 60,
        wasted: wastedMinutes,
      },
      seconds: {
        remaining: Math.floor(totalSeconds),
        remainingWithWaste: Math.floor(
          Math.max(0, totalSeconds - wastedSeconds)
        ),
        total: expectancy * 365 * 24 * 60 * 60,
        wasted: wastedSeconds,
      },
    },
    age,
  };
};
