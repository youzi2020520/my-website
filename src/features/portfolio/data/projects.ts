import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "react-wheel-picker",
    title: "React 轮盘选择器",
    period: {
      start: "05.2025",
    },
    link: "https://react-wheel-picker.chanhdai.com",
    skills: [
      "开源",
      "React",
      "TypeScript",
      "Monorepo",
      "Turborepo",
      "pnpm-workspace",
      "NPM 包发布",
      "NPM 注册表",
      "GitHub Actions",
    ],
    description: `iOS 风格的 React 轮盘选择器，支持平滑惯性滚动和无限循环滚动。获得 [▲Vercel 开源计划](https://vercel.com/blog/summer-2025-oss-program#react-wheel-picker) 支持
- 自然触控滚动，带平滑惯性效果，支持桌面端鼠标拖拽和滚动
- 无限循环滚动
- 无样式核心，支持完全自定义样式
- 完整的键盘导航和即时搜索功能
`,
    logo: "https://assets.chanhdai.com/images/project-logos/react-wheel-picker.svg",
    isExpanded: true,
  },
  {
    id: "chanhdaidotcom",
    title: "chanhdai.com",
    period: {
      start: "01.2025",
    },
    link: "https://github.com/ncdai/chanhdai.com",
    skills: [
      "开源",
      "Next.js 16",
      "Tailwind CSS v4",
      "Radix UI",
      "Motion",
      "shadcn/ui",
      "shadcn 注册表",
      "Vercel",
    ],
    description:
      "一个极简、像素完美的开发者作品集，shadcn 注册表和博客。",
    logo: "https://assets.chanhdai.com/images/project-logos/chanhdaidotcom.svg",
  },
  {
    id: "quaricdotcom",
    title: "quaric.com",
    period: {
      start: "03.2024",
    },
    link: "https://quaric.com",
    skills: [
      "公司项目",
      "Next.js 15",
      "Tailwind CSS v3",
      "shadcn/ui",
      "Strapi 5",
      "VNPAY-QR",
      "Docker",
      "Docker Compose",
      "NGINX",
    ],
    logo: "https://assets.chanhdai.com/images/project-logos/quaricdotcom.svg",
  },
  {
    id: "zadark",
    title: "ZaDark",
    period: {
      start: "01.2022",
    },
    link: "https://zadark.com",
    skills: [
      "个人项目",
      "开源",
      "浏览器扩展",
      "CLI",
      "Docusaurus 3",
    ],
    description: `ZaDark 为 Zalo 网页版和桌面版添加深色模式、防偷窥、可自定义字体、背景等功能。
- 通过付费 Safari 扩展获得 1000 万越南盾以上净收入*
- 在 SourceForge 上获得 8 万以上下载量（被 SourceForge 授予社区领袖徽章）
- 通过 Chrome 网上应用店获得 3 万以上活跃用户*
- 铜牌 — 第十届设计、制造与应用竞赛 2022

<p class="text-muted-foreground">* 峰值指标记录；实际当前数字可能有所不同。</p>
`,
    logo: "https://assets.chanhdai.com/images/project-logos/zadark.svg",
  },
  {
    id: "qabox",
    title: "QABox",
    period: {
      start: "07.2023",
      end: "07.2023",
    },
    link: "https://github.com/ncdai/qabox",
    skills: [
      "大学项目",
      "PHP",
      "MySQL",
      "MVC",
      "Docker",
      "Docker Compose",
    ],
    description:
      "- 课程：分布式应用 — FIT@HCMUS\n- 项目得分：10/10\n- 源代码：https://github.com/ncdai/qabox",
  },
  {
    id: "taskbox",
    title: "TaskBox",
    period: {
      start: "07.2023",
      end: "07.2023",
    },
    link: "https://github.com/ncdai/taskbox",
    skills: [
      "大学项目",
      "PHP",
      "MySQL",
      "MVC",
      "Docker",
      "Docker Compose",
    ],
    description:
      "- 课程：分布式应用 — FIT@HCMUS\n- 项目得分：10/10\n- 源代码：https://github.com/ncdai/taskbox",
  },
  {
    id: "daichat-app",
    title: "DaiChat 应用",
    period: {
      start: "07.2020",
      end: "07.2020",
    },
    link: "https://www.youtube.com/watch?v=H5U3J_W1low",
    skills: ["大学项目", "Java", "Java Swing", "Java 网络编程"],
    description: `- 课程：Java 应用编程 — FIT@HCMUS
- 要求：使用 Java 技术开发实时聊天应用程序
- 项目得分：10/10
- 源代码：
  - 服务器：https://github.com/ncdai/ltudjava-summer2020-chatapp_server
  - 客户端：https://github.com/ncdai/ltudjava-summer2020-chatapp_client`,
  },
  {
    id: "qlsv-app",
    title: "QLSV 应用",
    period: {
      start: "06.2020",
      end: "06.2020",
    },
    link: "https://www.youtube.com/watch?v=tG9SZEBrwog",
    skills: ["大学项目", "Java", "Java Swing", "Hibernate", "MySQL"],
    description: `- 课程：Java 应用编程 — FIT@HCMUS
- 要求：使用 Java 技术构建具有基于角色功能的学生管理系统
- 项目得分：10/10
- 源代码：https://github.com/ncdai/ltudjava-summer2020-hibernate`,
  },
  {
    id: "penphy",
    title: "Penphy",
    period: {
      start: "01.2019",
      end: "08.2019",
    },
    link: "https://www.youtube.com/watch?v=EdU7rUO-UA4",
    skills: ["创业项目", "JavaScript", "React Native"],
    description: "2019 年商业创业大赛二等奖",
  },
  {
    id: "unlimitedstudy",
    title: "UnlimitedStudy",
    period: {
      start: "01.2017",
      end: "08.2018",
    },
    link: "https://muctim.tuoitre.vn/cong-cu-ho-tro-viec-day-va-hoc-55107.htm",
    skills: [
      "全国竞赛",
      "创意软件",
      "PHP",
      "Laravel 4",
      "MySQL",
      "jQuery",
      "Bootstrap 3",
    ],
    description: `UnlimitedStudy 是一个为教师和学生提供教学和学习支持工具的网站。
- 2018 年越南全国科学工程博览会三等奖（ViSEF）
- 2018 年芹苴市科学工程博览会一等奖
- 2018 年全国青年信息技术竞赛三等奖
- 2018 年芹苴市青年与儿童创意竞赛二等奖
- 2018 年芹苴市青年信息技术竞赛三等奖
- 达到 7000 以上用户，主要为芹苴市高中生
- 在芹苴市多所高中试点实施，包含英语测验，由芹苴市教育局英语专科教师监督`,
  },
  {
    id: "dmessage",
    title: "DMessage",
    period: {
      start: "05.2017",
      end: "05.2017",
    },
    link: "https://github.com/ncdai/DMessage",
    skills: [
      "自学项目",
      "个人项目",
      "Express.js",
      "Socket.io",
      "MongoDB",
      "Mongoose ODM",
    ],
    description:
      "一个使用 Socket.IO 练习实时通信的Messenger克隆项目，展示了我在实现 WebSocket 即时通讯方面的自学历程。",
  },
  {
    id: "study-english",
    title: "学习英语",
    period: {
      start: "11.2016",
      end: "12.2017",
    },
    link: "https://www.youtube.com/watch?v=OYgugvjqU4A",
    skills: [
      "全国竞赛",
      "创意软件",
      "PHP",
      "Laravel 4",
      "MySQL",
    ],
    description: `Study English 是一个免费的、适合移动设备的高中生英语学习网站，提供词汇、测验、听力练习等功能。
- 2016 年全国青年与儿童创意竞赛安慰奖
- 2016 年芹苴市青年与儿童创意竞赛一等奖
- 2016 年芹苴市青年信息技术竞赛安慰奖`,
  },
]
