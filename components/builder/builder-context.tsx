"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { v4 as uuidv4 } from "uuid";

export type ElementType = 
  | "heading" 
  | "paragraph" 
  | "image" 
  | "button" 
  | "divider" 
  | "spacer"
  | "container";

export interface ElementProps {
  id: string;
  type: ElementType;
  content?: string;
  src?: string;
  alt?: string;
  children?: Element[];
  styles?: Record<string, string>;
}

export type Element = ElementProps;

interface BuilderContextType {
  elements: Element[];
  addElement: (type: ElementType, position?: number) => void;
  updateElement: (id: string, props: Partial<ElementProps>) => void;
  removeElement: (id: string) => void;
  moveElement: (dragIndex: number, hoverIndex: number) => void;
  selectedElement: string | null;
  setSelectedElement: (id: string | null) => void;
  saveLayout: () => void;
  loadLayout: () => void;
}

const BuilderContext = createContext<BuilderContextType | undefined>(undefined);

export function BuilderProvider({ children }: { children: ReactNode }) {
  const [elements, setElements] = useState<Element[]>([]);
  const [selectedElement, setSelectedElement] = useState<string | null>(null);

  const addElement = (type: ElementType, position?: number) => {
    const newElement: Element = {
      id: uuidv4(),
      type,
      styles: {},
    };

    // Set default content based on type
    switch (type) {
      case "heading":
        newElement.content = "Heading";
        break;
      case "paragraph":
        newElement.content = "This is a paragraph. Click to edit.";
        break;
      case "image":
        newElement.src = "https://source.unsplash.com/random/800x400";
        newElement.alt = "Image description";
        break;
      case "button":
        newElement.content = "Button";
        break;
      case "container":
        newElement.children = [];
        break;
    }

    if (position !== undefined) {
      const newElements = [...elements];
      newElements.splice(position, 0, newElement);
      setElements(newElements);
    } else {
      setElements([...elements, newElement]);
    }
    
    setSelectedElement(newElement.id);
  };

  const updateElement = (id: string, props: Partial<ElementProps>) => {
    setElements(
      elements.map((el) => (el.id === id ? { ...el, ...props } : el))
    );
  };

  const removeElement = (id: string) => {
    setElements(elements.filter((el) => el.id !== id));
    if (selectedElement === id) {
      setSelectedElement(null);
    }
  };

  const moveElement = (dragIndex: number, hoverIndex: number) => {
    const dragElement = elements[dragIndex];
    const newElements = [...elements];
    newElements.splice(dragIndex, 1);
    newElements.splice(hoverIndex, 0, dragElement);
    setElements(newElements);
  };

  const saveLayout = () => {
    localStorage.setItem("builderLayout", JSON.stringify(elements));
  };

  const loadLayout = () => {
    const savedLayout = localStorage.getItem("builderLayout");
    if (savedLayout) {
      setElements(JSON.parse(savedLayout));
    }
  };

  return (
    <BuilderContext.Provider
      value={{
        elements,
        addElement,
        updateElement,
        removeElement,
        moveElement,
        selectedElement,
        setSelectedElement,
        saveLayout,
        loadLayout,
      }}
    >
      {children}
    </BuilderContext.Provider>
  );
}

export function useBuilder() {
  const context = useContext(BuilderContext);
  if (context === undefined) {
    throw new Error("useBuilder must be used within a BuilderProvider");
  }
  return context;
}