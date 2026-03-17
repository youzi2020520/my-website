"use client"

import { useEffect, useState } from "react"

export function VisitorCounter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const stored = localStorage.getItem("visitor_count")
    const currentCount = stored ? parseInt(stored, 10) : 0
    const newCount = currentCount + 1
    localStorage.setItem("visitor_count", newCount.toString())
    setCount(newCount)
  }, [])

  return <span>总访问量：{count}</span>
}
