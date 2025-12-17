import "./globals.css";

export const metadata = {
  title: "VEFS DEMO",
  description: "VEFS Demo 10 días"
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <div className="container">
          <header className="header">
            <h1>VEFS</h1>
            <p>Demo 10 días</p>
          </header>

          <main className="content">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
