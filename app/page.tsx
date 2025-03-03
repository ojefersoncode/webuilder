import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Layers, MousePointer, PanelLeft, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2 text-white">
            <Layers className="h-6 w-6" />
            <span className="font-bold text-xl">DragDrop</span>
          </div>
          <div className="flex text-white items-center gap-4">
            <Button variant="ghost" size="sm">
              Features
            </Button>
            <Button variant="ghost" size="sm">
              Templates
            </Button>
            <Button variant="ghost" size="sm">
              Pricing
            </Button>
            <Button asChild>
              <Link href="/builder">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center bg-gray-200 justify-center text-center px-4 py-20">
        <h1 className="text-5xl font-bold tracking-tight mb-6">
          Build beautiful websites
          <br />
          without code
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mb-10">
          Create stunning websites with our intuitive drag and drop builder. No
          coding required.
        </p>
        <Button size="lg" asChild>
          <Link href="/builder" className="flex items-center gap-2">
            Start Building <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </section>

      {/* Features */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">How it works</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-4 rounded-full mb-6">
                <MousePointer className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Drag & Drop</h3>
              <p className="text-muted-foreground">
                Simply drag components onto your page and arrange them exactly
                how you want.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-4 rounded-full mb-6">
                <PanelLeft className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Customize</h3>
              <p className="text-muted-foreground">
                Easily customize colors, fonts, and content to match your brand
                and vision.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-4 rounded-full mb-6">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Publish</h3>
              <p className="text-muted-foreground">
                Publish your site with one click and share it with the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0 text-white">
              <Layers className="h-5 w-5" />
              <span className="font-semibold">DragDrop</span>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-white hover:text-gray-400">
                Termos
              </a>
              <a href="#" className="text-sm text-white hover:text-gray-400">
                Privacidade
              </a>
              <a href="#" className="text-sm text-white hover:text-gray-400">
                Contatos
              </a>
            </div>
          </div>
          <div className="mt-6 text-center md:text-left text-sm text-muted-foreground">
            © {new Date().getFullYear()} DragDrop. Todos os dieitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
