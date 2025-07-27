/** @type {import('next').NextConfig} */
const nextConfig = {
  // 启用静态导出，适配Cloudflare Pages
  output: 'export',
  
  // 禁用图片优化，因为静态导出不支持
  images: {
    unoptimized: true
  },
  
  // 基础路径配置（如果需要部署到子路径）
  // basePath: '',
  
  // 资源前缀（用于CDN）
  // assetPrefix: '',
  
  // 严格模式
  reactStrictMode: true,
  
  // 实验性功能
  experimental: {
    // App Router 在 Next.js 14 中已经稳定，不需要实验性标志
  },
  
  // 编译器选项
  compiler: {
    // 移除console.log（生产环境）
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // 环境变量
  env: {
    CUSTOM_KEY: 'my-value',
  },
  
  // 注意：静态导出模式下，redirects、rewrites、headers 不会生效
  // 这些配置将通过 Cloudflare Pages 的 _redirects 和 _headers 文件处理
}

module.exports = nextConfig
