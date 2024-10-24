"use client"

import { useState } from "react"
import { useToast } from "@/components/ui/use-toast"
import { PromptInput } from "@/components/image-generator/prompt-input"
import { ImageDisplay } from "@/components/image-generator/image-display"
import { DownloadButton } from "@/components/image-generator/download-button"
import { Sparkles } from "lucide-react"

export default function Home() {
  const [prompt, setPrompt] = useState("")
  const [image, setImage] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const { toast } = useToast()

  async function generateImage() {
    if (!prompt.trim()) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please enter a prompt first.",
      })
      return
    }

    try {
      setLoading(true)
      setImageLoaded(false)
      const response = await fetch(
        "https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-dev",
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_HUGGING_FACE_TOKEN}`,
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({ inputs: prompt }),
        }
      )

      if (!response.ok) throw new Error("Failed to generate image")

      const blob = await response.blob()
      const imageUrl = URL.createObjectURL(blob)
      setImage(imageUrl)
      
      toast({
        title: "Success!",
        description: "Your image has been generated successfully.",
      })
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to generate image. Please try again.",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/50 p-4 sm:p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles className="h-8 w-8 text-primary animate-pulse" />
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
              AI Image Generator
            </h1>
          </div>
          <p className="text-muted-foreground text-lg">
            Transform your ideas into stunning images using advanced AI
          </p>
        </div>

        <PromptInput
          prompt={prompt}
          loading={loading}
          onPromptChange={setPrompt}
          onGenerate={generateImage}
          onClear={() => setPrompt("")}
        />

        <ImageDisplay
          image={image}
          loading={loading}
          onImageLoad={() => setImageLoaded(true)}
        />

        {image && (
          <div className="flex justify-center">
            <DownloadButton 
              imageUrl={image} 
              disabled={!imageLoaded}
            />
          </div>
        )}
      </div>
    </main>
  )
}