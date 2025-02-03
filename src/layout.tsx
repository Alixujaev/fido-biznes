import { SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./components/sidebar/Sidebar";
import Providers from "./Providers";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <AppSidebar />
      <main className="flex-1">
        <SidebarTrigger className="absolute" />
        {children}
      </main>
    </Providers>
  );
}
