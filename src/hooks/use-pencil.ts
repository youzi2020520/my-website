import { useState, useCallback, useRef } from 'react'
import { PencilService, CodeGenerationRequest, CodeAnalysisRequest } from '@/lib/ai/pencil-service'

export interface UsePencilOptions {
  apiKey: string
  onError?: (error: Error) => void
  onSuccess?: (result: string) => void
}

export interface PencilState {
  isLoading: boolean
  isGenerating: boolean
  isAnalyzing: boolean
  result: string | null
  error: string | null
}

export const usePencil = (options: UsePencilOptions) => {
  const [state, setState] = useState<PencilState>({
    isLoading: false,
    isGenerating: false,
    isAnalyzing: false,
    result: null,
    error: null
  })

  const pencilServiceRef = useRef<PencilService | null>(null)

  const initialize = useCallback(() => {
    if (!options.apiKey) {
      setState(prev => ({ ...prev, error: 'API密钥未配置' }))
      return false
    }

    try {
      pencilServiceRef.current = new PencilService({
        apiKey: options.apiKey,
        temperature: 0.2,
        maxTokens: 4000
      })
      setState(prev => ({ ...prev, error: null }))
      return true
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : '初始化失败'
      setState(prev => ({ ...prev, error: errorMessage }))
      options.onError?.(error as Error)
      return false
    }
  }, [options.apiKey, options.onError])

  const generateCode = useCallback(async (request: CodeGenerationRequest) => {
    if (!pencilServiceRef.current) {
      if (!initialize()) {
        return null
      }
    }

    setState(prev => ({ ...prev, isGenerating: true, error: null, result: null }))

    try {
      const result = await pencilServiceRef.current!.generateCode(request)
      setState(prev => ({ ...prev, isGenerating: false, result }))
      options.onSuccess?.(result)
      return result
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : '代码生成失败'
      setState(prev => ({ ...prev, isGenerating: false, error: errorMessage }))
      options.onError?.(error as Error)
      return null
    }
  }, [initialize, options.onSuccess, options.onError])

  const analyzeCode = useCallback(async (request: CodeAnalysisRequest) => {
    if (!pencilServiceRef.current) {
      if (!initialize()) {
        return null
      }
    }

    setState(prev => ({ ...prev, isAnalyzing: true, error: null, result: null }))

    try {
      const result = await pencilServiceRef.current!.analyzeCode(request)
      setState(prev => ({ ...prev, isAnalyzing: false, result }))
      options.onSuccess?.(result)
      return result
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : '代码分析失败'
      setState(prev => ({ ...prev, isAnalyzing: false, error: errorMessage }))
      options.onError?.(error as Error)
      return null
    }
  }, [initialize, options.onSuccess, options.onError])

  const refactorCode = useCallback(async (code: string, language: string, improvements: string[]) => {
    if (!pencilServiceRef.current) {
      if (!initialize()) {
        return null
      }
    }

    setState(prev => ({ ...prev, isGenerating: true, error: null, result: null }))

    try {
      const result = await pencilServiceRef.current!.refactorCode(code, language, improvements)
      setState(prev => ({ ...prev, isGenerating: false, result }))
      options.onSuccess?.(result)
      return result
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : '代码重构失败'
      setState(prev => ({ ...prev, isGenerating: false, error: errorMessage }))
      options.onError?.(error as Error)
      return null
    }
  }, [initialize, options.onSuccess, options.onError])

  const clearResult = useCallback(() => {
    setState(prev => ({ ...prev, result: null, error: null }))
  }, [])

  const reset = useCallback(() => {
    pencilServiceRef.current = null
    setState({
      isLoading: false,
      isGenerating: false,
      isAnalyzing: false,
      result: null,
      error: null
    })
  }, [])

  return {
    ...state,
    generateCode,
    analyzeCode,
    refactorCode,
    clearResult,
    reset,
    initialize
  }
}