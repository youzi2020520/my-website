// Minimax API客户端配置
// 使用Minimax官方REST API进行调用

export interface MinimaxConfig {
  apiKey: string
  groupId?: string
}

export interface ChatCompletionRequest {
  model: string
  messages: Array<{
    role: 'system' | 'user' | 'assistant'
    content: string
  }>
  max_tokens?: number
  temperature?: number
  stream?: boolean
}

export interface ChatCompletionResponse {
  choices: Array<{
    message: {
      role: string
      content: string
    }
  }>
}

export class MinimaxClient {
  private config: MinimaxConfig
  private baseUrl = 'https://api.minimax.chat/v1'

  constructor(config: MinimaxConfig) {
    this.config = config
  }

  async chatCompletionsCreate(request: ChatCompletionRequest): Promise<ChatCompletionResponse> {
    const url = `${this.baseUrl}/text/chatcompletion_v2`
    
    const headers = {
      'Authorization': `Bearer ${this.config.apiKey}`,
      'Content-Type': 'application/json'
    }

    const body: any = {
      ...request,
      bot_setting: [
        {
          bot_name: 'Claude Code Assistant',
          content: request.messages.find(m => m.role === 'system')?.content || ''
        }
      ],
      reply_constraints: {
        sender_type: 'BOT',
        sender_name: 'Claude Code Assistant'
      },
      model: request.model,
      tokens_to_generate: request.max_tokens || 4000,
      temperature: request.temperature || 0.2,
      stream: request.stream || false
    }

    if (this.config.groupId) {
      body['group_id'] = this.config.groupId
    }

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers,
        body: JSON.stringify(body)
      })

      if (!response.ok) {
        const errorText = await response.text()
        throw new Error(`Minimax API错误: ${response.status} - ${errorText}`)
      }

      const data = await response.json() as any
      
      // 转换Minimax响应格式为OpenAI兼容格式
      return {
        choices: [
          {
            message: {
              role: 'assistant',
              content: data.reply || data.choices?.[0]?.message?.content || '无响应内容'
            }
          }
        ]
      }
    } catch (error) {
      console.error('Minimax API调用失败:', error)
      throw error
    }
  }

  async generateCode(prompt: string, context?: string): Promise<string> {
    try {
      const response = await this.chatCompletionsCreate({
        model: 'claude-3-5-sonnet-20241022',
        messages: [
          {
            role: 'system',
            content: `你是一个专业的代码助手，专门帮助开发者编写高质量的代码。请根据用户的需求生成简洁、高效、可维护的代码。
            
            当前项目信息：
            - 框架：Next.js 16 (App Router)
            - 样式：Tailwind CSS v4
            - UI库：shadcn/ui
            - 语言：TypeScript
            
            请确保生成的代码符合项目规范。`
          },
          {
            role: 'user',
            content: context ? `${context}\n\n${prompt}` : prompt
          }
        ],
        max_tokens: 4000,
        temperature: 0.2
      })

      return response.choices[0]?.message?.content || '无法生成代码'
    } catch (error) {
      console.error('Minimax API调用失败:', error)
      throw new Error('代码生成失败，请检查API配置')
    }
  }

  async analyzeCode(code: string, language: string): Promise<string> {
    try {
      const response = await this.chatCompletionsCreate({
        model: 'claude-3-5-sonnet-20241022',
        messages: [
          {
            role: 'system',
            content: `你是一个专业的代码审查助手，请分析提供的代码，给出改进建议、潜在问题和优化方案。`
          },
          {
            role: 'user',
            content: `请分析以下${language}代码：\n\n\`\`\`${language}\n${code}\n\`\`\`\n\n请提供：
1. 代码质量评估
2. 潜在问题
3. 改进建议
4. 最佳实践建议`
          }
        ],
        max_tokens: 3000,
        temperature: 0.1
      })

      return response.choices[0]?.message?.content || '无法分析代码'
    } catch (error) {
      console.error('Minimax API调用失败:', error)
      throw new Error('代码分析失败，请检查API配置')
    }
  }
}

export const createMinimaxClient = (config: MinimaxConfig) => new MinimaxClient(config)