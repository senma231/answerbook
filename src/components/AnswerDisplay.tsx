'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn, copyToClipboard } from '@/utils';
import type { AnswerDisplayProps } from '@/types';

const AnswerDisplay: React.FC<AnswerDisplayProps> = ({
  answer,
  isVisible,
  onReset
}) => {
  const [showWisdom, setShowWisdom] = useState(false);
  const [copied, setCopied] = useState(false);

  // 重置状态当答案改变时
  useEffect(() => {
    if (answer) {
      setShowWisdom(false);
      setCopied(false);
    }
  }, [answer]);

  const handleCopy = async () => {
    if (answer) {
      const textToCopy = `${answer.text}\n\n智慧解读：${answer.wisdom}`;
      const success = await copyToClipboard(textToCopy);
      if (success) {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'positive':
        return 'from-green-400 to-emerald-500';
      case 'negative':
        return 'from-red-400 to-rose-500';
      case 'neutral':
        return 'from-blue-400 to-indigo-500';
      case 'mysterious':
        return 'from-purple-400 to-mystical-500';
      default:
        return 'from-gray-400 to-gray-500';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'positive':
        return '✨';
      case 'negative':
        return '⚠️';
      case 'neutral':
        return '⚖️';
      case 'mysterious':
        return '🔮';
      default:
        return '📖';
    }
  };

  if (!answer || !isVisible) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: -50 }}
        transition={{ 
          duration: 0.8, 
          ease: "easeOut",
          type: "spring",
          stiffness: 100
        }}
        className="w-full max-w-2xl mx-auto"
      >
        {/* 主答案卡片 */}
        <div className="relative">
          {/* 背景光效 */}
          <div className={cn(
            "absolute inset-0 bg-gradient-to-r rounded-3xl opacity-20 blur-2xl",
            getCategoryColor(answer.category)
          )} />
          
          {/* 主卡片 */}
          <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl border border-gray-200 shadow-2xl overflow-hidden">
            {/* 装饰性顶部条纹 */}
            <div className={cn(
              "h-2 bg-gradient-to-r",
              getCategoryColor(answer.category)
            )} />
            
            <div className="p-8">
              {/* 类别标识 */}
              <motion.div 
                className="flex items-center justify-center mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className={cn(
                  "px-4 py-2 rounded-full text-white text-sm font-medium flex items-center space-x-2",
                  "bg-gradient-to-r shadow-lg",
                  getCategoryColor(answer.category)
                )}>
                  <span className="text-lg">{getCategoryIcon(answer.category)}</span>
                  <span className="capitalize">{answer.category}</span>
                </div>
              </motion.div>
              
              {/* 答案文本 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-center mb-8"
              >
                <h3 className="text-3xl font-mystical text-gray-800 leading-relaxed mb-4">
                  &ldquo;{answer.text}&rdquo;
                </h3>
                
                {/* 装饰性分隔线 */}
                <div className="flex items-center justify-center space-x-4 my-6">
                  <div className="w-8 h-px bg-gradient-to-r from-transparent to-mystical-300" />
                  <div className="w-2 h-2 bg-mystical-400 rounded-full animate-pulse" />
                  <div className="w-8 h-px bg-gradient-to-l from-transparent to-mystical-300" />
                </div>
              </motion.div>
              
              {/* 智慧解读按钮 */}
              <motion.div 
                className="text-center mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <button
                  onClick={() => setShowWisdom(!showWisdom)}
                  className="text-mystical-600 hover:text-mystical-700 font-medium transition-colors duration-200 flex items-center justify-center space-x-2 mx-auto"
                >
                  <span>{showWisdom ? '隐藏' : '查看'}智慧解读</span>
                  <motion.span
                    animate={{ rotate: showWisdom ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    ▼
                  </motion.span>
                </button>
              </motion.div>
              
              {/* 智慧解读内容 */}
              <AnimatePresence>
                {showWisdom && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="bg-mystical-50 rounded-2xl p-6 mb-6"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="text-2xl">🧙‍♂️</div>
                      <div>
                        <h4 className="font-semibold text-mystical-700 mb-2">智慧解读</h4>
                        <p className="text-mystical-600 leading-relaxed italic">
                          {answer.wisdom}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
              {/* 操作按钮 */}
              <motion.div 
                className="flex justify-center space-x-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                <button
                  onClick={handleCopy}
                  className="px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full transition-colors duration-200 flex items-center space-x-2"
                >
                  <span>{copied ? '已复制!' : '复制答案'}</span>
                  <span>{copied ? '✓' : '📋'}</span>
                </button>
                
                {onReset && (
                  <button
                    onClick={onReset}
                    className="px-6 py-2 bg-mystical-100 hover:bg-mystical-200 text-mystical-700 rounded-full transition-colors duration-200 flex items-center space-x-2"
                  >
                    <span>再次提问</span>
                    <span>🔄</span>
                  </button>
                )}
              </motion.div>
            </div>
          </div>
          
          {/* 装饰性浮动元素 */}
          <motion.div
            className="absolute -top-4 -right-4 w-8 h-8 bg-mystical-400 rounded-full opacity-60"
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary-400 rounded-full opacity-40"
            animate={{ 
              y: [0, 10, 0],
              x: [0, 5, 0]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AnswerDisplay;
