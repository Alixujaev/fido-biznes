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

  return (
    <DnDContext.Provider value={{ droppedComponents, setDroppedComponents }}>
      {children}
    </DnDContext.Provider>
  );
}
