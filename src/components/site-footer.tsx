import { RssIcon } from "lucide-react"

import { SITE_INFO } from "@/config/site"
import { cn } from "@/lib/utils"

import { VisitorCounter } from "./visitor-counter"

export function SiteFooter({
  width = "default",
}: {
  width?: "default" | "wide"
}) {
  return (
    <footer className="max-w-screen overflow-x-hidden px-2">
      <div
        data-width={width}
        className="screen-line-before mx-auto border-x border-edge pt-4 data-[width=wide]:container data-[width=default]:md:max-w-3xl"
      >
        <p className="mb-1 px-4 text-center font-mono text-sm text-balance text-muted-foreground">
          Inspired by tailwindcss.com & ui.shadcn.com
        </p>

        <div className="screen-line-before flex justify-center gap-2 py-3 font-mono text-xs text-muted-foreground sm:hidden">
          <a
            className="font-medium transition-[color] hover:text-foreground"
            href="https://www.xiaohongshu.com/user/profile/60470e6c0000000001009e89"
            target="_blank"
            rel="noopener noreferrer"
          >
            Clover
          </a>
        </div>

        <div className="screen-line-before screen-line-after flex w-full before:z-1 after:z-1">
          <div className="flex w-full items-center justify-between border-x border-edge bg-background px-4">
            <div className="flex items-center gap-3">
              <span className="flex font-mono text-xs font-medium text-muted-foreground max-sm:hidden">
                <VisitorCounter />
              </span>
            </div>

            <div className="flex items-center gap-3">
              <a
                className="flex font-mono text-xs font-medium text-muted-foreground transition-[color] hover:text-foreground max-sm:hidden"
                href="https://www.xiaohongshu.com/user/profile/60470e6c0000000001009e89"
                target="_blank"
                rel="noopener noreferrer"
              >
                Clover
              </a>

              <Separator className="max-sm:hidden" />

              <a
                className="flex items-center text-muted-foreground transition-[color] hover:text-foreground"
                href="https://x.com/lluckmeet?s=21"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span className="sr-only">X</span>
              </a>

              <Separator />

              <a
                className="flex items-center text-muted-foreground transition-[color] hover:text-foreground"
                href={`${SITE_INFO.url}/rss`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <RssIcon className="size-4" />
                <span className="sr-only">RSS</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-[env(safe-area-inset-bottom,0px)]">
        <div className="flex h-2" />
      </div>
    </footer>
  )
}

function Separator({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("flex h-11 w-px bg-edge", className)} {...props} />
}
