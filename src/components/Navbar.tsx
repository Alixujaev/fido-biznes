import { data } from "@/lib/consts";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Navbar = () => {
  const { user } = data;
  return (
    <div className="w-full bg-sidebar p-4 flex justify-end border-b border-sidebar-border">
      <div className="flex space-x-2">
        <Avatar className="h-8 w-8 rounded-lg">
          <AvatarImage src={user.avatar} alt={user.name} />
          <AvatarFallback className="rounded-lg">CN</AvatarFallback>
        </Avatar>
        <div className="grid flex-1 text-left text-sm leading-tight">
          <span className="truncate font-semibold">{user.name}</span>
          <span className="truncate text-xs">{user.email}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
