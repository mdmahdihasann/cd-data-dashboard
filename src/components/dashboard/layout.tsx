"use client"
import { AppSidebar } from "@/components/ui/app-sidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full">
      <div className="flex-shrink-0">
        <AppSidebar /> 
      </div>
      <main className="flex-1 bg-zinc-100 dark:bg-zinc-900 p-6">
        {children} 
      </main>
    </div>
  )
}