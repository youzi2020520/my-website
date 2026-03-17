import { NextRequest, NextResponse } from 'next/server'
import { createPencilService } from '@/lib/ai/pencil-service'

interface GenerateRequest {
  prompt: string
  context?: string
  language?: string
  framework?: string
  apiKey: string
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as GenerateRequest
    const { prompt, context, language, framework, apiKey } = body

    if (!apiKey) {
      return NextResponse.json(
        { error: 'API密钥未提供' },
        { status: 400 }
      )
    }

    if (!prompt) {
      return NextResponse.json(
        { error: '提示词不能为空' },
        { status: 400 }
      )
    }

    const pencilService = createPencilService({
      apiKey,
      temperature: 0.2,
      maxTokens: 4000
    })

    const result = await pencilService.generateCode({
      prompt,
      context,
      language: language || 'typescript',
      framework: framework || 'nextjs'
    })

    return NextResponse.json({ result })
  } catch (error) {
    console.error('Pencil API错误:', error)
    
    return NextResponse.json(
      { 
        error: error instanceof Error ? error.message : '内部服务器错误' 
      },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({ 
    message: 'Pencil API服务运行正常',
    endpoints: {
      'POST /api/pencil/generate': '生成代码',
      'POST /api/pencil/analyze': '分析代码',
      'POST /api/pencil/refactor': '重构代码'
    }
  })
}