import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SEO friendly App",
  description: "We are SEo agency which help business to grow",
keywords:"SEOfriendly, seo_agency",

openGraph:{
  title:"SEO APP",
  description:"We are SEo agency which help business to grow",
  type:"website",
  images:["https://images.pexels.com/photos/16534745/pexels-photo-16534745/free-photo-of-pavilions-on-gadisar-lake.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],
  url:"https://seoapp.com",
},
twitter:{
  title:"SEO APP",
  description:"We are SEo agency which help business to grow",
  
  images:["https://images.pexels.com/photos/16534745/pexels-photo-16534745/free-photo-of-pavilions-on-gadisar-lake.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],
card:"summary_large_image",
creator:"arnav"
}

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
