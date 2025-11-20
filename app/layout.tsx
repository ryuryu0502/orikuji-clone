import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Toaster from "@/components/ui/Toaster";

const inter = Inter({ subsets: ["latin"] });
const notoSansJP = Noto_Sans_JP({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-noto-sans-jp" });

export const metadata: Metadata = {
    title: "Orikuji Clone",
    description: "Clone of Orikuji.com",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja">
            <body className={`${inter.className} ${notoSansJP.variable}`}>
                {children}
                <Toaster />
            </body>
        </html>
    );
}
