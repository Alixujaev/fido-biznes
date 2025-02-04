import { createContext, useState } from "react";

interface DroppedComponent {
  id: string;
  name: string;
}

export const DnDContext = createContext<any>(null);

export function DnDProvider({ children }: { children: React.ReactNode }) {
  const [droppedComponents, setDroppedComponents] = useState<
    DroppedComponent[]
  >([]);

  const moveComponent = (dragIndex: number, hoverIndex: number) => {
    setDroppedComponents((prev: DroppedComponent[]) => {
      const updated = [...prev];
      const [movedItem] = updated.splice(dragIndex, 1);
      updated.splice(hoverIndex, 0, movedItem);
      return updated;
    });
  };

  return (
    <DnDContext.Provider
      value={{ droppedComponents, setDroppedComponents, moveComponent }}
    >
      {children}
    </DnDContext.Provider>
  );
}
