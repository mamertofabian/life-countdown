import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import { Button } from "./components/ui/button";
import { Clock, Timer } from "lucide-react";

const LifeCountdown = () => {
  const [timeInfo, setTimeInfo] = useState({
    years: { remaining: 0, remainingWithWaste: 0, total: 0, wasted: 0 },
    months: { remaining: 0, remainingWithWaste: 0, total: 0, wasted: 0 },
    weeks: { remaining: 0, remainingWithWaste: 0, total: 0, wasted: 0 },
    days: { remaining: 0, remainingWithWaste: 0, total: 0, wasted: 0 },
    hours: { remaining: 0, remainingWithWaste: 0, total: 0, wasted: 0 },
    minutes: { remaining: 0, remainingWithWaste: 0, total: 0, wasted: 0 },
    seconds: { remaining: 0, remainingWithWaste: 0, total: 0, wasted: 0 },
  });
  const [currentAge, setCurrentAge] = useState(0);
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [lifeExpectancy, setLifeExpectancy] = useState(80);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timeWasterHours, setTimeWasterHours] = useState(0);

  const calculateTimeInfo = (dob, expectancy, wastedHours) => {
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
    const years = Math.floor(totalDays / 365.25);

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
          remaining: Math.floor(years),
          remainingWithWaste: Math.floor(Math.max(0, years - wastedYears)),
          total: expectancy,
          wasted: wastedYears,
        },
        months: {
          remaining: Math.floor(totalMonths),
          remainingWithWaste: Math.floor(
            Math.max(0, totalMonths - wastedMonths)
          ),
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

  useEffect(() => {
    if (dateOfBirth && lifeExpectancy) {
      const timer = setInterval(() => {
        const { timeInfo, age } = calculateTimeInfo(
          dateOfBirth,
          lifeExpectancy,
          timeWasterHours
        );
        setTimeInfo(timeInfo);
        setCurrentAge(age);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [dateOfBirth, lifeExpectancy, timeWasterHours]);

  useEffect(() => {
    let interval;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimerSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  const handleDateChange = (e) => {
    setDateOfBirth(e.target.value);
  };

  const handleExpectancyChange = (e) => {
    setLifeExpectancy(e.target.value);
  };

  const handleTimerToggle = () => {
    if (isTimerRunning) {
      setIsTimerRunning(false);
      setTimerSeconds(0);
    } else {
      setIsTimerRunning(true);
    }
  };

  const handleTimeWasterChange = (e) => {
    setTimeWasterHours(parseFloat(e.target.value));
  };

  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  const formatNumber = (number) => {
    return number.toLocaleString(undefined, { maximumFractionDigits: 2 });
  };

  const getProgressColor = (percentage) => {
    const hue = ((percentage / 100) * 120).toString(10);
    return `hsl(${hue}, 100%, 50%)`;
  };

  const TimeUnit = ({ value, unit, timeWasterHours }) => {
    const remainingPercentage = (value.remainingWithWaste / value.total) * 100;
    const progressColor = getProgressColor(remainingPercentage);

    return (
      <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-4 rounded-lg shadow-lg text-white transition-all duration-300 hover:scale-105">
        <div className="flex items-center justify-between mb-3">
          <Clock className="w-5 h-5" />
          <span className="text-sm font-medium uppercase">{unit}</span>
        </div>
        <div className="space-y-2">
          <p className="text-2xl font-bold">
            {formatNumber(value.remaining)} {unit} remaining
          </p>
          {value.wasted > 0 && (
            <div className="text-s text-red-300 mt-2">
              <p>
                {formatNumber(timeWasterHours)} hour/day wastage results in:{" "}
              </p>
              <p>
                <span className="font-semibold text-red-400">
                  {formatNumber(value.wasted)} {unit.toLowerCase()} wasted
                </span>
              </p>
            </div>
          )}
          <p className="text-sm font-semibold text-indigo-200 mt-2">
            Effective remaining {unit.toLowerCase()}:
          </p>
          <p className="text-2xl font-bold text-yellow-300">
            {formatNumber(value.remainingWithWaste)} {unit}
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

  return (
    <div className="w-full min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-5xl mx-auto bg-white shadow-2xl">
        <CardHeader className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6">
          <CardTitle className="text-3xl font-bold text-center flex items-center justify-center space-x-2">
            <Clock className="w-8 h-8" />
            <span>Life Countdown</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <Label
                htmlFor="dob"
                className="text-lg font-medium text-gray-700"
              >
                Date of Birth
              </Label>
              <Input
                type="date"
                id="dob"
                value={dateOfBirth}
                onChange={handleDateChange}
                className="mt-1 w-full"
              />
            </div>
            <div>
              <Label
                htmlFor="expectancy"
                className="text-lg font-medium text-gray-700"
              >
                Life Expectancy (years)
              </Label>
              <Input
                type="number"
                id="expectancy"
                value={lifeExpectancy}
                onChange={handleExpectancyChange}
                min="1"
                max="150"
                className="mt-1 w-full"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gradient-to-r from-green-400 to-blue-500 p-4 rounded-lg shadow-lg text-white flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Timer className="w-5 h-5" />
                <span className="text-lg font-medium">Timer</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-3xl font-bold">
                  {formatTime(timerSeconds)}
                </span>
                <Button
                  onClick={handleTimerToggle}
                  className="bg-white text-blue-500 hover:bg-blue-100"
                >
                  {isTimerRunning ? "Stop" : "Go"}
                </Button>
              </div>
            </div>
            {dateOfBirth && (
              <div className="bg-gradient-to-r from-yellow-400 to-red-500 p-4 rounded-lg shadow-lg text-white flex items-center justify-between">
                <span className="text-lg font-medium">Current Age</span>
                <span className="text-3xl font-bold">{currentAge} years</span>
              </div>
            )}
          </div>
          <div className="mb-6">
            <Label
              htmlFor="timeWaster"
              className="text-lg font-medium text-gray-700"
            >
              Daily Time Potentially Wasted in hours
            </Label>
            <Input
              type="number"
              id="timeWaster"
              value={timeWasterHours}
              onChange={handleTimeWasterChange}
              min="0"
              step="0.1"
              className="mt-1 w-full"
            />
          </div>
          {dateOfBirth && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-6">
              <TimeUnit
                value={timeInfo.years}
                unit="Years"
                timeWasterHours={timeWasterHours}
              />
              <TimeUnit
                value={timeInfo.months}
                unit="Months"
                timeWasterHours={timeWasterHours}
              />
              <TimeUnit
                value={timeInfo.weeks}
                unit="Weeks"
                timeWasterHours={timeWasterHours}
              />
              <TimeUnit
                value={timeInfo.days}
                unit="Days"
                timeWasterHours={timeWasterHours}
              />
              <TimeUnit
                value={timeInfo.hours}
                unit="Hours"
                timeWasterHours={timeWasterHours}
              />
              <TimeUnit
                value={timeInfo.minutes}
                unit="Minutes"
                timeWasterHours={timeWasterHours}
              />
              <TimeUnit
                value={timeInfo.seconds}
                unit="Seconds"
                timeWasterHours={timeWasterHours}
              />
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default LifeCountdown;
