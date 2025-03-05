import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Layers, MousePointer, PanelLeft, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="flex w-full overflow-hidden flex-col min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 text-gray-100">
            <Layers className="size-5" />
            <span className="font-bold text-sm">Webuilder</span>
          </div>
          <Link href="/builder">
            <Button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm">
              Get Started
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center bg-gray-900 justify-center text-center px-4 py-20">
        <h1 className="text-5xl font-bold tracking-tight mb-6 text-gray-100">
          Crie páginas e aplicativos web
          <br />
          sem usar código.
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mb-10">
          Crie sites incríveis com nosso construtor intuitivo de arrastar e
          soltar. Sem necessidade de código.
        </p>
        <Link href="/builder">
          <Button className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-lg flex items-center gap-2">
            Vamos começar <ArrowRight className="h-5 w-5" />
          </Button>
        </Link>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Como usar?</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {["Arrasta & Solta", "Customizável", "Publicar"].map(
              (title, index) => {
                const icons = [MousePointer, PanelLeft, Zap];
                const descriptions = [
                  "É simples, basta arrastar e soltar para criar suas páginas.",
                  "Você pode editar sua página e componentes como quiser.",
                  "Publique seu site e design para o mundo inteiro, com poucos cliques.",
                ];
                const Icon = icons[index];
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="bg-blue-600 p-4 rounded-full mb-6">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{title}</h3>
                    <p className="text-gray-300">{descriptions[index]}</p>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-gray-900 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0 text-gray-100">
              <Layers className="h-5 w-5" />
              <span className="font-semibold">Webuilder</span>
            </div>
            <div className="flex gap-6">
              {["Termos", "Privacidade", "Contatos"].map((text, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-sm text-gray-400 hover:text-gray-300"
                >
                  {text}
                </a>
              ))}
            </div>
          </div>
          <div className="flex justify-center items-center mt-6 text-sm text-gray-500">
            © {new Date().getFullYear()} DragDrop. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
