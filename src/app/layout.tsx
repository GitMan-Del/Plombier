import type { Metadata } from "next";
import { League_Gothic, Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const league = League_Gothic({
  variable: "--font-league-gothic",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});


export const metadata: Metadata = {
  title: "Plombier Île-de-France | Interventions Rapides 24/7 | PlombierX.fr",
  description:
    "Plombier agréé en Île-de-France. Interventions rapides 24h/24 et 7j/7 pour réparations, installations et urgences sanitaires à Paris et en Île-de-France. Contactez-nous pour un service professionnel !",
  keywords: [
    "plombier Île-de-France",
    "plombier Paris",
    "urgence plomberie Île-de-France",
    "réparation installation sanitaire Paris",
    "installation sanitaire Île-de-France",
    "intervention rapide plombier Paris",
    "dépannage plomberie Île-de-France"
  ],
  robots: "index, follow",
  openGraph: {
    title: "Plombier Île-de-France | Interventions Rapides 24/7 | PlombierX.fr",
    description:
      "Plombier agréé en Île-de-France. Interventions rapides 24h/24 et 7j/7 pour réparations, installations et urgences sanitaires à Paris et en Île-de-France.",
    url: "https://plombier-x.fr/",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Plombier Île-de-France - Plombier X"
      }
    ],
    siteName: "Plombier X Île-de-France",
    locale: "fr_FR",
    type: "website",
  },
  other: {
    'geo.region': 'FR-IDF',
    'geo.placename': 'Île-de-France',
    'geo.position': '48.8566;2.3522',
    'ICBM': '48.8566, 2.3522',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-1003293596"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-1003293596');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Plumber",
              name: "Plombier X Île-de-France",
              image: "https://plombierx.fr/og-image.png",
              url: "https://plombierx.fr/",
              telephone: "+33 6 59 51 46 92",
              address: {
                "@type": "PostalAddress",
                streetAddress: "10 Rue de Paris",
                addressLocality: "Paris",
                postalCode: "75000",
                addressCountry: "FR",
                addressRegion: "Île-de-France"
              },
              areaServed: "Île-de-France",
              description:
                "Plombier agréé en Île-de-France. Interventions rapides 24h/24 et 7j/7 pour réparations, installations et urgences sanitaires.",
              openingHours: "Mo-Su 00:00-23:59"
            })
          }}
        />
      </head>
      <body
        className={`${league.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
