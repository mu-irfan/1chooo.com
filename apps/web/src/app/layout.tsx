import type { Metadata } from "next";
import "./globals.css";
import Hello from "@/components/hello";
import { GoogleAnalytics } from '@next/third-parties/google'
import NavBar from "@/components/nav-bar";
import SideBar from "@/components/side-bar";

const googleAnalyticId = "G-JGG75799PJ";

export const metadata: Metadata = {
  title: "Hugo ChunHo Lin (1chooo) | Open Source Enthusiast",
  description:
    "I'm Hugo ChunHo Lin, a graduate with a Bachelor's degree from National Central University (NCU) 🐿️, driven by a sincere passion for Software Engineering 💻.",
  authors: [{ name: "Hugo ChunHo Lin (1chooo)" }],
  keywords: ["Hugo ChunHo Lin", "1chooo", "Software Engineering", "Next.js", "React"],
  openGraph: {
    url: "https://1chooo.com/",
    type: "website",
    siteName: "Hugo ChunHo Lin (1chooo) | Open Source Enthusiast",
    title: "Hugo ChunHo Lin (1chooo) | Open Source Enthusiast",
    description:
      "I'm Hugo ChunHo Lin, a graduate with a Bachelor's degree from National Central University (NCU) 🐿️, driven by a sincere passion for Software Engineering 💻.",
    images: [
      {
        url: "https://raw.githubusercontent.com/1chooo/1chooo.com/main/docs/imgs/cover_transparent_bg.png",
        width: 1200,
        height: 630,
        alt: "Hugo ChunHo Lin (1chooo) Cover Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hugo ChunHo Lin (1chooo) | Open Source Enthusiast",
    description:
      "I'm Hugo ChunHo Lin, a graduate with a Bachelor's degree from National Central University (NCU) 🐿️, driven by a sincere passion for Software Engineering 💻.",
    images: "https://raw.githubusercontent.com/1chooo/1chooo.com/main/docs/imgs/cover_transparent_bg.png",
  },
};

type RootLayoutProps = {
  children: React.ReactNode
}

const RootLayout = (props: RootLayoutProps) => {
  const { children } = props
  return (
    <html lang="en">
      <head>
        {/* Favicon and Manifest */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>

      <body>
        <Hello />
        <main>
          <SideBar />
          <div className="main-content">
            <NavBar />
            {children}
          </div>
        </main>
      </body>
      <GoogleAnalytics gaId={googleAnalyticId} />
    </html>
  );
}

export default RootLayout
