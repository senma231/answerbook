'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// import { cn } from '@/utils';

interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const HelpModal: React.FC<HelpModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 背景遮罩 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />
          
          {/* 模态框 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
          >
            <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
              {/* 头部 */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h2 className="text-2xl font-mystical text-mystical-700">
                  如何使用答案之书
                </h2>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-gray-600 transition-colors text-2xl"
                >
                  ✕
                </button>
              </div>
              
              {/* 内容 */}
              <div className="p-6 space-y-6">
                {/* 使用步骤 */}
                <section>
                  <h3 className="text-lg font-semibold text-mystical-600 mb-4 flex items-center">
                    <span className="mr-2">📋</span>
                    使用步骤
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-mystical-100 text-mystical-600 rounded-full flex items-center justify-center text-sm font-bold">1</div>
                      <p className="text-gray-700">在输入框中输入你的问题或困惑</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-mystical-100 text-mystical-600 rounded-full flex items-center justify-center text-sm font-bold">2</div>
                      <p className="text-gray-700">点击&ldquo;寻求答案&rdquo;按钮</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-mystical-100 text-mystical-600 rounded-full flex items-center justify-center text-sm font-bold">3</div>
                      <p className="text-gray-700">等待答案之书为你寻找智慧的指引</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-mystical-100 text-mystical-600 rounded-full flex items-center justify-center text-sm font-bold">4</div>
                      <p className="text-gray-700">阅读答案和智慧解读，获得启发</p>
                    </div>
                  </div>
                </section>
                
                {/* 答案类型 */}
                <section>
                  <h3 className="text-lg font-semibold text-mystical-600 mb-4 flex items-center">
                    <span className="mr-2">🎯</span>
                    答案类型
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <div className="flex items-center mb-2">
                        <span className="text-lg mr-2">✨</span>
                        <span className="font-medium text-green-700">积极正面</span>
                      </div>
                      <p className="text-sm text-green-600">鼓励你前进的答案</p>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                      <div className="flex items-center mb-2">
                        <span className="text-lg mr-2">⚠️</span>
                        <span className="font-medium text-red-700">需要谨慎</span>
                      </div>
                      <p className="text-sm text-red-600">提醒你三思而后行</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <div className="flex items-center mb-2">
                        <span className="text-lg mr-2">⚖️</span>
                        <span className="font-medium text-blue-700">中性平衡</span>
                      </div>
                      <p className="text-sm text-blue-600">给出平衡的建议</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                      <div className="flex items-center mb-2">
                        <span className="text-lg mr-2">🔮</span>
                        <span className="font-medium text-purple-700">神秘深奥</span>
                      </div>
                      <p className="text-sm text-purple-600">富有哲理的智慧</p>
                    </div>
                  </div>
                </section>
                
                {/* 使用建议 */}
                <section>
                  <h3 className="text-lg font-semibold text-mystical-600 mb-4 flex items-center">
                    <span className="mr-2">💡</span>
                    使用建议
                  </h3>
                  <div className="bg-mystical-50 p-4 rounded-lg border border-mystical-200">
                    <ul className="space-y-2 text-mystical-700">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>保持开放的心态，答案可能以意想不到的方式出现</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>问题越具体，得到的指引可能越有针对性</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>将答案作为思考的起点，而非绝对的指令</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>相信你的直觉，它会帮你理解答案的真正含义</span>
                      </li>
                    </ul>
                  </div>
                </section>
                
                {/* 免责声明 */}
                <section>
                  <h3 className="text-lg font-semibold text-gray-600 mb-4 flex items-center">
                    <span className="mr-2">⚖️</span>
                    免责声明
                  </h3>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <p className="text-sm text-gray-600 leading-relaxed">
                      答案之书仅供娱乐和启发思考之用。所有答案都是随机生成的，
                      不应作为重要决策的唯一依据。请结合自己的判断和实际情况做出明智的选择。
                    </p>
                  </div>
                </section>
              </div>
              
              {/* 底部 */}
              <div className="p-6 border-t border-gray-200 text-center">
                <button
                  onClick={onClose}
                  className="btn-mystical"
                >
                  开始使用答案之书
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default HelpModal;
