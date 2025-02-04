import { SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./components/sidebar/Sidebar";
import Providers from "./Providers";
import { useEffect, useState } from "react";
import { LoginDialog } from "./components/dialogs/LoginDialog";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isShowLoginModal, setIsShowLoginModal] = useState<boolean>(true);

  useEffect(() => {
    if (localStorage.getItem("userdata")) {
      setIsShowLoginModal(false);
    } else {
      setIsShowLoginModal(true);
    }
  }, []);

  return isShowLoginModal ? (
    <LoginDialog isOpen={isShowLoginModal} setIsOpen={setIsShowLoginModal} />
  ) : (
    <Providers>
      <AppSidebar />
      <main className="flex-1">
        <SidebarTrigger className="absolute" />
        {children}
      </main>
    </Providers>
  );
}
