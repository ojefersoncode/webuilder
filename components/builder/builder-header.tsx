"use client";

import { Button } from "@/components/ui/button";
import { useBuilder } from "./builder-context";
import {
  Layers,
  Eye,
  EyeOff,
  Save,
  Upload,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";

interface BuilderHeaderProps {
  showPreview: boolean;
  setShowPreview: (show: boolean) => void;
}

export function BuilderHeader({
  showPreview,
  setShowPreview,
}: BuilderHeaderProps) {
  const { saveLayout, loadLayout } = useBuilder();
  const { toast } = useToast();

  const handleSave = () => {
    saveLayout();
    toast({
      title: "Layout saved",
      description: "Your layout has been saved to local storage",
    });
  };

  const handleLoad = () => {
    loadLayout();
    toast({
      title: "Layout loaded",
      description: "Your layout has been loaded from local storage",
    });
  };

  const handleExport = () => {
    // This would be expanded in a real application
    toast({
      title: "Export feature",
      description: "This would export your site in a production app",
    });
  };

  return (
    <header className="border-b bg-slate-100">
      <div className="container mx-auto py-3 flex justify-between items-center">
        <div className="flex items-center px-2">
          <Link href="/" className="flex text-slate-900 items-center gap-2">
            <Layers className="h-5 w-5" />
            <span className="font-bold">Webuilder</span>
          </Link>
        </div>
        <div className="flex items-center gap-2 px-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowPreview(!showPreview)}
          >
            {showPreview ? (
              <>
                <EyeOff className="h-4 w-4 mr-2" /> Editar
              </>
            ) : (
              <>
                <Eye className="h-4 w-4 mr-2" /> Preview
              </>
            )}
          </Button>
          <Button variant="outline" size="sm" onClick={handleSave}>
            <Save className="h-4 w-4 mr-2" /> Salvar
          </Button>
          <Button variant="outline" size="sm" onClick={handleLoad}>
            <Upload className="h-4 w-4 mr-2" /> Publicar
          </Button>
        </div>
      </div>
    </header>
  );
}
