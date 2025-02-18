import '../styles/globals.css'
import Script from 'next/script'
import { ThemeProvider } from '../components/atoms/ThemeContext'
import Header from '../components/molecules/Header'
import { isExportMode } from '@utils/imageUtils'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
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

      {/* ✅ Global Header */}
      <Header />

      {/* ✅ Render the current page */}
      {isExportMode ? (
        <Component {...pageProps} />
      ) : (
        <div className="app-container">
          <Component {...pageProps} />
        </div>
      )}
    </ThemeProvider>
  )
}

export default MyApp
