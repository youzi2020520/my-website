# Pencil - Claude Code集成指南

## 概述

Pencil是一个使用Claude Code模型通过Minimax API驱动的AI代码助手，集成到您的Next.js项目中。

## 功能特性

- ✅ **代码生成**: 根据自然语言描述生成TypeScript/JavaScript代码
- ✅ **代码分析**: 分析现有代码，提供质量评估和改进建议
- ✅ **代码重构**: 自动重构代码，优化性能和可读性
- ✅ **Next.js优化**: 专门针对Next.js 16和App Router优化
- ✅ **TypeScript支持**: 完整的TypeScript类型支持
- ✅ **响应式UI**: 基于shadcn/ui的现代化界面

## 快速开始

### 1. 环境变量配置

复制`.env.example`文件为`.env.local`并配置Minimax API密钥：

```bash
# 复制环境变量模板
cp .env.example .env.local
```

编辑`.env.local`文件：

```env
# Minimax API配置
MINIMAX_API_KEY=your_minimax_api_key_here

# Claude Code模型配置
CLAUDE_CODE_MODEL=claude-3-5-sonnet-20241022

# Pencil服务配置
PENCIL_TEMPERATURE=0.2
PENCIL_MAX_TOKENS=4000
```

### 2. 获取Minimax API密钥

1. 访问 [Minimax官网](https://www.minimaxi.com)
2. 注册账号并获取API密钥
3. 将API密钥配置到环境变量中

### 3. 安装依赖

项目使用pnpm作为包管理器：

```bash
# 安装依赖
pnpm install

# 或者使用npm
npm install
```

## 使用方法

### 在组件中使用

```tsx
import { PencilEditor } from '@/components/pencil/pencil-editor'

export function MyComponent() {
  return (
    <PencilEditor 
      apiKey={process.env.MINIMAX_API_KEY}
      defaultLanguage="typescript"
      defaultFramework="nextjs"
    />
  )
}
```

### 使用React Hook

```tsx
import { usePencil } from '@/hooks/use-pencil'

export function CodeGenerator() {
  const { generateCode, isGenerating, result, error } = usePencil({
    apiKey: process.env.MINIMAX_API_KEY,
    onSuccess: (result) => {
      console.log('代码生成成功:', result)
    },
    onError: (error) => {
      console.error('代码生成失败:', error)
    }
  })

  const handleGenerate = async () => {
    const code = await generateCode({
      prompt: '创建一个React计数器组件',
      language: 'typescript',
      framework: 'nextjs'
    })
  }

  return (
    <div>
      <button onClick={handleGenerate} disabled={isGenerating}>
        {isGenerating ? '生成中...' : '生成代码'}
      </button>
      {result && <pre>{result}</pre>}
    </div>
  )
}
```

### API接口使用

#### 生成代码

```bash
curl -X POST http://localhost:3000/api/pencil/generate \
  -H "Content-Type: application/json" \
  -d '{
    "prompt": "创建一个用户登录表单组件",
    "language": "typescript",
    "framework": "nextjs",
    "apiKey": "your_minimax_api_key"
  }'
```

#### 分析代码

```bash
curl -X POST http://localhost:3000/api/pencil/analyze \
  -H "Content-Type: application/json" \
  -d '{
    "code": "function add(a, b) { return a + b; }",
    "language": "javascript",
    "apiKey": "your_minimax_api_key"
  }'
```

## 配置选项

### Pencil服务配置

```typescript
import { createPencilService } from '@/lib/ai/pencil-service'

const pencilService = createPencilService({
  apiKey: 'your_api_key',
  model: 'claude-3-5-sonnet-20241022', // 模型选择
  temperature: 0.2,                    // 创造性 (0-1)
  maxTokens: 4000                      // 最大令牌数
})
```

### 支持的编程语言

- TypeScript
- JavaScript  
- Python
- Java
- Go
- Rust
- C++
- C#
- Swift
- Kotlin

### 支持的框架

- Next.js
- React
- Vue
- Angular
- Svelte
- Express
- NestJS
- Django
- Flask
- Spring
- Laravel

## 最佳实践

### 1. 提示词优化

**好的提示词示例：**
```
创建一个React函数组件，显示用户头像和姓名
- 使用TypeScript
- 支持暗色/亮色主题
- 头像使用Next.js Image组件优化
- 姓名使用Tailwind CSS样式
- 添加适当的类型定义
```

**避免的提示词：**
```
做个用户组件  # 过于模糊
```

### 2. 代码分析

在分析代码时提供足够的上下文：
- 代码的用途和业务逻辑
- 性能要求
- 安全考虑
- 团队编码规范

### 3. 错误处理

```typescript
try {
  const result = await pencilService.generateCode(request)
  // 处理成功结果
} catch (error) {
  if (error.message.includes('API密钥')) {
    // 处理认证错误
  } else if (error.message.includes('配额')) {
    // 处理配额限制
  } else {
    // 处理其他错误
  }
}
```

## 安全考虑

1. **API密钥保护**: 永远不要将API密钥提交到版本控制
2. **输入验证**: 验证所有用户输入，防止注入攻击
3. **配额限制**: 设置合理的API调用频率限制
4. **错误处理**: 妥善处理API错误，避免泄露敏感信息

## 故障排除

### 常见问题

**Q: API调用返回认证错误**
A: 检查MINIMAX_API_KEY环境变量是否正确配置

**Q: 代码生成质量不佳**
A: 尝试调整temperature参数或提供更详细的提示词

**Q: 响应时间过长**
A: 减少maxTokens参数或优化提示词长度

### 调试模式

启用详细日志：

```typescript
const pencilService = createPencilService({
  apiKey: process.env.MINIMAX_API_KEY,
  // 启用调试
  debug: process.env.NODE_ENV === 'development'
})
```

## 扩展开发

### 添加新的代码分析功能

```typescript
// 在pencil-service.ts中添加新方法
async function analyzePerformance(code: string, language: string) {
  const prompt = `分析以下${language}代码的性能问题...`
  return await this.client.analyzeCode(code, language, prompt)
}
```

### 自定义系统提示词

```typescript
const customPrompt = `你是一个专业的${framework}开发专家...`
const result = await pencilService.generateCode({
  prompt: userPrompt,
  systemPrompt: customPrompt
})
```

## 许可证

本项目基于MIT许可证开源。