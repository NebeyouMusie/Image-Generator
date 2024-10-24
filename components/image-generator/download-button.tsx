"use client"

import { Button } from "@/components/ui/button"
import { Download, Loader2 } from "lucide-react"

interface DownloadButtonProps {
  imageUrl: string
  disabled: boolean
}

export function DownloadButton({ imageUrl, disabled }: DownloadButtonProps) {
  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = imageUrl
    link.download = `generated-image-${Date.now()}.png`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <Button
      onClick={handleDownload}
      className="gap-2 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
      size="lg"
      disabled={disabled}
    >
      {disabled ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : (
        <Download className="h-4 w-4" />
      )}
      {disabled ? "Loading Image..." : "Download Image"}
    </Button>
  )
}