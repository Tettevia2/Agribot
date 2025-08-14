import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Settings, 
  Bell, 
  Shield, 
  HelpCircle, 
  LogOut,
  Edit3,
  MapPin,
  Calendar,
  Award,
  TrendingUp,
  Leaf
} from 'lucide-react';

const Profile: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);

  const userStats = [
    { label: 'Crops Grown', value: '24', icon: Leaf, color: 'text-green-500' },
    { label: 'Days Active', value: '156', icon: Calendar, color: 'text-blue-500' },
    { label: 'Success Rate', value: '92%', icon: TrendingUp, color: 'text-purple-500' },
    { label: 'Achievements', value: '8', icon: Award, color: 'text-yellow-500' },
  ];

  const menuItems = [
    { icon: Settings, label: 'Settings', description: 'App preferences' },
    { icon: Bell, label: 'Notifications', description: 'Manage alerts' },
    { icon: Shield, label: 'Privacy', description: 'Data & security' },
    { icon: HelpCircle, label: 'Help & Support', description: 'Get assistance' },
  ];

  const achievements = [
    { title: 'First Harvest', description: 'Completed your first successful harvest', earned: true },
    { title: 'Green Thumb', description: 'Maintained 5 healthy crops simultaneously', earned: true },
    { title: 'Weather Watcher', description: 'Used weather forecasts for 30 days', earned: true },
    { title: 'AI Assistant Pro', description: 'Asked 100 questions to the AI', earned: false },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="pb-20 px-4"
    >
      {/* Header */}
      <div className="pt-12 pb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Profile</h1>
        <motion.button
          onClick={() => setIsEditing(!isEditing)}
          whileTap={{ scale: 0.95 }}
          className="p-2 text-gray-500 hover:text-primary-500 transition-colors"
        >
          <Edit3 className="w-5 h-5" />
        </motion.button>
      </div>

      {/* Profile Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl p-6 text-white mb-6"
      >
        <div className="flex items-center mb-4">
          <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
            <User className="w-8 h-8 text-white" />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold">John Farmer</h2>
            <p className="text-primary-100">Organic Farmer</p>
            <div className="flex items-center mt-1">
              <MapPin className="w-4 h-4 text-primary-200 mr-1" />
              <span className="text-sm text-primary-200">California, USA</span>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-primary-400">
          <div>
            <p className="text-primary-200 text-sm">Member since</p>
            <p className="font-semibold">January 2024</p>
          </div>
          <div>
            <p className="text-primary-200 text-sm">Farm size</p>
            <p className="font-semibold">2.5 acres</p>
          </div>
        </div>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-6"
      >
        <h2 className="text-lg font-semibold text-gray-900 mb-3">Your Stats</h2>
        <div className="grid grid-cols-2 gap-3">
          {userStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="bg-white rounded-xl p-4 shadow-sm border border-gray-100"
              >
                <div className="flex items-center justify-between mb-2">
                  <Icon className={`w-5 h-5 ${stat.color}`} />
                  <span className="text-2xl font-bold text-gray-900">{stat.value}</span>
                </div>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Achievements */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-6"
      >
        <h2 className="text-lg font-semibold text-gray-900 mb-3">Achievements</h2>
        <div className="space-y-3">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className={`bg-white rounded-lg p-3 shadow-sm border border-gray-100 flex items-center ${
                !achievement.earned ? 'opacity-50' : ''
              }`}
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${
                achievement.earned ? 'bg-yellow-100' : 'bg-gray-100'
              }`}>
                <Award className={`w-5 h-5 ${
                  achievement.earned ? 'text-yellow-500' : 'text-gray-400'
                }`} />
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-900">{achievement.title}</p>
                <p className="text-sm text-gray-500">{achievement.description}</p>
              </div>
              {achievement.earned && (
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Menu Items */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mb-6"
      >
        <h2 className="text-lg font-semibold text-gray-900 mb-3">Settings</h2>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.button
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full flex items-center p-4 text-left hover:bg-gray-50 transition-colors ${
                  index !== menuItems.length - 1 ? 'border-b border-gray-100' : ''
                }`}
              >
                <Icon className="w-5 h-5 text-gray-500 mr-3" />
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{item.label}</p>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              </motion.button>
            );
          })}
        </div>
      </motion.div>

      {/* Logout */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <motion.button
          whileTap={{ scale: 0.98 }}
          className="w-full bg-red-50 border border-red-200 rounded-xl p-4 flex items-center justify-center text-red-600 hover:bg-red-100 transition-colors"
        >
          <LogOut className="w-5 h-5 mr-2" />
          <span className="font-medium">Sign Out</span>
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Profile;