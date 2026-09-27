import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://my-portfolio-website-orpin.vercel.app";

export const viewport: Viewport = {
  themeColor: "#09090b",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Adel Yasser | Frontend Developer & UI Engineer",
    template: "%s | Adel Yasser",
  },
  description:
    "Portfolio of Adel Yasser, a Frontend Developer crafting high-performance, interactive, and responsive web applications with React 19, Next.js, TypeScript, and modern UI engineering.",
  applicationName: "Adel Yasser Portfolio",
  authors: [{ name: "Adel Yasser", url: "https://github.com/dola5xd" }],
  creator: "Adel Yasser",
  publisher: "Adel Yasser",
  keywords: [
    "Adel Yasser",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "UI/UX Engineer",
    "Web Developer Portfolio",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "GSAP",
    "Motion",
    "Egypt Frontend Developer",
    "Software Engineer Portfolio",
  ],
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Adel Yasser - Portfolio",
    title: "Adel Yasser | Frontend Developer & UI Engineer",
    description:
      "Explore production-grade web applications, interactive interfaces, and modern front-end architectures built by Adel Yasser.",
    images: [
      {
        url: "/assets/avatar.webp",
        width: 800,
        height: 800,
        alt: "Adel Yasser - Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adel Yasser | Frontend Developer & UI Engineer",
    description:
      "Portfolio of Adel Yasser, Frontend Developer crafting interactive, high-performance web apps.",
    images: ["/assets/avatar.webp"],
    creator: "@dola5xd",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Adel Yasser",
      jobTitle: "Frontend Developer",
      url: siteUrl,
      sameAs: [
        "https://github.com/dola5xd",
        "https://www.linkedin.com/in/adel-yasser-a28181242/",
        "https://www.facebook.com/dola2005ti",
      ],
      knowsAbout: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
        "Front-End Development",
        "Web Performance",
        "GSAP Animations",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Adel Yasser Portfolio",
      publisher: {
        "@id": `${siteUrl}/#person`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-primary-800 text-white overflow-x-hidden selection:bg-indigo-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
