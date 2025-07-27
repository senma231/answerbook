#!/bin/bash

# 答案之书 - Cloudflare Pages 部署脚本
# 此脚本用于本地构建和部署验证

set -e  # 遇到错误时退出

echo "🚀 开始构建答案之书应用..."

# 检查 Node.js 版本
echo "📋 检查环境..."
node --version
npm --version

# 检查是否安装了 pnpm
if ! command -v pnpm &> /dev/null; then
    echo "❌ pnpm 未安装，请先安装 pnpm"
    echo "运行: npm install -g pnpm"
    exit 1
fi

echo "✅ pnpm 版本: $(pnpm --version)"

# 清理之前的构建
echo "🧹 清理之前的构建..."
rm -rf .next
rm -rf out
rm -rf node_modules/.cache

# 安装依赖
echo "📦 安装依赖..."
pnpm install --frozen-lockfile

# 类型检查
echo "🔍 进行类型检查..."
pnpm run type-check

# 代码检查
echo "🔍 进行代码检查..."
pnpm run lint

# 构建应用
echo "🏗️ 构建应用..."
pnpm run build

# 检查构建结果
if [ -d "out" ]; then
    echo "✅ 构建成功！输出目录: out/"
    echo "📊 构建统计:"
    du -sh out/
    find out -name "*.html" | wc -l | xargs echo "HTML 文件数量:"
    find out -name "*.js" | wc -l | xargs echo "JS 文件数量:"
    find out -name "*.css" | wc -l | xargs echo "CSS 文件数量:"
else
    echo "❌ 构建失败！未找到输出目录"
    exit 1
fi

# 验证关键文件
echo "🔍 验证关键文件..."
required_files=("out/index.html" "out/_next" "out/robots.txt" "out/site.webmanifest")

for file in "${required_files[@]}"; do
    if [ -e "$file" ]; then
        echo "✅ $file 存在"
    else
        echo "❌ $file 缺失"
        exit 1
    fi
done

# 检查 HTML 文件是否包含必要内容
if grep -q "答案之书" out/index.html; then
    echo "✅ HTML 内容验证通过"
else
    echo "❌ HTML 内容验证失败"
    exit 1
fi

echo ""
echo "🎉 构建完成！"
echo "📁 输出目录: out/"
echo "🌐 可以将 out/ 目录的内容部署到 Cloudflare Pages"
echo ""
echo "📋 Cloudflare Pages 配置:"
echo "   构建命令: pnpm run build"
echo "   输出目录: out"
echo "   Node.js 版本: 18+"
echo ""
echo "🔗 部署步骤:"
echo "1. 将代码推送到 GitHub 仓库"
echo "2. 在 Cloudflare Pages 中连接仓库"
echo "3. 设置构建配置（见上方）"
echo "4. 部署完成！"
