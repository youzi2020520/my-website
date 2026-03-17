import type { User } from "@/features/portfolio/types/user"

export const USER: User = {
  firstName: "王",
  lastName: "磊",
  displayName: "王磊 (Clover)",
  username: "clover",
  gender: "male",
  pronouns: "he/him",
  bio: "热衷于发现并分享一切新奇有趣的事情",
  flipSentences: [
    "热衷于发现并分享一切新奇有趣的事情",
    "设计师 | 创作者",
    "做设计、用 AI 写代码，把想法一件件变成现实",
  ],
  address: "中国厦门",
  phoneNumber: "Y2xvdmVyMW92ZXI=", // E.164 format, base64 encoded
  email: "bWVldGx1Y2s0OEBnbWFpbC5jb20=", // base64 encoded
  website: "https://www.xiaohongshu.com/user/profile/60470e6c0000000001009e89",
  websiteDisplayName: "Clover",
  jobTitle: "设计师 | 创作者",
  jobs: [],
  about: `
- 我是一名 UI/UX 设计师，不只想做视觉与交互的创造者，更想成为持续输出、不断破圈的创作者。
- 热爱用 AI 辅助写代码，把设计与逻辑结合，让每一个想法都能落地成可触摸的产品。
- 专注设计、前端与内容创作，永远对新技术、新表达、新可能保持好奇，把热爱变成持续生长的作品。
`,
  avatar: "/images/i1.png",
  ogImage: "/images/i14.png",
  namePronunciationUrl: "",
  timeZone: "Asia/Shanghai",
  keywords: [
    "clover",
    "王磊",
    "设计师",
    "创作者",
    "前端开发",
    "内容创作",
  ],
  dateCreated: "2026-03-10", // YYYY-MM-DD
}
