import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./components/sidebar/Sidebar";
import { DnDProvider } from "./DndContext";
import DnDWrapper from "./DnDWrapper";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <DnDWrapper>
      <SidebarProvider>
        <DnDProvider>
          <AppSidebar />
          <main className="flex-1">
            <SidebarTrigger className="absolute" />
            {children}
          </main>
        </DnDProvider>
      </SidebarProvider>
    </DnDWrapper>
  );
}
