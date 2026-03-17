'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { usePencil } from '@/hooks/use-pencil'
import { Loader2, Code, Search, RefreshCw } from 'lucide-react'

export interface PencilEditorProps {
  apiKey: string
  defaultLanguage?: string
  defaultFramework?: string
}

export function PencilEditor({ apiKey, defaultLanguage = 'typescript', defaultFramework = 'nextjs' }: PencilEditorProps) {
  const [prompt, setPrompt] = useState('')
  const [code, setCode] = useState('')
  const [language, setLanguage] = useState(defaultLanguage)
  const [framework, setFramework] = useState(defaultFramework)
  const [activeTab, setActiveTab] = useState('generate')

  const {
    generateCode,
    analyzeCode,
    refactorCode,
    isGenerating,
    isAnalyzing,
    result,
    error,
    clearResult
  } = usePencil({
    apiKey,
    onError: (error) => {
      console.error('Pencil错误:', error)
    },
    onSuccess: (result) => {
      console.log('Pencil成功:', result)
    }
  })

  const handleGenerateCode = async () => {
    if (!prompt.trim()) return

    const generatedCode = await generateCode({
      prompt: prompt.trim(),
      language,
      framework
    })

    if (generatedCode) {
      setCode(generatedCode)
    }
  }

  const handleAnalyzeCode = async () => {
    if (!code.trim()) return

    await analyzeCode({
      code: code.trim(),
      language,
      purpose: '代码质量分析'
    })
  }

  const handleRefactorCode = async () => {
    if (!code.trim()) return

    const improvements = ['性能优化', '代码可读性', '类型安全']
    const refactoredCode = await refactorCode(code, language, improvements)

    if (refactoredCode) {
      setCode(refactoredCode)
    }
  }

  const handleClear = () => {
    setPrompt('')
    setCode('')
    clearResult()
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="h-5 w-5" />
            Pencil - AI代码助手
          </CardTitle>
          <CardDescription>
            使用Claude Code模型通过Minimax API生成和分析代码
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="generate">代码生成</TabsTrigger>
              <TabsTrigger value="analyze">代码分析</TabsTrigger>
              <TabsTrigger value="refactor">代码重构</TabsTrigger>
            </TabsList>

            <TabsContent value="generate" className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="prompt" className="text-sm font-medium">
                  描述你想要的代码功能
                </label>
                <Textarea
                  id="prompt"
                  placeholder="例如：创建一个React组件，显示用户头像和姓名，支持暗色主题..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  rows={4}
                />
              </div>

              <div className="flex gap-2">
                <Button 
                  onClick={handleGenerateCode} 
                  disabled={isGenerating || !prompt.trim()}
                  className="flex items-center gap-2"
                >
                  {isGenerating ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Code className="h-4 w-4" />
                  )}
                  生成代码
                </Button>
                <Button variant="outline" onClick={handleClear}>
                  清空
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="analyze" className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="code" className="text-sm font-medium">
                  输入要分析的代码
                </label>
                <Textarea
                  id="code"
                  placeholder="粘贴你的代码到这里..."
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  rows={8}
                  className="font-mono text-sm"
                />
              </div>

              <Button 
                onClick={handleAnalyzeCode} 
                disabled={isAnalyzing || !code.trim()}
                className="flex items-center gap-2"
              >
                {isAnalyzing ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Search className="h-4 w-4" />
                )}
                分析代码
              </Button>
            </TabsContent>

            <TabsContent value="refactor" className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="refactor-code" className="text-sm font-medium">
                  输入要重构的代码
                </label>
                <Textarea
                  id="refactor-code"
                  placeholder="粘贴需要重构的代码..."
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  rows={8}
                  className="font-mono text-sm"
                />
              </div>

              <Button 
                onClick={handleRefactorCode} 
                disabled={isGenerating || !code.trim()}
                className="flex items-center gap-2"
              >
                {isGenerating ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <RefreshCw className="h-4 w-4" />
                )}
                重构代码
              </Button>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {error && (
        <Card className="border-red-200 bg-red-50">
          <CardContent className="pt-6">
            <div className="text-red-700 text-sm">
              <strong>错误：</strong> {error}
            </div>
          </CardContent>
        </Card>
      )}

      {result && (
        <Card>
          <CardHeader>
            <CardTitle>结果</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="whitespace-pre-wrap text-sm bg-muted p-4 rounded-md">
              {result}
            </pre>
          </CardContent>
        </Card>
      )}

      {code && activeTab === 'generate' && (
        <Card>
          <CardHeader>
            <CardTitle>生成的代码</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="whitespace-pre-wrap text-sm bg-muted p-4 rounded-md font-mono">
              {code}
            </pre>
          </CardContent>
        </Card>
      )}
    </div>
  )
}