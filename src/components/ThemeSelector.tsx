'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/utils';
import { themeDescriptions } from '@/data/multi-dimensional-answers';

interface ThemeSelectorProps {
  selectedTheme: keyof typeof themeDescriptions | null;
  onThemeSelect: (theme: keyof typeof themeDescriptions | null) => void;
  className?: string;
}

const ThemeSelector: React.FC<ThemeSelectorProps> = ({
  selectedTheme,
  onThemeSelect,
  className
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const themes = Object.entries(themeDescriptions);

  return (
    <div className={cn("relative", className)}>
      {/* 主题选择按钮 */}
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className={cn(
          "flex items-center space-x-2 px-4 py-2 rounded-full border-2 transition-all duration-300",
          "bg-white/90 backdrop-blur-sm hover:bg-white",
          selectedTheme 
            ? "border-mystical-400 text-mystical-700" 
            : "border-gray-300 text-gray-600 hover:border-mystical-300"
        )}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="text-lg">
          {selectedTheme ? themeDescriptions[selectedTheme].icon : '🎯'}
        </span>
        <span className="font-medium">
          {selectedTheme ? themeDescriptions[selectedTheme].name : '选择主题'}
        </span>
        <motion.span
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-sm"
        >
          ▼
        </motion.span>
      </motion.button>

      {/* 主题选项列表 */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden z-50"
          >
            {/* 全部主题选项 */}
            <motion.button
              onClick={() => {
                onThemeSelect(null);
                setIsExpanded(false);
              }}
              className={cn(
                "w-full flex items-center space-x-3 px-4 py-3 text-left transition-colors duration-200",
                "hover:bg-mystical-50",
                !selectedTheme && "bg-mystical-100 text-mystical-700"
              )}
              whileHover={{ x: 4 }}
            >
              <span className="text-xl">🌟</span>
              <div>
                <div className="font-medium">全部主题</div>
                <div className="text-xs text-gray-500">获取任意主题的智慧指引</div>
              </div>
            </motion.button>

            {/* 分隔线 */}
            <div className="h-px bg-gray-200" />

            {/* 具体主题选项 */}
            <div className="max-h-80 overflow-y-auto">
              {themes.map(([key, theme], index) => (
                <motion.button
                  key={key}
                  onClick={() => {
                    onThemeSelect(key as keyof typeof themeDescriptions);
                    setIsExpanded(false);
                  }}
                  className={cn(
                    "w-full flex items-center space-x-3 px-4 py-3 text-left transition-colors duration-200",
                    "hover:bg-mystical-50",
                    selectedTheme === key && "bg-mystical-100 text-mystical-700"
                  )}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ x: 4 }}
                >
                  <span className="text-xl">{theme.icon}</span>
                  <div className="flex-1">
                    <div className="font-medium">{theme.name}</div>
                    <div className="text-xs text-gray-500">{theme.description}</div>
                  </div>
                  {selectedTheme === key && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="text-mystical-500"
                    >
                      ✓
                    </motion.span>
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 背景遮罩 */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsExpanded(false)}
            className="fixed inset-0 bg-black/10 backdrop-blur-sm z-40"
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeSelector;
