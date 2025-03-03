"use client";

import { useBuilder } from "./builder-context";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sliders, Type, Palette } from "lucide-react";

export function ElementProperties() {
  const { elements, selectedElement, updateElement } = useBuilder();
  
  if (!selectedElement) return null;
  
  const element = elements.find((el) => el.id === selectedElement);
  if (!element) return null;

  const handleContentChange = (value: string) => {
    updateElement(selectedElement, { content: value });
  };

  const handleImageSrcChange = (value: string) => {
    updateElement(selectedElement, { src: value });
  };

  const handleImageAltChange = (value: string) => {
    updateElement(selectedElement, { alt: value });
  };

  const handleStyleChange = (property: string, value: string) => {
    updateElement(selectedElement, {
      styles: { ...element.styles, [property]: value },
    });
  };

  return (
    <div className="p-4">
      <h3 className="font-semibold mb-4">Element Properties</h3>
      
      <Tabs defaultValue="content">
        <TabsList className="w-full mb-4">
          <TabsTrigger value="content" className="flex-1">
            <Type className="h-4 w-4 mr-2" /> Content
          </TabsTrigger>
          <TabsTrigger value="style" className="flex-1">
            <Sliders className="h-4 w-4 mr-2" /> Style
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="content" className="space-y-4">
          {(element.type === "heading" || element.type === "paragraph" || element.type === "button") && (
            <div className="space-y-2">
              <Label htmlFor="content">Text Content</Label>
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
          
          {element.type === "image" && (
            <>
              <div className="space-y-2">
                <Label htmlFor="src">Image URL</Label>
                <Input
                  id="src"
                  value={element.src || ""}
                  onChange={(e) => handleImageSrcChange(e.target.value)}
                  placeholder="https://example.com/image.jpg"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="alt">Alt Text</Label>
                <Input
                  id="alt"
                  value={element.alt || ""}
                  onChange={(e) => handleImageAltChange(e.target.value)}
                  placeholder="Image description"
                />
              </div>
            </>
          )}
        </TabsContent>
        
        <TabsContent value="style" className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="color">Text Color</Label>
            <div className="flex gap-2">
              <Input
                id="color"
                type="color"
                value={element.styles?.color || "#000000"}
                onChange={(e) => handleStyleChange("color", e.target.value)}
                className="w-12 h-10 p-1"
              />
              <Input
                value={element.styles?.color || "#000000"}
                onChange={(e) => handleStyleChange("color", e.target.value)}
                className="flex-1"
              />
            </div>
          </div>
          
          {(element.type === "heading" || element.type === "paragraph") && (
            <div className="space-y-2">
              <Label htmlFor="fontSize">Font Size</Label>
              <Input
                id="fontSize"
                type="text"
                value={element.styles?.fontSize || ""}
                onChange={(e) => handleStyleChange("fontSize", e.target.value)}
                placeholder="16px"
              />
            </div>
          )}
          
          <div className="space-y-2">
            <Label htmlFor="textAlign">Text Align</Label>
            <div className="grid grid-cols-4 gap-2">
              {["left", "center", "right", "justify"].map((align) => (
                <button
                  key={align}
                  className={`p-2 border rounded-md ${
                    element.styles?.textAlign === align
                      ? "bg-primary text-primary-foreground"
                      : "bg-background"
                  }`}
                  onClick={() => handleStyleChange("textAlign", align)}
                >
                  {align.charAt(0).toUpperCase() + align.slice(1)}
                </button>
              ))}
            </div>
          </div>
          
          {element.type === "image" && (
            <div className="space-y-2">
              <Label htmlFor="borderRadius">Border Radius</Label>
              <Input
                id="borderRadius"
                type="text"
                value={element.styles?.borderRadius || ""}
                onChange={(e) => handleStyleChange("borderRadius", e.target.value)}
                placeholder="4px"
              />
            </div>
          )}
          
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
            <Label htmlFor="margin">Margin</Label>
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
    </div>
  );
}