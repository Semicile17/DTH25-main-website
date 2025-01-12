import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getCookie } from "@/utils/Cookies";

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (getCookie("jwt")) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
      router.push("/login");
    }
  }, [router]);

  return isAuthenticated;
}
