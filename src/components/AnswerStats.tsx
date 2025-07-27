'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { multiDimensionalAnswers, themeDescriptions } from '@/data/multi-dimensional-answers';
import { cn } from '@/utils';

interface AnswerStatsProps {
  className?: string;
}

const AnswerStats: React.FC<AnswerStatsProps> = ({ className }) => {
  // 统计各主题的答案数量
  const themeStats = Object.keys(themeDescriptions).map(theme => {
    const count = multiDimensionalAnswers.filter(answer => answer.theme === theme).length;
    const percentage = ((count / multiDimensionalAnswers.length) * 100).toFixed(1);
    return {
      theme: theme as keyof typeof themeDescriptions,
      count,
      percentage: parseFloat(percentage)
    };
  }).sort((a, b) => b.count - a.count);

  // 统计各类别的答案数量
  const categoryStats = ['positive', 'negative', 'neutral', 'mysterious'].map(category => {
    const count = multiDimensionalAnswers.filter(answer => answer.category === category).length;
    const percentage = ((count / multiDimensionalAnswers.length) * 100).toFixed(1);
    return {
      category,
      count,
      percentage: parseFloat(percentage)
    };
  });

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'positive': return 'bg-green-500';
      case 'negative': return 'bg-red-500';
      case 'neutral': return 'bg-blue-500';
      case 'mysterious': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  const getCategoryName = (category: string) => {
    switch (category) {
      case 'positive': return '积极正面';
      case 'negative': return '需要谨慎';
      case 'neutral': return '中性平衡';
      case 'mysterious': return '神秘深奥';
      default: return category;
    }
  };

  return (
    <div className={cn("bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg", className)}>
      <motion.h3 
        className="text-xl font-mystical text-mystical-700 mb-6 text-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        📊 答案数据库统计
      </motion.h3>

      {/* 总体统计 */}
      <motion.div 
        className="text-center mb-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
      >
        <div className="text-3xl font-bold text-mystical-600 mb-2">
          {multiDimensionalAnswers.length}
        </div>
        <div className="text-gray-600">条智慧答案</div>
      </motion.div>

      {/* 主题分布 */}
      <div className="mb-8">
        <h4 className="text-lg font-semibold text-gray-700 mb-4 flex items-center">
          <span className="mr-2">🎯</span>
          主题分布
        </h4>
        <div className="space-y-3">
          {themeStats.map((stat, index) => (
            <motion.div
              key={stat.theme}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.05 }}
              className="flex items-center justify-between"
            >
              <div className="flex items-center space-x-2">
                <span className="text-lg">{themeDescriptions[stat.theme].icon}</span>
                <span className="text-sm font-medium text-gray-700">
                  {themeDescriptions[stat.theme].name}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-mystical-400 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${stat.percentage}%` }}
                    transition={{ delay: 0.3 + index * 0.05, duration: 0.8 }}
                  />
                </div>
                <span className="text-xs text-gray-500 w-12 text-right">
                  {stat.count}条
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 类别分布 */}
      <div>
        <h4 className="text-lg font-semibold text-gray-700 mb-4 flex items-center">
          <span className="mr-2">📈</span>
          类别分布
        </h4>
        <div className="grid grid-cols-2 gap-3">
          {categoryStats.map((stat, index) => (
            <motion.div
              key={stat.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="bg-gray-50 rounded-lg p-3 text-center"
            >
              <div className={cn(
                "w-8 h-8 rounded-full mx-auto mb-2",
                getCategoryColor(stat.category)
              )} />
              <div className="text-sm font-medium text-gray-700 mb-1">
                {getCategoryName(stat.category)}
              </div>
              <div className="text-xs text-gray-500">
                {stat.count}条 ({stat.percentage}%)
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 底部说明 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-6 pt-4 border-t border-gray-200 text-center"
      >
        <p className="text-xs text-gray-500">
          每条答案都经过精心设计，涵盖生活的各个方面 ✨
        </p>
      </motion.div>
    </div>
  );
};

export default AnswerStats;
