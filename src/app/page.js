// import Main from "@/components/Main";

// export default function Home() {
//   return (
//     <div>
//       <Main></Main>
//     </div>
//   );
// }

//seo did
import Main from "@/components/Main";

export const metadata = {
  title: "Fuse Bridge | Digital Agency & Technology Solutions",
  description:
    "Fuse Bridge delivers cutting-edge digital marketing, web development, and technology solutions to help your business scale.",
  openGraph: {
    title: "Fuse Bridge | Digital Agency & Technology Solutions",
    description:
      "Transforming businesses through modern digital strategies, web development, and branding.",
    url: "https://fusebridgewebsite.com", // Replace with your actual domain
    siteName: "Fuse Bridge",
    images: [
      {
        url: "/fav/og-image.png", // Uses the image from your public/fav folder
        width: 1200,
        height: 630,
        alt: "Fuse Bridge Digital Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fuse Bridge | Digital Agency & Technology Solutions",
    description:
      "Transforming businesses through modern digital strategies and web development.",
    images: ["/fav/og-image.png"],
  },
};

export default function Home() {
  return (
    <div>
      <Main></Main>
    </div>
  );
}
