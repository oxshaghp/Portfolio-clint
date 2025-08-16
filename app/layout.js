
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";



export const metadata = {
  title: "Portfolio",
  description: "A portfolio showcasing my work",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
