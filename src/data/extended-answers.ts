// 扩展答案数据库 - 更多智慧回答
import type { Answer } from './answers';

export const extendedAnswers: Answer[] = [
  // 更多积极答案 (21-50)
  {
    id: 21,
    text: "你比你想象的更强大。",
    category: 'positive',
    wisdom: "内在的力量是无限的，相信自己的能力。"
  },
  {
    id: 22,
    text: "新的开始正在向你招手。",
    category: 'positive',
    wisdom: "每一天都是重新开始的机会，拥抱变化。"
  },
  {
    id: 23,
    text: "你的直觉是正确的。",
    category: 'positive',
    wisdom: "第一感觉往往是最准确的，相信你的内在智慧。"
  },
  {
    id: 24,
    text: "成功就在转角处等着你。",
    category: 'positive',
    wisdom: "坚持到最后一刻，胜利往往在最后一步。"
  },
  {
    id: 25,
    text: "你已经拥有了所需的一切。",
    category: 'positive',
    wisdom: "资源不在外在，而在于如何运用你已有的天赋。"
  },
  {
    id: 26,
    text: "这是命运的安排。",
    category: 'positive',
    wisdom: "有些事情注定要发生，顺应天意会带来意外的收获。"
  },
  {
    id: 27,
    text: "你的热情将点燃他人。",
    category: 'positive',
    wisdom: "真诚的热情具有感染力，它会吸引志同道合的人。"
  },
  {
    id: 28,
    text: "现在正是展现才华的时候。",
    category: 'positive',
    wisdom: "不要再隐藏你的光芒，世界需要看到你的才华。"
  },
  {
    id: 29,
    text: "你的坚持即将得到回报。",
    category: 'positive',
    wisdom: "持之以恒的努力从不会白费，收获正在路上。"
  },
  {
    id: 30,
    text: "这个想法将改变一切。",
    category: 'positive',
    wisdom: "伟大的变革往往始于一个简单的想法，相信你的创意。"
  },

  // 更多谨慎答案 (66-85)
  {
    id: 66,
    text: "三思而后行。",
    category: 'negative',
    wisdom: "冲动是年轻人的特权，但智慧需要深思熟虑。"
  },
  {
    id: 67,
    text: "这个决定可能带来意想不到的后果。",
    category: 'negative',
    wisdom: "每个选择都有连锁反应，考虑所有可能的结果。"
  },
  {
    id: 68,
    text: "你需要更多的经验。",
    category: 'negative',
    wisdom: "经验是最好的老师，不要急于求成。"
  },
  {
    id: 69,
    text: "现在不是冒险的时候。",
    category: 'negative',
    wisdom: "勇敢和鲁莽只有一线之隔，选择合适的时机很重要。"
  },
  {
    id: 70,
    text: "重新审视你的动机。",
    category: 'negative',
    wisdom: "纯正的动机是成功的基础，检查你内心的真实想法。"
  },

  // 更多中性答案 (111-130)
  {
    id: 111,
    text: "一切都在变化中。",
    category: 'neutral',
    wisdom: "变化是唯一不变的真理，学会适应是生存的智慧。"
  },
  {
    id: 112,
    text: "保持好奇心。",
    category: 'neutral',
    wisdom: "好奇心是学习的动力，永远保持对世界的探索欲。"
  },
  {
    id: 113,
    text: "寻找平衡点。",
    category: 'neutral',
    wisdom: "生活就像走钢丝，平衡是关键技能。"
  },
  {
    id: 114,
    text: "相信过程。",
    category: 'neutral',
    wisdom: "结果很重要，但过程同样珍贵，享受每一步的成长。"
  },
  {
    id: 115,
    text: "保持灵活性。",
    category: 'neutral',
    wisdom: "刚强易折，柔韧长存，适应性是生存的法则。"
  },

  // 更多神秘答案 (161-180)
  {
    id: 161,
    text: "万物皆有联系。",
    category: 'mysterious',
    wisdom: "宇宙是一个巨大的网络，每个节点都影响着整体。"
  },
  {
    id: 162,
    text: "静水流深。",
    category: 'mysterious',
    wisdom: "表面的平静往往蕴含着深层的力量，不要被外表迷惑。"
  },
  {
    id: 163,
    text: "缘分自有天意。",
    category: 'mysterious',
    wisdom: "有些相遇是注定的，珍惜生命中的每一个缘分。"
  },
  {
    id: 164,
    text: "道法自然。",
    category: 'mysterious',
    wisdom: "最高的智慧是顺应自然规律，与天地和谐共处。"
  },
  {
    id: 165,
    text: "心诚则灵。",
    category: 'mysterious',
    wisdom: "真诚的心愿具有神奇的力量，它能感动天地。"
  },

  // 特殊场景答案 (181-200)
  {
    id: 181,
    text: "爱是答案。",
    category: 'positive',
    wisdom: "无论问题多么复杂，爱总是最终的解决方案。"
  },
  {
    id: 182,
    text: "放下执念。",
    category: 'neutral',
    wisdom: "执着是痛苦的根源，学会放下才能获得真正的自由。"
  },
  {
    id: 183,
    text: "相信奇迹。",
    category: 'mysterious',
    wisdom: "奇迹每天都在发生，只是我们常常视而不见。"
  },
  {
    id: 184,
    text: "耐心等待。",
    category: 'negative',
    wisdom: "好事值得等待，急躁只会破坏美好的结果。"
  },
  {
    id: 185,
    text: "跟随直觉。",
    category: 'positive',
    wisdom: "直觉是灵魂的语言，它比理性更接近真理。"
  },
  {
    id: 186,
    text: "保持谦逊。",
    category: 'neutral',
    wisdom: "谦逊是智慧的标志，它让人保持学习的心态。"
  },
  {
    id: 187,
    text: "一切都是最好的安排。",
    category: 'mysterious',
    wisdom: "即使现在看不懂，但生命自有其完美的计划。"
  },
  {
    id: 188,
    text: "勇敢面对。",
    category: 'positive',
    wisdom: "勇气不是没有恐惧，而是带着恐惧继续前行。"
  },
  {
    id: 189,
    text: "保持初心。",
    category: 'neutral',
    wisdom: "初心如明镜，能照见事物的本质，不要让它蒙尘。"
  },
  {
    id: 190,
    text: "顺其自然。",
    category: 'mysterious',
    wisdom: "有时候最好的行动就是不行动，让事情自然发展。"
  }
];

// 合并所有答案
export const getAllAnswers = (): Answer[] => {
  // 这里需要从主文件导入答案
  return extendedAnswers; // 临时返回，实际使用时需要合并
};
