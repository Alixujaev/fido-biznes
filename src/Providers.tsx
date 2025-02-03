import { SidebarProvider } from "@/components/ui/sidebar";
import { DnDProvider } from "./DndContext";
import DnDWrapper from "./DnDWrapper";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <DnDWrapper>
      <SidebarProvider>
        <DnDProvider>{children}</DnDProvider>
      </SidebarProvider>
    </DnDWrapper>
  );
}
