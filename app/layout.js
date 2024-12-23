import Header from "./_components/Header";
import { StoreContextProvider } from "./_context/ContextStore";
import "./globals.css";

export const metadata = {
  title: "Loft Gallery",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <StoreContextProvider>
          <Header />
          <main className="mx-auto ">{children}</main>
        </StoreContextProvider>
      </body>
    </html>
  );
}
