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
    default: "Arne Webdesign",
    template: "%s | Arne Webdesign",
  },
  description:
    "Professionelle Websites für kleine Unternehmen und Selbstständige.",
  keywords: [
  "Webdesign Dortmund",
  "Webdesigner Dortmund",
  "Landingpages",
  "Next.js",
  "Responsive Webseiten",
  "Freelancer",
  "Webentwicklung",
  ],
  openGraph: {
  title: "Arne Webdesign",
  description: "Professionelle Websites für kleine Unternehmen.",
  url: "https://arne-webdesign.de",
  siteName: "Arne Webdesign",
  locale: "de_DE",
  type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
