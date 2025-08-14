import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  MessageCircle, 
  Cloud, 
  Sprout, 
  TrendingUp,
  Leaf,
  Sun,
  Droplets,
  AlertTriangle
} from 'lucide-react';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const quickActions = [
    {
      id: 'chat',
      title: 'AI Assistant',
      description: 'Get farming advice',
      icon: MessageCircle,
      color: 'bg-primary-500',
      path: '/chat'
    },
    {
      id: 'weather',
      title: 'Weather',
      description: 'Check conditions',
      icon: Cloud,
      color: 'bg-blue-500',
      path: '/weather'
    },
    {
      id: 'crops',
      title: 'My Crops',
      description: 'Manage plants',
      icon: Sprout,
      color: 'bg-earth-500',
      path: '/crops'
    },
    {
      id: 'analytics',
      title: 'Analytics',
      description: 'View insights',
      icon: TrendingUp,
      color: 'bg-purple-500',
      path: '/analytics'
    }
  ];

  const todayStats = [
    { label: 'Temperature', value: '24°C', icon: Sun, color: 'text-orange-500' },
    { label: 'Humidity', value: '68%', icon: Droplets, color: 'text-blue-500' },
    { label: 'Active Crops', value: '12', icon: Leaf, color: 'text-green-500' },
    { label: 'Alerts', value: '2', icon: AlertTriangle, color: 'text-red-500' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="pb-20 px-4"
    >
      {/* Header */}
      <div className="pt-12 pb-6">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-center"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-earth-500 rounded-full mx-auto mb-4 flex items-center justify-center">
            <Leaf className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Welcome to Agribot
          </h1>
          <p className="text-gray-600">
            Your AI-powered farming companion
          </p>
        </motion.div>
      </div>

      {/* Today's Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-6"
      >
        <h2 className="text-lg font-semibold text-gray-900 mb-3">Today's Overview</h2>
        <div className="grid grid-cols-2 gap-3">
          {todayStats.map((stat, index) => {
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

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-6"
      >
        <h2 className="text-lg font-semibold text-gray-900 mb-3">Quick Actions</h2>
        <div className="grid grid-cols-2 gap-3">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <motion.button
                key={action.id}
                onClick={() => navigate(action.path)}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-left hover:shadow-md transition-shadow"
              >
                <div className={`w-10 h-10 ${action.color} rounded-lg flex items-center justify-center mb-3`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{action.title}</h3>
                <p className="text-sm text-gray-600">{action.description}</p>
              </motion.button>
            );
          })}
        </div>
      </motion.div>

      {/* Recent Activity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mb-6"
      >
        <h2 className="text-lg font-semibold text-gray-900 mb-3">Recent Activity</h2>
        <div className="space-y-3">
          {[
            { action: 'Watered tomatoes', time: '2 hours ago', icon: Droplets },
            { action: 'Checked weather forecast', time: '4 hours ago', icon: Cloud },
            { action: 'Added new crop: Lettuce', time: '1 day ago', icon: Sprout },
          ].map((activity, index) => {
            const Icon = activity.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 flex items-center"
              >
                <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center mr-3">
                  <Icon className="w-4 h-4 text-primary-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Home;