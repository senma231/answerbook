import type { Metadata } from 'next';
import { Inter, Cinzel } from 'next/font/google';
import './globals.css';

// 字体配置
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const cinzel = Cinzel({ 
  subsets: ['latin'],
  variable: '--font-cinzel',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

// 元数据配置
export const metadata: Metadata = {
  title: '答案之书 - 神奇的人生指引',
  description: '一个神奇的答案之书应用，为你的问题提供智慧的指引。当你面临选择的十字路口，让古老的答案之书为你点亮前行的明灯。',
  keywords: ['答案之书', '占卜', '指引', '智慧', '问答', 'oracle', 'guidance'],
  authors: [{ name: 'David' }],
  creator: 'David',
  publisher: 'David',
  
  // Open Graph 元数据
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://answer-book.pages.dev',
    title: '答案之书 - 神奇的人生指引',
    description: '一个神奇的答案之书应用，为你的问题提供智慧的指引。',
    siteName: '答案之书',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: '答案之书 - 神奇的人生指引',
      },
    ],
  },
  
  // Twitter 卡片
  twitter: {
    card: 'summary_large_image',
    title: '答案之书 - 神奇的人生指引',
    description: '一个神奇的答案之书应用，为你的问题提供智慧的指引。',
    images: ['/og-image.png'],
    creator: '@david',
  },
  
  // 图标配置
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  
  // 清单文件
  manifest: '/site.webmanifest',
  
  // 其他元数据
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // 验证标签
  verification: {
    google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },
  
  // 分类
  category: 'entertainment',
};

// 视口配置
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#a855f7' },
    { media: '(prefers-color-scheme: dark)', color: '#7c3aed' },
  ],
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="zh-CN" className={`${inter.variable} ${cinzel.variable}`}>
      <head>
        {/* 预加载关键资源 */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS 预解析 */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        
        {/* 结构化数据 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebApplication',
              name: '答案之书',
              description: '一个神奇的答案之书应用，为你的问题提供智慧的指引。',
              url: 'https://answer-book.pages.dev',
              applicationCategory: 'EntertainmentApplication',
              operatingSystem: 'Any',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'CNY',
              },
              author: {
                '@type': 'Person',
                name: 'David',
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased select-mystical`}>
        {/* 主要内容 */}
        <main className="min-h-screen">
          {children}
        </main>
        
        {/* 页脚 */}
        <footer className="bg-white/80 backdrop-blur-sm border-t border-gray-200 py-8 mt-16">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <span className="text-2xl">📖</span>
              <span className="font-mystical text-mystical-600 text-lg">答案之书</span>
            </div>
            <p className="text-gray-600 text-sm mb-2">
              愿智慧之光照亮你前行的道路 ✨
            </p>
            <p className="text-gray-400 text-xs">
              © 2024 答案之书. 用心制作，用爱传递智慧.
            </p>
          </div>
        </footer>
        
        {/* 性能监控脚本（可选） */}
        {process.env.NODE_ENV === 'production' && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                // 简单的性能监控
                window.addEventListener('load', function() {
                  setTimeout(function() {
                    const perfData = performance.getEntriesByType('navigation')[0];
                    if (perfData) {
                      console.log('页面加载时间:', perfData.loadEventEnd - perfData.fetchStart, 'ms');
                    }
                  }, 0);
                });
              `,
            }}
          />
        )}
      </body>
    </html>
  );
}
