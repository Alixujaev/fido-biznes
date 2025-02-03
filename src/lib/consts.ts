import {
  BookOpen,
  Bot,
  Frame,
  GalleryVerticalEnd,
  Home,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";

export const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  team: {
    name: "Fido-biznes",
    logo: GalleryVerticalEnd,
    plan: "Enterprise",
  },
  navMain: [
    {
      title: "All blocks",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "History",
          url: "#",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
  ],
};

export const pages = [
  {
    title: "Dashboard",
    url: "#",
    icon: Home,
  },
]