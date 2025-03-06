"use client";

import { useState } from "react";
import { useBuilder } from "./builder-context";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Sliders, Type, Palette } from "lucide-react";

export function ElementProperties() {
  const { elements, selectedElement, updateElement } = useBuilder();
  const [isOpen, setIsOpen] = useState(false);

  if (!selectedElement) return null;

  const element = elements.find((el) => el.id === selectedElement);
  if (!element) return null;

  const handleContentChange = (value: string) => {
    updateElement(selectedElement, { content: value });
  };

  const handleStyleChange = (property: string, value: string) => {
    updateElement(selectedElement, {
      styles: { ...element.styles, [property]: value },
    });
  };

  return (
    <div className="fixed bottom-4 right-4 ">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger className="w-full py-2 px-4 bg-blue-500 text-white text-center rounded-md">
          Editar Elemento
        </DialogTrigger>
        <DialogContent>
          <h3 className="font-semibold mb-4">Editar Propriedades</h3>
          <Tabs defaultValue="content">
            <TabsList className="w-full mb-4">
              <TabsTrigger value="content" className="flex-1">
                <Type className="h-4 w-4 mr-2" /> Conteúdo
              </TabsTrigger>
              <TabsTrigger value="style" className="flex-1">
                <Sliders className="h-4 w-4 mr-2" /> Estilo
              </TabsTrigger>
            </TabsList>

            <TabsContent value="content" className="space-y-4">
              {(element.type === "heading" ||
                element.type === "paragraph" ||
                element.type === "button") && (
                <div className="space-y-2">
                  <Label htmlFor="content">Texto</Label>
                  {element.type === "paragraph" ? (
                    <Textarea
                      id="content"
                      value={element.content || ""}
                      onChange={(e) => handleContentChange(e.target.value)}
                      rows={4}
                    />
                  ) : (
                    <Input
                      id="content"
                      value={element.content || ""}
                      onChange={(e) => handleContentChange(e.target.value)}
                    />
                  )}
                </div>
              )}
            </TabsContent>

            <TabsContent value="style" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="color">Cor do Texto</Label>
                <Input
                  id="color"
                  type="color"
                  value={element.styles?.color || "#000000"}
                  onChange={(e) => handleStyleChange("color", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="borderRadius">Borda Arredondada</Label>
                <Input
                  id="borderRadius"
                  type="text"
                  value={element.styles?.borderRadius || ""}
                  onChange={(e) => handleStyleChange("borderRadius", e.target.value)}
                  placeholder="4px"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="padding">Padding</Label>
                <Input
                  id="padding"
                  type="text"
                  value={element.styles?.padding || ""}
                  onChange={(e) => handleStyleChange("padding", e.target.value)}
                  placeholder="8px"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="margin">Margem</Label>
                <Input
                  id="margin"
                  type="text"
                  value={element.styles?.margin || ""}
                  onChange={(e) => handleStyleChange("margin", e.target.value)}
                  placeholder="8px"
                />
              </div>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>
    </div>
  );
}
