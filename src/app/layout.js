import "../styles/globals.css";
import Script from "next/script";
import { ThemeProvider } from "../components/atoms/ThemeContext";
import Header from "../components/molecules/Header";
import { isExportMode } from "@utils/imageUtils";

// This is the server-rendered part
export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <Header />
        {/* ✅ Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-78QK5YWQGM"
          strategy="afterInteractive"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-78QK5YWQGM');
            `,
          }}
        />
      </head>
      <body>
        {/* Wrap the client-side logic in a Client Component */}
        <ClientWrapper isExportMode={isExportMode}>{children}</ClientWrapper>
      </body>
    </html>
  );
}

// Move client-side logic to a Client Component
function ClientWrapper({ isExportMode, children }) {
  return (
    <ThemeProvider>
      {isExportMode ? (
        children // Directly render children in export mode
      ) : (
        // Render additional UI in non-export mode
        <div className="app-container">{children}</div>
      )}
    </ThemeProvider>
  );
}
