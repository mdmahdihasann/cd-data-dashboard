import type { AppProps } from "next/app"
import { SidebarProvider } from "@/components/ui/sidebar"
import Layout from "@/components/dashboard/layout"
import "@/styles/globals.css"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SidebarProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SidebarProvider>
  )
}