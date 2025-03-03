"use client";

import { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { BuilderSidebar } from "@/components/builder/builder-sidebar";
import { BuilderCanvas } from "@/components/builder/builder-canvas";
import { BuilderHeader } from "@/components/builder/builder-header";
import { BuilderProvider } from "@/components/builder/builder-context";

export default function BuilderPage() {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <BuilderProvider>
      <DndProvider backend={HTML5Backend}>
        <div className="flex flex-col h-screen">
          <BuilderHeader showPreview={showPreview} setShowPreview={setShowPreview} />
          <div className="flex flex-1 overflow-hidden">
            {!showPreview && <BuilderSidebar />}
            <BuilderCanvas showPreview={showPreview} />
          </div>
        </div>
      </DndProvider>
    </BuilderProvider>
  );
}