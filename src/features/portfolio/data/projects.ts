import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "skewpro",
    title: "SkewPro透视变形",
    period: {
      start: "2026-02-11",
    },
    link: "https://www.figma.com/community/plugin/1603231345170114806/skewpro",
    skills: [
      "figma",
      "插件",
      "开源",
      "React",
      "TypeScript",
    ],
    description: `SkewPro 透视变形 是一款专为 Figma 设计师打造的高级图像变形工具。不同于传统的斜切工具，它通过非线性透视算法，让您可以像在专业 3D 软件中一样，通过四个角点自由定义图片的透视关系。
- 非线性透视变形：通过自由拖动四个角点，实现真正的空间透视效果，突破了传统工具只能进行简单斜切的限制。
- 智能等轴测预设：一键快捷预设：提供专业级的等轴测位面。等轴测左视图、等轴测俯视、等轴测俯视、等轴测右视图。
- 高级交互体验：高清渲染引擎、视窗自由控制。
- 专业级导出系统：多倍分辨率导出，支持 1x / 2x / 4x 三种导出选项。
- 完整历史流管理：支持多步撤销与重做，让您可以放心地尝试各种变形效果。`,
    logo: "https://assets.chanhdai.com/images/project-logos/react-wheel-picker.svg",
    isExpanded: true,
  },
  {
    id: "chanhdaidotcom",
    title: "Hue magic 色相魔法师",
    period: {
      start: "2026-01-04",
    },
    link: "https://www.figma.com/community/plugin/1588002133581484761/hue-magic",
    skills: [
      "figma",
      "插件",
      "开源",
      "TypeScript",
    ],
    description:
      "这是一款专业的Figma颜色编辑插件，通过直观的色轮界面帮助设计师快速调整图形的色相、饱和度和亮度。\n- 动态颜色点显示：自动识别选中图层的所有颜色属性（填充、描边、投影）\n- 多图层支持：同时选中多个图层，每个图层的颜色点独立显示\n- 去饱和按钮：一键将所有颜色变成灰色（饱和度=0）",
    logo: "https://assets.chanhdai.com/images/project-logos/chanhdaidotcom.svg",
  },
  {
    id: "quaricdotcom",
    title: "GhostTrace 快速矢量化",
    period: {
      start: "2026-02-06",
    },
    link: "https://www.figma.com/community/plugin/1601537468395452547/ghosttrace",
    skills: [
      "figma",
      "插件",
      "开源",
      "个人开发",
    ],
    description: `GhostTrace 是一款专为 Figma 设计的高性能，专业级图像矢量化插件。它能够将位图（PNG/JPG）一键转换为精细的矢量路径（SVG），并提供媲美 Figma 原生体验的交互界面。
三大专业模式：
- 全彩 (Color)：保留原始色彩分层，适合照片级矢量化。
- 灰度 (Gray)：提取明暗层次，适合艺术处理。
- 黑白 (B&W/Silhouette)：一键生成纯黑白轮廓，并自动剔除白色背景，完美适配 Logo 和插画转换。`,
    logo: "https://assets.chanhdai.com/images/project-logos/quaricdotcom.svg",
  },
  {
    id: "zadark",
    title: "chouzhen.websyc.tech",
    period: {
      start: "2026-02-16",
    },
    link: "https://chouzhen.websyc.tech",
    skills: [
      "个人项目",
      "网站",
      "开源",
      "Html",
    ],
    description: `专业的AI视频抽帧与调色工具，帮助创作者从视频中智能提取高质量帧图像，支持AI场景检测，智能调色和多种专业滤镜效果。`,
    logo: "https://assets.chanhdai.com/images/project-logos/zadark.svg",
  },
  {
    id: "qabox",
    title: "clover.websyc.tech",
    period: {
      start: "2026-01-20",
    },
    link: "https://clover.websyc.tech",
    skills: [
      "个人项目",
      "开源",
      "网站",
      "Html",
    ],
    description:
      "网站为个人网站已上线，对于AI初级尝试。",
  },
  {
    id: "taskbox",
    title: "AI 视频剪辑助手",
    period: {
      start: "2026-01-23",
    },
    link: "",
    skills: [
      "个人开发",
      "AI",
      "LLM",
      "Python",
      "claude code",
      "trae",
      "gemini",
    ],
    description: `这是一个专为内容创作者设计的智能剪辑工具，无需复杂的剪辑软件知识，帮你自动完成粗剪工作。
- 智能去废话：自动识别并剪除视频中的"呃"、"嗯"等语气词和静音片段。
- 语义纠错：结合大模型 (如 GPT-4o, DeepSeek)，智能识别并剪掉口误重复的句子（需配置 API Key）。
- 批量并发剪辑：支持选择文件夹，多线程并发处理多个视频，效率翻倍！
- 智能无声剔除：批量模式下，自动检测并跳过没有音轨的视频，避免无效等待。
- 自动字幕生成：剪辑同时生成配套的 .srt 字幕文件。`,
  },
]
