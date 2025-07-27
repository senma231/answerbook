# 答案之书 - Cloudflare Pages 部署指南

## 🚀 快速部署

### 1. 准备工作

确保你的项目已经推送到 GitHub 仓库。

### 2. Cloudflare Pages 配置

登录 [Cloudflare Dashboard](https://dash.cloudflare.com/) 并按以下步骤操作：

#### 2.1 创建新项目
1. 进入 **Pages** 部分
2. 点击 **Create a project**
3. 选择 **Connect to Git**
4. 选择你的 GitHub 仓库

#### 2.2 构建配置
```
Framework preset: Next.js (Static HTML Export)
Build command: pnpm run build
Build output directory: out
Root directory: /
```

#### 2.3 环境变量（可选）
```
NODE_VERSION=18
PNPM_VERSION=8
```

### 3. 高级配置

#### 3.1 自定义域名
1. 在项目设置中点击 **Custom domains**
2. 添加你的域名
3. 按照提示配置 DNS 记录

#### 3.2 构建优化
- **Node.js 版本**: 18.x 或更高
- **包管理器**: pnpm（推荐）
- **构建缓存**: 启用以加快构建速度

## 📋 部署检查清单

### 构建前检查
- [ ] 所有依赖已正确安装
- [ ] TypeScript 类型检查通过
- [ ] ESLint 检查通过
- [ ] 本地构建成功

### 部署后检查
- [ ] 网站可以正常访问
- [ ] 所有页面加载正常
- [ ] 响应式设计在移动端正常
- [ ] SEO 元数据正确显示
- [ ] PWA 功能正常（如果启用）

## 🔧 故障排除

### 常见问题

#### 1. 构建失败
**问题**: `pnpm: command not found`
**解决**: 在环境变量中设置 `PNPM_VERSION=8`

**问题**: TypeScript 类型错误
**解决**: 检查 `tsconfig.json` 配置，确保所有类型定义正确

#### 2. 部署后页面空白
**问题**: 静态资源路径错误
**解决**: 检查 `next.config.js` 中的 `assetPrefix` 配置

#### 3. 路由不工作
**问题**: SPA 路由返回 404
**解决**: 确保 `_redirects` 文件配置正确

### 调试步骤

1. **本地构建测试**
   ```bash
   pnpm run build
   pnpm run start
   ```

2. **检查构建输出**
   ```bash
   ls -la out/
   ```

3. **验证静态文件**
   ```bash
   python -m http.server 3000 -d out
   ```

## 🌐 性能优化

### 1. 缓存策略
- 静态资源: 1年缓存
- HTML文件: 无缓存，每次验证
- API响应: 根据需要设置

### 2. 压缩优化
- 启用 Gzip/Brotli 压缩
- 图片优化（WebP格式）
- CSS/JS 压缩

### 3. CDN 配置
- 启用 Cloudflare CDN
- 配置适当的缓存规则
- 启用 HTTP/2 和 HTTP/3

## 📊 监控和分析

### 1. Cloudflare Analytics
- 页面访问统计
- 性能指标监控
- 错误率追踪

### 2. Web Vitals
- 核心网页指标监控
- 用户体验优化
- 性能基准测试

### 3. 日志监控
- 构建日志检查
- 错误日志分析
- 性能日志追踪

## 🔒 安全配置

### 1. HTTP 头部
- 内容安全策略 (CSP)
- X-Frame-Options
- X-Content-Type-Options

### 2. HTTPS 配置
- 强制 HTTPS 重定向
- HSTS 头部设置
- 安全 Cookie 配置

## 📱 PWA 配置

### 1. Service Worker
- 缓存策略配置
- 离线功能支持
- 后台同步

### 2. Web App Manifest
- 应用图标配置
- 启动画面设置
- 显示模式配置

## 🚀 CI/CD 集成

### GitHub Actions 示例
```yaml
name: Deploy to Cloudflare Pages
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install -g pnpm
      - run: pnpm install
      - run: pnpm run build
      - uses: cloudflare/pages-action@v1
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          projectName: answer-book
          directory: out
```

## 📞 支持

如果遇到部署问题，可以：
1. 查看 Cloudflare Pages 文档
2. 检查项目的 GitHub Issues
3. 联系项目维护者

---

✨ **祝你部署顺利！愿答案之书为更多人带来智慧的指引。** ✨
