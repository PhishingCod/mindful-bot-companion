import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-secondary/20">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground text-sm">♥</span>
            </div>
            <h1 className="text-xl font-semibold text-foreground">MindfulBot</h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#how-it-works" className="text-muted-foreground hover:text-foreground text-sm">
              How it works
            </Link>
            <Link href="#safety" className="text-muted-foreground hover:text-foreground text-sm">
              Safety
            </Link>
            <Link href="#support" className="text-muted-foreground hover:text-foreground text-sm">
              Support
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-balance mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Your compassionate AI companion for mental wellness
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground text-balance mb-8 leading-relaxed">
            MindfulBot provides a safe, non-judgmental space to share your thoughts and feelings. Get gentle support,
            coping strategies, and a listening ear whenever you need it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/chat">
              <Button size="lg" className="text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl">
                💬 Start Chatting
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 rounded-xl bg-transparent">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="how-it-works" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">How MindfulBot supports you</h3>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-balance">
            Designed with empathy and safety at its core, MindfulBot offers gentle guidance and emotional support.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="border-border/50 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">♥</span>
              </div>
              <h4 className="text-xl font-semibold mb-3">Empathetic Listening</h4>
              <p className="text-muted-foreground leading-relaxed">
                Share your thoughts in a warm, non-judgmental environment. MindfulBot responds with genuine care and
                understanding.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/50 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h4 className="text-xl font-semibold mb-3">Gentle Guidance</h4>
              <p className="text-muted-foreground leading-relaxed">
                Receive simple, actionable suggestions like breathing exercises, journaling prompts, and mindfulness
                techniques.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/50 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-secondary/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h4 className="text-xl font-semibold mb-3">Safety First</h4>
              <p className="text-muted-foreground leading-relaxed">
                Built with safety protocols and crisis support resources. Your wellbeing is our highest priority.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Safety Section */}
      <section id="safety" className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6">Your safety matters</h3>
            <div className="bg-card border border-border/50 rounded-2xl p-8 shadow-sm">
              <p className="text-muted-foreground mb-6 leading-relaxed">
                MindfulBot is designed to provide emotional support and gentle guidance. However, it's important to know
                that this is an AI companion, not a replacement for professional mental health care.
              </p>
              <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-6">
                <p className="text-sm text-destructive-foreground font-medium mb-2">Crisis Support Available 24/7</p>
                <p className="text-sm text-muted-foreground">
                  If you're experiencing thoughts of self-harm or suicide, please reach out for immediate help:
                </p>
                <p className="text-lg font-semibold text-destructive mt-2">National Suicide Prevention Lifeline: 988</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-3xl font-bold mb-4">Ready to start your wellness journey?</h3>
          <p className="text-muted-foreground text-lg mb-8 text-balance">
            Take the first step towards better mental wellness with a compassionate AI companion by your side.
          </p>
          <Link href="/chat">
            <Button size="lg" className="text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl">
              💬 Begin Conversation
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-muted/20 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground text-xs">♥</span>
            </div>
            <span className="font-semibold">MindfulBot</span>
          </div>
          <p className="text-sm text-muted-foreground">
            A compassionate AI companion for mental wellness. Not a substitute for professional care.
          </p>
        </div>
      </footer>
    </div>
  )
}
