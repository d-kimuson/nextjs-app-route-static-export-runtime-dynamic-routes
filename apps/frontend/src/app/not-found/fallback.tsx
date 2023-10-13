"use client"
import { useRouter } from "next/navigation"

export const DynamicRouteFallback: React.FC = () => {
  const router = useRouter()
  if (typeof window !== "undefined") {
    if (window.location.pathname === "/users/2") {
      router.replace(window.location.href)
      return <></>
    }
  }

  return <div>Not Found です！！</div>
}
