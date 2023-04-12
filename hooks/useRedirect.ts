import { useRouter } from "next/router";
import React from "react";

export default function useRedirect(to: string) {
  const router = useRouter();

  React.useEffect(() => {
    router.replace(to);
  }, [router, to]);
}
