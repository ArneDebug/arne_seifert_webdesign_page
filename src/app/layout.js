import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Arne Webdesign | Professionelle Websites für Unternehmen",
    template: "%s | Arne Webdesign",
  },
  description:
    "Premium Webdesign für kleine Unternehmen und Selbstständige. Moderne, schnelle und responsive Websites, die Vertrauen schaffen und mehr Kunden gewinnen.",

  verification: {
    google: "6JtYYkUDk1wwLnFxzhlemjyKlDHExOkXWwz79KQDmkQ",
  },

  keywords: [
  "Webdesign Dortmund",
  "Webdesigner Dortmund",
  "Landingpages",
  "Next.js",
  "Responsive Webseiten",
  "Freelancer",
  "Webentwicklung",
  "Arne Seifert",
  ],
  openGraph: {
    title: "Arne Webdesign | Professionelle Websites für Unternehmen",

    description:
      "Premium Webdesign für kleine Unternehmen und Selbstständige. Moderne Websites, die Vertrauen schaffen und Kunden gewinnen.",

    url: "https://arne-webdesign.de",

    siteName: "Arne Webdesign",

    locale: "de_DE",

    type: "website",

    images: [
      {
        url: "/opengraph-image-v2.png",
        width: 1200,
        height: 630,
        alt: "Arne Webdesign",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

          {children}

          <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                      "@context": "https://schema.org",
                      "@type": "ProfessionalService",

                      name: "Arne Webdesign",

                      url: "https://arne-webdesign.de",

                      logo: "https://arne-webdesign.de/icon.png",

                      image: "https://arne-webdesign.de/opengraph-image-v2.png",

                      description: "Premium Webdesign für kleine Unternehmen und Selbstständige.",

                      priceRange: "€€",

                      areaServed: {
                        "@type": "Country",
                        "name": "Germany"
                      },

                      knowsAbout: [
                          "Web Design",
                          "Landing Pages",
                          "Next.js",
                          "SEO",
                          "Responsive Websites"
                      ],

                      founder: {
                          "@type": "Person",
                          name: "Arne Seifert",
                      },

                      email: "arnemaxseifert@gmail.com",

                      telephone: "+491631292449",

                      address: {
                          "@type": "PostalAddress",
                          addressLocality: "Dortmund",
                          addressCountry: "DE",
                      },

                      sameAs: [
                          "https://instagram.com/arne.webdesign",
                          "https://github.com/ArneDebug",
                          "https://facebook.com/Arne.Seifert06",
                      ],
                  }),
              }}
          />

      </body>
    </html>
  );
}
