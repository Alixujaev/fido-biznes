import { SidebarProvider } from "@/components/ui/sidebar";
import { DnDProvider } from "./DndContext";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { Toaster } from "./components/ui/toaster";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <DndProvider backend={HTML5Backend}>
      <SidebarProvider>
        <DnDProvider>
          {children}
          <Toaster />
        </DnDProvider>
      </SidebarProvider>
    </DndProvider>
  );
}
