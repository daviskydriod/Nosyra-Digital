import type { Metadata } from "next";
import Script from "next/script";
import "@/index.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nosyradigital.com.ng"),
  title: "Nosyra Digital | Independent Digital Studio in Lagos, Nigeria",
  description: "Independent digital studio headquartered in Lagos, Nigeria, creating websites, e-commerce experiences and tailored digital solutions for businesses locally and worldwide.",
  authors: [{ name: "Nosyra Digital" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.nosyradigital.com.ng" },
  openGraph: {
    type: "website",
    url: "https://www.nosyradigital.com.ng",
    siteName: "Nosyra Digital",
    locale: "en_NG",
    title: "Nosyra Digital | Independent Digital Studio in Lagos, Nigeria",
    description: "An independent digital studio in Lagos, Nigeria, creating clear websites and tailored digital experiences for businesses across local and international markets.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Nosyra Digital" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nosyra Digital | Independent Digital Studio in Lagos, Nigeria",
    description: "Website design and development, e-commerce experiences and tailored digital solutions for businesses in Nigeria and around the world.",
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
