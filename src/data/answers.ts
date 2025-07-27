// 答案之书数据库 - 包含各种智慧的回答
export interface Answer {
  id: number;
  text: string;
  category: 'positive' | 'negative' | 'neutral' | 'mysterious';
  wisdom: string; // 智慧解读
}

export const answers: Answer[] = [
  // 积极正面的答案 (1-50)
  {
    id: 1,
    text: "是的，时机已经成熟。",
    category: 'positive',
    wisdom: "宇宙的能量正在为你的计划汇聚，勇敢地迈出第一步吧。"
  },
  {
    id: 2,
    text: "绝对可以，相信你的直觉。",
    category: 'positive',
    wisdom: "内心的声音是最可靠的指南，它从不会欺骗你。"
  },
  {
    id: 3,
    text: "机会就在眼前，抓住它。",
    category: 'positive',
    wisdom: "命运之门已经为你敞开，不要让犹豫成为遗憾。"
  },
  {
    id: 4,
    text: "一切都会按照最好的方式发展。",
    category: 'positive',
    wisdom: "信任生命的智慧，它总是知道什么对你最好。"
  },
  {
    id: 5,
    text: "你的努力将得到丰厚的回报。",
    category: 'positive',
    wisdom: "种下的种子正在发芽，收获的季节即将到来。"
  },
  {
    id: 6,
    text: "前方的道路充满光明。",
    category: 'positive',
    wisdom: "黑暗即将过去，曙光正在地平线上升起。"
  },
  {
    id: 7,
    text: "你拥有实现梦想的所有条件。",
    category: 'positive',
    wisdom: "成功的种子早已在你心中播下，现在是开花结果的时候。"
  },
  {
    id: 8,
    text: "这是一个新开始的绝佳时机。",
    category: 'positive',
    wisdom: "过去的经历都是为了这一刻的准备，勇敢地踏出新的一步。"
  },
  {
    id: 9,
    text: "你的想法将会得到支持。",
    category: 'positive',
    wisdom: "志同道合的人正在向你靠近，合作将带来意想不到的成果。"
  },
  {
    id: 10,
    text: "坚持下去，胜利就在前方。",
    category: 'positive',
    wisdom: "最后的冲刺往往是最关键的，不要在黎明前放弃。"
  },
  {
    id: 11,
    text: "你的创意将会大放异彩。",
    category: 'positive',
    wisdom: "独特的想法是珍贵的礼物，世界需要你的创造力。"
  },
  {
    id: 12,
    text: "现在就是行动的最佳时刻。",
    category: 'positive',
    wisdom: "完美的时机永远不会到来，但现在就是最好的开始。"
  },
  {
    id: 13,
    text: "你的能力超出了自己的想象。",
    category: 'positive',
    wisdom: "潜能如深海，只有勇敢潜入才能发现宝藏。"
  },
  {
    id: 14,
    text: "幸运之星正在照耀着你。",
    category: 'positive',
    wisdom: "机遇偏爱有准备的心灵，你的准备即将得到回报。"
  },
  {
    id: 15,
    text: "这个决定将改变你的人生。",
    category: 'positive',
    wisdom: "重要的转折点往往伪装成普通的选择，勇敢地做出决定吧。"
  },
  {
    id: 16,
    text: "你的付出即将开花结果。",
    category: 'positive',
    wisdom: "每一份努力都不会白费，收获的季节正在到来。"
  },
  {
    id: 17,
    text: "新的机遇正在向你走来。",
    category: 'positive',
    wisdom: "保持开放的心态，机会往往以意想不到的方式出现。"
  },
  {
    id: 18,
    text: "你的梦想正在成为现实。",
    category: 'positive',
    wisdom: "梦想的种子已经发芽，用行动为它浇水施肥。"
  },
  {
    id: 19,
    text: "成功的大门为你敞开。",
    category: 'positive',
    wisdom: "准备好迎接成功，它比你想象的更近。"
  },
  {
    id: 20,
    text: "你的选择是明智的。",
    category: 'positive',
    wisdom: "智慧来自于内心的平静，相信你的判断力。"
  },

  // 需要谨慎的答案 (51-100)
  {
    id: 51,
    text: "现在还不是时候，再等等。",
    category: 'negative',
    wisdom: "耐心是智慧的体现，最好的时机值得等待。"
  },
  {
    id: 52,
    text: "重新考虑你的计划。",
    category: 'negative',
    wisdom: "有时候退一步是为了更好地前进，审视是必要的。"
  },
  {
    id: 53,
    text: "这条路可能充满挑战。",
    category: 'negative',
    wisdom: "困难是成长的催化剂，但要确保你已经准备好。"
  },
  {
    id: 54,
    text: "寻求他人的建议会更明智。",
    category: 'negative',
    wisdom: "智者善于倾听，多一个视角就多一份智慧。"
  },
  {
    id: 55,
    text: "答案还不够清晰，需要更多信息。",
    category: 'negative',
    wisdom: "模糊的问题只能得到模糊的答案，明确你的真实需求。"
  },
  {
    id: 56,
    text: "谨慎行事，避免冲动决定。",
    category: 'negative',
    wisdom: "冲动是魔鬼，理性是天使，让天使指引你的选择。"
  },
  {
    id: 57,
    text: "这个想法需要更多的思考。",
    category: 'negative',
    wisdom: "深思熟虑的决定往往比匆忙的行动更有价值。"
  },
  {
    id: 58,
    text: "可能存在你没有考虑到的风险。",
    category: 'negative',
    wisdom: "智者总是为未知做好准备，谨慎是成功的保障。"
  },
  {
    id: 59,
    text: "暂停一下，重新评估形势。",
    category: 'negative',
    wisdom: "有时候停下来比继续前进更需要勇气。"
  },
  {
    id: 60,
    text: "这不是你应该走的路。",
    category: 'negative',
    wisdom: "错误的道路再美丽也不会通向正确的目的地。"
  },
  {
    id: 61,
    text: "先解决眼前的问题。",
    category: 'negative',
    wisdom: "基础不牢，地动山摇。先处理好当下的事务。"
  },
  {
    id: 62,
    text: "你可能高估了自己的能力。",
    category: 'negative',
    wisdom: "自知之明是智慧的开始，诚实面对自己的局限。"
  },
  {
    id: 63,
    text: "这个时机并不合适。",
    category: 'negative',
    wisdom: "时机如潮水，错过了就要等待下一次涨潮。"
  },
  {
    id: 64,
    text: "需要更充分的准备。",
    category: 'negative',
    wisdom: "机会偏爱有准备的人，充分准备是成功的前提。"
  },
  {
    id: 65,
    text: "考虑一下其他的选择。",
    category: 'negative',
    wisdom: "世界很大，选择很多，不要把自己局限在一条路上。"
  },

  // 中性平衡的答案 (101-150)
  {
    id: 101,
    text: "这取决于你的选择。",
    category: 'neutral',
    wisdom: "命运掌握在你手中，每个选择都会创造不同的未来。"
  },
  {
    id: 102,
    text: "保持开放的心态。",
    category: 'neutral',
    wisdom: "固执会限制可能性，灵活性是智慧的表现。"
  },
  {
    id: 103,
    text: "专注于当下最重要的事情。",
    category: 'neutral',
    wisdom: "现在是唯一真实存在的时刻，把握当下就是把握一切。"
  },
  {
    id: 104,
    text: "平衡是关键。",
    category: 'neutral',
    wisdom: "极端很少带来持久的幸福，中庸之道是永恒的智慧。"
  },
  {
    id: 105,
    text: "跟随你的心，但带上你的理智。",
    category: 'neutral',
    wisdom: "情感和理性的结合才能做出最好的决定。"
  },
  {
    id: 106,
    text: "时间会给出答案。",
    category: 'neutral',
    wisdom: "有些问题需要时间的沉淀，耐心等待真相的显现。"
  },
  {
    id: 107,
    text: "每个硬币都有两面。",
    category: 'neutral',
    wisdom: "看问题要全面，好坏往往并存，关键在于你的视角。"
  },
  {
    id: 108,
    text: "适度是最好的选择。",
    category: 'neutral',
    wisdom: "过犹不及，适度的选择往往是最明智的。"
  },
  {
    id: 109,
    text: "倾听内心的声音。",
    category: 'neutral',
    wisdom: "外界的声音很多，但最重要的是你内心真正的想法。"
  },
  {
    id: 110,
    text: "保持中立，观察形势。",
    category: 'neutral',
    wisdom: "有时候最好的行动就是不行动，观察比参与更重要。"
  },

  // 神秘深奥的答案 (151-200)
  {
    id: 151,
    text: "答案就在你心中，静心聆听。",
    category: 'mysterious',
    wisdom: "真正的智慧来自内在，外在的声音只是回音。"
  },
  {
    id: 152,
    text: "当学生准备好时，老师就会出现。",
    category: 'mysterious',
    wisdom: "宇宙有它自己的节奏，一切都在完美的时机发生。"
  },
  {
    id: 153,
    text: "有些门关闭是为了让更好的门打开。",
    category: 'mysterious',
    wisdom: "失去往往是获得的前奏，信任生命的安排。"
  },
  {
    id: 154,
    text: "你所寻找的也在寻找你。",
    category: 'mysterious',
    wisdom: "渴望是双向的，当你真心想要某样东西时，整个宇宙都会帮助你。"
  },
  {
    id: 155,
    text: "在黑暗中，星星才显得最亮。",
    category: 'mysterious',
    wisdom: "困难时期往往孕育着最大的机遇和成长。"
  },
  {
    id: 156,
    text: "水滴石穿，非一日之功。",
    category: 'mysterious',
    wisdom: "持续的力量比瞬间的爆发更能改变世界。"
  },
  {
    id: 157,
    text: "种子在黑暗中发芽。",
    category: 'mysterious',
    wisdom: "成长往往发生在看不见的地方，相信过程的力量。"
  },
  {
    id: 158,
    text: "河流知道大海的方向。",
    category: 'mysterious',
    wisdom: "跟随你的天性，它会引导你到达应该去的地方。"
  },
  {
    id: 159,
    text: "蝴蝶效应正在发生。",
    category: 'mysterious',
    wisdom: "微小的改变可能带来巨大的影响，相信你行动的力量。"
  },
  {
    id: 160,
    text: "月圆月缺，皆有其时。",
    category: 'mysterious',
    wisdom: "生命有其自然的节奏，学会与之和谐共舞。"
  },

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
  {
    id: 31,
    text: "你的善良会得到回报。",
    category: 'positive',
    wisdom: "善良是一种投资，它总会在意想不到的时候给你回报。"
  },
  {
    id: 32,
    text: "现在就是最好的时机。",
    category: 'positive',
    wisdom: "不要等待完美的时机，现在就是上天给你的最好安排。"
  },
  {
    id: 33,
    text: "你的影响力比你想象的更大。",
    category: 'positive',
    wisdom: "每个人都有改变世界的力量，从改变自己开始。"
  },
  {
    id: 34,
    text: "困难只是成功的垫脚石。",
    category: 'positive',
    wisdom: "没有困难就没有成长，感谢那些让你变强的挑战。"
  },
  {
    id: 35,
    text: "你的笑容能照亮世界。",
    category: 'positive',
    wisdom: "快乐是会传染的，你的积极态度能影响周围的人。"
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

// 根据类别获取答案
export const getAnswersByCategory = (category: Answer['category']): Answer[] => {
  return answers.filter(answer => answer.category === category);
};

// 获取随机答案
export const getRandomAnswer = (): Answer => {
  const randomIndex = Math.floor(Math.random() * answers.length);
  return answers[randomIndex];
};

// 获取特定类别的随机答案
export const getRandomAnswerByCategory = (category: Answer['category']): Answer => {
  const categoryAnswers = getAnswersByCategory(category);
  const randomIndex = Math.floor(Math.random() * categoryAnswers.length);
  return categoryAnswers[randomIndex];
};
