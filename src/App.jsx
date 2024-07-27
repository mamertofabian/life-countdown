import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import { Button } from "./components/ui/button";
import { Clock, Timer } from "lucide-react";
import { calculateTimeInfo } from "./lib/utils";
import { TimeUnit } from "./components/TimeUnit";
import { PositiveAspectCard } from "./components/PositiveCard";

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
  const [meaningfulActivity, setMeaningfulActivity] = useState("");

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

  const handleMeaningfulActivityChange = (e) => {
    setMeaningfulActivity(e.target.value);
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
            <div>
              <Label
                htmlFor="meaningfulActivity"
                className="text-lg font-medium text-gray-700"
              >
                Meaningful Activity
              </Label>
              <Input
                type="text"
                id="meaningfulActivity"
                value={meaningfulActivity}
                onChange={handleMeaningfulActivityChange}
                placeholder="e.g., learning, exercising"
                className="mt-2 w-full"
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
          {dateOfBirth && (
            <div className="mt-8">
              <PositiveAspectCard
                hours={timeWasterHours}
                meaningfulActivity={meaningfulActivity}
              />
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default LifeCountdown;
