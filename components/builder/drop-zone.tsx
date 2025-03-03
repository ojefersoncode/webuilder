"use client";

import { useDrop } from "react-dnd";
import { useBuilder } from "./builder-context";

interface DropZoneProps {
  index: number;
}

export function DropZone({ index }: DropZoneProps) {
  const { moveElement } = useBuilder();

  const [{ isOver }, drop] = useDrop({
    accept: "ELEMENT",
    hover(item: { index: number }) {
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      moveElement(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div
      ref={drop}
      className={`h-2 w-full my-1 transition-all ${
        isOver ? "bg-primary/20" : "bg-transparent"
      }`}
    />
  );
}