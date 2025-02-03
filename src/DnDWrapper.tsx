import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

export default function DnDWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  if (typeof window === "undefined") return <>{children}</>;
  return <DndProvider backend={HTML5Backend}>{children}</DndProvider>;
}
