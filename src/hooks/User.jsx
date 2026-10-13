
"use client";

import { useEffect } from "react";
import { authClient } from "../lib/auth-client";

export function User() {
  const {
    data: session,
    isPending,
    error,
  } = authClient.useSession();

  useEffect(() => {
    if (!isPending && session) {
      console.log("User session data:", session);
    }
  }, [isPending, session]);

  if (isPending) {
    return <span className="text-white">Loading...</span>;
  }

  if (error) {
    return <span className="text-red-500">Error loading user</span>;
  }

  return <h2 className="text-white">{session?.user?.email}</h2>;
}
