// 随机化工具函数

/**
 * 生成指定范围内的随机整数
 * @param min 最小值（包含）
 * @param max 最大值（包含）
 * @returns 随机整数
 */
export const getRandomInt = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * 从数组中随机选择一个元素
 * @param array 源数组
 * @returns 随机选择的元素
 */
export const getRandomElement = <T>(array: T[]): T => {
  if (array.length === 0) {
    throw new Error('数组不能为空');
  }
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

/**
 * 从数组中随机选择多个不重复的元素
 * @param array 源数组
 * @param count 选择的数量
 * @returns 随机选择的元素数组
 */
export const getRandomElements = <T>(array: T[], count: number): T[] => {
  if (count > array.length) {
    throw new Error('选择数量不能超过数组长度');
  }
  
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

/**
 * 打乱数组顺序
 * @param array 源数组
 * @returns 打乱后的新数组
 */
export const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

/**
 * 生成随机延迟时间（用于动画效果）
 * @param min 最小延迟（毫秒）
 * @param max 最大延迟（毫秒）
 * @returns 随机延迟时间
 */
export const getRandomDelay = (min: number = 100, max: number = 500): number => {
  return getRandomInt(min, max);
};

/**
 * 基于权重的随机选择
 * @param items 带权重的项目数组
 * @returns 根据权重随机选择的项目
 */
export const weightedRandom = <T>(items: Array<{ item: T; weight: number }>): T => {
  const totalWeight = items.reduce((sum, item) => sum + item.weight, 0);
  let random = Math.random() * totalWeight;
  
  for (const item of items) {
    random -= item.weight;
    if (random <= 0) {
      return item.item;
    }
  }
  
  // 备用返回最后一个项目
  return items[items.length - 1].item;
};

/**
 * 生成随机的神秘感延迟（用于增加仪式感）
 * @returns 神秘感延迟时间（毫秒）
 */
export const getMysticalDelay = (): number => {
  // 1.5-3秒的随机延迟，增加神秘感
  return getRandomInt(1500, 3000);
};

/**
 * 检查是否应该显示特殊效果（基于概率）
 * @param probability 概率（0-1之间）
 * @returns 是否触发特殊效果
 */
export const shouldTriggerSpecialEffect = (probability: number = 0.1): boolean => {
  return Math.random() < probability;
};
