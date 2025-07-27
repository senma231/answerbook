// 答案之书数据库 - 包含各种智慧的回答
// 导入多维度答案作为主要数据源
import { multiDimensionalAnswers, getRandomMultiDimensionalAnswer } from './multi-dimensional-answers';

export interface Answer {
  id: number;
  text: string;
  category: 'positive' | 'negative' | 'neutral' | 'mysterious';
  wisdom: string; // 智慧解读
  theme: 'work' | 'emotion' | 'life' | 'family' | 'mindset' | 'health' | 'money' | 'study' | 'relationship' | 'general'; // 主题维度
  tags: string[]; // 标签，便于搜索和分类
}

// 使用多维度答案作为主要数据源
export const answers: Answer[] = multiDimensionalAnswers;

// 获取随机答案
export const getRandomAnswer = (): Answer => {
  return getRandomMultiDimensionalAnswer();
};

// 根据类别获取答案
export const getAnswersByCategory = (category: Answer['category']): Answer[] => {
  return answers.filter(answer => answer.category === category);
};

// 根据特定类别的随机答案
export const getRandomAnswerByCategory = (category: Answer['category']): Answer => {
  const categoryAnswers = getAnswersByCategory(category);
  const randomIndex = Math.floor(Math.random() * categoryAnswers.length);
  return categoryAnswers[randomIndex];
};
