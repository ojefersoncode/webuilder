"use client";

import { useBuilder } from "./builder-context";
import { DraggableElement } from "./draggable-element";
import { DropZone } from "./drop-zone";
import { ElementProperties } from "./element-properties";

interface BuilderCanvasProps {
  showPreview: boolean;
}

export function BuilderCanvas({ showPreview }: BuilderCanvasProps) {
  const { elements, selectedElement, setSelectedElement } = useBuilder();

  return (
    <div className="flex flex-1 bg-slate-300 overflow-hidden">
      <div
        className="flex-1 overflow-y-auto bg-muted/30 p-8"
        onClick={() => !showPreview && setSelectedElement(null)}
      >
        <div
          className={`mx-auto w-full max-w-5xl min-h-[calc(100vh-10rem)] bg-slate-50 shadow-md rounded-lg p-8 ${
            showPreview
              ? ""
              : "border-2 border-dashed border-muted-foreground/20"
          }`}
        >
          {elements.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64 text-muted-foreground">
              <p>Arraste e solte os elemntos aqui</p>
            </div>
          ) : (
            <>
              {!showPreview && <DropZone index={0} />}
              {elements.map((element, index) => (
                <div key={element.id}>
                  <DraggableElement
                    element={element}
                    index={index}
                    isPreview={showPreview}
                  />
                  {!showPreview && <DropZone index={index + 1} />}
                </div>
              ))}
            </>
          )}
        </div>
      </div>

      {!showPreview && selectedElement && (
        <div>
          <ElementProperties />
        </div>
      )}
    </div>
  );
}
