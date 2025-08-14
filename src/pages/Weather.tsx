import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Sun, 
  Cloud, 
  CloudRain, 
  Wind, 
  Droplets, 
  Eye, 
  Thermometer,
  MapPin,
  RefreshCw
} from 'lucide-react';

const Weather: React.FC = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const currentWeather = {
    location: 'Farm Location',
    temperature: 24,
    condition: 'Partly Cloudy',
    humidity: 68,
    windSpeed: 12,
    visibility: 10,
    uvIndex: 6,
    pressure: 1013
  };

  const hourlyForecast = [
    { time: '12 PM', temp: 24, icon: Sun, condition: 'Sunny' },
    { time: '1 PM', temp: 26, icon: Sun, condition: 'Sunny' },
    { time: '2 PM', temp: 27, icon: Cloud, condition: 'Cloudy' },
    { time: '3 PM', temp: 25, icon: CloudRain, condition: 'Light Rain' },
    { time: '4 PM', temp: 23, icon: CloudRain, condition: 'Rain' },
    { time: '5 PM', temp: 22, icon: Cloud, condition: 'Cloudy' },
  ];

  const weeklyForecast = [
    { day: 'Today', high: 27, low: 18, icon: Sun, condition: 'Sunny', rain: 0 },
    { day: 'Tomorrow', high: 25, low: 16, icon: CloudRain, condition: 'Light Rain', rain: 20 },
    { day: 'Wednesday', high: 23, low: 15, icon: CloudRain, condition: 'Rain', rain: 80 },
    { day: 'Thursday', high: 26, low: 17, icon: Cloud, condition: 'Cloudy', rain: 10 },
    { day: 'Friday', high: 28, low: 19, icon: Sun, condition: 'Sunny', rain: 0 },
    { day: 'Saturday', high: 29, low: 20, icon: Sun, condition: 'Sunny', rain: 0 },
    { day: 'Sunday', high: 27, low: 18, icon: Cloud, condition: 'Partly Cloudy', rain: 5 },
  ];

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="pb-20 px-4"
    >
      {/* Header */}
      <div className="pt-12 pb-6 flex items-center justify-between">
        <div className="flex items-center">
          <MapPin className="w-5 h-5 text-gray-500 mr-2" />
          <h1 className="text-xl font-bold text-gray-900">{currentWeather.location}</h1>
        </div>
        <motion.button
          onClick={handleRefresh}
          whileTap={{ scale: 0.95 }}
          className="p-2 text-gray-500 hover:text-primary-500 transition-colors"
        >
          <RefreshCw className={`w-5 h-5 ${isRefreshing ? 'animate-spin' : ''}`} />
        </motion.button>
      </div>

      {/* Current Weather */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl p-6 text-white mb-6"
      >
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-primary-100 text-sm mb-1">Current Weather</p>
            <p className="text-3xl font-bold">{currentWeather.temperature}°C</p>
            <p className="text-primary-100">{currentWeather.condition}</p>
          </div>
          <Sun className="w-16 h-16 text-yellow-300" />
        </div>
        
        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-primary-400">
          <div className="text-center">
            <Droplets className="w-5 h-5 mx-auto mb-1 text-primary-200" />
            <p className="text-xs text-primary-200">Humidity</p>
            <p className="font-semibold">{currentWeather.humidity}%</p>
          </div>
          <div className="text-center">
            <Wind className="w-5 h-5 mx-auto mb-1 text-primary-200" />
            <p className="text-xs text-primary-200">Wind</p>
            <p className="font-semibold">{currentWeather.windSpeed} km/h</p>
          </div>
          <div className="text-center">
            <Eye className="w-5 h-5 mx-auto mb-1 text-primary-200" />
            <p className="text-xs text-primary-200">Visibility</p>
            <p className="font-semibold">{currentWeather.visibility} km</p>
          </div>
        </div>
      </motion.div>

      {/* Hourly Forecast */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-6"
      >
        <h2 className="text-lg font-semibold text-gray-900 mb-3">Hourly Forecast</h2>
        <div className="flex space-x-3 overflow-x-auto pb-2">
          {hourlyForecast.map((hour, index) => {
            const Icon = hour.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="bg-white rounded-xl p-3 shadow-sm border border-gray-100 flex-shrink-0 min-w-[80px] text-center"
              >
                <p className="text-xs text-gray-500 mb-2">{hour.time}</p>
                <Icon className="w-6 h-6 mx-auto mb-2 text-primary-500" />
                <p className="font-semibold text-gray-900">{hour.temp}°</p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Weekly Forecast */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-6"
      >
        <h2 className="text-lg font-semibold text-gray-900 mb-3">7-Day Forecast</h2>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          {weeklyForecast.map((day, index) => {
            const Icon = day.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className={`flex items-center justify-between p-4 ${
                  index !== weeklyForecast.length - 1 ? 'border-b border-gray-100' : ''
                }`}
              >
                <div className="flex items-center flex-1">
                  <Icon className="w-6 h-6 text-primary-500 mr-3" />
                  <div>
                    <p className="font-medium text-gray-900">{day.day}</p>
                    <p className="text-sm text-gray-500">{day.condition}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  {day.rain > 0 && (
                    <div className="flex items-center text-blue-500">
                      <Droplets className="w-4 h-4 mr-1" />
                      <span className="text-sm">{day.rain}%</span>
                    </div>
                  )}
                  <div className="text-right">
                    <span className="font-semibold text-gray-900">{day.high}°</span>
                    <span className="text-gray-500 ml-1">{day.low}°</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Weather Alerts */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mb-6"
      >
        <h2 className="text-lg font-semibold text-gray-900 mb-3">Farming Tips</h2>
        <div className="space-y-3">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
            <div className="flex items-start">
              <CloudRain className="w-5 h-5 text-blue-500 mr-2 mt-0.5" />
              <div>
                <p className="font-medium text-blue-900">Rain Expected</p>
                <p className="text-sm text-blue-700">Heavy rain expected Wednesday. Consider covering sensitive plants.</p>
              </div>
            </div>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
            <div className="flex items-start">
              <Sun className="w-5 h-5 text-yellow-500 mr-2 mt-0.5" />
              <div>
                <p className="font-medium text-yellow-900">High UV Index</p>
                <p className="text-sm text-yellow-700">UV index is high today. Ensure adequate shade for workers.</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Weather;