export interface BotResponse {
  content: string
  isCrisis: boolean
  suggestedActions?: string[]
  resources?: string[]
}

export class MindfulBot {
  private static crisisKeywords = [
    "suicide",
    "kill myself",
    "end it all",
    "hurt myself",
    "self harm",
    "die",
    "death",
    "want to die",
    "better off dead",
    "no point living",
    "cutting",
    "overdose",
    "jump",
    "hanging",
    "pills",
  ]

  private static anxietyKeywords = [
    "anxious",
    "anxiety",
    "worried",
    "panic",
    "nervous",
    "scared",
    "fear",
    "terrified",
    "overwhelmed",
    "stress",
    "stressed",
  ]

  private static depressionKeywords = [
    "sad",
    "depressed",
    "down",
    "hopeless",
    "empty",
    "numb",
    "worthless",
    "useless",
    "tired",
    "exhausted",
    "dark",
  ]

  private static angerKeywords = [
    "angry",
    "mad",
    "furious",
    "rage",
    "hate",
    "frustrated",
    "irritated",
    "annoyed",
    "pissed",
    "livid",
  ]

  private static lonelinessKeywords = [
    "lonely",
    "alone",
    "isolated",
    "abandoned",
    "rejected",
    "disconnected",
    "nobody cares",
    "no friends",
  ]

  static generateResponse(userInput: string, conversationHistory: string[] = []): BotResponse {
    const input = userInput.toLowerCase()

    // Crisis detection - highest priority
    if (this.detectCrisis(input)) {
      return {
        content:
          "I'm hearing some serious distress, and I'm genuinely concerned about you. Please know there's help available right now:\n\n🆘 **National Suicide Prevention Lifeline: 988**\n🆘 **Crisis Text Line: Text HOME to 741741**\n\nYour life has value, and there are people trained to help you through this moment. This bot is not a substitute for professional help, but real people are standing by to support you. Please reach out to them.",
        isCrisis: true,
        resources: [
          "National Suicide Prevention Lifeline: 988",
          "Crisis Text Line: Text HOME to 741741",
          "Emergency Services: 911",
        ],
      }
    }

    // Emotional support responses
    if (this.containsKeywords(input, this.anxietyKeywords)) {
      return this.generateAnxietyResponse(input)
    }

    if (this.containsKeywords(input, this.depressionKeywords)) {
      return this.generateDepressionResponse(input)
    }

    if (this.containsKeywords(input, this.angerKeywords)) {
      return this.generateAngerResponse(input)
    }

    if (this.containsKeywords(input, this.lonelinessKeywords)) {
      return this.generateLonelinessResponse(input)
    }

    // Medical advice detection
    if (this.detectMedicalAdviceRequest(input)) {
      return {
        content:
          "I understand you're looking for guidance, but I'm not qualified to provide medical advice or diagnoses. For health-related concerns, it's important to speak with a healthcare professional, therapist, or counselor who can give you proper care. I'm here to listen and provide emotional support though. How are you feeling about this situation?",
        isCrisis: false,
      }
    }

    // General supportive response
    return this.generateGeneralResponse(input, conversationHistory)
  }

  private static detectCrisis(input: string): boolean {
    return this.crisisKeywords.some((keyword) => input.includes(keyword))
  }

  private static containsKeywords(input: string, keywords: string[]): boolean {
    return keywords.some((keyword) => input.includes(keyword))
  }

  private static detectMedicalAdviceRequest(input: string): boolean {
    const medicalKeywords = [
      "diagnose",
      "medication",
      "prescription",
      "treatment",
      "therapy recommendation",
      "what should i take",
      "medical advice",
      "doctor says",
      "symptoms",
    ]
    return medicalKeywords.some((keyword) => input.includes(keyword))
  }

  private static generateAnxietyResponse(input: string): BotResponse {
    const responses = [
      "I hear that you're feeling anxious, and I want you to know that's a completely normal human experience. Anxiety can feel overwhelming, but you're not alone in this.",
      "It sounds like anxiety is weighing on you right now. That takes courage to share, and I'm glad you did.",
      "Anxiety can make everything feel more intense. Thank you for trusting me with how you're feeling.",
    ]

    const suggestions = [
      "Try the 4-4-6 breathing technique: breathe in for 4 counts, hold for 4, breathe out for 6",
      "Ground yourself by naming 5 things you can see, 4 you can touch, 3 you can hear, 2 you can smell, 1 you can taste",
      "Focus on what you can control in this moment, rather than what you can't",
      "Consider writing down your worries - sometimes getting them out of your head helps",
    ]

    return {
      content: `${responses[Math.floor(Math.random() * responses.length)]}\n\nHere's something that might help: ${suggestions[Math.floor(Math.random() * suggestions.length)]}\n\nWhat usually helps you feel a bit more grounded?`,
      isCrisis: false,
      suggestedActions: suggestions,
    }
  }

  private static generateDepressionResponse(input: string): BotResponse {
    const responses = [
      "I'm sorry you're feeling this way. Depression can make everything feel heavy and difficult, but your feelings are valid and you matter.",
      "It takes strength to reach out when you're feeling down. I'm glad you're here, and I want you to know that you're not alone.",
      "I hear the pain in your words, and I want you to know that what you're experiencing is real and important.",
    ]

    const suggestions = [
      "Try one small act of self-care today - maybe a warm shower, listening to a favorite song, or stepping outside",
      "Consider writing down one thing you're grateful for, no matter how small",
      "Reach out to someone you trust, even if it's just to say hello",
      "Be gentle with yourself - healing isn't linear, and it's okay to have difficult days",
    ]

    return {
      content: `${responses[Math.floor(Math.random() * responses.length)]}\n\n${suggestions[Math.floor(Math.random() * suggestions.length)]}\n\nWhat's one small thing that sometimes brings you a tiny bit of comfort?`,
      isCrisis: false,
      suggestedActions: suggestions,
    }
  }

  private static generateAngerResponse(input: string): BotResponse {
    const responses = [
      "It sounds like you're feeling really frustrated or angry. Those are valid emotions, and it's okay to feel them.",
      "I can sense the intensity of what you're feeling. Anger often tells us that something important to us isn't being honored.",
      "Thank you for sharing these difficult feelings with me. It takes courage to express anger in a healthy way.",
    ]

    const suggestions = [
      "Try taking some deep breaths or counting to ten before responding to the situation",
      "Consider what's underneath the anger - sometimes it's hurt, fear, or feeling unheard",
      "Physical movement like walking or stretching can help release some of that intense energy",
      "Write down what's bothering you - sometimes getting it out helps clarify your feelings",
    ]

    return {
      content: `${responses[Math.floor(Math.random() * responses.length)]}\n\n${suggestions[Math.floor(Math.random() * suggestions.length)]}\n\nWhat do you think is at the heart of these feelings?`,
      isCrisis: false,
      suggestedActions: suggestions,
    }
  }

  private static generateLonelinessResponse(input: string): BotResponse {
    const responses = [
      "Loneliness can feel really heavy and isolating. Thank you for sharing that with me - it shows courage to reach out.",
      "I hear that you're feeling alone, and I want you to know that your feelings matter. Even though I'm an AI, I'm here with you right now.",
      "Feeling disconnected from others is one of the most difficult human experiences. You're not alone in feeling this way.",
    ]

    const suggestions = [
      "Consider reaching out to someone, even with a simple text or call - sometimes small connections help",
      "Try engaging in a community activity, even briefly - like a walk in a public space or visiting a library",
      "Remember that loneliness is temporary, even when it doesn't feel that way",
      "Practice self-compassion - treat yourself with the same kindness you'd show a good friend",
    ]

    return {
      content: `${responses[Math.floor(Math.random() * responses.length)]}\n\n${suggestions[Math.floor(Math.random() * suggestions.length)]}\n\nWhat's one small way you might connect with the world around you today?`,
      isCrisis: false,
      suggestedActions: suggestions,
    }
  }

  private static generateGeneralResponse(input: string, conversationHistory: string[]): BotResponse {
    const responses = [
      "Thank you for sharing that with me. It takes courage to open up about how you're feeling. I'm here to listen.",
      "I appreciate you trusting me with your thoughts. Your feelings are important and valid.",
      "It sounds like you're going through something. I'm glad you're reaching out, and I want you to know that I'm here to support you.",
      "I'm here to listen without judgment. Sometimes it helps just to have someone hear what you're experiencing.",
      "Your wellbeing matters. It's okay to take things one moment at a time, and I'm here to walk through this with you.",
    ]

    const followUps = [
      "What's been on your mind lately?",
      "How can I best support you right now?",
      "Would you like to tell me more about what you're experiencing?",
      "What would be most helpful for you today?",
      "How are you taking care of yourself through this?",
    ]

    return {
      content: `${responses[Math.floor(Math.random() * responses.length)]}\n\n${followUps[Math.floor(Math.random() * followUps.length)]}`,
      isCrisis: false,
    }
  }
}
