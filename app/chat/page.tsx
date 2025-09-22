"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { MindfulBot, type BotResponse } from "@/lib/mindful-bot"
import { MessageBubble } from "@/components/message-bubble"
import { TypingIndicator } from "@/components/typing-indicator"

interface Message {
  id: string
  content: string
  sender: "user" | "bot"
  timestamp: Date
  isCrisis?: boolean
  resources?: string[]
  isNew?: boolean
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content:
        "Hello! I'm MindfulBot, your compassionate AI companion. I'm here to listen and support you in a safe, non-judgmental space. How are you feeling today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [conversationHistory, setConversationHistory] = useState<string[]>([])
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerHeight < 500) {
        // Keyboard is likely open on mobile
        setTimeout(scrollToBottom, 100)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue.trim(),
      sender: "user",
      timestamp: new Date(),
      isNew: true,
    }

    setMessages((prev) => [...prev, userMessage])
    const newHistory = [...conversationHistory, inputValue.trim()]
    setConversationHistory(newHistory)
    setInputValue("")
    setIsTyping(true)

    // Generate bot response using enhanced logic
    setTimeout(() => {
      const botResponse: BotResponse = MindfulBot.generateResponse(userMessage.content, newHistory)
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: botResponse.content,
        sender: "bot",
        timestamp: new Date(),
        isCrisis: botResponse.isCrisis,
        resources: botResponse.resources,
        isNew: true,
      }
      setMessages((prev) => [...prev, botMessage])
      setIsTyping(false)
    }, 1500)
  }

  const resetConversation = () => {
    setMessages([
      {
        id: "welcome",
        content:
          "Hello! I'm MindfulBot, your compassionate AI companion. I'm here to listen and support you in a safe, non-judgmental space. How are you feeling today?",
        sender: "bot",
        timestamp: new Date(),
      },
    ])
    setConversationHistory([])
    setIsMobileMenuOpen(false)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-secondary/10 flex flex-col">
      {/* Enhanced Mobile-First Header */}
      <header className="mobile-header border-b border-border/50 bg-background/90 backdrop-blur-md sticky top-0 z-10">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-4">
            <Link href="/">
              <Button variant="ghost" size="sm" className="gap-1 sm:gap-2 focus-ring">
                ← <span className="hidden sm:inline">Back</span>
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary rounded-full flex items-center justify-center animate-pulse-soft">
                <span className="text-primary-foreground text-xs sm:text-sm">♥</span>
              </div>
              <div>
                <h1 className="text-sm sm:text-base font-semibold">MindfulBot</h1>
                <p className="text-xs text-muted-foreground hidden sm:block">Your compassionate companion</p>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={resetConversation}
              className="hidden sm:flex gap-2 bg-transparent focus-ring"
            >
              ↻ Reset
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="sm:hidden focus-ring"
            >
              ☰
            </Button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {isMobileMenuOpen && (
          <div className="sm:hidden border-t border-border/50 bg-background/95 backdrop-blur-sm animate-slide-up">
            <div className="container mx-auto p-2">
              <Button
                variant="outline"
                size="sm"
                onClick={resetConversation}
                className="w-full gap-2 bg-transparent focus-ring"
              >
                ↻ Reset Conversation
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Enhanced Chat Messages with better mobile spacing */}
      <div className="flex-1 overflow-hidden">
        <div className="h-full overflow-y-auto p-2 sm:p-4">
          <div className="container mx-auto max-w-3xl space-y-3 sm:space-y-4">
            {messages.map((message) => (
              <MessageBubble
                key={message.id}
                content={message.content}
                sender={message.sender}
                timestamp={message.timestamp}
                isCrisis={message.isCrisis}
                resources={message.resources}
                isNew={message.isNew}
              />
            ))}

            {/* Enhanced Typing Indicator */}
            {isTyping && <TypingIndicator />}

            <div ref={messagesEndRef} />
          </div>
        </div>
      </div>

      {/* Enhanced Mobile-Optimized Input Area */}
      <div className="mobile-input-area border-t border-border/50 bg-background/90 backdrop-blur-md sticky bottom-0">
        <div className="container mx-auto max-w-3xl">
          <div className="flex gap-2">
            <Input
              ref={inputRef}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Share what's on your mind..."
              className="flex-1 rounded-xl border-border/50 bg-background/50 focus:bg-background transition-all duration-200 text-sm sm:text-base focus-ring"
              disabled={isTyping}
            />
            <Button
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isTyping}
              size="sm"
              className="px-3 sm:px-4 rounded-xl focus-ring hover:scale-105 transition-transform duration-200"
            >
              ➤
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-2 text-center leading-relaxed px-2">
            MindfulBot is an AI companion, not a substitute for professional mental health care.
          </p>
        </div>
      </div>
    </div>
  )
}
