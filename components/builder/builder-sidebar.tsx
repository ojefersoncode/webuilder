"use client";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useBuilder, ElementType } from "./builder-context";
import { 
  Type, 
  Image as ImageIcon, 
  Square, 
  Heading, 
  Pilcrow, 
  SeparatorHorizontal, 
  LayoutGrid,
  MoveVertical
} from "lucide-react";

export function BuilderSidebar() {
  const { addElement } = useBuilder();

  const elements: { type: ElementType; icon: React.ReactNode; label: string }[] = [
    { type: "heading", icon: <Heading className="h-4 w-4" />, label: "Heading" },
    { type: "paragraph", icon: <Pilcrow className="h-4 w-4" />, label: "Paragraph" },
    { type: "image", icon: <ImageIcon className="h-4 w-4" />, label: "Image" },
    { type: "button", icon: <Square className="h-4 w-4" />, label: "Button" },
    { type: "divider", icon: <SeparatorHorizontal className="h-4 w-4" />, label: "Divider" },
    { type: "spacer", icon: <MoveVertical className="h-4 w-4" />, label: "Spacer" },
    { type: "container", icon: <LayoutGrid className="h-4 w-4" />, label: "Container" },
  ];

  return (
    <div className="w-64 border-r bg-slate-100 overflow-y-auto">
      <div className="p-4">
        <h2 className="font-semibold mb-4 flex items-center">
          <Type className="h-4 w-4 mr-2" /> Elementos
        </h2>
        <Tabs defaultValue="elements">
          <TabsList className="w-full mb-4">
            <TabsTrigger value="elements" className="flex-1">Elementos</TabsTrigger>
            <TabsTrigger value="templates" className="flex-1">Templates</TabsTrigger>
          </TabsList>
          <TabsContent value="elements" className="space-y-2">
            {elements.map((element) => (
              <Button
                key={element.type}
                variant="outline"
                className="w-full justify-start"
                onClick={() => addElement(element.type)}
              >
                <div className="mr-2">{element.icon}</div>
                {element.label}
              </Button>
            ))}
          </TabsContent>
          <TabsContent value="templates" className="space-y-2">
            <Button
              variant="outline"
              className="w-full justify-start"
              onClick={() => {
                // Add a pre-designed template
                addElement("heading");
                addElement("paragraph");
                addElement("image");
                addElement("button");
              }}
            >
              <LayoutGrid className="h-4 w-4 mr-2" />
              Pagina basica
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start"
              onClick={() => {
                // Add a contact template
                addElement("heading");
                addElement("paragraph");
                addElement("paragraph");
                addElement("button");
              }}
            >
              <LayoutGrid className="h-4 w-4 mr-2" />
              Pagina de contato
            </Button>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}