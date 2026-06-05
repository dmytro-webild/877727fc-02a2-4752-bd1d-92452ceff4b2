import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Montserrat } from "next/font/google";



export const metadata: Metadata = {
  title: 'Thunder - مستقبل الذكاء الاصطناعي والأدوات الذكية',
  description: 'منصة Thunder هي بوابتك الشاملة لإنشاء المواقع والتطبيقات، الذكاء الاصطناعي، والأدوات الاحترافية. تجربة رقمية فاخرة وحديثة مع سرعة وأمان لا مثيل لهما.',
  keywords: ["Thunder, AI, الذكاء الاصطناعي, أدوات رقمية, إنشاء مواقع, إنشاء تطبيقات, منصة AI, أدوات المطورين, تسجيل الدخول"],
  openGraph: {
    "title": "Thunder - مستقبل الذكاء الاصطناعي والأدوات الذكية",
    "description": "منصة Thunder هي بوابتك الشاملة لإنشاء المواقع والتطبيقات، الذكاء الاصطناعي، والأدوات الاحترافية. تجربة رقمية فاخرة وحديثة مع سرعة وأمان لا مثيل لهما.",
    "url": "https://www.thunder-ai.com",
    "siteName": "Thunder",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/abstract-low-poly-background-with-connecting-dots-lines_1048-5910.jpg",
        "alt": "Thunder AI Platform Hero Image"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Thunder - مستقبل الذكاء الاصطناعي والأدوات الذكية",
    "description": "منصة Thunder هي بوابتك الشاملة لإنشاء المواقع والتطبيقات، الذكاء الاصطناعي، والأدوات الاحترافية. تجربة رقمية فاخرة وحديثة مع سرعة وأمان لا مثيل لهما.",
    "images": [
      "http://img.b2bpic.net/free-photo/abstract-low-poly-background-with-connecting-dots-lines_1048-5910.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${montserrat.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
