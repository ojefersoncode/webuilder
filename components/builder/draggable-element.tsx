"use client";

import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { useBuilder, Element } from "./builder-context";
import { Trash2, GripVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface DraggableElementProps {
  element: Element;
  index: number;
  isPreview: boolean;
}

export function DraggableElement({ element, index, isPreview }: DraggableElementProps) {
  const { moveElement, removeElement, selectedElement, setSelectedElement } = useBuilder();
  const ref = useRef<HTMLDivElement>(null);

  const [{ isDragging }, drag, dragPreview] = useDrag({
    type: "ELEMENT",
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    canDrag: !isPreview,
  });

  const [, drop] = useDrop({
    accept: "ELEMENT",
    hover(item: { index: number }, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      moveElement(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  drag(drop(ref));

  const renderElement = () => {
    switch (element.type) {
      case "heading":
        return (
          <h2 
            className="text-2xl font-bold mb-4" 
            style={element.styles}
          >
            {element.content}
          </h2>
        );
      case "paragraph":
        return (
          <p 
            className="mb-4" 
            style={element.styles}
          >
            {element.content}
          </p>
        );
      case "image":
        return (
          <img 
            src={element.src} 
            alt={element.alt} 
            className="w-full h-auto mb-4 rounded-md" 
            style={element.styles}
          />
        );
      case "button":
        return (
          <Button 
            className="mb-4" 
            style={element.styles}
          >
            {element.content}
          </Button>
        );
      case "divider":
        return <hr className="my-6 border-t border-border" style={element.styles} />;
      case "spacer":
        return <div className="h-8" style={element.styles}></div>;
      case "container":
        return (
          <div 
            className="p-4 border rounded-md mb-4" 
            style={element.styles}
          >
            {element.children?.map((child, childIndex) => (
              <DraggableElement 
                key={child.id} 
                element={child} 
                index={childIndex} 
                isPreview={isPreview}
              />
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  if (isPreview) {
    return <div>{renderElement()}</div>;
  }

  return (
    <div
      ref={dragPreview}
      className={cn(
        "relative group",
        isDragging ? "opacity-50" : "opacity-100",
        selectedElement === element.id ? "ring-2 ring-primary" : ""
      )}
      onClick={(e) => {
        e.stopPropagation();
        setSelectedElement(element.id);
      }}
    >
      <div className="absolute -left-10 top-0 bottom-0 flex items-center opacity-0 group-hover:opacity-100">
        <div ref={ref} className="cursor-move p-1">
          <GripVertical className="h-4 w-4 text-muted-foreground" />
        </div>
      </div>
      
      <div className="absolute -right-10 top-0 bottom-0 flex items-center opacity-0 group-hover:opacity-100">
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-destructive"
          onClick={(e) => {
            e.stopPropagation();
            removeElement(element.id);
          }}
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
      
      {renderElement()}
    </div>
  );
}