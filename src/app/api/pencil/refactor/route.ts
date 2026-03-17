import { NextRequest, NextResponse } from 'next/server'
import { createPencilService } from '@/lib/ai/pencil-service'

interface RefactorRequest {
  code: string
  language: string
  improvements: string[]
  apiKey: string
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as RefactorRequest
    const { code, language, improvements, apiKey } = body

    if (!apiKey) {
      return NextResponse.json(
        { error: 'API密钥未提供' },
        { status: 400 }
      )
    }

    if (!code || !language) {
      return NextResponse.json(
        { error: '代码和语言不能为空' },
        { status: 400 }
      )
    }

    const pencilService = createPencilService({
      apiKey,
      temperature: 0.3,
      maxTokens: 4000
    })

    const result = await pencilService.refactorCode(
      code,
      language,
      improvements || ['性能优化', '代码可读性', '类型安全']
    )

    return NextResponse.json({ result })
  } catch (error) {
    console.error('Pencil重构API错误:', error)
    
    return NextResponse.json(
      { 
        error: error instanceof Error ? error.message : '内部服务器错误' 
      },
      { status: 500 }
    )
  }
}