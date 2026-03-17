import { USER } from "@/features/portfolio/data/user"
import type { NavItem } from "@/types/nav"

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.APP_URL || "https://clover.dev",
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
}

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
}

export const MAIN_NAV: NavItem[] = [
  {
    title: "主页",
    href: "/",
  },
  {
    title: "博客",
    href: "/blog",
  },
  // {
  //   title: "Sponsors",
  //   href: "/sponsors",
  // },
]

export const X_USERNAME = "@huazi"
export const GITHUB_USERNAME = "clover"
export const SOURCE_CODE_GITHUB_REPO = "clover/clover-portfolio"
export const SOURCE_CODE_GITHUB_URL = "https://github.com/clover/clover-portfolio"

export const SPONSORSHIP_URL = "https://github.com/sponsors/clover"

export const UTM_PARAMS = {
  utm_source: "clover.dev",
}
