import { data } from "@/lib/consts";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Navbar = () => {
  const { user } = data;
  const userdata = JSON.parse(localStorage.getItem("userdata") || "{}");
  return (
    <div className="w-full bg-sidebar p-4 flex justify-end border-b border-sidebar-border">
      <div className="flex space-x-2">
        <Avatar className="h-8 w-8 rounded-lg">
          <AvatarImage src={user?.avatar} alt={user?.name} />
          <AvatarFallback className="rounded-none">
            {userdata?.name[0] + userdata?.username[0]}
          </AvatarFallback>
        </Avatar>
        <div className="grid flex-1 text-left text-sm leading-tight">
          <span className="truncate font-semibold">{userdata?.name}</span>
          <span className="truncate text-xs">{userdata?.username}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
