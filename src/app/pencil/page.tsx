'use client'

import { PencilEditor } from '@/components/pencil/pencil-editor'

export default function PencilPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Pencil - AI代码助手</h1>
          <p className="text-muted-foreground">
            使用Claude Code模型通过Minimax API生成、分析和重构代码
          </p>
        </div>
        
        <PencilEditor 
          apiKey={process.env.MINIMAX_API_KEY || ''}
          defaultLanguage="typescript"
          defaultFramework="nextjs"
        />
      </div>
    </div>
  )
}