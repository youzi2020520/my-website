import { createMinimaxClient, type MinimaxConfig } from './minimax-client'

export interface PencilConfig extends MinimaxConfig {
  model?: string
  temperature?: number
  maxTokens?: number
}

export interface CodeGenerationRequest {
  prompt: string
  context?: string
  language?: string
  framework?: string
}

export interface CodeAnalysisRequest {
  code: string
  language: string
  purpose?: string
}

export class PencilService {
  private client: ReturnType<typeof createMinimaxClient>
  private config: PencilConfig

  constructor(config: PencilConfig) {
    this.config = {
      model: 'claude-3-5-sonnet-20241022',
      temperature: 0.2,
      maxTokens: 4000,
      ...config
    }
    this.client = createMinimaxClient({
      apiKey: this.config.apiKey,
      groupId: this.config.groupId
    })
  }

  async generateCode(request: CodeGenerationRequest): Promise<string> {
    const { prompt, context, language = 'typescript', framework = 'nextjs' } = request
    
    const systemPrompt = this.buildSystemPrompt(language, framework)
    const userPrompt = context ? `${context}\n\n${prompt}` : prompt
    
    try {
      return await this.client.generateCode(userPrompt, systemPrompt)
    } catch (error) {
      console.error('PencilService - 代码生成失败:', error)
      throw error
    }
  }

  async analyzeCode(request: CodeAnalysisRequest): Promise<string> {
    const { code, language, purpose = 'general' } = request
    
    try {
      return await this.client.analyzeCode(code, language)
    } catch (error) {
      console.error('PencilService - 代码分析失败:', error)
      throw error
    }
  }

  async refactorCode(code: string, language: string, improvements: string[]): Promise<string> {
    const prompt = `请重构以下${language}代码，重点关注：${improvements.join(', ')}。\n\n代码：\n\`\`\`${language}\n${code}\n\`\`\`\n\n请提供重构后的代码。`
    
    try {
      return await this.client.generateCode(prompt)
    } catch (error) {
      console.error('PencilService - 代码重构失败:', error)
      throw error
    }
  }

  private buildSystemPrompt(language: string, framework: string): string {
    const basePrompt = `你是一个专业的${language}开发专家，专注于${framework}框架。请遵循以下最佳实践：

项目规范：
- 使用TypeScript严格模式
- 遵循shadcn/ui组件规范
- 使用Tailwind CSS v4语法
- 支持暗色/亮色主题
- 代码简洁、可维护、类型安全

代码风格：
- 使用描述性变量名
- 避免不必要的注释（只解释"为什么"，不解释"做什么"）
- 遵循SOLID原则
- 组件化思维，关注单一职责

请确保生成的代码可以直接在项目中运行。`

    if (framework === 'nextjs') {
      return `${basePrompt}\n\nNext.js特定规范：
- 使用App Router
- 合理使用服务端组件和客户端组件
- 遵循Next.js最佳实践
- 优化性能（如使用React.memo、useMemo等）`
    }

    return basePrompt
  }

  updateConfig(newConfig: Partial<PencilConfig>) {
    this.config = { ...this.config, ...newConfig }
    this.client = createMinimaxClient({
      apiKey: this.config.apiKey,
      groupId: this.config.groupId
    })
  }
}

export const createPencilService = (config: PencilConfig) => new PencilService(config)