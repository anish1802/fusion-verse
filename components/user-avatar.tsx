import { useUser } from "@clerk/nextjs";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import React from "react";

export const UserAvatar = () => {
  const { user } = useUser();

  return (
    <Avatar className="h-8 w-8">
      <AvatarImage src={user?.imageUrl} alt={user?.fullName || "User avatar"} />
      <AvatarFallback>
        {user?.firstName?.charAt(0)}
        {user?.lastName?.charAt(0)}
      </AvatarFallback>
    </Avatar>
  );
};