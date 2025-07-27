'use client';

import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getRandomMultiDimensionalAnswer, themeDescriptions } from '@/data/multi-dimensional-answers';
import { getMysticalDelay, shouldTriggerSpecialEffect } from '@/utils/randomizer';
import { cn, generateId } from '@/utils';
import QuestionInput from './QuestionInput';
import AnswerDisplay from './AnswerDisplay';
import HelpModal from './HelpModal';
import Toast from './Toast';
import ThemeSelector from './ThemeSelector';
import type { Answer, AnswerResult, Question } from '@/types';

interface AnswerBookProps {
  className?: string;
}

const AnswerBook: React.FC<AnswerBookProps> = ({ className }) => {
  const [currentAnswer, setCurrentAnswer] = useState<Answer | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [history, setHistory] = useState<AnswerResult[]>([]);
  const [specialEffect, setSpecialEffect] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState<keyof typeof themeDescriptions | null>(null);
  const [toast, setToast] = useState<{
    message: string;
    type: 'success' | 'error' | 'info' | 'warning';
    isVisible: boolean;
  }>({
    message: '',
    type: 'info',
    isVisible: false
  });

  // 处理问题提交
  const handleQuestionSubmit = useCallback(async (questionText: string) => {
    setIsLoading(true);
    setShowAnswer(false);
    setCurrentAnswer(null);

    // 创建问题对象
    const question: Question = {
      id: generateId(),
      text: questionText,
      timestamp: new Date()
    };

    // 检查是否触发特殊效果
    const hasSpecialEffect = shouldTriggerSpecialEffect(0.15);
    setSpecialEffect(hasSpecialEffect);

    try {
      // 神秘感延迟
      const delay = getMysticalDelay();
      await new Promise(resolve => setTimeout(resolve, delay));

      // 获取随机答案（可按主题筛选）
      const answer = getRandomMultiDimensionalAnswer(selectedTheme || undefined);
      
      // 创建答案结果
      const result: AnswerResult = {
        question,
        answer,
        timestamp: new Date()
      };

      // 更新状态
      setCurrentAnswer(answer);
      setHistory(prev => [result, ...prev.slice(0, 9)]); // 保留最近10条记录
      
      // 显示答案
      setTimeout(() => {
        setShowAnswer(true);
        setIsLoading(false);
      }, 300);

    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('获取答案时出错:', error);
      setIsLoading(false);
    }
  }, [selectedTheme]);

  // 显示提示消息
  const showToast = useCallback((message: string, type: 'success' | 'error' | 'info' | 'warning' = 'info') => {
    setToast({ message, type, isVisible: true });
  }, []);

  // 隐藏提示消息
  const hideToast = useCallback(() => {
    setToast(prev => ({ ...prev, isVisible: false }));
  }, []);

  // 重置状态
  const handleReset = useCallback(() => {
    setCurrentAnswer(null);
    setShowAnswer(false);
    setSpecialEffect(false);
    showToast('准备好接受新的智慧指引了吗？', 'info');
  }, [showToast]);

  return (
    <div className={cn("min-h-screen relative overflow-hidden", className)}>
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50" />
      
      {/* 动态背景粒子 */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-mystical-300 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* 特殊效果覆盖层 */}
      <AnimatePresence>
        {specialEffect && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-gradient-mystical opacity-10 pointer-events-none"
          />
        )}
      </AnimatePresence>

      {/* 主要内容 */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* 标题区域 */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12 relative"
        >
          {/* 帮助按钮 */}
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            onClick={() => setShowHelp(true)}
            className="absolute top-0 right-4 w-10 h-10 bg-mystical-100 hover:bg-mystical-200 text-mystical-600 rounded-full flex items-center justify-center transition-colors duration-200 shadow-lg hover:shadow-xl"
            title="使用帮助"
          >
            <span className="text-lg">❓</span>
          </motion.button>

          <h1 className="text-5xl md:text-6xl font-mystical text-mystical-700 mb-4">
            答案之书
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-mystical-400 to-primary-400 mx-auto max-w-xs rounded-full"
          />
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto leading-relaxed">
            当你面临选择的十字路口，当你需要智慧的指引，
            <br />
            让古老的答案之书为你点亮前行的明灯 ✨
          </p>
        </motion.div>

        {/* 主要交互区域 */}
        <div className="max-w-4xl mx-auto space-y-12">
          {/* 主题选择器 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center"
          >
            <ThemeSelector
              selectedTheme={selectedTheme}
              onThemeSelect={setSelectedTheme}
            />
          </motion.div>

          {/* 问题输入区域 */}
          <AnimatePresence mode="wait">
            {!showAnswer && (
              <QuestionInput
                onSubmit={handleQuestionSubmit}
                isLoading={isLoading}
                placeholder={
                  selectedTheme
                    ? `向答案之书咨询关于${themeDescriptions[selectedTheme].name}的问题...`
                    : "在此输入你的问题，让答案之书为你指引..."
                }
              />
            )}
          </AnimatePresence>

          {/* 加载状态 */}
          <AnimatePresence>
            {isLoading && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="text-center py-12"
              >
                <div className="relative">
                  {/* 旋转的神秘符号 */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="w-16 h-16 mx-auto mb-6"
                  >
                    <div className="w-full h-full border-4 border-mystical-200 border-t-mystical-500 rounded-full" />
                  </motion.div>
                  
                  {/* 加载文字 */}
                  <motion.p
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="text-mystical-600 text-lg font-medium"
                  >
                    答案之书正在为你寻找答案...
                  </motion.p>
                  
                  {/* 神秘粒子效果 */}
                  {specialEffect && (
                    <div className="absolute inset-0 pointer-events-none">
                      {Array.from({ length: 8 }).map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-mystical-400 rounded-full"
                          style={{
                            left: '50%',
                            top: '50%',
                          }}
                          animate={{
                            x: [0, (Math.cos(i * 45 * Math.PI / 180) * 60)],
                            y: [0, (Math.sin(i * 45 * Math.PI / 180) * 60)],
                            opacity: [1, 0],
                            scale: [0, 1, 0],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: i * 0.1,
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* 答案显示区域 */}
          <AnswerDisplay
            answer={currentAnswer}
            isVisible={showAnswer}
            onReset={handleReset}
          />
        </div>

        {/* 历史记录（可选显示） */}
        {history.length > 0 && !isLoading && !showAnswer && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-16 max-w-2xl mx-auto"
          >
            <h3 className="text-xl font-mystical text-mystical-600 text-center mb-6">
              最近的问答记录
            </h3>
            <div className="space-y-4">
              {history.slice(0, 3).map((record, index) => (
                <motion.div
                  key={record.question.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-gray-200"
                >
                  <p className="text-sm text-gray-600 mb-2">
                    问：{record.question.text}
                  </p>
                  <p className="text-sm text-mystical-600 font-medium">
                    答：{record.answer.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* 帮助模态框 */}
        <HelpModal isOpen={showHelp} onClose={() => setShowHelp(false)} />

        {/* Toast 通知 */}
        <Toast
          message={toast.message}
          type={toast.type}
          isVisible={toast.isVisible}
          onClose={hideToast}
        />
      </div>
    </div>
  );
};

export default AnswerBook;
