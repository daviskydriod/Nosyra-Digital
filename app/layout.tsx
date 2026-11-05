import type { Metadata } from "next";
import Script from "next/script";
import "@/index.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nosyradigital.com.ng"),
  title: "Nosyra Digital — Founder-led websites & digital experiences",
  description: "Nosyra Digital is a founder-led digital agency helping businesses in Nigeria and Ghana build clearer websites, digital catalogues, and practical digital experiences.",
  authors: [{ name: "Nosyra Digital" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.nosyradigital.com.ng" },
  openGraph: {
    type: "website",
    url: "https://www.nosyradigital.com.ng",
    siteName: "Nosyra Digital",
    locale: "en_NG",
    title: "Nosyra Digital — Founder-led websites & digital experiences",
    description: "We help businesses in Nigeria and Ghana build clearer websites, catalogues, and practical digital experiences.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Nosyra Digital" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nosyra Digital — Founder-led websites & digital experiences",
    description: "Website development, digital catalogues, branding, and practical digital solutions for growing businesses.",
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
