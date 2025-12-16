import "./globals.css";

export const metadata = {
  title: "VEFS DEMO",
  description: "VEFS Demo 10 días"
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body style={{ padding: "40px", background: "#111", color: "#fff" }}>
        <h2>LAYOUT OK</h2>
        {children}
      </body>
    </html>
  );
}
