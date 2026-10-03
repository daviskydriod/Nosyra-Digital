import type { Metadata } from "next";
import Script from "next/script";
import "@/index.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nosyradigital.com.ng"),
  title: "Nosyra Digital – Web Design & Digital Solutions",
  description: "Nosyra Digital is a web design and digital solutions agency helping brands grow online with modern websites, branding, and automation.",
  authors: [{ name: "Nosyra Digital" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.nosyradigital.com.ng" },
  openGraph: {
    type: "website",
    url: "https://www.nosyradigital.com.ng",
    siteName: "Nosyra Digital",
    locale: "en_NG",
    title: "Nosyra Digital – Web Design & Digital Solutions",
    description: "We build high-converting websites and digital systems for businesses in Nigeria and globally.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Nosyra Digital" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nosyra Digital – Web Design & Digital Solutions",
    description: "Web design, branding, and automation services for growing businesses.",
    images: ["/og-image.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-NG" suppressHydrationWarning>
      <body>
        {children}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-C45E8MJGKP" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-C45E8MJGKP');`}
        </Script>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js'); fbq('init','1369955984947748'); fbq('track','PageView');`}
        </Script>
      </body>
    </html>
  );
}
