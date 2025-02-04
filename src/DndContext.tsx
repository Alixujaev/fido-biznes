import { createContext, useState } from "react";

interface DroppedComponent {
  id: string;
  name: string;
}

export const DnDContext = createContext<{
  droppedComponents: DroppedComponent[];
  setDroppedComponents: React.Dispatch<
    React.SetStateAction<DroppedComponent[]>
  >;
  moveComponent: (dragIndex: number, hoverIndex: number) => void;
  isOpenSidebar: boolean;
  setIsOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  droppedComponents: [],
  setDroppedComponents: () => {},
  moveComponent: () => {},
  isOpenSidebar: false,
  setIsOpenSidebar: () => {},
});

export function DnDProvider({ children }: { children: React.ReactNode }) {
  const [droppedComponents, setDroppedComponents] = useState<
    DroppedComponent[]
  >([]);
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

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
      value={{
        droppedComponents,
        setDroppedComponents,
        moveComponent,
        isOpenSidebar,
        setIsOpenSidebar,
      }}
    >
      {children}
    </DnDContext.Provider>
  );
}
