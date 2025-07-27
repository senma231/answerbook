'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/utils';

interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'info' | 'warning';
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
}

const Toast: React.FC<ToastProps> = ({
  message,
  type = 'info',
  isVisible,
  onClose,
  duration = 3000
}) => {
  useEffect(() => {
    if (isVisible && duration > 0) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  const getTypeStyles = (type: string) => {
    switch (type) {
      case 'success':
        return {
          bg: 'bg-green-500',
          icon: '✅',
          border: 'border-green-400'
        };
      case 'error':
        return {
          bg: 'bg-red-500',
          icon: '❌',
          border: 'border-red-400'
        };
      case 'warning':
        return {
          bg: 'bg-yellow-500',
          icon: '⚠️',
          border: 'border-yellow-400'
        };
      default:
        return {
          bg: 'bg-mystical-500',
          icon: 'ℹ️',
          border: 'border-mystical-400'
        };
    }
  };

  const styles = getTypeStyles(type);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.9 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed top-4 right-4 z-50"
        >
          <div className={cn(
            "flex items-center space-x-3 px-4 py-3 rounded-lg shadow-lg",
            "bg-white border-l-4 backdrop-blur-sm",
            styles.border
          )}>
            <span className="text-lg">{styles.icon}</span>
            <p className="text-gray-800 font-medium">{message}</p>
            <button
              onClick={onClose}
              className="ml-2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              ✕
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;
