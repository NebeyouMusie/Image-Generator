"use client"

import { cn } from "@/lib/utils"
import { ImageIcon, Loader2 } from "lucide-react"

interface ImageDisplayProps {
  image: string | null
  loading: boolean
  onImageLoad: () => void
}

export function ImageDisplay({ image, loading, onImageLoad }: ImageDisplayProps) {
  return (
    <div className={cn(
      "relative aspect-square w-full max-w-2xl mx-auto rounded-xl overflow-hidden",
      "bg-muted/30 border border-muted-foreground/25",
      "shadow-lg shadow-primary/5",
      !image && "flex items-center justify-center"
    )}>
      {loading ? (
        <div className="absolute inset-0 flex items-center justify-center bg-background/50 backdrop-blur-sm">
          <div className="text-center space-y-4">
            <Loader2 className="h-8 w-8 animate-spin mx-auto text-primary" />
            <p className="text-sm text-muted-foreground">
              Generating your masterpiece...
            </p>
          </div>
        </div>
      ) : !image ? (
        <div className="text-center space-y-4">
          <ImageIcon className="h-12 w-12 mx-auto text-muted-foreground/50" />
          <p className="text-muted-foreground text-sm">
            Your generated image will appear here
          </p>
        </div>
      ) : (
        <img
          src={image}
          alt="Generated"
          className="w-full h-full object-contain"
          onLoad={onImageLoad}
        />
      )}
    </div>
  )
}