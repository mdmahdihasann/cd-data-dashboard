import '@/styles/globals.css'; // your Tailwind + shadcn CSS
import type { AppProps } from 'next/app';
import { Geist, Geist_Mono } from 'next/font/google';
import { Poppins, Outfit } from 'next/font/google';
import { SidebarProvider } from "@/components/ui/sidebar"
import Layout from "@/components/dashboard/layout"

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-outfit'
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-poppins'
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${outfit.variable} ${poppins.variable} font-sans`}>
      <SidebarProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SidebarProvider>
    </main>
  )
}