"use client"

import { useEffect, useState } from "react"

interface MessageBubbleProps {
  content: string
  sender: "user" | "bot"
  timestamp: Date
  isCrisis?: boolean
  resources?: string[]
  isNew?: boolean
}

export function MessageBubble({ content, sender, timestamp, isCrisis, resources, isNew }: MessageBubbleProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isNew) {
      const timer = setTimeout(() => setIsVisible(true), 100)
      return () => clearTimeout(timer)
    } else {
      setIsVisible(true)
    }
  }, [isNew])

  return (
    <div
      className={`flex ${sender === "user" ? "justify-end" : "justify-start"} ${
        isNew ? "animate-slide-up" : ""
      } ${isVisible ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
    >
      <div
        className={`chat-bubble max-w-[80%] sm:max-w-[75%] md:max-w-[70%] ${
          sender === "user"
            ? "bg-primary text-primary-foreground rounded-2xl rounded-br-md shadow-md hover:shadow-lg"
            : isCrisis
              ? "bg-destructive/10 border-2 border-destructive/30 text-foreground rounded-2xl rounded-bl-md shadow-md"
              : "bg-card border border-border/50 text-card-foreground rounded-2xl rounded-bl-md shadow-sm hover:shadow-md"
        } p-3 sm:p-4 transition-all duration-200 ease-in-out`}
      >
        {/* Crisis indicator */}
        {isCrisis && (
          <div className="flex items-center gap-2 mb-3 text-destructive animate-gentle-bounce">
            <span className="text-lg">⚠️</span>
            <span className="text-sm font-medium">Crisis Support</span>
          </div>
        )}

        <p className="text-sm sm:text-base leading-relaxed whitespace-pre-wrap break-words">{content}</p>

        {/* Crisis resources */}
        {resources && (
          <div className="mt-4 p-3 bg-background/50 rounded-lg border border-border/30 animate-fade-in">
            <p className="text-xs font-medium text-destructive mb-2">Immediate Help Available:</p>
            {resources.map((resource, index) => (
              <p key={index} className="text-xs text-muted-foreground leading-relaxed">
                {resource}
              </p>
            ))}
          </div>
        )}

        <p className={`text-xs mt-2 ${sender === "user" ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
          {timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </p>
      </div>
    </div>
  )
}
