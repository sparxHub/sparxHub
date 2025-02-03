// components/Header.js

function Header(props) {
  const {
    title = "Nadav Daniel - Full Stack Developer",
    description = "Welcome to the personal website of Nadav Daniel, a seasoned full-stack developer specializing in modern web and mobile applications.",
    keywords = "Full Stack Developer, Web Development, React, Next.js, JavaScript, Software Engineer, Portfolio, Nadav Daniel",
    author = "Nadav Daniel",
    siteName = "Nadav Daniel Portfolio",
    url = "https://nadav-daniel.com",
    favicon = "/favicon.ico",
    ogType = "website",
    ogImage = "/og-image.png",
    twitterCard = "summary_large_image",
  } = props;

  return (
    <>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Favicon */}
      <link rel="icon" href={favicon} />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="application-name" content="Nadav Daniel Portfolio" />
      <meta name="apple-mobile-web-app-title" content="Nadav Daniel Portfolio" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Nadav Daniel",
          "jobTitle": "Full Stack Developer",
          "url": "https://nadav-daniel.com",
          "sameAs": [
            "https://www.linkedin.com/in/nadav-daniel-0a309150/",
            "https://github.com/sparxHub",
          ],
          "description":
            "A full-stack developer specializing in modern web technologies like React, Next.js, and Node.js.",
        })}
      </script>
    </>
  );
}

export default Header;
