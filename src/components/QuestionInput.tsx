'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/utils';
import type { QuestionInputProps } from '@/types';

const QuestionInput: React.FC<QuestionInputProps> = ({
  onSubmit,
  isLoading = false,
  placeholder = "在此输入你的问题，让答案之书为你指引..."
}) => {
  const [question, setQuestion] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // 自动调整文本框高度
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = 'auto';
      inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
    }
  }, [question]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (question.trim() && !isLoading) {
      onSubmit(question.trim());
      setQuestion('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full max-w-2xl mx-auto"
    >
      <form onSubmit={handleSubmit} className="relative">
        {/* 装饰性背景 */}
        <div className="absolute inset-0 bg-gradient-mystical rounded-2xl opacity-10 blur-xl" />
        
        {/* 主要输入区域 */}
        <div className={cn(
          "relative bg-white/90 backdrop-blur-sm rounded-2xl border-2 transition-all duration-300",
          isFocused 
            ? "border-mystical-400 shadow-lg shadow-mystical-200/50" 
            : "border-gray-200 hover:border-mystical-300"
        )}>
          {/* 神秘装饰元素 */}
          <div className="absolute -top-2 -left-2 w-4 h-4 bg-mystical-400 rounded-full opacity-60 animate-pulse" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary-400 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '0.5s' }} />
          <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-mystical-300 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '1s' }} />
          
          <div className="p-6">
            {/* 标题 */}
            <motion.h2 
              className="text-2xl font-mystical text-mystical-700 mb-4 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              向答案之书提问
            </motion.h2>
            
            {/* 输入框 */}
            <div className="relative">
              <textarea
                ref={inputRef}
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onKeyDown={handleKeyDown}
                placeholder={placeholder}
                disabled={isLoading}
                rows={3}
                className={cn(
                  "w-full resize-none border-0 bg-transparent text-gray-800 placeholder-gray-400",
                  "text-lg leading-relaxed focus:outline-none focus:ring-0",
                  "font-serif min-h-[120px] max-h-[200px]",
                  isLoading && "opacity-50 cursor-not-allowed"
                )}
              />
              
              {/* 字符计数 */}
              <div className="absolute bottom-2 right-2 text-xs text-gray-400">
                {question.length}/200
              </div>
            </div>
            
            {/* 提交按钮 */}
            <div className="flex justify-center mt-6">
              <motion.button
                type="submit"
                disabled={!question.trim() || isLoading}
                className={cn(
                  "px-8 py-3 rounded-full font-medium text-white transition-all duration-300",
                  "bg-gradient-to-r from-mystical-500 to-mystical-600",
                  "hover:from-mystical-600 hover:to-mystical-700",
                  "focus:outline-none focus:ring-2 focus:ring-mystical-400 focus:ring-offset-2",
                  "disabled:opacity-50 disabled:cursor-not-allowed",
                  "shadow-lg hover:shadow-xl transform hover:scale-105"
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence mode="wait">
                  {isLoading ? (
                    <motion.div
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center space-x-2"
                    >
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>寻找答案中...</span>
                    </motion.div>
                  ) : (
                    <motion.span
                      key="submit"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      寻求答案
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
        
        {/* 提示文字 */}
        <motion.p 
          className="text-center text-sm text-gray-500 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          诚心提问，答案之书将为你指引方向 ✨
        </motion.p>
      </form>
    </motion.div>
  );
};

export default QuestionInput;
