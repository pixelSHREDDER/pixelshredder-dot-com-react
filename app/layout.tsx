import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_CANONICAL_BASE_URL}`),
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}