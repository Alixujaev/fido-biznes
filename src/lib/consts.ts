import {
  GalleryVerticalEnd,
  Home,
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
          title: "Circle chart",
          url: "/circle-chart",
        },
        {
          title: "Line chart",
          url: "/line-chart",
        },
        {
          title: "Bar chart",
          url: "/bar-chart",
        },
        {
          title: "Data table",
          url: "/table",
        },
        {
          title: "Price card",
          url: "/card",
        },
        {
          title: "Line card",
          url: "/line-card",
        },
      ],
    },
  ],
};

export const pages = [
  {
    title: "Dashboard",
    url: "/",
    icon: Home,
  },
]