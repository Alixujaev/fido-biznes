import { useDrag, useDrop } from "react-dnd";
import React, { useRef } from "react";
import { GripVertical, X } from "lucide-react"; // Drag ikonkasi uchun

interface DraggableComponentProps {
  id: string;
  index: number;
  width?: number;
  height?: number;
  moveComponent: (dragIndex: number, hoverIndex: number) => void;
  children: React.ReactNode;
  removeComponent: (id: string) => void;
}

export default function DraggableComponent({
  id,
  index,
  width,
  height,
  moveComponent,
  children,
  removeComponent,
}: DraggableComponentProps) {
  const ref = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);

  const [{ isDragging }, drag, preview] = useDrag({
    type: "DASHBOARD_COMPONENT",
    item: { id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: "DASHBOARD_COMPONENT",
    hover: (item: { id: string; index: number }) => {
      if (item.index !== index) {
        moveComponent(item.index, index);
        item.index = index;
      }
    },
  });

  preview(drop(ref)); // Komponentni tushirish zonasi
  drag(handleRef); // Faqat `handleRef` (uch nuqtali joy) drag qila oladi

  return (
    <div ref={ref} className="relative h-fit">
      {/* Drag Handle */}

      <div
        ref={handleRef}
        className="cursor-grab p-2 mr-2 text-gray-500 hover:text-gray-700 absolute z-50 right-0 bottom-0 "
      >
        <GripVertical size={20} />
      </div>

      <button
        onClick={() => removeComponent(id)}
        className="p-2 ml-2 text-red-500 hover:text-red-700 absolute z-50 right-0 "
      >
        <X size={20} />
      </button>

      {/* Component ichidagi content */}
      <div className={`flex-1 ${isDragging ? "opacity-50" : "opacity-100"}`}>
        {React.isValidElement(children)
          ? React.createElement(
              children.type,
              { ...children.props, id, width, height },
              children.props.children
            )
          : children}
      </div>
    </div>
  );
}
