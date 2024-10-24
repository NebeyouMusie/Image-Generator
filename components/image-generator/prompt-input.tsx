"use client"

import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Loader2, Sparkles, Eraser } from "lucide-react"

interface PromptInputProps {
  prompt: string
  loading: boolean
  onPromptChange: (value: string) => void
  onGenerate: () => void
  onClear: () => void
}

export function PromptInput({
  prompt,
  loading,
  onPromptChange,
  onGenerate,
  onClear,
}: PromptInputProps) {
  return (
    <Card className="p-6 space-y-4 shadow-lg border border-primary/10">
      <Textarea
        placeholder="Describe the image you want to generate..."
        value={prompt}
        onChange={(e) => onPromptChange(e.target.value)}
        className="min-h-[100px] resize-none focus-visible:ring-primary"
      />
      
      <div className="flex justify-end gap-3">
        <Button
          variant="outline"
          onClick={onClear}
          disabled={!prompt || loading}
          className="gap-2"
        >
          <Eraser className="h-4 w-4" />
          Clear
        </Button>
        <Button
          onClick={onGenerate}
          disabled={loading}
          className="gap-2 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
        >
          {loading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Sparkles className="h-4 w-4" />
          )}
          Generate Image
        </Button>
      </div>
    </Card>
  )
}