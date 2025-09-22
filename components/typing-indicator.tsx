"use client"

export function TypingIndicator() {
  return (
    <div className="flex justify-start animate-fade-in">
      <div className="bg-card border border-border/50 rounded-2xl rounded-bl-md p-4 shadow-sm">
        <div className="flex items-center gap-1">
          <div
            className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce"
            style={{ animationDelay: "0ms" }}
          ></div>
          <div
            className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce"
            style={{ animationDelay: "150ms" }}
          ></div>
          <div
            className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce"
            style={{ animationDelay: "300ms" }}
          ></div>
        </div>
        <p className="text-xs text-muted-foreground mt-1">MindfulBot is typing...</p>
      </div>
    </div>
  )
}
