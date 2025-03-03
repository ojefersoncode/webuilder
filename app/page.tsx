import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Layers, MousePointer, PanelLeft, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="flex w-full overflow-hidden flex-col min-h-screen bg-gray-900">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-2 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2 text-white">
            <Layers className="h-6 w-6" />
            <span className="font-bold text-xl">Webuilder</span>
          </div>
          <div className="flex text-white items-center gap-4">
            <Button
              asChild
              className="text-black font-semibold"
              variant={"outline"}
            >
              <Link href="/builder">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center bg-gray-100 justify-center text-center px-4 py-20">
        <h1 className="text-5xl font-bold tracking-tight mb-6">
          Crie paginas e aplicativos web
          <br />
          sem usar codigo.
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mb-10">
          Crie sites incriveias com nosso construtor intuitivo de arrastar e
          soltar. Sem necessidade de codigos.
        </p>
        <Button asChild className="p-4">
          <Link href="/builder" className="flex items-center gap-2">
            Vamos começar <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Como usar?</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-4 rounded-full mb-6">
                <MousePointer className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Arrasta & Solta</h3>
              <p className="text-muted-foreground">
                E simples, basta arrastar e soltar para criar suas paginas.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-4 rounded-full mb-6">
                <PanelLeft className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Customizavel</h3>
              <p className="text-muted-foreground">
                Voçe pode editar sua pagina e componentes como quiser.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-4 rounded-full mb-6">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Publicar</h3>
              <p className="text-muted-foreground">
                Publique seu site e design para o mundo inteiro, com poucos
                cliques.
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
              <span className="font-semibold">Webuilder</span>
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
          <div className="flex justify-center items-center mt-6 text-center md:text-left text-sm text-muted-foreground">
            © {new Date().getFullYear()} DragDrop. Todos os dieitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
