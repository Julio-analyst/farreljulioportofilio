import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import { SiteShell } from "@/components/site-shell";
import { LanguageProvider } from "@/components/language-provider";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Farrel Julio Akbar | Portfolio",
    template: "%s | Farrel Julio Akbar",
  },
  description:
    "Portfolio bilingual white-blue dengan fokus AI, data pipelines, analytics, dan project showcase.",
  icons: {
    icon: "/Farrellogo.png?v=2",
    shortcut: "/Farrellogo.png?v=2",
    apple: "/Farrellogo.png?v=2",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${spaceGrotesk.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <link rel="icon" href="/Farrellogo.png?v=2" />
        <link rel="shortcut icon" href="/Farrellogo.png?v=2" />
        <link rel="apple-touch-icon" href="/Farrellogo.png?v=2" />
      </head>
      <body className="min-h-full bg-background text-foreground">
        <LanguageProvider>
          <SiteShell>{children}</SiteShell>
        </LanguageProvider>
      </body>
    </html>
  );
}
