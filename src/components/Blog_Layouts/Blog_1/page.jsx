import React from 'react';
import Blog_1 from './Blog_1';

const PREVIEW_IMAGE =
  "https://i.fbcd.co/products/original/4b935f547c95574ad356c4469dcc8c4e9ccbe79a6e3af24ba1e7b4017fe13aec.jpg";

export const metadata = {
  title: "Live Election Poll 2026 | Cast Your Vote",
  description:
    "আপনার পছন্দের দলকে ভোট দিন এবং লাইভ রেজাল্ট দেখুন। সম্পূর্ণ নিরাপদ এবং স্বচ্ছ ভোটিং সিস্টেম।",

  metadataBase: new URL("https://nextools-pro.vercel.app"),

  openGraph: {
    title: "Live Election Poll 2026 | Cast Your Vote",
    description:
      "আপনার পছন্দের দলকে ভোট দিন এবং লাইভ রেজাল্ট দেখুন।",
    url: "/poll",
    siteName: "Poll Bangladesh",
    images: [
      {
        url: PREVIEW_IMAGE,
        width: 1200,
        height: 630,
        alt: "Live Election Poll Bangladesh 2026",
      },
    ],
    locale: "bn_BD",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Live Election Poll 2026 | Cast Your Vote",
    description:
      "আপনার পছন্দের দলকে ভোট দিন এবং লাইভ রেজাল্ট দেখুন।",
    images: [PREVIEW_IMAGE],
  },

  alternates: {
    canonical: "/poll",
  },
};

const siteby = () => {
    return (
        <div>
            <Blog_1 />
        </div>
    );
};

export default siteby;