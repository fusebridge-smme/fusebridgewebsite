// import "./globals.css";
// import Script from "next/script";

// import Header from "@/components/Header";
// import Footer from "@/components/Footer";

// import { Arimo } from "next/font/google";

// const arimo = Arimo({
//   subsets: ["latin"],
//   display: "swap",
// });

// export const metadata = {
//   title: "Fuse Bridge | Bridging Ideas Into Digital Success",
//   template: "%s | Fuse Bridge",
//   description:
//     "Fuse Bridge is the digital marketing agency that turns your vision into reality. Get measurable growth with Design, expert SEO and data-driven strategies. Start your project now!",
//   alternates: {
//     canonical: "https://www.fusebridge.in",
//       }, 
//   other: {
//     monetag: 'c3cbc2c65a791e6fbb09ab89fe9fc743',
//   },
  
//   icons: [
//     {
//       url: "fav/favicon.svg",
//       sizes: "any",
//       type: "image/svg+xml",
//     },
//     {
//       url: "fav/favicon.svg",
//       sizes: "any",
//       rel: "apple-touch-icon",
//     },
//   ],
//   openGraph: {
//     title: "Fuse Bridge | Bridging Ideas Into Digital Success",
//     description:
//       "Fuse Bridge is the digital marketing agency that turns your vision into reality. Get measurable growth with Design, expert SEO and data-driven strategies. Start your project now!",
//     url: "https://www.fusebridge.in",
//     siteName: "Fuse Bridge",
//     locale: "en_US",
//     type: "website",
//     images: [
//       {
//         url: "fav/og-image.png",
//         width: 1200,
//         height: 630,
//         alt: "Fuse Bridge Logo",
//       },
//     ],
//   },
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//      <head>
      
          
//           </head>
//       <body
//         className={`${arimo.className} min-h-screen bg-smoky-black text-vanilla flex flex-col`}
//       >
//         <Header />
//         <main className="flex-grow container mx-auto">{children}</main>
//         <Footer />
//       </body>
//     </html>
//   );
// }







// import "./globals.css";
// import Script from "next/script";

// import Header from "@/components/Header";
// import Footer from "@/components/Footer";

// import { Arimo } from "next/font/google";

// const arimo = Arimo({
//   subsets: ["latin"],
//   display: "swap",
// });

// export const metadata = {
//   title: "Fuse Bridge | Bridging Ideas Into Digital Success",
//   template: "%s | Fuse Bridge",
//   description:
//     "Fuse Bridge is the digital marketing agency that turns your vision into reality. Get measurable growth with Design, expert SEO and data-driven strategies. Start your project now!",
//   alternates: {
//     canonical: "https://www.fusebridge.in",
//   },
//   other: {
//     monetag: "c3cbc2c65a791e6fbb09ab89fe9fc743",
//   },

//   icons: [
//     {
//       url: "fav/favicon.svg",
//       sizes: "any",
//       type: "image/svg+xml",
//     },
//     {
//       url: "fav/favicon.svg",
//       sizes: "any",
//       rel: "apple-touch-icon",
//     },
//   ],
//   openGraph: {
//     title: "Fuse Bridge | Bridging Ideas Into Digital Success",
//     description:
//       "Fuse Bridge is the digital marketing agency that turns your vision into reality. Get measurable growth with Design, expert SEO and data-driven strategies. Start your project now!",
//     url: "https://www.fusebridge.in",
//     siteName: "Fuse Bridge",
//     locale: "en_US",
//     type: "website",
//     images: [
//       {
//         url: "fav/og-image.png",
//         width: 1200,
//         height: 630,
//         alt: "Fuse Bridge Logo",
//       },
//     ],
//   },
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <head>
//         <script
//           dangerouslySetInnerHTML={{
//             __html:
//               "(function(s){s.dataset.zone='11235723',s.src='https://al5sm.com/tag.min.js'})([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')))",
//           }}
//         />
//       </head>
//       <body
//         className={`${arimo.className} min-h-screen bg-smoky-black text-vanilla flex flex-col`}
//       >
//         <Header />
//         <main className="flex-grow container mx-auto">{children}</main>
//         <Footer />
//       </body>
//     </html>
//   );
// }






import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { Arimo } from "next/font/google";

const arimo = Arimo({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Fuse Bridge | Bridging Ideas Into Digital Success",
  template: "%s | Fuse Bridge",
  description:
    "Fuse Bridge is the digital marketing agency that turns your vision into reality. Get measurable growth with Design, expert SEO and data-driven strategies. Start your project now!",
  alternates: {
    canonical: "https://www.fusebridge.in",
  },
  other: {
    monetag: "c3cbc2c65a791e6fbb09ab89fe9fc743",
  },

  icons: [
    {
      url: "fav/favicon.svg",
      sizes: "any",
      type: "image/svg+xml",
    },
    {
      url: "fav/favicon.svg",
      sizes: "any",
      rel: "apple-touch-icon",
    },
  ],
  openGraph: {
    title: "Fuse Bridge | Bridging Ideas Into Digital Success",
    description:
      "Fuse Bridge is the digital marketing agency that turns your vision into reality. Get measurable growth with Design, expert SEO and data-driven strategies. Start your project now!",
    url: "https://www.fusebridge.in",
    siteName: "Fuse Bridge",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "fav/og-image.png",
        width: 1200,
        height: 630,
        alt: "Fuse Bridge Logo",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${arimo.className} min-h-screen bg-smoky-black text-vanilla flex flex-col`}
      >
        <Header />
        <main className="flex-grow container mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```
