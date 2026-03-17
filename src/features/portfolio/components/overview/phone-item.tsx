"use client"

import { MessageCircleIcon } from "lucide-react"
import { useHotkeys } from "react-hotkeys-hook"
import { toast } from "sonner"
import { useWebHaptics } from "web-haptics/react"

import { useIsClient } from "@/hooks/use-is-client"
import { trackEvent } from "@/lib/events"
import { CopyButton } from "@/registry/components/copy-button"
import { copyToClipboardWithEvent } from "@/utils/copy"
import { decodePhoneNumber } from "@/utils/string"

import {
  IntroItem,
  IntroItemContent,
  IntroItemIcon,
  IntroItemLink,
} from "./intro-item"

type PhoneItemProps = {
  phoneNumber: string
}

export function PhoneItem({ phoneNumber }: PhoneItemProps) {
  const isClient = useIsClient()
  const phoneNumberDecoded = decodePhoneNumber(phoneNumber)

  useHotkeys("shift+p", () => {
    copyToClipboardWithEvent(phoneNumberDecoded, {
      name: "copy_phone_number",
      properties: {
        method: "keyboard",
        key: "shift+p",
      },
    })
    toast.success("WeChat copied")
  })

  const { trigger } = useWebHaptics({ debug: true })

  return (
    <IntroItem className="group">
      <IntroItemIcon>
        <MessageCircleIcon />
      </IntroItemIcon>

      <IntroItemContent>
        <IntroItemLink
          href="#"
          aria-label={
            isClient ? `WeChat: ${phoneNumberDecoded}` : "WeChat"
          }
        >
          {isClient ? phoneNumberDecoded : "[WeChat protected]"}
        </IntroItemLink>
      </IntroItemContent>

      <div className="-translate-x-3 opacity-0 transition-opacity ease-out group-hover:opacity-100">
        <CopyButton
          className="rounded-md border-none text-muted-foreground [&_svg:not([class*='size-'])]:size-3.5"
          variant="ghost"
          size="icon-xs"
          text={isClient ? phoneNumberDecoded : "[WeChat protected]"}
          onCopySuccess={() => {
            trigger("success")
            trackEvent({
              name: "copy_phone_number",
              properties: {
                method: "button",
              },
            })
          }}
          onCopyError={() => trigger("error")}
        />
      </div>
    </IntroItem>
  )
}
