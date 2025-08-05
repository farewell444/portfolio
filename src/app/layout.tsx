import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { client } from "@/lib/sanity.client";
import { SITE_SETTINGS_QUERY } from "@/lib/queries";
import { urlFor } from "@/lib/utils";
import { SiteSettings } from "@/lib/types";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const settings = await client.fetch<SiteSettings>(SITE_SETTINGS_QUERY);
  return {
    title: {
      default: settings?.title || 'My Portfolio',
      template: `%s | ${settings?.title || 'My Portfolio'}`,
    },
    description: settings?.description || 'A personal portfolio and blog.',
    openGraph: {
      title: settings?.title,
      description: settings?.description,
      images: settings?.ogImage ? [urlFor(settings.ogImage).width(1200).height(630).url()] : [],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow container mx-auto py-8">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}