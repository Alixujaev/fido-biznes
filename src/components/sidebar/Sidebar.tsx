"use client";

import { DnDContext } from "@/DndContext";
import { NavMain } from "@/components/sidebar/nav-main";
import { TeamSwitcher } from "@/components/sidebar/team-switcher";
import { LogOut } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { data } from "@/lib/consts";
import { ComponentProps, useContext } from "react";

// This is sample data.

export function AppSidebar({ ...props }: ComponentProps<typeof Sidebar>) {
  const { isOpenSidebar, setIsOpenSidebar } = useContext(DnDContext);
  return (
    <SidebarProvider open={isOpenSidebar} onOpenChange={setIsOpenSidebar}>
      <Sidebar collapsible="icon" {...props}>
        <SidebarHeader>
          <TeamSwitcher team={data.team} />
        </SidebarHeader>
        <SidebarContent>
          <NavMain items={data.navMain} />
        </SidebarContent>

        <SidebarRail />
        <SidebarTrigger className="absolute top-0 -right-7" />
        <SidebarFooter>
          <SidebarMenuButton
            asChild
            onClick={() => {
              localStorage.clear();
              window.location.reload();
            }}
          >
            <div className="flex items-center cursor-pointer">
              <LogOut />
              <span>Logout</span>
            </div>
          </SidebarMenuButton>
        </SidebarFooter>
      </Sidebar>
    </SidebarProvider>
  );
}
