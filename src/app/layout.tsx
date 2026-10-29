import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://abijob.ng"),
  title: {
    default: "Abi Job | Opportunity Starts Here",
    template: "%s | Abi Job",
  },
  description:
    "Discover jobs, showcase your skills, connect with employers and explore opportunities across Abia State with Abi Job.",
  applicationName: "Abi Job",
  keywords: [
    "Abi Job",
    "Abia State jobs",
    "jobs in Aba",
    "jobs in Umuahia",
    "skilled workers in Abia",
    "Abia employment",
    "career opportunities Nigeria",
  ],
  openGraph: {
    title: "Abi Job | Opportunity Starts Here",
    description:
      "Connecting Abia's people, skills, businesses and opportunities.",
    siteName: "Abi Job",
    locale: "en_NG",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#103c2b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-NG">
      <body>{children}</body>
    </html>
  );
}