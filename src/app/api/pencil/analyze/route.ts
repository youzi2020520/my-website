import { NextRequest, NextResponse } from 'next/server'
import { createPencilService } from '@/lib/ai/pencil-service'

interface AnalyzeRequest {
  code: string
  language: string
  purpose?: string
  apiKey: string
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as AnalyzeRequest
    const { code, language, purpose, apiKey } = body

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
      temperature: 0.1,
      maxTokens: 3000
    })

    const result = await pencilService.analyzeCode({
      code,
      language,
      purpose: purpose || '代码质量分析'
    })

    return NextResponse.json({ result })
  } catch (error) {
    console.error('Pencil分析API错误:', error)
    
    return NextResponse.json(
      { 
        error: error instanceof Error ? error.message : '内部服务器错误' 
      },
      { status: 500 }
    )
  }
}