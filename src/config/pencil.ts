export const pencilConfig = {
  // Minimax API配置
  minimax: {
    baseUrl: 'https://api.minimax.chat',
    models: {
      claudeCode: 'claude-3-5-sonnet-20241022',
      claudeInstant: 'claude-3-5-sonnet-20241022'
    }
  },

  // Pencil服务默认配置
  defaults: {
    temperature: 0.2,
    maxTokens: 4000,
    language: 'typescript',
    framework: 'nextjs'
  },

  // 支持的编程语言
  supportedLanguages: [
    'typescript',
    'javascript',
    'python',
    'java',
    'go',
    'rust',
    'c++',
    'c#',
    'swift',
    'kotlin'
  ],

  // 支持的框架
  supportedFrameworks: [
    'nextjs',
    'react',
    'vue',
    'angular',
    'svelte',
    'express',
    'nestjs',
    'django',
    'flask',
    'spring',
    'laravel'
  ],

  // 代码分析选项
  analysisOptions: {
    quality: ['性能', '可读性', '可维护性', '安全性'],
    patterns: ['设计模式', '最佳实践', '反模式'],
    improvements: ['重构建议', '优化方案', '错误修复']
  }
} as const

export type PencilConfig = typeof pencilConfig