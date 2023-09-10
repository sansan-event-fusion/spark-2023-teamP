import Header from "./components/Header";
import Main from "./components/Main";
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <Main>{children}</Main>
        </Providers>
      </body>
    </html>
  );
}
