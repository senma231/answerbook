// 多维度答案之书数据库 - 涵盖生活各个方面的智慧回答

export interface MultiDimensionalAnswer {
  id: number;
  text: string;
  category: 'positive' | 'negative' | 'neutral' | 'mysterious';
  wisdom: string; // 智慧解读
  theme: 'work' | 'emotion' | 'life' | 'family' | 'mindset' | 'health' | 'money' | 'study' | 'relationship' | 'general'; // 主题维度
  tags: string[]; // 标签，便于搜索和分类
}

export const multiDimensionalAnswers: MultiDimensionalAnswer[] = [
  // 工作相关答案 (1-20)
  {
    id: 1,
    text: "是的，这个项目值得你全力投入。",
    category: 'positive',
    wisdom: "当机遇与准备相遇时，成功就诞生了。全力以赴，收获必将超出预期。",
    theme: 'work',
    tags: ['项目', '投入', '机遇', '成功']
  },
  {
    id: 2,
    text: "现在不是跳槽的最佳时机。",
    category: 'negative',
    wisdom: "稳定比冒险更重要，先在当前位置积累更多经验和资源。",
    theme: 'work',
    tags: ['跳槽', '时机', '稳定', '经验']
  },
  {
    id: 3,
    text: "你的创意将为团队带来突破。",
    category: 'positive',
    wisdom: "创新思维是推动进步的引擎，勇敢地分享你的想法。",
    theme: 'work',
    tags: ['创意', '团队', '突破', '创新']
  },
  {
    id: 4,
    text: "专注于提升核心技能。",
    category: 'neutral',
    wisdom: "在快速变化的时代，核心竞争力是你最可靠的护城河。",
    theme: 'work',
    tags: ['技能', '专注', '竞争力', '提升']
  },
  {
    id: 5,
    text: "领导力来自于服务他人的心。",
    category: 'mysterious',
    wisdom: "真正的领导者不是站在前面指挥，而是站在后面支持团队前进。",
    theme: 'work',
    tags: ['领导力', '服务', '团队', '支持']
  },

  // 情感相关答案 (21-40)
  {
    id: 21,
    text: "这份感情值得你珍惜和坚持。",
    category: 'positive',
    wisdom: "真爱如珍珠，需要时间的打磨才能绽放最美的光芒。",
    theme: 'emotion',
    tags: ['感情', '珍惜', '坚持', '真爱']
  },
  {
    id: 22,
    text: "是时候放下这段关系了。",
    category: 'negative',
    wisdom: "有些告别是为了更好的开始，勇敢地向前走吧。",
    theme: 'emotion',
    tags: ['放下', '关系', '告别', '开始']
  },
  {
    id: 23,
    text: "给彼此一些时间和空间。",
    category: 'neutral',
    wisdom: "距离产生美，有时候退一步是为了更好地前进。",
    theme: 'emotion',
    tags: ['时间', '空间', '距离', '理解']
  },
  {
    id: 24,
    text: "爱需要勇气，也需要智慧。",
    category: 'mysterious',
    wisdom: "爱情是心灵的艺术，需要用心去感受，用智慧去经营。",
    theme: 'emotion',
    tags: ['爱', '勇气', '智慧', '经营']
  },
  {
    id: 25,
    text: "你的真诚会打动对方的心。",
    category: 'positive',
    wisdom: "真诚是最强大的武器，它能穿透所有的防备和伪装。",
    theme: 'emotion',
    tags: ['真诚', '打动', '武器', '防备']
  },

  // 生活相关答案 (41-60)
  {
    id: 41,
    text: "是时候改变生活方式了。",
    category: 'positive',
    wisdom: "改变是成长的开始，新的生活方式将带来新的可能性。",
    theme: 'life',
    tags: ['改变', '生活方式', '成长', '可能性']
  },
  {
    id: 42,
    text: "保持现在的生活节奏。",
    category: 'neutral',
    wisdom: "有时候最好的改变就是不改变，稳定也是一种智慧。",
    theme: 'life',
    tags: ['节奏', '稳定', '智慧', '平衡']
  },
  {
    id: 43,
    text: "这个决定需要更多考虑。",
    category: 'negative',
    wisdom: "重大的生活决定不能匆忙，给自己更多时间思考。",
    theme: 'life',
    tags: ['决定', '考虑', '时间', '思考']
  },
  {
    id: 44,
    text: "简单的生活蕴含着深刻的智慧。",
    category: 'mysterious',
    wisdom: "复杂的世界需要简单的心，简单的生活才能感受到真正的快乐。",
    theme: 'life',
    tags: ['简单', '智慧', '快乐', '感受']
  },
  {
    id: 45,
    text: "你的生活将迎来美好的转变。",
    category: 'positive',
    wisdom: "每一个结束都是新开始的序幕，拥抱即将到来的美好。",
    theme: 'life',
    tags: ['转变', '美好', '结束', '开始']
  },

  // 家庭相关答案 (61-80)
  {
    id: 61,
    text: "家人需要你的理解和支持。",
    category: 'positive',
    wisdom: "家是心灵的港湾，理解和支持是维系家庭和谐的纽带。",
    theme: 'family',
    tags: ['家人', '理解', '支持', '和谐']
  },
  {
    id: 62,
    text: "这个家庭矛盾需要时间化解。",
    category: 'negative',
    wisdom: "家庭矛盾如心结，需要耐心和时间才能慢慢解开。",
    theme: 'family',
    tags: ['矛盾', '时间', '化解', '耐心']
  },
  {
    id: 63,
    text: "保持家庭沟通的开放性。",
    category: 'neutral',
    wisdom: "开放的沟通是家庭和睦的基石，倾听比说话更重要。",
    theme: 'family',
    tags: ['沟通', '开放', '和睦', '倾听']
  },
  {
    id: 64,
    text: "血浓于水，家人永远是你的依靠。",
    category: 'mysterious',
    wisdom: "家人之间的情感纽带超越了时间和空间，是生命中最珍贵的财富。",
    theme: 'family',
    tags: ['血缘', '依靠', '情感', '财富']
  },
  {
    id: 65,
    text: "为家庭付出的努力都是值得的。",
    category: 'positive',
    wisdom: "家庭是爱的投资，每一份付出都会在未来收获温暖的回报。",
    theme: 'family',
    tags: ['付出', '努力', '投资', '回报']
  },

  // 心态相关答案 (81-100)
  {
    id: 81,
    text: "保持积极乐观的心态。",
    category: 'positive',
    wisdom: "积极的心态是成功的催化剂，它能将困难转化为机遇。",
    theme: 'mindset',
    tags: ['积极', '乐观', '催化剂', '机遇']
  },
  {
    id: 82,
    text: "你需要调整当前的心态。",
    category: 'negative',
    wisdom: "心态决定状态，调整心态是改变现状的第一步。",
    theme: 'mindset',
    tags: ['调整', '心态', '状态', '改变']
  },
  {
    id: 83,
    text: "保持内心的平静和平衡。",
    category: 'neutral',
    wisdom: "内心的平静是智慧的源泉，平衡是生活的艺术。",
    theme: 'mindset',
    tags: ['平静', '平衡', '智慧', '艺术']
  },
  {
    id: 84,
    text: "心如止水，方能映照真理。",
    category: 'mysterious',
    wisdom: "当心灵如镜面般平静时，才能看清事物的本质和真相。",
    theme: 'mindset',
    tags: ['止水', '映照', '真理', '本质']
  },
  {
    id: 85,
    text: "你的心态正在朝好的方向发展。",
    category: 'positive',
    wisdom: "心态的转变是成长的标志，你正在成为更好的自己。",
    theme: 'mindset',
    tags: ['发展', '转变', '成长', '标志']
  },

  // 健康相关答案 (101-120)
  {
    id: 101,
    text: "身体健康是一切的基础。",
    category: 'positive',
    wisdom: "健康的身体是实现梦想的载体，珍惜并维护它。",
    theme: 'health',
    tags: ['身体', '健康', '基础', '载体']
  },
  {
    id: 102,
    text: "现在需要更加关注健康问题。",
    category: 'negative',
    wisdom: "身体发出的信号不容忽视，及时关注才能防患于未然。",
    theme: 'health',
    tags: ['关注', '健康', '信号', '预防']
  },
  {
    id: 103,
    text: "保持规律的作息和运动。",
    category: 'neutral',
    wisdom: "规律的生活是健康的基石，运动是生命的活力源泉。",
    theme: 'health',
    tags: ['规律', '作息', '运动', '活力']
  },
  {
    id: 104,
    text: "身心合一，方能长久。",
    category: 'mysterious',
    wisdom: "身体和心灵的和谐统一是健康的最高境界。",
    theme: 'health',
    tags: ['身心', '合一', '和谐', '境界']
  },
  {
    id: 105,
    text: "你的健康状况正在好转。",
    category: 'positive',
    wisdom: "身体的自愈能力是神奇的，保持信心和耐心。",
    theme: 'health',
    tags: ['好转', '自愈', '信心', '耐心']
  },

  // 财富理财相关答案 (121-140)
  {
    id: 121,
    text: "这是一个不错的投资机会。",
    category: 'positive',
    wisdom: "机会总是留给有准备的人，理性分析后的投资往往收获颇丰。",
    theme: 'money',
    tags: ['投资', '机会', '理性', '收获']
  },
  {
    id: 122,
    text: "现在不适合进行大额投资。",
    category: 'negative',
    wisdom: "谨慎是理财的第一原则，等待更好的时机比盲目投资更明智。",
    theme: 'money',
    tags: ['谨慎', '理财', '时机', '明智']
  },
  {
    id: 123,
    text: "分散投资，降低风险。",
    category: 'neutral',
    wisdom: "不要把所有鸡蛋放在一个篮子里，分散投资是智慧的选择。",
    theme: 'money',
    tags: ['分散', '投资', '风险', '智慧']
  },
  {
    id: 124,
    text: "财富如流水，善用则源源不断。",
    category: 'mysterious',
    wisdom: "金钱是工具而非目的，学会让财富为你工作，而不是你为财富工作。",
    theme: 'money',
    tags: ['财富', '流水', '工具', '目的']
  },
  {
    id: 125,
    text: "你的财务状况将有所改善。",
    category: 'positive',
    wisdom: "坚持理财规划和努力工作，财务自由的目标正在靠近。",
    theme: 'money',
    tags: ['财务', '改善', '规划', '自由']
  },

  // 学习成长相关答案 (141-160)
  {
    id: 141,
    text: "现在是学习新技能的好时机。",
    category: 'positive',
    wisdom: "学习是最好的投资，新技能将为你打开新的机遇之门。",
    theme: 'study',
    tags: ['学习', '技能', '投资', '机遇']
  },
  {
    id: 142,
    text: "专注于深度学习而非广度。",
    category: 'negative',
    wisdom: "在信息爆炸的时代，深度比广度更重要，专精胜过博而不精。",
    theme: 'study',
    tags: ['专注', '深度', '专精', '信息']
  },
  {
    id: 143,
    text: "保持终身学习的心态。",
    category: 'neutral',
    wisdom: "学习是一生的旅程，保持好奇心和开放心态是成长的关键。",
    theme: 'study',
    tags: ['终身', '学习', '好奇心', '成长']
  },
  {
    id: 144,
    text: "知识如灯塔，照亮前行的路。",
    category: 'mysterious',
    wisdom: "真正的知识不仅存在于书本中，更存在于实践和思考的过程中。",
    theme: 'study',
    tags: ['知识', '灯塔', '实践', '思考']
  },
  {
    id: 145,
    text: "你的学习能力正在提升。",
    category: 'positive',
    wisdom: "每一次学习都是大脑的升级，你正在变得更加聪明和睿智。",
    theme: 'study',
    tags: ['能力', '提升', '升级', '睿智']
  },

  // 社交人脉相关答案 (161-180)
  {
    id: 161,
    text: "这个人值得深入交往。",
    category: 'positive',
    wisdom: "真正的朋友如珍宝，遇到了就要珍惜和维护这份友谊。",
    theme: 'relationship',
    tags: ['交往', '朋友', '珍宝', '友谊']
  },
  {
    id: 162,
    text: "保持适当的社交距离。",
    category: 'negative',
    wisdom: "不是所有人都值得深交，学会保护自己的能量和时间。",
    theme: 'relationship',
    tags: ['距离', '社交', '保护', '能量']
  },
  {
    id: 163,
    text: "扩大你的社交圈子。",
    category: 'neutral',
    wisdom: "多元化的社交网络能带来更多的机会和不同的视角。",
    theme: 'relationship',
    tags: ['扩大', '圈子', '网络', '视角']
  },
  {
    id: 164,
    text: "真诚是最好的社交技巧。",
    category: 'mysterious',
    wisdom: "技巧可以学会，但真诚无法伪装，它是建立深度关系的基石。",
    theme: 'relationship',
    tags: ['真诚', '技巧', '深度', '基石']
  },
  {
    id: 165,
    text: "你的人脉网络正在扩展。",
    category: 'positive',
    wisdom: "每一个新的连接都可能带来意想不到的机会和帮助。",
    theme: 'relationship',
    tags: ['人脉', '扩展', '连接', '帮助']
  },

  // 综合通用答案 (181-200)
  {
    id: 181,
    text: "相信自己的判断。",
    category: 'positive',
    wisdom: "你比你想象的更有智慧，相信内心的声音，它很少会欺骗你。",
    theme: 'general',
    tags: ['相信', '判断', '智慧', '内心']
  },
  {
    id: 182,
    text: "耐心等待更好的时机。",
    category: 'negative',
    wisdom: "急躁是成功的敌人，学会等待是一种高级的智慧。",
    theme: 'general',
    tags: ['耐心', '等待', '时机', '智慧']
  },
  {
    id: 183,
    text: "保持开放的心态。",
    category: 'neutral',
    wisdom: "开放的心态能让你看到更多的可能性，拥抱变化和新事物。",
    theme: 'general',
    tags: ['开放', '心态', '可能性', '变化']
  },
  {
    id: 184,
    text: "一切都是最好的安排。",
    category: 'mysterious',
    wisdom: "宇宙自有其运行的规律，相信每一个经历都有其存在的意义。",
    theme: 'general',
    tags: ['安排', '宇宙', '规律', '意义']
  },
  {
    id: 185,
    text: "你正走在正确的道路上。",
    category: 'positive',
    wisdom: "虽然路途可能曲折，但方向是对的，坚持下去就会看到光明。",
    theme: 'general',
    tags: ['道路', '正确', '坚持', '光明']
  }
];

// 主题描述
export const themeDescriptions = {
  work: { name: '工作事业', icon: '💼', description: '职场发展、事业规划、工作决策' },
  emotion: { name: '情感关系', icon: '💕', description: '爱情、友情、人际关系' },
  life: { name: '生活方式', icon: '🌱', description: '生活选择、人生规划、日常决策' },
  family: { name: '家庭亲情', icon: '👨‍👩‍👧‍👦', description: '家庭关系、亲情维护、家庭决策' },
  mindset: { name: '心态调节', icon: '🧘', description: '心理状态、情绪管理、心态调整' },
  health: { name: '健康养生', icon: '🏃', description: '身体健康、养生保健、医疗决策' },
  money: { name: '财富理财', icon: '💰', description: '投资理财、财务规划、金钱观念' },
  study: { name: '学习成长', icon: '📚', description: '学习进修、技能提升、知识获取' },
  relationship: { name: '社交人脉', icon: '🤝', description: '社交关系、人脉建设、合作伙伴' },
  general: { name: '综合通用', icon: '🌟', description: '通用智慧、人生哲理、综合指导' }
};

// 根据主题获取答案
export const getAnswersByTheme = (theme: keyof typeof themeDescriptions): MultiDimensionalAnswer[] => {
  return multiDimensionalAnswers.filter(answer => answer.theme === theme);
};

// 根据标签搜索答案
export const searchAnswersByTag = (tag: string): MultiDimensionalAnswer[] => {
  return multiDimensionalAnswers.filter(answer => 
    answer.tags.some(t => t.includes(tag))
  );
};

// 获取随机答案（可按主题筛选）
export const getRandomMultiDimensionalAnswer = (theme?: keyof typeof themeDescriptions): MultiDimensionalAnswer => {
  const filteredAnswers = theme ? getAnswersByTheme(theme) : multiDimensionalAnswers;
  const randomIndex = Math.floor(Math.random() * filteredAnswers.length);
  return filteredAnswers[randomIndex];
};
