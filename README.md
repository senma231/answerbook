# 答案之书 📖✨

一个神奇的答案之书应用，为你的问题提供智慧的指引。

## 🌟 功能特性

- 🎯 **智慧问答**：输入你的问题，获得神秘的答案指引
- 🎨 **优雅界面**：现代化的用户界面设计，流畅的动画效果
- 📱 **响应式设计**：完美适配桌面端和移动端
- ⚡ **极速加载**：基于Next.js的静态生成，CDN友好
- 🔮 **神秘体验**：沉浸式的视觉效果和交互动画

## 🛠️ 技术栈

- **框架**：Next.js 14 (App Router)
- **语言**：TypeScript
- **样式**：Tailwind CSS
- **动画**：Framer Motion
- **部署**：Cloudflare Pages
- **包管理**：pnpm

## 🚀 快速开始

### 环境要求

- Node.js >= 18.0.0
- pnpm >= 8.0.0

### 安装依赖

```bash
pnpm install
```

### 开发模式

```bash
pnpm dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看应用。

### 构建生产版本

```bash
pnpm build
```

### 类型检查

```bash
pnpm type-check
```

### 代码检查

```bash
pnpm lint
```

## 📁 项目结构

```
答案之书/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── layout.tsx       # 根布局
│   │   ├── page.tsx         # 首页
│   │   └── globals.css      # 全局样式
│   ├── components/          # React组件
│   │   ├── AnswerBook.tsx   # 答案之书主组件
│   │   ├── QuestionInput.tsx # 问题输入组件
│   │   └── AnswerDisplay.tsx # 答案显示组件
│   ├── data/               # 数据文件
│   │   └── answers.ts      # 答案数据库
│   ├── utils/              # 工具函数
│   │   └── randomizer.ts   # 随机化工具
│   └── types/              # TypeScript类型定义
├── public/                 # 静态资源
├── package.json           # 项目配置
├── next.config.js         # Next.js配置
├── tailwind.config.js     # Tailwind配置
└── tsconfig.json          # TypeScript配置
```

## 🌐 部署

本项目配置为静态导出，可以直接部署到Cloudflare Pages：

1. 将代码推送到GitHub仓库
2. 在Cloudflare Pages中连接仓库
3. 设置构建命令：`pnpm build`
4. 设置输出目录：`out`
5. 部署完成！

## 📝 开发指南

### 添加新答案

在 `src/data/answers.ts` 文件中添加新的答案条目。

### 自定义样式

修改 `tailwind.config.js` 中的主题配置来自定义颜色、字体和动画。

### 组件开发

所有组件都使用TypeScript编写，遵循React函数组件的最佳实践。

## 🤝 贡献

欢迎提交Issue和Pull Request来改进这个项目！

## 📄 许可证

MIT License

---

✨ **愿答案之书为你指引人生的方向** ✨
