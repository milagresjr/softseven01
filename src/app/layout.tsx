import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from 'next/script';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Softseven",
  description: "Bem-vindo a Softseven",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>

        <link href="/assets/img/favicon.png" rel="icon" />
        <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon" />


        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link href="https://fonts.gstatic.com" rel="preconnect" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />


        <link href="/assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
        <link href="/assets/vendor/aos/aos.css" rel="stylesheet" />
        <link href="/assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
        <link href="/assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />

        <link href="/assets/css/main.css" rel="stylesheet" />

      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />

        {/* Preloader */}
        <div id="preloade"></div>

        {/* Vendor JS Files */}
        <Script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js" strategy="lazyOnload" />
        <Script src="/assets/vendor/php-email-form/validate.js" strategy="lazyOnload" />
        <Script src="/assets/vendor/aos/aos.js" strategy="lazyOnload" />
        <Script src="/assets/vendor/glightbox/js/glightbox.min.js" strategy="lazyOnload" />
        <Script src="/assets/vendor/swiper/swiper-bundle.min.js" strategy="lazyOnload" />
        <Script src="/assets/vendor/waypoints/noframework.waypoints.js" strategy="lazyOnload" />
        <Script src="/assets/vendor/imagesloaded/imagesloaded.pkgd.min.js" strategy="lazyOnload" />
        <Script src="/assets/vendor/isotope-layout/isotope.pkgd.min.js" strategy="lazyOnload" />

        {/* Template Main JS File */}
        <Script src="/assets/js/main.js" strategy="lazyOnload" />

      </body>
    </html>
  );
}
