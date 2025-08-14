import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Home, 
  MessageCircle, 
  Cloud, 
  Sprout, 
  User 
} from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, setCurrentPage }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { id: 'home', icon: Home, label: 'Home', path: '/' },
    { id: 'chat', icon: MessageCircle, label: 'AI Chat', path: '/chat' },
    { id: 'weather', icon: Cloud, label: 'Weather', path: '/weather' },
    { id: 'crops', icon: Sprout, label: 'Crops', path: '/crops' },
    { id: 'profile', icon: User, label: 'Profile', path: '/profile' },
  ];

  const handleNavigation = (item: typeof navItems[0]) => {
    setCurrentPage(item.id);
    navigate(item.path);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-white border-t border-gray-200 px-4 py-2 safe-area-pb">
      <div className="flex justify-around items-center">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.path);
          
          return (
            <motion.button
              key={item.id}
              onClick={() => handleNavigation(item)}
              className={`flex flex-col items-center p-2 rounded-lg transition-colors ${
                active 
                  ? 'text-primary-600' 
                  : 'text-gray-500 hover:text-primary-500'
              }`}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={active ? { scale: 1.1 } : { scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Icon size={24} />
              </motion.div>
              <span className={`text-xs mt-1 font-medium ${
                active ? 'text-primary-600' : 'text-gray-500'
              }`}>
                {item.label}
              </span>
              {active && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute -top-1 w-1 h-1 bg-primary-600 rounded-full"
                  initial={false}
                />
              )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export default Navigation;