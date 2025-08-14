import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, 
  Droplets, 
  Sun, 
  Calendar, 
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Clock,
  Leaf
} from 'lucide-react';

interface Crop {
  id: string;
  name: string;
  variety: string;
  plantedDate: string;
  status: 'healthy' | 'needs-attention' | 'growing';
  daysToHarvest: number;
  lastWatered: string;
  notes: string;
  image: string;
}

const Crops: React.FC = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedCrop, setSelectedCrop] = useState<Crop | null>(null);

  const crops: Crop[] = [
    {
      id: '1',
      name: 'Tomatoes',
      variety: 'Cherry Tomatoes',
      plantedDate: '2024-01-15',
      status: 'healthy',
      daysToHarvest: 45,
      lastWatered: '2024-01-20',
      notes: 'Growing well, good fruit development',
      image: 'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: '2',
      name: 'Lettuce',
      variety: 'Butterhead',
      plantedDate: '2024-01-10',
      status: 'needs-attention',
      daysToHarvest: 15,
      lastWatered: '2024-01-18',
      notes: 'Leaves showing slight yellowing',
      image: 'https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: '3',
      name: 'Carrots',
      variety: 'Nantes',
      plantedDate: '2024-01-05',
      status: 'growing',
      daysToHarvest: 60,
      lastWatered: '2024-01-19',
      notes: 'Seedlings emerging nicely',
      image: 'https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: '4',
      name: 'Basil',
      variety: 'Sweet Basil',
      plantedDate: '2024-01-12',
      status: 'healthy',
      daysToHarvest: 30,
      lastWatered: '2024-01-20',
      notes: 'Ready for first harvest soon',
      image: 'https://images.pexels.com/photos/4750270/pexels-photo-4750270.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'healthy':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'needs-attention':
        return <AlertCircle className="w-5 h-5 text-yellow-500" />;
      case 'growing':
        return <Clock className="w-5 h-5 text-blue-500" />;
      default:
        return <Leaf className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy':
        return 'bg-green-100 text-green-800';
      case 'needs-attention':
        return 'bg-yellow-100 text-yellow-800';
      case 'growing':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const quickActions = [
    { icon: Droplets, label: 'Water All', color: 'bg-blue-500' },
    { icon: Sun, label: 'Check Light', color: 'bg-yellow-500' },
    { icon: Calendar, label: 'Schedule', color: 'bg-purple-500' },
    { icon: TrendingUp, label: 'Analytics', color: 'bg-green-500' },
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
        <div>
          <h1 className="text-2xl font-bold text-gray-900">My Crops</h1>
          <p className="text-gray-600">{crops.length} plants growing</p>
        </div>
        <motion.button
          onClick={() => setShowAddForm(true)}
          whileTap={{ scale: 0.95 }}
          className="bg-primary-500 text-white p-3 rounded-full shadow-lg hover:bg-primary-600 transition-colors"
        >
          <Plus className="w-6 h-6" />
        </motion.button>
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-6"
      >
        <div className="flex space-x-3 overflow-x-auto pb-2">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <motion.button
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex-shrink-0 flex items-center space-x-2 bg-white rounded-lg px-4 py-2 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className={`w-8 h-8 ${action.color} rounded-lg flex items-center justify-center`}>
                  <Icon className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-700">{action.label}</span>
              </motion.button>
            );
          })}
        </div>
      </motion.div>

      {/* Crops Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-1 gap-4 mb-6"
      >
        {crops.map((crop, index) => (
          <motion.div
            key={crop.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 + index * 0.1 }}
            onClick={() => setSelectedCrop(crop)}
            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="flex">
              <div className="w-20 h-20 bg-gray-200 flex-shrink-0">
                <img 
                  src={crop.image} 
                  alt={crop.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-gray-900">{crop.name}</h3>
                    <p className="text-sm text-gray-500">{crop.variety}</p>
                  </div>
                  {getStatusIcon(crop.status)}
                </div>
                <div className="flex items-center justify-between">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(crop.status)}`}>
                    {crop.status.replace('-', ' ')}
                  </span>
                  <span className="text-sm text-gray-500">
                    {crop.daysToHarvest} days to harvest
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Crop Details Modal */}
      <AnimatePresence>
        {selectedCrop && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end"
            onClick={() => setSelectedCrop(null)}
          >
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-white rounded-t-2xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-6"></div>
                
                <div className="flex items-center mb-6">
                  <img 
                    src={selectedCrop.image} 
                    alt={selectedCrop.name}
                    className="w-16 h-16 rounded-lg object-cover mr-4"
                  />
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-gray-900">{selectedCrop.name}</h2>
                    <p className="text-gray-600">{selectedCrop.variety}</p>
                    <div className="flex items-center mt-2">
                      {getStatusIcon(selectedCrop.status)}
                      <span className={`ml-2 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(selectedCrop.status)}`}>
                        {selectedCrop.status.replace('-', ' ')}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="flex items-center mb-2">
                      <Calendar className="w-4 h-4 text-gray-500 mr-2" />
                      <span className="text-sm text-gray-600">Planted</span>
                    </div>
                    <p className="font-semibold text-gray-900">
                      {new Date(selectedCrop.plantedDate).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="flex items-center mb-2">
                      <Clock className="w-4 h-4 text-gray-500 mr-2" />
                      <span className="text-sm text-gray-600">Harvest in</span>
                    </div>
                    <p className="font-semibold text-gray-900">{selectedCrop.daysToHarvest} days</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="flex items-center mb-2">
                      <Droplets className="w-4 h-4 text-gray-500 mr-2" />
                      <span className="text-sm text-gray-600">Last watered</span>
                    </div>
                    <p className="font-semibold text-gray-900">
                      {new Date(selectedCrop.lastWatered).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="flex items-center mb-2">
                      <TrendingUp className="w-4 h-4 text-gray-500 mr-2" />
                      <span className="text-sm text-gray-600">Growth</span>
                    </div>
                    <p className="font-semibold text-gray-900">75%</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Notes</h3>
                  <p className="text-gray-600 bg-gray-50 rounded-lg p-3">{selectedCrop.notes}</p>
                </div>

                <div className="flex space-x-3">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-primary-500 text-white py-3 rounded-lg font-medium hover:bg-primary-600 transition-colors"
                  >
                    Water Now
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                  >
                    Add Note
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Add Crop Form Modal */}
      <AnimatePresence>
        {showAddForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end"
            onClick={() => setShowAddForm(false)}
          >
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-white rounded-t-2xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-6"></div>
                <h2 className="text-xl font-bold text-gray-900 mb-6">Add New Crop</h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Crop Name</label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="e.g., Tomatoes"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Variety</label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="e.g., Cherry Tomatoes"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Planting Date</label>
                    <input
                      type="date"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Notes</label>
                    <textarea
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                      rows={3}
                      placeholder="Any additional notes..."
                    />
                  </div>
                </div>

                <div className="flex space-x-3 mt-6">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowAddForm(false)}
                    className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                  >
                    Cancel
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-primary-500 text-white py-3 rounded-lg font-medium hover:bg-primary-600 transition-colors"
                  >
                    Add Crop
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Crops;