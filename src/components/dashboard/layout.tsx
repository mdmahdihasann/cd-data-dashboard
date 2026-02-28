"use client"
import { AppSidebar } from "@/components/ui/app-sidebar"
import Header from "../Header/Header"
import { ThemeProvider } from "../theme/ThemeProvider"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="flex min-h-screen w-full">
        <div className="flex-shrink-0">
          <AppSidebar />
        </div>
        <div className="w-full ">
          <Header />
          <main className="flex-1 bg-zinc-100 dark:bg-zinc-900 p-6 h-full">
            {children}
          </main>
        </div>
      </div>
    </ThemeProvider>
  )
}