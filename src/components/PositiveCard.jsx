import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Sun, Heart, Clock } from "lucide-react";

export const PositiveAspectCard = ({ hours, meaningfulActivity }) => (
  <Card className="bg-gradient-to-r from-yellow-300 via-red-300 to-pink-300 p-6 rounded-lg shadow-lg text-gray-800 hover:shadow-2xl transition-all duration-300">
    <CardHeader className="p-0 mb-6">
      <CardTitle className="text-3xl sm:text-4xl font-bold text-center flex items-center justify-center space-x-3">
        <Sun className="w-10 h-10 text-yellow-500 animate-spin-slow" />
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
          Time Well Spent
        </span>
      </CardTitle>
    </CardHeader>
    <CardContent className="p-0 space-y-6">
      <p className="text-xl sm:text-2xl text-center font-semibold">
        Redirecting {hours} hours/day to{" "}
        <span className="text-indigo-700">{meaningfulActivity}</span>:
      </p>
      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="bg-white bg-opacity-50 rounded-lg p-4 transform hover:scale-105 transition-transform duration-200">
          <p className="text-4xl sm:text-5xl font-bold text-green-600">
            {hours * 7}
          </p>
          <p className="text-sm sm:text-base font-medium mt-2">hours/week</p>
        </div>
        <div className="bg-white bg-opacity-50 rounded-lg p-4 transform hover:scale-105 transition-transform duration-200">
          <p className="text-4xl sm:text-5xl font-bold text-blue-600">
            {hours * 30}
          </p>
          <p className="text-sm sm:text-base font-medium mt-2">hours/month</p>
        </div>
        <div className="bg-white bg-opacity-50 rounded-lg p-4 transform hover:scale-105 transition-transform duration-200">
          <p className="text-4xl sm:text-5xl font-bold text-purple-600">
            {hours * 365}
          </p>
          <p className="text-sm sm:text-base font-medium mt-2">hours/year</p>
        </div>
      </div>
      <div className="text-center mt-8">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <Heart className="w-8 h-8 text-red-500 animate-pulse" />
          <p className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-pink-500">
            Adding True Happiness
          </p>
          <Heart className="w-8 h-8 text-red-500 animate-pulse" />
        </div>
        <div className="flex items-center justify-center space-x-2">
          <Clock className="w-6 h-6 text-indigo-600" />
          <p className="text-lg sm:text-xl font-medium text-indigo-700">
            Resulting in infinite years of life expectancy
          </p>
        </div>
      </div>
    </CardContent>
  </Card>
);
