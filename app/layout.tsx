import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "黃金 NFT 白皮書 | FVS",
  description: "以專業白皮書形式說明黃金 NFT 如何對應等值實體黃金、兌換機制與資產邏輯。"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
